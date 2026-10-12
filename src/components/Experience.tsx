import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tones, Tone } from './tones';
import { easeOut } from './motion';

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  type: string;
  tone: Tone;
  current?: boolean;
  project?: string;
  responsibilities: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Junior AI Engineer',
    company: 'Galixo',
    companyUrl: 'https://www.galixo.ai',
    period: 'June 2026 – Present',
    type: 'Full-time',
    tone: 'cobalt',
    current: true,
    project: 'Bolt Windows App',
    responsibilities: [
      'Built an AI Interviewer Agent, competitive with micro1, that runs live spoken technical interviews in English and Urdu and scores them against a versioned rubric',
      'Automated Bolt VPN analytics with a dashboard that replaces manual reporting',
      'Working as a full stack developer on the Bolt Windows app',
    ],
    technologies: ['Python', 'FastAPI', 'LLMs', 'Voice AI', 'WebRTC', 'Next.js', 'Docker'],
  },
  {
    role: 'Junior AI Engineer',
    company: 'AI Pinnacle',
    companyUrl: 'https://www.aipinnacle.pk/',
    location: 'National Aerospace Science and Technology Park',
    period: 'Sep 2025 – May 2026',
    type: 'Full-time',
    tone: 'coral',
    responsibilities: [
      'Built conversational AI agents for client websites and apps',
      'Developed the LLM backend for PrepPro Academy (preppro.academy) using FastAPI',
      'Handled server-side deployment of AI services',
    ],
    technologies: ['Python', 'FastAPI', 'LLMs', 'Conversational AI', 'Deployment'],
  },
];

const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.7', 'end 0.6'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          tone="coral"
          aside="Building real-world AI products, from conversational agents to full stack apps."
        />

        <ol ref={listRef} className="relative space-y-6 pl-8 md:space-y-8 md:pl-16">
          {/* Track and scroll-linked fill */}
          <span className="absolute bottom-4 left-[11px] top-4 w-[3px] rounded-full bg-line md:left-[19px]" />
          <motion.span
            className="absolute bottom-4 left-[11px] top-4 w-[3px] origin-top rounded-full bg-gradient-to-b from-cobalt via-coral to-mint md:left-[19px]"
            style={{ scaleY: fill }}
          />

          {experienceData.map((item) => {
            const t = tones[item.tone];
            return (
              <motion.li
                key={`${item.company}-${item.period}`}
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <motion.span
                  className={`absolute -left-8 top-8 grid h-[25px] w-[25px] place-items-center rounded-full border-4 border-canvas ${t.solid} md:-left-16 md:ml-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                >
                  {item.current && <span className={`absolute inset-0 animate-ping rounded-full ${t.solid} opacity-60`} />}
                </motion.span>

                <article className="card p-5 transition-shadow duration-300 hover:shadow-lift sm:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {item.current && (
                          <span className={`rounded-full ${t.solid} px-3 py-0.5 text-xs font-semibold text-white`}>
                            Current
                          </span>
                        )}
                        <span className={`rounded-full ${t.soft} px-3 py-0.5 text-xs font-semibold ${t.text}`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">{item.role}</h3>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group mt-1 inline-flex items-center gap-1 text-lg font-semibold ${t.text}`}
                        >
                          {item.company}
                          <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <p className={`mt-1 text-lg font-semibold ${t.text}`}>{item.company}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm text-ink-faint md:items-end md:text-right">
                      <span className="inline-flex items-center gap-2 font-medium text-ink-soft">
                        <Calendar size={15} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-2">
                          <MapPin size={15} />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.project && (
                    <p className="mt-5 inline-flex items-center gap-2 rounded-xl sm:mt-6 bg-sun-soft px-3.5 py-2 text-sm font-semibold text-sun-deep">
                      <Sparkles size={15} />
                      Building: {item.project}
                    </p>
                  )}

                  <ul className="mt-6 space-y-2.5">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                        <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${t.solid}`} />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
