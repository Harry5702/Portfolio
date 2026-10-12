import { MotionConfig } from 'framer-motion';
import {
  Navbar,
  Hero,
  Marquee,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Certifications,
  Contact,
  Footer,
} from './components';
import { CursorLabel, ScrollProgress } from './components/motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
        <ScrollProgress />
        <CursorLabel />
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
