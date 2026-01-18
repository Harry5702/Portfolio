import { motion } from 'framer-motion';
import { Code2, Brain, Database, Server, Layout, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'SQL', 'JavaScript', 'C++', 'Dart'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CNNs', 'Grad-CAM', 'Explainable AI'],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    color: 'from-orange-500 to-amber-500',
    skills: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'MySQL', 'SQLite', 'pgvector'],
  },
  {
    title: 'Web & Mobile',
    icon: Layout,
    color: 'from-indigo-500 to-violet-500',
    skills: ['React.js', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-rose-500 to-red-500',
    skills: ['Docker', 'Git/GitHub', 'Azure', 'Jupyter', 'VS Code'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-32 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass text-primary-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Code2 size={18} className="mr-2" />
            Technical Expertise
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems from concept to deployment
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className="glass-strong rounded-2xl p-6 h-full hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-dark-600/50 rounded-lg border border-white/5 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
