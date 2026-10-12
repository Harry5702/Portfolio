import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tones, toneCycle } from './tones';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/64BTIJOJ9945',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/5SK2HL4M8U3J',
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/3HTJLF0398YI',
  },
  {
    title: 'Git and GitHub',
    issuer: 'IBM',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/JRGK2UVTW6D0',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="pb-20 md:pb-32">
      <div className="container-x">
        <SectionHeader eyebrow="Certifications" title="Continuous" highlight="learning" tone="mint" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const tone = toneCycle[index % toneCycle.length];
            const t = tones[tone];
            return (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group relative flex min-h-[180px] flex-col overflow-hidden p-6 sm:min-h-[220px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Colour floods up from the bottom on hover */}
                <span
                  className={`absolute inset-0 origin-bottom scale-y-0 ${t.solid} transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100`}
                />
                <div className="relative mb-8 flex items-center justify-between">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${t.soft} ${t.text} transition-colors duration-500 group-hover:bg-white/90`}
                  >
                    <Award size={20} />
                  </span>
                  <ArrowUpRight
                    size={22}
                    className={`text-ink-faint transition-all duration-500 group-hover:rotate-45 ${
                      tone === 'cobalt' ? 'group-hover:text-white' : 'group-hover:text-ink'
                    }`}
                  />
                </div>
                <h3
                  className={`relative flex-1 font-display text-lg font-bold leading-snug transition-colors duration-500 ${
                    tone === 'cobalt' ? 'group-hover:text-white' : ''
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`relative mt-4 text-sm font-medium text-ink-faint transition-colors duration-500 ${
                    tone === 'cobalt' ? 'group-hover:text-white/80' : 'group-hover:text-ink'
                  }`}
                >
                  {cert.issuer} · Coursera · {cert.date}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
