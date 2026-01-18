import { motion } from 'framer-motion';
import { User, Code, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Brain, label: 'Medical AI', description: 'Specialized in healthcare AI applications' },
    { icon: Code, label: 'Full Stack', description: 'End-to-end AI system development' },
    { icon: Sparkles, label: 'Explainable AI', description: 'Transparent model interpretations' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
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
            <User size={18} className="mr-2" />
            Get to Know Me
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="glass-strong rounded-3xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
                
                {/* Code snippet decoration */}
                <div className="font-mono text-sm">
                  <div className="text-gray-500 mb-2">// AI Engineer Profile</div>
                  <div className="text-primary-400">
                    <span className="text-accent-purple">const</span> developer = {'{'}
                  </div>
                  <div className="pl-4 text-gray-300">
                    <div><span className="text-accent-cyan">name:</span> <span className="text-green-400">"Muhammad Haris"</span>,</div>
                    <div><span className="text-accent-cyan">role:</span> <span className="text-green-400">"AI Engineer"</span>,</div>
                    <div><span className="text-accent-cyan">location:</span> <span className="text-green-400">"Islamabad, PK"</span>,</div>
                    <div><span className="text-accent-cyan">focus:</span> [</div>
                    <div className="pl-4">
                      <div><span className="text-green-400">"Medical AI"</span>,</div>
                      <div><span className="text-green-400">"Computer Vision"</span>,</div>
                      <div><span className="text-green-400">"Explainable AI"</span></div>
                    </div>
                    <div>],</div>
                    <div><span className="text-accent-cyan">available:</span> <span className="text-orange-400">true</span></div>
                  </div>
                  <div className="text-primary-400">{'}'}</div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl text-sm font-medium text-accent-cyan"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                🤖 AI Specialist
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl text-sm font-medium text-accent-purple"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                🎯 Problem Solver
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              AI Engineer with hands-on experience in{' '}
              <span className="text-primary-400 font-medium">medical image analysis</span>,{' '}
              <span className="text-accent-cyan font-medium">AI-driven web applications</span>, and{' '}
              <span className="text-accent-purple font-medium">vector databases</span>.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Strong background in Python, PyTorch, TensorFlow, Flask, and PostgreSQL, with experience 
              training deep learning models and deploying{' '}
              <span className="text-primary-400 font-medium">explainable AI systems</span> using Grad-CAM.
              Passionate about building solutions that make AI transparent and accessible.
            </motion.p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass rounded-xl p-4 text-center hover:border-primary-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                  <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
