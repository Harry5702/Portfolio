import { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Eye, Github, Globe, Lock, MessageSquare, MessagesSquare, Mic, Sparkles, Vote } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  subtitle: string;
  tag?: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  technologies: string[];
  /** Omitted for private work; `note` is shown instead. */
  link?: { href: string; kind: 'source' | 'live' };
  note?: string;
  theme: { card: string; panel: string; chip: string; button: string };
}

const projects: Project[] = [
  {
    title: 'AI Interviewer Agent',
    subtitle: 'Voice AI Technical Screening',
    tag: 'Galixo',
    icon: Mic,
    description:
      "A self-hosted platform that runs structured technical screening interviews as a live spoken conversation with an AI interviewer, in English or Urdu, entirely in the candidate's browser.",
    features: [
      'Real-time voice pipeline over WebRTC: speech-to-text, LLM, text-to-speech',
      'Role-aware interview plan with real English and Urdu voices',
      'LLM scoring against a versioned rubric, held for recruiter review before any email goes out',
      'Device checks, consent flow and two-strike fullscreen proctoring',
      'Docker Compose stack: FastAPI, Node orchestrator, PostgreSQL, Redis Streams, MinIO, Caddy',
    ],
    technologies: ['Python', 'FastAPI', 'Pipecat', 'WebRTC', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    note: 'Private · built at Galixo',
    theme: {
      card: 'bg-cobalt text-white',
      panel: 'bg-white/10',
      chip: 'bg-white/15 text-white',
      button: 'bg-white text-ink hover:bg-sun',
    },
  },
  {
    title: 'Decoding of Life',
    subtitle: 'AI Numerology Platform',
    tag: 'Upwork project',
    icon: Sparkles,
    description:
      'Calculates numerology numbers from a date of birth and has Gemini 2.5 Flash write a reading grounded strictly in a Chinese numerology reference book.',
    features: [
      'Numerology engine for inner, outer and yearly numbers with five-element mapping',
      'Gemini readings grounded in a reference book, with retries and concurrency limits',
      'Single-person and two-person compatibility reports',
      'Free preview, plus a Stripe-paid full report with a branded PDF emailed via Resend',
      'English and Chinese UI, with an admin panel for prompts, topics and the payment gate',
    ],
    technologies: ['Next.js', 'Gemini 2.5 Flash', 'Supabase', 'Stripe', 'Resend', 'Tailwind CSS'],
    link: { href: 'https://www.decodingoflife.my/', kind: 'live' },
    theme: {
      card: 'bg-sun text-ink',
      panel: 'bg-white/30',
      chip: 'bg-white/50 text-ink',
      button: 'bg-ink text-white hover:bg-white hover:text-ink',
    },
  },
  {
    title: 'Agentlyft',
    subtitle: 'Multi-tenant WhatsApp AI SaaS',
    tag: 'Ongoing',
    icon: MessagesSquare,
    description:
      'Businesses connect their WhatsApp number, upload PDFs as a knowledge base, and get an AI chatbot that answers their customers only from that knowledge base.',
    features: [
      'RAG pipeline: BGE embeddings and pgvector search, answered by Llama 3.3 70B on Groq',
      'Token-aware PDF chunking with Mistral OCR fallback for scanned documents',
      'WhatsApp webhooks processed asynchronously with Celery and Redis, with dedup and quotas',
      'Meta Embedded Signup, Stripe subscriptions and tokens encrypted at rest',
      'Next.js dashboard for documents, conversations, billing and admin',
    ],
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'Groq', 'Stripe'],
    link: { href: 'https://www.agentlyft.tech/', kind: 'live' },
    theme: {
      card: 'bg-ink text-white',
      panel: 'bg-white/10',
      chip: 'bg-white/15 text-white',
      button: 'bg-white text-ink hover:bg-mint',
    },
  },
  {
    title: 'OptiPro',
    subtitle: 'AI-Powered Eye Diagnosis',
    icon: Eye,
    description:
      'OCT retinal disease detection for CNV, DME and Drusen, with Grad-CAM heatmaps so a doctor can see why the model made each call.',
    features: [
      'ResNet-101 CNN for disease classification',
      'Grad-CAM explainability for transparent AI decisions',
      'Flask REST API for real-time inference',
      'React frontend with Supabase backend',
      'Doctor dashboard and patient appointment system',
    ],
    technologies: ['PyTorch', 'ResNet-101', 'Grad-CAM', 'Flask', 'React', 'Supabase'],
    link: { href: 'https://github.com/Harry5702/Optipro--A.I-Powered-Retinal-Diseases-Diagnosis', kind: 'source' },
    theme: {
      card: 'bg-coral text-ink',
      panel: 'bg-white/25',
      chip: 'bg-white/40 text-ink',
      button: 'bg-ink text-white hover:bg-white hover:text-ink',
    },
  },
  {
    title: 'AI Health Chatbot',
    subtitle: 'Intelligent Nutrition Assistant',
    icon: MessageSquare,
    description:
      'A health chatbot that uses vector search for personalised food recommendations and nutrition analysis, including calorie estimates from food photos.',
    features: [
      'Flask + PostgreSQL + pgvector architecture',
      'Vector similarity search for food recommendations',
      'Custom nutrition scoring algorithm',
      'Food image recognition for calorie estimation',
      'Personalized health insights',
    ],
    technologies: ['Flask', 'PostgreSQL', 'pgvector', 'OpenCV', 'Python'],
    link: { href: 'https://github.com/SocialAiPinnacle/nutra_ai', kind: 'source' },
    theme: {
      card: 'bg-mint text-ink',
      panel: 'bg-white/25',
      chip: 'bg-white/40 text-ink',
      button: 'bg-ink text-white hover:bg-white hover:text-ink',
    },
  },
  {
    title: 'Politian',
    subtitle: 'Secure Voting System',
    icon: Vote,
    description:
      'An electronic voting platform built on database triggers, views and indexes for integrity, with real-time analytics for transparent elections.',
    features: [
      'Flask + SQLAlchemy + SQLite stack',
      'Database triggers, views, and indexes',
      'Real-time analytics using Chart.js',
      'Secure admin dashboard',
      'Vote verification and audit trails',
    ],
    technologies: ['Flask', 'SQLAlchemy', 'SQLite', 'Chart.js', 'Bootstrap'],
    link: { href: 'https://github.com/Harry5702/Politian-Secure-Voting-System', kind: 'source' },
    theme: {
      card: 'bg-white text-ink',
      panel: 'bg-canvas',
      chip: 'bg-canvas text-ink',
      button: 'bg-ink text-white hover:bg-cobalt',
    },
  },
];

