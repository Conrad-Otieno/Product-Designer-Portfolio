import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ArrowDown } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = sectionRef.current?.offsetHeight || 0;
      setNavDark(window.scrollY < heroHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo('.hero-name', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.4')
        .fromTo('.hero-role', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo('.hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-forest-dark"
      aria-label="Hero section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" aria-hidden="true" />

      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300 ${
          navDark
            ? 'bg-gradient-to-b from-forest-dark/95 to-transparent backdrop-blur-sm'
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
        aria-label="Main navigation"
      >
        {heroConfig.brandLogo ? (
          <a href="/Product-Designer-Portfolio/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded">
            <img src={heroConfig.brandLogo} alt={heroConfig.brandName} className="h-12 md:h-16 w-auto" />
          </a>
        ) : (
          <a
            href="/Product-Designer-Portfolio/"
            className={`font-sans font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1 ${
              navDark
                ? 'text-white focus:ring-white focus:ring-offset-forest-dark'
                : 'text-forest-dark focus:ring-forest-dark focus:ring-offset-white'
            }`}
          >
            {heroConfig.brandName}
          </a>
        )}

        {/* Desktop nav */}
        {heroConfig.navLinks.length > 0 && (
          <ul className="hidden md:flex items-center gap-8">
            {heroConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-body font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-3 py-2 ${
                    navDark
                      ? 'text-white/70 hover:text-white focus:ring-white focus:ring-offset-forest-dark'
                      : 'text-forest-dark/70 hover:text-forest-dark focus:ring-forest-dark focus:ring-offset-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 transition-colors duration-300 ${
            navDark
              ? 'text-white focus:ring-white focus:ring-offset-forest-dark'
              : 'text-forest-dark focus:ring-forest-dark focus:ring-offset-white'
          }`}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-forest-dark/95 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between px-6 py-8">
              <span className="text-white font-sans font-bold text-xl tracking-tight">{heroConfig.brandName}</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-2"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
              <ul className="space-y-6">
                {heroConfig.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white text-2xl font-body font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded px-3 py-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full pt-32 pb-24"
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-white/40" aria-hidden="true" />
          <span className="text-white/50 font-body text-xs uppercase tracking-[0.25em]">Product Designer · Nairobi, Kenya</span>
        </div>

        {/* Name */}
        <h1 className="hero-name font-sans font-extrabold text-white leading-[0.95] tracking-tight mb-5">
          <span className="block text-[11vw] md:text-[8vw] lg:text-[7vw]">Conrad</span>
          <span className="block text-[11vw] md:text-[8vw] lg:text-[7vw] text-white/30">Otieno</span>
        </h1>

        {/* Role / UVP */}
        <div className="hero-role max-w-xl mb-4">
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/80 leading-snug">
            I design digital products that turn complex problems into{' '}
            <span className="text-white not-italic font-sans font-semibold">intuitive experiences</span>
            {' '}— from UX strategy to pixel-perfect UI.
          </p>
        </div>

        {/* Supporting line */}
        <p className="hero-desc text-white/40 font-body text-sm md:text-base max-w-md mb-8 leading-relaxed">
          8+ years working with startups and enterprises across fintech, SaaS, and e-commerce.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest-dark font-sans font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-sans font-semibold text-sm tracking-wide hover:border-white/70 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark"
          >
            Get in Touch
          </a>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 font-body text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
