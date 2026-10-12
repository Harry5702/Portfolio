import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ease } from './motion';
import { tones, toneCycle } from './tones';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 200);
  });

  // Highlight whichever section is crossing the upper third of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: '-30% 0px -65% 0px' },
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
        animate={{ y: hidden && !menuOpen ? '-120%' : '0%' }}
        transition={{ duration: 0.45, ease }}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-white/85 py-2 pl-3 pr-2 shadow-card backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cobalt font-display text-sm font-bold text-white">
              MH
            </span>
            <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight">Muhammad Haris</span>
          </a>

          <ul className="hidden items-center lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn hidden bg-cobalt px-5 py-2.5 text-white hover:bg-cobalt-deep sm:inline-flex">
              Let's talk
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-canvas text-ink lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-canvas px-6 py-24 lg:hidden"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease }}
          >
            <ul className="space-y-1">
              {[...navLinks, { name: 'Contact', href: '#contact' }].map((link, index) => {
                const t = tones[toneCycle[index % toneCycle.length]];
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 py-2 font-display text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                      <span className={`h-3 w-3 rounded-full ${t.solid}`} />
                      {link.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