/** Stacking only works when a whole card fits on screen, so it's limited to large viewports. */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px) and (min-height: 700px)');
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return isDesktop;
};

const ProjectCard = ({
  project,
  index,
  total,
  progress,
  stack,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stack: boolean;
}) => {
  // Each card shrinks a little once the next one starts sliding over it
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.05]);
  const { theme } = project;

  return (
    <div className={stack ? 'sticky top-28' : ''} style={stack ? { paddingTop: index * 28 } : undefined}>
      <motion.article
        style={stack ? { scale } : undefined}
        className={`origin-top overflow-hidden rounded-[1.75rem] p-5 shadow-lift sm:rounded-[2rem] sm:p-10 lg:p-12 ${theme.card}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col">
            <div className="mb-6 flex items-center justify-between sm:mb-8">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${theme.panel}`}>
                <project.icon size={26} />
              </span>
              <span className="font-display text-5xl font-extrabold opacity-25 sm:text-6xl">0{index + 1}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">{project.subtitle}</p>
              {project.tag && (
                <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${theme.chip}`}>{project.tag}</span>
              )}
            </div>
            <h3 className="mt-2 font-display text-[2rem] font-extrabold leading-tight tracking-tightest sm:text-4xl md:text-6xl">{project.title}</h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed opacity-90 sm:mt-5 sm:text-lg">{project.description}</p>
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="View"
                className={`btn mt-8 self-start lg:mt-auto ${theme.button}`}
              >
                {project.link.kind === 'live' ? <Globe size={17} /> : <Github size={17} />}
                {project.link.kind === 'live' ? 'Visit site' : 'View source'}
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold opacity-80 lg:mt-auto">
                <Lock size={15} />
                {project.note}
              </p>
            )}
          </div>

          <div className={`rounded-2xl p-5 sm:rounded-3xl sm:p-8 ${theme.panel}`}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-80">Key features</p>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
                  <span className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-current opacity-60" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
              {project.technologies.map((tech) => (
                <span key={tech} className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.chip}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const stack = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          tone="mint"
          aside="AI-powered solutions built end to end, from training the model to shipping the interface around it."
        />

        <div ref={ref} className="space-y-10 pb-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
              stack={stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
