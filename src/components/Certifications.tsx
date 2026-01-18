import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
  icon: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '2024',
    color: 'from-blue-500 to-cyan-500',
    icon: '🐍',
    link: 'https://www.coursera.org/account/accomplishments/verify/64BTIJOJ9945',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM',
    date: '2024',
    color: 'from-purple-500 to-pink-500',
    icon: '⚙️',
    link: 'https://www.coursera.org/account/accomplishments/verify/5SK2HL4M8U3J',
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    date: '2024',
    color: 'from-indigo-500 to-violet-500',
    icon: '☁️',
    link: 'https://www.coursera.org/account/accomplishments/verify/3HTJLF0398YI',
  },
  {
    title: 'Git and GitHub',
    issuer: 'IBM',
    date: '2024',
    color: 'from-orange-500 to-amber-500',
    icon: '📦',
    link: 'https://www.coursera.org/account/accomplishments/verify/JRGK2UVTW6D0',
  },
];

const Certifications = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
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
            <Award size={18} className="mr-2" />
            Achievements
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">My </span>
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group"
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className="glass-strong rounded-2xl p-6 h-full hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Glow ring on hover */}
                <motion.div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{cert.icon}</div>

                  {/* Issuer badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${cert.color} text-white mb-4`}
                  >
                    {cert.issuer}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar size={14} className="mr-2" />
                    {cert.date}
                  </div>

                  {/* View button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            Always expanding my knowledge and staying current with emerging technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
