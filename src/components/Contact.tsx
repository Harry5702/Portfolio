import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harisch075@gmail.com',
    href: 'mailto:harisch075@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-haris',
    href: 'https://linkedin.com/in/muhammad-haris-089a40256',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/muhammad-haris',
    href: 'https://github.com/harry5702',
    color: 'from-purple-500 to-pink-500',
  },
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            <MessageSquare size={18} className="mr-2" />
            Get In Touch
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Let's build something impactful together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Location card */}
            <motion.div
              className="glass-strong rounded-2xl p-6 mb-6"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Islamabad, Pakistan</p>
                </div>
              </div>
            </motion.div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  variants={itemVariants}
                >
                  <motion.div
                    className="glass-strong rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                            {item.label}
                          </h4>
                          <p className="text-gray-400 text-sm">{item.value}</p>
                        </div>
                      </div>
                      <motion.div
                        className="text-gray-500 group-hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Send size={20} />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-tr-full" />

              <div className="relative z-10">
                {/* Emoji */}
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🚀
                </motion.div>

                {/* Heading */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to bring your{' '}
                  <span className="gradient-text">AI ideas</span> to life?
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  Whether it's medical AI, computer vision, or building intelligent web applications – let's create something amazing together.
                </p>

                {/* Availability badge */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium">Available for new opportunities</span>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="mailto:harisch075@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-purple rounded-xl font-semibold text-white text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Send me an email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
