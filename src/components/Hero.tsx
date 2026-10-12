import { ReactNode } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { easeOut, Magnetic, RevealLines } from './motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/harry5702', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-haris-089a40256', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harisch075@gmail.com', label: 'Email' },
];

const stats = [
  { value: '3', label: 'AI roles since 2025', color: 'text-cobalt' },
  { value: '4', label: 'IBM certifications', color: 'text-coral-deep' },
  { value: 'BS IT', label: 'Bahria University', color: 'text-mint-deep' },
];

/** Highlighter-pen swipe behind a phrase. */
const Marker = ({ children, className, delay }: { children: ReactNode; className: string; delay: number }) => (
  <span className="relative z-0 inline-block whitespace-nowrap px-1 text-ink">
    <motion.span
      className={`absolute inset-x-0 bottom-[0.08em] top-[0.18em] -z-10 origin-left -rotate-1 rounded-md ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    />
    {children}
  </span>
);

/** Badge that bobs gently and shifts with the pointer by `depth` pixels. */
const Floater = ({
  children,
  className,
  mx,
  my,
  depth,
  delay,
}: {
  children: ReactNode;
  className: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  delay: number;
}) => {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={`absolute z-20 ${className}`} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { type: 'spring', stiffness: 260, damping: 16, delay },
          y: { duration: 4 + depth / 10, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 80, damping: 18 });
  const my = useSpring(rawY, { stiffness: 80, damping: 18 });

  const handlePointer = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    rawX.set(e.clientX / window.innerWidth - 0.5);
    rawY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointer}
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.a
            href="#contact"
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3 text-xs shadow-card sm:gap-2.5 sm:pr-4 sm:text-sm transition-transform hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="rounded-full bg-mint px-2.5 py-0.5 text-xs font-semibold text-white">Open</span>
            Available for <span className="font-semibold">AI engineering</span> roles
            <ArrowRight size={14} className="text-ink-faint" />
          </motion.a>

          <h1 className="font-display text-[clamp(3.2rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-tightest">
            <RevealLines onMount delay={0.1} lines={['Muhammad', <span className="text-cobalt">Haris.</span>]} />
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed sm:mt-8 text-ink-soft sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
          >
            AI Engineer working on <Marker className="bg-sun/70" delay={0.9}>conversational AI</Marker>,{' '}
            <Marker className="bg-coral/30" delay={1.05}>Generative AI</Marker> and{' '}
            <Marker className="bg-mint/30" delay={1.2}>RAG pipelines</Marker>, from model training to full stack
            development.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.55 }}
          >
            <Magnetic strength={0.25}>
              <a href="#projects" className="btn-primary group">
                See my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full text-ink-soft transition-colors hover:bg-white hover:text-cobalt"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t sm:mt-14 sm:gap-6 border-line pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className={`font-display text-2xl font-bold tracking-tight sm:text-3xl ${stat.color}`}>{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-ink-faint sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cobalt"
            initial={{ clipPath: 'inset(100% 0 0 0 round 2.5rem)' }}
            animate={{ clipPath: 'inset(0% 0 0 0 round 2.5rem)' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            {/* Concentric rings behind the photo */}
            <div className="absolute left-1/2 top-[38%] h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-white/10" />
            <div className="absolute left-1/2 top-[38%] h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-white/10" />
            <motion.img
              src="/pp.webp"
              alt="Portrait of Muhammad Haris"
              width={800}
              height={800}
              className="absolute inset-x-6 bottom-0 top-14 h-[calc(100%-3.5rem)] w-[calc(100%-3rem)] rounded-t-[2rem] object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: easeOut, delay: 0.3 }}
            />
          </motion.div>

          <Floater mx={mx} my={my} depth={36} delay={1.45} className="-top-6 right-8">
            <motion.svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              aria-hidden
            >
              <path
                d="M12 0 L14.6 8.2 L23 6.9 L16.4 12 L23 17.1 L14.6 15.8 L12 24 L9.4 15.8 L1 17.1 L7.6 12 L1 6.9 L9.4 8.2 Z"
                fill="#ffc233"
              />
            </motion.svg>
          </Floater>

          <p className="absolute -bottom-16 right-0 hidden items-center gap-1.5 text-sm text-ink-faint sm:flex">
            <MapPin size={14} className="text-coral" />
            Pakistan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
