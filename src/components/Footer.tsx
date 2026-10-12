import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/harry5702', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-haris-089a40256', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harisch075@gmail.com', label: 'Email' },
];

const Footer = () => (
  <footer className="container-x pb-10">
    <div className="flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
      <a href="#home" className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-cobalt font-display text-sm font-bold text-white">
          MH
        </span>
        <span className="font-display font-semibold">Muhammad Haris</span>
      </a>

      <p className="text-sm text-ink-faint">© {new Date().getFullYear()} Muhammad Haris</p>

      <div className="flex items-center gap-1">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-white hover:text-cobalt"
          >
            <Icon size={18} />
          </a>
        ))}
        <a
          href="#home"
          aria-label="Back to top"
          className="group ml-2 grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-coral"
        >
          <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
