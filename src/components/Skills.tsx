import { motion } from 'framer-motion';
import { BarChart3, Brain, Code2, Layout, Server, Sparkles, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tones, Tone } from './tones';
import { easeOut } from './motion';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  tone: Tone;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Generative AI',
    icon: Sparkles,
    tone: 'cobalt',
    skills: ['LLMs', 'AI Agents', 'Conversational AI', 'RAG Pipelines', 'Voice AI', 'Prompt Engineering', 'Embeddings'],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    tone: 'coral',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CNNs', 'Model Training', 'Grad-CAM'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    tone: 'mint',
    skills: ['FastAPI', 'Flask', 'Celery', 'Redis', 'PostgreSQL', 'pgvector', 'Supabase', 'SQLAlchemy', 'MySQL'],
  },
  {
    title: 'Web & Mobile',
    icon: Layout,
    tone: 'sun',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Flutter', 'HTML', 'CSS'],
  },
  { title: 'Programming', icon: Code2, tone: 'cobalt', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'Dart'] },
  { title: 'Data Science', icon: BarChart3, tone: 'coral', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'Tools & Platforms', icon: Wrench, tone: 'mint', skills: ['Docker', 'Git/GitHub', 'Azure', 'Jupyter', 'VS Code'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Skills"
          title="My"
          highlight="toolkit"
          tone="sun"
          aside="Everything I use to take intelligent systems from concept to deployment."
        />

        <ul className="border-b border-line">
          {skillCategories.map((category, index) => {
            const t = tones[category.tone];
            return (
              <motion.li
                key={category.title}
                className="group relative isolate grid gap-5 border-t border-line py-6 md:grid-cols-12 md:gap-8 md:py-9"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: easeOut, delay: index * 0.04 }}
              >
                {/* Tone wash that sweeps in on hover */}
                <span
                  className={`absolute inset-0 -z-10 origin-left scale-x-0 rounded-2xl ${t.soft} transition-transform duration-500 ease-out group-hover:scale-x-100`}
                />

                <div className="flex items-center gap-3 sm:gap-4 md:col-span-5 md:px-4">
                  <span className="w-6 shrink-0 font-mono text-xs text-ink-faint sm:w-7 sm:text-sm">0{index + 1}</span>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-11 sm:w-11 sm:rounded-2xl ${t.solid} ${
                      category.tone === 'cobalt' ? 'text-white' : 'text-ink'
                    } transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <category.icon size={20} />
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl">{category.title}</h3>
                </div>

                <motion.div
                  className="flex flex-wrap items-center gap-2 md:col-span-7 md:px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } } }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-medium sm:px-4 sm:py-2 sm:text-sm text-ink transition-colors hover:border-ink"
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
