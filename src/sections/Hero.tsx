import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { heroConfig, featuredProjectsConfig } from '../config';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero copy
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      // Image strip — stagger in
      const cards = stripRef.current?.querySelectorAll('.strip-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.6 }
        );
      }
      // Callouts
      const callouts = calloutRef.current?.querySelectorAll('.callout-item');
      if (callouts) {
        gsap.fromTo(
          callouts,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1, delay: 1.1 }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const callouts = [
    { title: 'UX Research', desc: 'Deep user insights that drive every design decision.' },
    { title: 'UI Design', desc: 'Pixel-perfect interfaces built for clarity and delight.' },
    { title: 'Design Systems', desc: 'Scalable component libraries for consistent products.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col bg-forest-dark overflow-hidden"
      aria-label="Hero section"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded">
        Skip to main content
      </a>

      {/* Sticky Nav */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-forest-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}>
        <a href="/Product-Designer-Portfolio/" className="font-sans font-bold text-white text-lg tracking-tight">
          {heroConfig.brandName}
        </a>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {heroConfig.navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-white/60 font-body text-sm hover:text-white transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white/70 hover:text-white p-2"
          aria-label="Open menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Copy — centered */}
      <div ref={contentRef} id="main-content" className="flex flex-col items-center text-center px-6 pt-36 pb-12 opacity-0">
        <p className="text-white/40 font-body text-xs uppercase tracking-[0.25em] mb-5">
          Product Designer · Nairobi
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.05] max-w-3xl mb-5">
          Crafting Digital<br />
          <span className="font-serif italic font-normal text-white/60">Experiences</span>
        </h1>
        <p className="text-white/50 font-body text-base md:text-lg max-w-sm mb-10 leading-relaxed">
          From UX research to pixel-perfect interfaces — I design products people love.
        </p>
        <ContactButton href="#contact" label="Get in Touch" icon="arrow" />
      </div>

      {/* Project Image Strip */}
      <div ref={stripRef} className="w-full px-4 md:px-8 pb-0 overflow-hidden">
        <div className="flex items-end justify-center gap-3 md:gap-4">
          {featuredProjectsConfig.projects.map((project, i) => {
            // Middle card is tallest, outer cards shorter and slightly rotated
            const heights = ['h-44 md:h-56', 'h-52 md:h-64', 'h-44 md:h-56'];
            const rotations = ['-rotate-2', 'rotate-0', 'rotate-2'];
            return (
              <a
                key={project.id}
                href="#projects"
                className={`strip-card flex-shrink-0 w-32 md:w-44 lg:w-52 ${heights[i % 3]} ${rotations[i % 3]} rounded-2xl overflow-hidden opacity-0 relative group cursor-pointer`}
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest-dark/30 group-hover:bg-forest-dark/10 transition-colors duration-300 rounded-2xl" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Callout Row */}
      <div ref={calloutRef} className="w-full border-t border-white/10 mt-8">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {callouts.map((c, i) => (
            <div key={i} className="callout-item opacity-0 px-0 md:px-8 py-4 md:py-0 first:pl-0 last:pr-0">
              <p className="text-white font-sans font-semibold text-sm mb-1">{c.title}</p>
              <p className="text-white/50 font-body text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-forest-dark flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="text-white font-sans font-bold text-lg">{heroConfig.brandName}</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white p-2" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-8" aria-label="Mobile navigation">
            {heroConfig.navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-body font-medium transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
