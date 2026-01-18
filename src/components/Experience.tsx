import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'AI Pinnacle',
    location: 'National Aerospace Science and Technology Park',
    period: 'June 2025 – Sep 2025',
    type: 'Internship',
    responsibilities: [
      'Developed and trained deep learning models for medical image analysis applications',
      'Implemented explainable AI techniques using Grad-CAM for model interpretability',
      'Built REST APIs using Flask for deploying AI models in production environments',
      'Collaborated with cross-functional teams to integrate AI solutions into existing systems',
      'Worked with vector databases (pgvector) for efficient similarity search operations',
      'Participated in code reviews and contributed to best practices documentation',
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px]" />
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
            <Briefcase size={18} className="mr-2" />
            Professional Journey
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building real-world AI solutions and gaining hands-on experience in cutting-edge technologies
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <motion.div
                className="glass-strong rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      {/* Role badge */}
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary-400 bg-primary-500/10 rounded-full mb-3">
                        {item.type}
                      </span>
                      
                      {/* Role title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {item.role}
                      </h3>
                      
                      {/* Company */}
                      <div className="flex items-center text-accent-cyan font-medium mb-2">
                        <Building size={18} className="mr-2" />
                        {item.company}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {item.responsibilities.map((responsibility, rIndex) => (
                        <motion.li
                          key={rIndex}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + rIndex * 0.1 }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mr-3 mt-2 flex-shrink-0" />
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4">Interested in working together?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-purple rounded-xl font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
