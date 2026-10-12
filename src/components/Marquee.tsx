import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** Drifts on its own, speeds up with scroll velocity and flips direction when scrolling back up. */
const Band = ({
  items,
  baseVelocity,
  className,
  starColor,
}: {
  items: string[];
  baseVelocity: number;
  className: string;
  starColor: string;
}) => {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const smoothVelocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-3xl font-bold tracking-tight md:px-8 md:text-5xl">{item}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M12 0 L14.6 8.2 L23 6.9 L16.4 12 L23 17.1 L14.6 15.8 L12 24 L9.4 15.8 L1 17.1 L7.6 12 L1 6.9 L9.4 8.2 Z"
              fill={starColor}
            />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden py-5 md:py-6 ${className}`} aria-hidden>
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {row}
        {row}
      </motion.div>
    </div>
  );
};

const Marquee = () => (
  <div className="relative py-16">
    <Band
      items={['Computer Vision', 'Vector Search', 'PyTorch', 'Flask APIs', 'Medical Imaging', 'PostgreSQL']}
      baseVelocity={2}
      className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[3deg] bg-coral text-ink"
      starColor="#14161a"
    />
    <Band
      items={['AI Agents', 'LLMs', 'Explainable AI', 'Grad-CAM', 'Deep Learning', 'Production ML']}
      baseVelocity={-2.5}
      className="relative mx-[-5%] -rotate-2 bg-cobalt text-white shadow-lift"
      starColor="#ffc233"
    />
  </div>
);

export default Marquee;
