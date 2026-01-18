import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20"
    >
      {/* Animated particles/orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/15 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="relative inline-block"
            variants={floatingVariants}
            animate="animate"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-dark-900" />
            </div>
            {/* Profile image container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan p-1">
              <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                {/* Profile image */}
                <img 
                  src="/Haris.png" 
                  alt="Muhammad Haris" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-600/50 to-accent-purple/50 flex items-center justify-center"><span class="text-4xl sm:text-5xl font-bold text-white/90 font-display">MH</span></div>';
                    }
                  }}
                />
              </div>
            </div>
            {/* Orbiting ring */}
            <motion.div
              className="absolute inset-[-8px] rounded-full border border-primary-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-accent-purple/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-4"
          variants={itemVariants}
        >
          <span className="text-white">Muhammad </span>
          <span className="gradient-text">Haris</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full glass text-primary-300 text-lg sm:text-xl font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
            AI Engineer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          variants={itemVariants}
        >
          Building{' '}
          <span className="text-primary-400 font-medium">Explainable</span> and{' '}
          <span className="text-accent-cyan font-medium">Scalable</span> AI Systems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-purple rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-purple to-primary-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="group px-8 py-4 glass rounded-xl font-semibold text-white border border-white/10 hover:border-primary-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: 'https://github.com/harry5702', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-haris-089a40256', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:harisch075@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="#education"
          className="flex flex-col items-center text-gray-500 hover:text-primary-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
