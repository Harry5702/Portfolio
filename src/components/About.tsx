import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { Bot, Brain, Eye, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tones, Tone } from './tones';

const statement =
  "At Galixo I built an AI Interviewer Agent that competes with micro1, automated Bolt VPN analytics through a dashboard, and now work as a full stack developer on the Bolt Windows app. Before that, at AI Pinnacle, I built conversational agents for websites and apps. I care about AI that is useful and actually makes it to production.";

const focus: { icon: React.ElementType; label: string; description: string; tone: Tone }[] = [
  { icon: Bot, label: 'AI Agents', description: 'LLM-powered conversational agents, like an AI interviewer', tone: 'cobalt' },
  { icon: Eye, label: 'Medical AI', description: 'Deep learning for medical image analysis and diagnosis', tone: 'coral' },
  { icon: Brain, label: 'Explainable AI', description: 'Grad-CAM and transparent model decisions', tone: 'mint' },
  { icon: Layers, label: 'Full Stack AI', description: 'From model training to APIs, databases and UI', tone: 'sun' },
];

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
};

const About = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = statement.split(' ');

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader eyebrow="About me" title="Turning models into" highlight="products" tone="cobalt" />
          <p ref={ref} className="font-display text-2xl font-semibold leading-snug tracking-tight md:text-[2rem]">
            {words.map((word, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {word}
              </Word>
            ))}
          </p>
        </div>

        <div className="grid content-end gap-4 sm:grid-cols-2 lg:col-span-5">
          {focus.map((item, index) => {
            const t = tones[item.tone];
            return (
              <motion.div
                key={item.label}
                className={`group rounded-3xl ${t.soft} p-6 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1`}
                initial={{ opacity: 0, y: 30, rotate: index % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 140, damping: 18, delay: index * 0.08 }}
              >
                <span
                  className={`mb-8 grid h-12 w-12 place-items-center rounded-2xl ${t.solid} ${
                    item.tone === 'cobalt' ? 'text-white' : 'text-ink'
                  } transition-transform duration-500 group-hover:rotate-[360deg]`}
                >
                  <item.icon size={22} />
                </span>
                <h3 className="font-display text-xl font-bold">{item.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
