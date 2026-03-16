import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { BackToTop } from './components/BackToTop';
import { CaseStudy } from './pages/CaseStudy';
import { siteConfig } from './config';
import './App.css';

// Home page component
function HomePage() {
  return (
    <main id="main-content" className="relative w-full overflow-x-hidden">
      {/* Hero Section - Dark Forest */}
      <Hero />

      {/* Services - White */}
      <Services />

      {/* Featured Projects - Dark Forest */}
      <FeaturedProjects />

      {/* Contact Form - White */}
      <Contact />

      {/* Footer - Dark Forest */}
      <Footer />
    </main>
  );
}

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
