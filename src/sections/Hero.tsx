import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
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
      gsap.fromTo('.hero-line-1', { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', delay: 0.1 });
      gsap.fromTo('.hero-line-2', { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', delay: 0.22 });
      gsap.fromTo('.hero-line-3', { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', delay: 0.34 });
      gsap.fromTo('.hero-sub',    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.7 });
      gsap.fromTo('.hero-ctas',   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.85 });
      gsap.fromTo('.hero-meta',   { opacity: 0 },        { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col bg-forest-dark overflow-hidden"
      aria-label="Hero section"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Horizontal rule top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />

      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded">
        Skip to main content
      </a>

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-500 ${
        navDark ? 'bg-forest-dark/80 backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`} aria-label="Main navigation">
        <a href="/Product-Designer-Portfolio/"
          className={`font-sans font-bold text-lg tracking-tight transition-colors duration-300 focus:outline-none rounded px-1 ${
            navDark ? 'text-white' : 'text-forest-dark'
          }`}>
          {heroConfig.brandName}
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {heroConfig.navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={`text-sm font-body tracking-wide transition-colors duration-300 focus:outline-none ${
                navDark ? 'text-white/50 hover:text-white' : 'text-forest-dark/60 hover:text-forest-dark'
              }`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => setMobileMenuOpen(true)}
          className={`md:hidden p-2 rounded focus:outline-none ${navDark ? 'text-white' : 'text-forest-dark'}`}
          aria-label="Open menu" aria-expanded={mobileMenuOpen}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-forest-dark/98 backdrop-blur-md flex flex-col px-6 py-8">
          <div className="flex items-center justify-between mb-12">
            <span className="text-white font-sans font-bold text-lg">{heroConfig.brandName}</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <ul className="space-y-8">
              {heroConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)}
                    className="text-white/70 hover:text-white text-3xl font-body font-light tracking-wide transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto w-full pb-16 md:pb-20 pt-32">

        {/* Large display name — clipped reveal animation */}
        <div className="mb-6 md:mb-8">
          <div className="overflow-hidden">
            <h1 className="hero-line-1 font-sans font-black text-white leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(4rem, 13vw, 11rem)' }}>
              Conrad
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line-2 font-sans font-black leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(4rem, 13vw, 11rem)', WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
              Otieno
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <div className="hero-line-3 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/15" />
            <span className="text-white/35 font-body text-xs uppercase tracking-[0.3em] whitespace-nowrap">Product Designer</span>
            <div className="h-px w-12 bg-white/15" />
          </div>
        </div>

        {/* UVP + CTAs row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* UVP */}
          <p className="hero-sub font-serif italic text-white/65 leading-relaxed max-w-lg"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
            Turning complex problems into{' '}
            <em className="text-white not-italic font-sans font-medium">intuitive digital experiences</em>
            {' '}— UX strategy, UI design, and design systems.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex items-center gap-4 shrink-0">
            <a href="#projects"
              className="px-7 py-3.5 bg-white text-forest-dark font-sans font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark">
              View Work
            </a>
            <a href="#contact"
              className="px-7 py-3.5 border border-white/25 text-white/80 font-sans font-medium text-sm tracking-wide hover:border-white/60 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="hero-meta flex items-center justify-between mt-10 md:mt-12 pt-6 border-t border-white/10">
          <span className="text-white/25 font-body text-xs tracking-widest uppercase">Nairobi, Kenya</span>
          <span className="text-white/25 font-body text-xs tracking-widest uppercase">Available for projects</span>
        </div>
      </div>
    </section>
  );
}
