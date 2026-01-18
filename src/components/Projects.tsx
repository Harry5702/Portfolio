import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github, Eye, MessageSquare, Vote } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  description: string;
  features: string[];
  technologies: string[];
  image?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'OptiPro',
    subtitle: 'AI-Powered Eye Diagnosis',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500',
    description:
      'Advanced OCT retinal disease detection system for identifying CNV, DME, and Drusen conditions with high accuracy and transparency.',
    features: [
      'ResNet-101 CNN for disease classification',
      'Grad-CAM explainability for transparent AI decisions',
      'Flask REST API for real-time inference',
      'React frontend with Supabase backend',
      'Doctor dashboard and patient appointment system',
    ],
    technologies: ['PyTorch', 'ResNet-101', 'Grad-CAM', 'Flask', 'React', 'Supabase'],
    link: 'https://github.com/Harry5702/Optipro--A.I-Powered-Retinal-Diseases-Diagnosis',
  },
  {
    title: 'AI Health Chatbot',
    subtitle: 'Intelligent Nutrition Assistant',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    description:
      'Smart health chatbot leveraging vector databases for personalized food recommendations and nutrition analysis.',
    features: [
      'Flask + PostgreSQL + pgvector architecture',
      'Vector similarity search for food recommendations',
      'Custom nutrition scoring algorithm',
      'Food image recognition for calorie estimation',
      'Personalized health insights',
    ],
    technologies: ['Flask', 'PostgreSQL', 'pgvector', 'OpenCV', 'Python'],
    link: 'https://github.com/SocialAiPinnacle/nutra_ai',
  },
  {
    title: 'Politian',
    subtitle: 'Secure Voting System',
    icon: Vote,
    color: 'from-purple-500 to-pink-500',
    description:
      'Comprehensive electronic voting platform with advanced database features and real-time analytics for transparent elections.',
    features: [
      'Flask + SQLAlchemy + SQLite stack',
      'Database triggers, views, and indexes',
      'Real-time analytics using Chart.js',
      'Secure admin dashboard',
      'Vote verification and audit trails',
    ],
    technologies: ['Flask', 'SQLAlchemy', 'SQLite', 'Chart.js', 'Bootstrap'],
    link: 'https://github.com/Harry5702/Politian-Secure-Voting-System',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[80px]" />
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
            <Folder size={18} className="mr-2" />
            Featured Work
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing AI-powered solutions that solve real-world problems with innovation and precision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              variants={cardVariants}
            >
              <motion.div
                className="glass-strong rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Project Visual */}
                  <div
                    className={`lg:col-span-2 p-8 lg:p-12 relative overflow-hidden ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
                    />
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      {/* Project Icon */}
                      <motion.div
                        className={`p-6 rounded-2xl bg-gradient-to-br ${project.color} mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      
                      {/* Tech stack visual */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`lg:col-span-3 p-8 lg:p-12 ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-medium`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, fIndex) => (
                        <motion.li
                          key={fIndex}
                          className="flex items-start text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + fIndex * 0.05 }}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 bg-gradient-to-r ${project.color}`}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-dark-600/50 rounded-lg border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View Project
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-gray-300 font-medium text-sm hover:text-white hover:border-primary-500/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
