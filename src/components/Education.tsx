import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tones, Tone } from './tones';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  tone: Tone;
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Bahria University',
    location: 'Islamabad, Pakistan',
    period: 'Mar 2022 – Jan 2026',
    tone: 'cobalt',
    highlights: [
      'Final Year Project: OptiPro – AI-Powered Eye Diagnosis System',
      'Focus Areas: Artificial Intelligence, Machine Learning, Database Systems, Web Development',
    ],
  },
  {
    degree: 'HSSC Pre-Engineering',
    institution: 'Punjab College of Science',
    location: 'Pakistan',
    period: 'Jul 2019 – Nov 2021',
    tone: 'coral',
    highlights: [
      'Completed intermediate education with focus on Mathematics and Physics',
      'Built strong foundation for engineering and computer science studies',
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Education" title="Academic" highlight="background" tone="cobalt" />

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item, index) => {
            const t = tones[item.tone];
            return (
              <motion.article
                key={item.degree}
                className="card group relative overflow-hidden p-5 transition-shadow duration-300 hover:shadow-lift sm:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Coloured corner that grows on hover */}
                <span
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${t.soft} transition-transform duration-500 group-hover:scale-[1.6]`}
                />
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${t.solid} ${
                        item.tone === 'cobalt' ? 'text-white' : 'text-ink'
                      }`}
                    >
                      <GraduationCap size={22} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-soft shadow-card">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl">{item.degree}</h3>
                  <p className={`mt-2 font-semibold ${t.text}`}>{item.institution}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-faint">
                    <MapPin size={13} />
                    {item.location}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-ink-soft">
                        <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${t.solid}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
