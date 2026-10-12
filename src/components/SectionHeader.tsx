import { motion } from 'framer-motion';
import { RevealLines } from './motion';
import { tones, Tone } from './tones';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight: string;
  tone: Tone;
  aside?: string;
  center?: boolean;
}

/** Highlight word gets a loose, hand-drawn underline that draws itself in. */
const Scribble = ({ color }: { color: string }) => (
  <svg
    className="absolute -bottom-[0.12em] left-0 h-[0.28em] w-full overflow-visible"
    viewBox="0 0 200 20"
    preserveAspectRatio="none"
    aria-hidden
  >
    <motion.path
      d="M3 14 C 40 4, 90 4, 120 9 S 180 16, 197 6"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
    />
  </svg>
);

const SectionHeader = ({ eyebrow, title, highlight, tone, aside, center }: SectionHeaderProps) => {
  const t = tones[tone];
  return (
    <header className={`mb-10 md:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <motion.span
        className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className={`h-0.5 w-8 rounded-full ${t.solid}`} />
        {eyebrow}
      </motion.span>
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
        <RevealLines
          lines={[
            <>
              {title}{' '}
              <span className="relative inline-block">
                {highlight}
                <Scribble color={t.hex} />
              </span>
            </>,
          ]}
        />
      </h2>
      {aside && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{aside}</p>}
    </header>
  );
};

export default SectionHeader;
