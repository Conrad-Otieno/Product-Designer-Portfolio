import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { heroConfig } from '../config';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const h = sectionRef.current?.offsetHeight || 0;
      setNavDark(window.scrollY < h - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo('.h-tag',  { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
        .fromTo('.h-name', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6')
        .fromTo('.h-role', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5')
        .fromTo('.h-cta',  { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-forest-dark overflow-hidden" aria-label="Hero section">

      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded">
        Skip to main content
      </a>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-7 flex items-center justify-between transition-all duration-500 ${
        navDark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`} aria-label="Main navigation">
        <a href="/Product-Designer-Portfolio/" className={`font-sans font-semibold text-base tracking-tight transition-colors duration-300 ${navDark ? 'text-white' : 'text-forest-dark'}`}>
          {heroConfig.brandName}
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {heroConfig.navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={`font-body text-sm transition-colors duration-300 ${navDark ? 'text-white/45 hover:text-white' : 'text-forest-dark/50 hover:text-forest-dark'}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setMobileMenuOpen(true)} className={`md:hidden p-1 ${navDark ? 'text-white' : 'text-forest-dark'}`} aria-label="Open menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-forest-dark flex flex-col px-8 py-7">
          <div className="flex items-center justify-between mb-16">
            <span className="text-white font-sans font-semibold text-base">{heroConfig.brandName}</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white" aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>
          <ul className="space-y-10">
            {heroConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white text-4xl font-body font-light tracking-tight transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content — vertically centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 max-w-6xl">

        {/* Tag */}
        <p className="h-tag text-white/35 font-body text-xs uppercase tracking-[0.3em] mb-10">
          Product Designer
        </p>

        {/* Headline */}
        <h1 className="h-name font-sans font-bold text-white tracking-tight leading-[1] mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}>
          Crafting digital<br />
          <span className="text-white/30">experiences</span><br />
          that matter.
        </h1>

        {/* One-liner */}
        <p className="h-role text-white/45 font-body text-base md:text-lg leading-relaxed max-w-sm mb-12">
          UX/UI design, design systems, and user research — built for impact.
        </p>

        {/* CTAs */}
        <div className="h-cta flex items-center gap-6">
          <a href="#projects" className="text-white font-sans font-medium text-sm tracking-wide border-b border-white/40 pb-0.5 hover:border-white transition-colors duration-300">
            View Work →
          </a>
          <a href="#contact" className="text-white/40 font-sans font-medium text-sm tracking-wide hover:text-white/70 transition-colors duration-300">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3" aria-hidden="true">
        <div className="w-px h-16 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/50 animate-[scrollLine_2s_ease-in-out_infinite]" style={{ height: '40%', animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
        <span className="text-white/20 font-body text-[10px] uppercase tracking-[0.25em] [writing-mode:vertical-rl]">Scroll</span>
      </div>

    </section>
  );
}
