import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(true);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = sectionRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;
      
      // If scrolled past hero section, check background color
      if (scrollY > heroHeight - 100) {
        setNavDark(false);
      } else {
        setNavDark(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Store ScrollTrigger instances for cleanup
      const triggers: ScrollTrigger[] = [];

      // Parallax effect for main text
      const textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) {
            gsap.set(textRef.current, { yPercent: self.progress * 50 });
          }
        },
      });
      triggers.push(textTrigger);

      // Parallax effect for model (slower movement = appears closer)
      const modelTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) {
            gsap.set(modelRef.current, { yPercent: self.progress * 20 });
          }
        },
      });
      triggers.push(modelTrigger);

      // Fade out overlay text faster
      const overlayTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) {
            gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
          }
        },
      });
      triggers.push(overlayTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-dark"
      aria-label="Hero section"
    >
      {/* Layer 1: Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark to-forest-mid opacity-90" aria-hidden="true" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2: Big Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
        aria-hidden="true"
      >
        <h1 className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-sans font-extrabold text-white tracking-tighter leading-none select-none whitespace-nowrap">
          {heroConfig.backgroundText}
        </h1>
      </div>

      {/* Layer 3: Hero Model Image (Cutout) - Hidden */}
      {/* {heroConfig.heroImage && (
        <div
          ref={modelRef}
          className="absolute inset-0 flex items-end justify-center z-20 will-change-transform"
        >
          <div className="relative w-[50vw] md:w-[35vw] lg:w-[28vw] max-w-[500px]">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-auto object-contain"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-dark to-transparent" />
          </div>
        </div>
      )} */}

      {/* Layer 4: Overlay Text */}
      {heroConfig.overlayText && (
        <div
          ref={overlayTextRef}
          className="absolute bottom-[15%] right-[8%] md:right-[12%] z-30 will-change-transform"
          role="heading"
          aria-level={2}
        >
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/90 tracking-wide">
            {heroConfig.overlayText}
          </p>
        </div>
      )}

      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-forest-dark focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex items-center justify-between transition-all duration-300 ${
        navDark 
          ? 'bg-gradient-to-b from-forest-dark/95 to-transparent backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`} aria-label="Main navigation">
        {heroConfig.brandLogo ? (
          <a href="/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded">
            <img 
              src={heroConfig.brandLogo} 
              alt={heroConfig.brandName}
              className="h-12 md:h-16 w-auto mix-blend-screen brightness-200"
            />
          </a>
        ) : (
          <a 
            href="/" 
            className={`font-sans font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1 ${
              navDark 
                ? 'text-white focus:ring-white focus:ring-offset-forest-dark' 
                : 'text-forest-dark focus:ring-forest-dark focus:ring-offset-white'
            }`}
          >
            {heroConfig.brandName}
          </a>
        )}
        
        {/* Desktop Navigation */}
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
        
        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-forest-dark/95 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-8">
              <div className="text-white font-sans font-bold text-xl tracking-tight">
                {heroConfig.brandName}
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark rounded p-2"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
              <ul className="space-y-6">
                {heroConfig.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white text-2xl font-body font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark rounded px-3 py-2"
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
    </section>
  );
}
