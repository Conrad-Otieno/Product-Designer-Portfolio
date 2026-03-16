import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight } from 'lucide-react';
import { heroConfig, footerConfig } from '../config';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col bg-forest-dark overflow-hidden"
      aria-label="Hero section"
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Bar */}
      <header className="w-full px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/10 z-50">
        {/* Left — email + CV */}
        <div className="flex items-center gap-3">
          <span className="text-white/50 font-body text-xs hidden sm:block">
            {footerConfig.email}
          </span>
          <a
            href={`mailto:${footerConfig.email}`}
            className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 font-body text-xs hover:bg-white hover:text-forest-dark transition-all duration-300"
          >
            Copy
          </a>
          <a
            href="#"
            className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 font-body text-xs hover:bg-white hover:text-forest-dark transition-all duration-300"
          >
            CV
          </a>
        </div>

        {/* Right — nav links + social */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label="Main navigation" className="flex items-center gap-6">
            {heroConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 font-body text-sm hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="w-px h-4 bg-white/20" />
          {footerConfig.socialLinks.filter(s => ['Linkedin', 'Instagram'].includes(s.iconName)).map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-white/40 font-body text-xs hover:text-white transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white/70 hover:text-white p-2 focus:outline-none"
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 opacity-0"
      >
        {/* Profile photo + name badge */}
        <div className="relative mb-8 md:mb-10">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
          {/* Name badge */}
          <div className="absolute -top-2 -right-16 md:-right-20 bg-white text-forest-dark text-xs font-body font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
            <span>{heroConfig.brandName}</span>
            <span className="text-forest-dark/50">✦</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.05] max-w-3xl mb-8">
          {heroConfig.titleLine1}{' '}
          <span className="font-serif italic font-normal text-white/70">{heroConfig.titleLine2}</span>
          {heroConfig.titleLine3 && (
            <><br />{heroConfig.titleLine3}</>
          )}
        </h1>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-forest-dark font-sans font-semibold text-sm rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
        >
          Latest Work
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-forest-dark/98 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="text-white font-sans font-bold text-lg">{heroConfig.brandName}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/70 hover:text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-6" aria-label="Mobile navigation">
            {heroConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-body font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
