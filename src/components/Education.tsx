import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
  icon: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Bahria University',
    location: 'Islamabad, Pakistan',
    period: 'Mar 2022 – Jan 2026',
    highlights: [
      'Final Year Project: OptiPro – AI-Powered Eye Diagnosis System',
      'Focus Areas: Artificial Intelligence, Machine Learning, Database Systems, Web Development',
    ],
    icon: '🎓',
  },
  {
    degree: 'HSSC Pre-Engineering',
    institution: 'Punjab College of Science',
    location: 'Pakistan',
    period: 'Jul 2019 – Nov 2021',
    highlights: [
      'Completed intermediate education with focus on Mathematics and Physics',
      'Built strong foundation for engineering and computer science studies',
    ],
    icon: '📚',
  },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            <GraduationCap size={18} className="mr-2" />
            Academic Journey
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">My </span>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation in technology and innovation through academic excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-cyan" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple border-4 border-dark-900 z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <motion.div
                  className="glass-strong rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4">{item.icon}</div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center text-primary-400 font-medium mb-3">
                    <BookOpen size={16} className="mr-2" />
                    {item.institution}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {item.location}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        className="flex items-start text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + hIndex * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3 mt-2 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
