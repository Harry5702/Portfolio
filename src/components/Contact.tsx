import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Magnetic, RevealLines } from './motion';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'harisch075@gmail.com', href: 'mailto:harisch075@gmail.com' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-haris',
    href: 'https://linkedin.com/in/muhammad-haris-089a40256',
  },
  { icon: Github, label: 'GitHub', value: 'github.com/harry5702', href: 'https://github.com/harry5702' },
];

const Contact = () => {
  return (
    <section id="contact" className="pb-16 pt-8 md:pb-24">
      <div className="container-x">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-cobalt px-5 py-12 text-white sm:rounded-[2.5rem] sm:px-12 md:py-20 lg:px-16"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative shapes */}
          <motion.span
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute -bottom-24 right-1/3 h-56 w-56 rounded-[3rem] bg-mint"
            animate={{ rotate: [12, 30, 12] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="absolute right-24 top-40 hidden h-6 w-6 rounded-full bg-sun md:block" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                <span className="h-0.5 w-8 rounded-full bg-sun" />
                Contact
              </span>
              <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tightest">
                <RevealLines lines={["Let's build", 'something impactful.']} />
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
                I'm always open to discussing AI projects, collaborations or ideas, whether it's AI agents, medical AI,
                computer vision or intelligent web applications.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Magnetic strength={0.3}>
                  <a
                    href="mailto:harisch075@gmail.com"
                    className="btn bg-sun px-6 py-3.5 text-base text-ink sm:px-7 sm:py-4 hover:-translate-y-0.5 hover:bg-white"
                  >
                    <Mail size={18} />
                    Send me an email
                  </a>
                </Magnetic>
                <span className="inline-flex items-center gap-2 text-sm text-white/75">
                  <MapPin size={16} />
                  Pakistan
                </span>
              </div>
            </div>

            <ul className="space-y-3 lg:col-span-5">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-white p-3.5 text-ink sm:gap-4 sm:p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cobalt-soft text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                      <item.icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-ink-faint">{item.label}</span>
                      <span className="block truncate font-semibold">{item.value}</span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-ink-faint transition-all duration-300 group-hover:rotate-45 group-hover:text-cobalt"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
