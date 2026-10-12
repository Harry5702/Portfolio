import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export const ease = [0.76, 0, 0.24, 1] as const;
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Slides each line up from behind a mask, either on mount or when scrolled into view. */
export const RevealLines = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  onMount = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  onMount?: boolean;
}) => {
  const trigger = onMount
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, margin: '-10% 0px' } };

  return (
    <motion.span className={`block ${className}`} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.2em] -mb-[0.2em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%', transition: { duration: 1, ease, delay: delay + i * 0.09 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/** Pulls its child slightly towards the pointer. */
export const Magnetic = ({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 14, mass: 0.2 });
  const y = useSpring(0, { stiffness: 180, damping: 14, mass: 0.2 });

  const handleMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} className="inline-block" style={{ x, y }} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
};

/** Thin bar across the top showing page progress. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-cobalt" style={{ scaleX }} />;
};

/**
 * A label that trails the pointer while hovering any element with `data-cursor="Label"`.
 * Mouse-only; touch devices never see it.
 */
export const CursorLabel = () => {
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[65] hidden md:block"
      style={{ x: sx, y: sy }}
      aria-hidden
    >
      <AnimatePresence>
        {label && (
          <motion.span
            key="cursor"
            className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sun font-semibold text-sm text-ink shadow-lift"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
