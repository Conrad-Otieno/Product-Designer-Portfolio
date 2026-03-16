import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { heroConfig } from '../config';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col bg-forest-dark"
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

      {/* Hero Content */}
      <div ref={contentRef} className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 opacity-0">

        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mb-6">
          <img src={heroConfig.heroImage} alt={heroConfig.heroImageAlt}
            className="w-full h-full object-cover object-top" loading="eager" />
        </div>

        {/* Headline — simple & clean */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-[1.1] max-w-2xl mb-4">
          Product Designer
        </h1>

        {/* Subtext */}
        <p className="text-white/50 font-body text-base md:text-lg max-w-md mb-10 leading-relaxed">
          I craft intuitive digital experiences — from UX research to pixel-perfect interfaces.
        </p>

        {/* CTA */}
        <ContactButton href="#contact" label="Contact Me" icon="arrow" />
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
