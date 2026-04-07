import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudiesConfig, heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const caseStudy = caseStudiesConfig.find(cs => cs.id === Number(projectId));
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const nextProjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!caseStudy || caseStudy.hidden) {
      navigate('/');
      return;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, [caseStudy, navigate]);

  useEffect(() => {
    if (!caseStudy || !isLoaded) return;

    const ctx = gsap.context(() => {
      // Hero image reveal with scale and continuous float animation
      const heroImage = heroRef.current?.querySelector('.hero-image');
      if (heroImage) {
        // Initial reveal
        gsap.fromTo(heroImage,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
        
        // Continuous floating animation
        gsap.to(heroImage, {
          y: -20,
          duration: 3,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        });
        
        // Subtle scale breathing effect
        gsap.to(heroImage, {
          scale: 1.02,
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
        
        // Parallax effect on scroll
        gsap.fromTo(heroImage,
          { yPercent: 0 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Scroll indicator reveal
      const scrollIndicator = heroRef.current?.querySelector('.hero-reveal');
      if (scrollIndicator) {
        gsap.fromTo(scrollIndicator,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 1,
          }
        );
      }

      // Overview section
      ScrollTrigger.create({
        trigger: overviewRef.current,
        start: 'top 80%',
        onEnter: () => {
          const elements = overviewRef.current?.querySelectorAll('.reveal');
          if (elements && elements.length > 0) {
            gsap.fromTo(elements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
        },
        once: true,
      });

      // Challenge section
      ScrollTrigger.create({
        trigger: challengeRef.current,
        start: 'top 80%',
        onEnter: () => {
          const elements = challengeRef.current?.querySelectorAll('.reveal');
          if (elements && elements.length > 0) {
            gsap.fromTo(elements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
        },
        once: true,
      });

      // Results section
      ScrollTrigger.create({
        trigger: resultsRef.current,
        start: 'top 80%',
        onEnter: () => {
          const revealElements = resultsRef.current?.querySelectorAll('.reveal');
          if (revealElements && revealElements.length > 0) {
            gsap.fromTo(revealElements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
          
          // Counter animation for stats
          const counters = resultsRef.current?.querySelectorAll('.counter');
          counters?.forEach((counter) => {
            const target = counter.getAttribute('data-value');
            const suffix = counter.getAttribute('data-suffix') || '';
            if (target) {
              gsap.fromTo(counter,
                { textContent: '0' },
                {
                  textContent: target,
                  duration: 2,
                  ease: 'power2.out',
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    counter.textContent = Math.round(Number(counter.textContent)) + suffix;
                  },
                }
              );
            }
          });
        },
        once: true,
      });

      // Gallery
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: 'top 80%',
        onEnter: () => {
          const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
          if (galleryItems && galleryItems.length > 0) {
            gsap.fromTo(galleryItems,
              { y: 80, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', stagger: 0.15 }
            );
          }
        },
        once: true,
      });

      // CTA
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 80%',
        onEnter: () => {
          const revealElements = ctaRef.current?.querySelectorAll('.reveal');
          if (revealElements && revealElements.length > 0) {
            gsap.fromTo(revealElements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
        },
        once: true,
      });

      // Testimonial
      ScrollTrigger.create({
        trigger: testimonialRef.current,
        start: 'top 80%',
        onEnter: () => {
          const revealElements = testimonialRef.current?.querySelectorAll('.reveal');
          if (revealElements && revealElements.length > 0) {
            gsap.fromTo(revealElements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
        },
        once: true,
      });

      // Next project
      ScrollTrigger.create({
        trigger: nextProjectRef.current,
        start: 'top 80%',
        onEnter: () => {
          const revealElements = nextProjectRef.current?.querySelectorAll('.reveal');
          if (revealElements && revealElements.length > 0) {
            gsap.fromTo(revealElements,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
            );
          }
        },
        once: true,
      });
    }, contentRef);

    return () => ctx.revert();
  }, [caseStudy, isLoaded]);

  if (!caseStudy) return null;

  return (
    <div ref={contentRef} className="relative w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex items-center justify-between bg-gradient-to-b from-[#111111]/90 to-transparent backdrop-blur-sm">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111111] rounded px-3 py-2"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-body text-sm font-medium">Back to Home</span>
        </Link>
        <Link 
          to="/" 
          className="font-sans font-bold text-white text-xl md:text-2xl tracking-tight hover:text-white/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111111] rounded px-2 py-1"
        >
          {heroConfig.brandName}
        </Link>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#111111]">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="hero-image max-w-full max-h-full object-contain will-change-transform opacity-0"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hero-reveal opacity-0">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <section className="relative py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#111111]/5 rounded-full text-[#111111]/70 font-body text-sm font-medium">
                {caseStudy.category}
              </span>
              <span className="text-[#111111]/50 font-body text-sm">{caseStudy.year}</span>
              <span className="w-1 h-1 rounded-full bg-[#111111]/30" />
              <span className="text-[#111111]/50 font-body text-sm">{caseStudy.duration}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#111111] tracking-tight leading-tight mb-6">
              {caseStudy.title}
            </h1>

            {/* Client */}
            <p className="text-[#111111]/60 font-body text-lg mb-8">
              Client: <span className="text-[#111111]/80 font-medium">{caseStudy.client}</span>
            </p>

            {/* Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[#111111]/10">
              <div>
                <p className="text-[#111111]/50 font-body text-sm mb-2">Role</p>
                <p className="text-[#111111] font-sans font-medium">{caseStudy.role}</p>
              </div>
              
              {caseStudy.product && (
                <div>
                  <p className="text-[#111111]/50 font-body text-sm mb-2">Product</p>
                  <p className="text-[#111111] font-sans font-medium">{caseStudy.product}</p>
                </div>
              )}
              
              {caseStudy.tools && caseStudy.tools.length > 0 && (
                <div>
                  <p className="text-[#111111]/50 font-body text-sm mb-2">Tools</p>
                  <div className="flex items-center gap-3">
                    {caseStudy.tools.map((tool, index) => (
                      <div key={index} className="relative group">
                        {tool === 'Figma' && (
                          <svg className="w-6 h-6 text-[#111111]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                          </svg>
                        )}
                        {tool === 'Miro' && (
                          <svg className="w-6 h-6 text-[#111111]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.392 0H13.9L17 4.808 10.444 0h-3.49L12.5 8.586 2.036 0h-1.16L15.2 14.303 9.614 8.586 4.664 24h3.492l2.726-8.586L15.508 24h3.492l-4.95-15.414L24 24h1.316z"/>
                          </svg>
                        )}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#111111] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-4">
              <p className="reveal text-[#111111]/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4 opacity-0">Overview</p>
              <h2 className="reveal text-xl sm:text-2xl md:text-3xl font-sans font-bold text-[#111111] opacity-0">Project Summary</h2>
            </div>
            <div className="md:col-span-8">
              {caseStudy.overview.split('\n\n').map((paragraph, idx) => {
                // Check if paragraph contains bullet points
                if (paragraph.includes('\n•')) {
                  const [intro, ...items] = paragraph.split('\n•');
                  return (
                    <div key={idx} className="reveal opacity-0 mb-6 last:mb-0">
                      {intro && (
                        <p className="text-[#111111]/80 font-body text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                          {intro}
                        </p>
                      )}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-[#111111]/80 font-body text-base md:text-lg leading-relaxed">
                            <span className="text-[#111111]/60 mt-1.5 flex-shrink-0">•</span>
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return (
                  <p key={idx} className="reveal text-[#111111]/80 font-body text-base md:text-lg lg:text-xl leading-relaxed opacity-0 mb-6 last:mb-0">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section ref={challengeRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-[#111111]/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4 opacity-0">The Challenge</p>
            <h2 className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#111111] leading-tight mb-8 md:mb-12 opacity-0">
              Understanding the <span className="font-serif italic font-normal text-[#111111]/60">Problem</span>
            </h2>
            
            {caseStudy.challenge.split('\n\n').map((paragraph, idx) => {
              // Check if paragraph contains numbered list
              if (/^\d+\./.test(paragraph)) {
                const items = paragraph.split('\n').filter(line => line.trim());
                return (
                  <div key={idx} className="relative mb-12">
                    {items.map((item, itemIdx) => {
                      const match = item.match(/^(\d+)\.\s+(.+)/);
                      if (match) {
                        const [, , content] = match;
                        const [title, description] = content.split(' – ');
                        return (
                          <div 
                            key={itemIdx} 
                            className="sticky"
                            style={{
                              top: `${80 + itemIdx * 20}px`,
                            }}
                          >
                            <div 
                              className="group relative mb-6 transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl overflow-hidden"
                              style={{
                                transform: `scale(${1 - itemIdx * 0.015})`,
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                              }}
                            >
                              {/* Animated gradient border */}
                              <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-[#111111]/0 via-[#111111]/10 to-[#111111]/0 opacity-0 group-hover:opacity-100" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                              
                              {/* Subtle noise texture overlay */}
                              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                              
                              {/* Card content */}
                              <div className="relative p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                  {/* Premium number badge */}
                                  <div className="relative flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-sans text-base font-bold transition-all duration-500 group-hover:scale-110 bg-[#111111] text-white" style={{
                                      boxShadow: '0 4px 12px rgba(17, 17, 17, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                    }}>
                                      {String(itemIdx + 1).padStart(2, '0')}
                                    </div>
                                  </div>
                                  
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-lg md:text-xl font-sans font-bold mb-3 transition-colors duration-300 text-[#111111]">
                                      {title}
                                    </h4>
                                    {description && (
                                      <p className="font-body text-sm md:text-base leading-relaxed text-[#111111]/70">
                                        {description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Shimmer effect on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111111]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                );
              }
              return (
                <p key={idx} className="reveal text-[#111111]/70 font-body text-base md:text-lg lg:text-xl leading-relaxed opacity-0 mb-8 max-w-3xl">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      {caseStudy.designPhases && caseStudy.designPhases.length > 0 ? (
        <>
          {/* Process Overview */}
          <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#111111]">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                <p className="text-white/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4">Approach</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white leading-tight mb-4 md:mb-6">
                  The Design <span className="font-serif italic font-normal text-white/80">Process</span>
                </h2>
                <p className="text-white/70 font-body text-base md:text-lg leading-relaxed px-4">
                  {caseStudy.id === 1 && "As with most of my projects, I employed the Double Diamond design process—starting with user research and problem definition to understand transaction pain points, then moving to solution ideation and implementation to deliver a streamlined mobile money experience."}
                  {caseStudy.id === 2 && "Following my proven approach, I applied the Double Diamond design process—beginning with user research and problem definition to identify navigation and engagement issues, then progressing to solution ideation and implementation to create an intuitive, high-converting website."}
                  {caseStudy.id === 4 && "Leveraging the Double Diamond framework, I started with user research and problem definition to uncover platform inconsistencies and user frustrations, then moved to solution ideation and implementation to build a unified, accessible banking experience."}
                </p>
              </div>

              {/* Double Diamond Visual */}
              <div className="max-w-5xl mx-auto mb-12 md:mb-16">
                <img
                  src="/double-diamond-process.jpg"
                  alt="Double Diamond Design Process Framework"
                  className="w-full h-auto rounded-lg md:rounded-xl shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Detailed Design Phases */}
          {caseStudy.designPhases.map((phase, phaseIndex) => (
            <section 
              key={phaseIndex} 
              className={`relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white`}
            >
              <div className="max-w-7xl mx-auto">
                {/* Phase Header */}
                <div className="max-w-4xl mb-12 md:mb-16">
                  {phase.subtitle && (
                    <p className={`text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4 text-[#111111]/50`}>
                      {phase.subtitle}
                    </p>
                  )}
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-4 md:mb-6 text-[#111111]`}>
                    {phase.title}
                  </h2>
                  {phase.description.split('\n\n').map((paragraph, pIdx) => {
                    // Check if paragraph is a section header (ends with colon)
                    if (paragraph.trim().endsWith(':') && !paragraph.includes('\n')) {
                      return (
                        <h3 key={pIdx} className={`font-sans font-bold text-xl md:text-2xl mb-4 mt-8 first:mt-0 text-[#111111]`}>
                          {paragraph.trim()}
                        </h3>
                      );
                    }
                    // Check if paragraph contains numbered list
                    if (/^\d+\./.test(paragraph)) {
                      const [intro, ...rest] = paragraph.split(/(?=\n\d+\.)/);
                      const items = rest.map(item => item.trim());
                      return (
                        <div key={pIdx} className="mb-6 last:mb-0">
                          {intro && intro.trim() && (
                            <p className={`font-body text-base md:text-lg leading-relaxed mb-4 text-[#111111]/70`}>
                              {intro.trim()}
                            </p>
                          )}
                          <ol className="space-y-3">
                            {items.map((item, itemIdx) => {
                              const match = item.match(/^(\d+)\.\s+(.+)/);
                              if (match) {
                                const [, number, content] = match;
                                return (
                                  <li key={itemIdx} className={`flex items-start gap-4 font-body text-base md:text-lg leading-relaxed text-[#111111]/70`}>
                                    <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-sans text-sm font-bold bg-[#111111]/10 text-[#111111]`}>
                                      {number}
                                    </span>
                                    <span className="flex-1">{content}</span>
                                  </li>
                                );
                              }
                              return null;
                            })}
                          </ol>
                        </div>
                      );
                    }
                    // Check if paragraph contains bullet points
                    if (paragraph.includes('\n•')) {
                      const [intro, ...items] = paragraph.split('\n•');
                      return (
                        <div key={pIdx} className="mb-8 last:mb-0">
                          {intro && intro.trim() && (
                            <h4 className={`font-sans font-semibold text-lg md:text-xl mb-4 text-[#111111]/90`}>
                              {intro.trim()}
                            </h4>
                          )}
                          <ul className="space-y-3 pl-0">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className={`flex items-start gap-4 font-body text-base md:text-lg leading-relaxed text-[#111111]/70`}>
                                <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[#111111]/60`}></span>
                                <span className="flex-1">{item.trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return (
                      <p key={pIdx} className={`font-body text-base md:text-lg lg:text-xl leading-relaxed mb-6 last:mb-0 text-[#111111]/80 italic`}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Insights Cards - Grid Layout */}
                {phase.insights && phase.insights.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {phase.insights.map((insight, idx) => (
                      <div 
                        key={idx}
                        className={`group relative transition-all duration-300 hover:scale-[1.02] bg-white border border-[#111111]/8 rounded-2xl overflow-hidden`}
                        style={{
                          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {/* Animated gradient border */}
                        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-[#111111]/0 via-[#111111]/10 to-[#111111]/0 opacity-0 group-hover:opacity-100`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                        
                        {/* Subtle noise texture overlay */}
                        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                        
                        {/* Card content */}
                        <div className="relative p-8 md:p-10">
                          <div className="flex items-start gap-6">
                            {/* Premium number badge */}
                            <div className="relative flex-shrink-0">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-sans text-base font-bold transition-all duration-500 group-hover:scale-110 bg-[#111111] text-white`} style={{
                                boxShadow: '0 4px 12px rgba(17, 17, 17, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                              }}>
                                {String(idx + 1).padStart(2, '0')}
                              </div>
                              {/* Glow effect */}
                              <div className={`absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-[#111111]/20`} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className={`text-lg md:text-xl font-sans font-bold mb-3 transition-colors duration-300 text-[#111111]`}>
                                {insight.title}
                              </h4>
                              <p className={`font-body text-sm md:text-base leading-relaxed text-[#111111]/70`}>
                                {insight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#111111]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem Statement */}
                {phase.problemStatement && (
                  <div className={`p-8 md:p-10 rounded-2xl border-l-4 mb-8 bg-[#111111]/5 border-[#111111]`}>
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-4 text-[#111111]/70`}>
                      Problem Statement
                    </h5>
                    <p className={`font-body text-lg md:text-xl leading-relaxed text-[#111111]/90`}>
                      {phase.problemStatement}
                    </p>
                  </div>
                )}

                {/* Product Vision, Goals & User Stories Combined */}
                {(phase.productVision || phase.goals || phase.userStories) && (
                  <div className={`p-8 md:p-10 rounded-2xl mb-12 bg-[#111111]/5`}>
                    {/* Product Vision */}
                    {phase.productVision && (
                      <div className="mb-8">
                        <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-4 text-[#111111]/70`}>
                          Product Vision
                        </h5>
                        <p className={`font-body text-lg md:text-xl leading-relaxed text-[#111111]/90`}>
                          {phase.productVision}
                        </p>
                      </div>
                    )}

                    {/* Goals List */}
                    {phase.goals && phase.goals.length > 0 && (
                      <div className="mb-8">
                        <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-4 text-[#111111]/70`}>
                          Project Goals
                        </h5>
                        <ul className="space-y-3">
                          {phase.goals.map((goal, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-4"
                            >
                              <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-sans text-xs font-bold mt-0.5 bg-[#111111]/10 text-[#111111]`}>
                                {idx + 1}
                              </div>
                              <p className={`font-body text-base md:text-lg leading-relaxed flex-1 text-[#111111]/85`}>
                                {goal}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* User Stories & Features Table */}
                    {phase.userStories && phase.userStories.length > 0 && (
                      <div>
                        <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-6 text-[#111111]/70`}>
                          User Stories
                        </h5>
                        
                        {/* Table */}
                        <div className={`rounded-2xl overflow-hidden bg-white shadow-lg`}>
                          {/* Table Header */}
                          <div className={`grid grid-cols-1 md:grid-cols-[1.2fr,1fr] bg-[#111111]/5 border-b border-[#111111]/10`}>
                            <div className={`px-8 py-5 font-sans font-bold text-xs uppercase tracking-widest md:border-r text-[#111111]/70 border-[#111111]/10`}>
                              User Story
                            </div>
                            <div className={`px-8 py-5 font-sans font-bold text-xs uppercase tracking-widest text-[#111111]/70`}>
                              Solution Feature
                            </div>
                          </div>
                          
                          {/* Table Rows */}
                          {phase.userStories.map((item, idx) => (
                            <div 
                              key={idx}
                              className={`grid grid-cols-1 md:grid-cols-[1.2fr,1fr] transition-colors duration-200 ${
                                idx !== (phase.userStories?.length ?? 0) - 1 ? 'border-b' : ''
                              } border-[#111111]/5 hover:bg-[#111111]/5`}
                            >
                              {/* User Story Column */}
                              <div className={`px-8 py-8 md:border-r flex flex-col justify-center border-[#111111]/10`}>
                                <div className="flex items-start gap-4">
                                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-sans font-bold mt-0.5 bg-[#111111]/10 text-[#111111]`}>
                                    {idx + 1}
                                  </div>
                                  <p className={`font-body text-base leading-relaxed italic text-[#111111]/90`}>
                                    "{item.story}"
                                  </p>
                                </div>
                              </div>
                              
                              {/* Solution Feature Column */}
                              <div className="px-8 py-8 flex flex-col justify-center">
                                <p className={`font-body text-base leading-relaxed text-[#111111]/85`}>
                                  <span className={`font-sans font-bold block mb-2 text-[#111111]`}>
                                    {item.feature.split(':')[0]}
                                  </span>
                                  <span className={`text-[#111111]/75`}>
                                    {item.feature.split(':')[1]?.trim()}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Personas */}
                {phase.personas && phase.personas.length > 0 && (
                  <div className="space-y-8 mb-12">
                    {phase.personas.map((persona, idx) => (
                      <div 
                        key={idx} 
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.01] ${
                          (phaseIndex + 1) % 2 === 0 
                            ? 'bg-gradient-to-br from-forest-dark via-forest-dark to-[#012d28]' 
                            : 'bg-gradient-to-br from-white via-white to-gray-50'
                        }`}
                        style={{
                          boxShadow: (phaseIndex + 1) % 2 === 0 
                            ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                            : '0 4px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <div className="grid md:grid-cols-[300px,1fr] lg:grid-cols-[380px,1fr]">
                          {/* Left side - Avatar/Image placeholder */}
                          <div className={`relative flex items-center justify-center p-8 md:p-12 ${
                            (phaseIndex + 1) % 2 === 0 ? 'bg-white/5' : 'bg-forest-dark/5'
                          }`}>
                            <div className="relative">
                              {/* Large avatar circle */}
                              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center font-sans font-bold text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-105 ${
                                (phaseIndex + 1) % 2 === 0 
                                  ? 'bg-gradient-to-br from-white/20 to-white/10 text-white border-2 border-white/20' 
                                  : 'bg-gradient-to-br from-forest-dark to-forest-dark/90 text-white border-2 border-forest-dark/20'
                              }`} style={{
                                boxShadow: (phaseIndex + 1) % 2 === 0 
                                  ? 'inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.3)' 
                                  : '0 8px 24px rgba(1, 62, 55, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.1)',
                              }}>
                                {persona.name.charAt(0)}
                              </div>
                              {/* Glow effect */}
                              <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                                (phaseIndex + 1) % 2 === 0 ? 'bg-white/30' : 'bg-forest-dark/40'
                              }`} />
                            </div>
                          </div>

                          {/* Right side - Info */}
                          <div className="p-8 md:p-10 lg:p-12">
                            {/* Name and title */}
                            <div className="mb-6">
                              <h4 className={`text-2xl md:text-3xl font-sans font-bold mb-2 ${
                                (phaseIndex + 1) % 2 === 0 ? 'text-white' : 'text-softblack'
                              }`}>
                                {persona.name}
                              </h4>
                              <div className={`flex items-center gap-3 text-sm font-body ${
                                (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                              }`}>
                                <span>{persona.role}</span>
                                <span className={(phaseIndex + 1) % 2 === 0 ? 'text-white/40' : 'text-softblack/40'}>•</span>
                                <span>{persona.age}</span>
                              </div>
                            </div>

                            {/* Bio quote */}
                            <blockquote className={`mb-8 pl-4 border-l-2 ${
                              (phaseIndex + 1) % 2 === 0 ? 'border-white/30 text-white/80' : 'border-forest-dark/30 text-softblack/80'
                            } font-body text-base md:text-lg italic leading-relaxed`}>
                              "{persona.bio}"
                            </blockquote>

                            {/* Goals and Pain Points in two columns */}
                            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                              {/* Goals */}
                              <div>
                                <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-3 pb-2 border-b ${
                                  (phaseIndex + 1) % 2 === 0 ? 'text-white/90 border-white/20' : 'text-softblack/90 border-softblack/20'
                                }`}>
                                  Goals
                                </h5>
                                <ul className="space-y-2">
                                  {persona.goals.map((goal, gIdx) => (
                                    <li key={gIdx} className={`font-body text-sm flex items-start gap-2 ${
                                      (phaseIndex + 1) % 2 === 0 ? 'text-white/75' : 'text-softblack/75'
                                    }`}>
                                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                        (phaseIndex + 1) % 2 === 0 ? 'bg-white/60' : 'bg-forest-dark/60'
                                      }`} />
                                      {goal}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Pain Points */}
                              <div>
                                <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-3 pb-2 border-b ${
                                  (phaseIndex + 1) % 2 === 0 ? 'text-white/90 border-white/20' : 'text-softblack/90 border-softblack/20'
                                }`}>
                                  Pain Points
                                </h5>
                                <ul className="space-y-2">
                                  {persona.painPoints.map((pain, pIdx) => (
                                    <li key={pIdx} className={`font-body text-sm flex items-start gap-2 ${
                                      (phaseIndex + 1) % 2 === 0 ? 'text-white/75' : 'text-softblack/75'
                                    }`}>
                                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                        (phaseIndex + 1) % 2 === 0 ? 'bg-white/60' : 'bg-forest-dark/60'
                                      }`} />
                                      {pain}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className={`absolute inset-0 ${
                            (phaseIndex + 1) % 2 === 0 
                              ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' 
                              : 'bg-gradient-to-r from-transparent via-forest-dark/5 to-transparent'
                          } translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Define the Solution */}
                {phase.solutionDescription && (
                  <div className={`p-8 md:p-10 rounded-2xl mb-8 ${
                    (phaseIndex + 1) % 2 === 0 
                      ? 'bg-white/5' 
                      : 'bg-forest-dark/5'
                  }`}>
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-4 ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                    }`}>
                      Define the Solution
                    </h5>
                    <p className={`font-body text-lg md:text-xl leading-relaxed ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/90' : 'text-softblack/90'
                    }`}>
                      {phase.solutionDescription}
                    </p>
                  </div>
                )}

                {/* Design Principles */}
                {phase.designPrinciples && phase.designPrinciples.length > 0 && (
                  <div className="mb-12">
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-6 ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                    }`}>
                      Design Principles
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {phase.designPrinciples.map((principle, idx) => (
                        <div 
                          key={idx}
                          className={`p-6 rounded-xl border ${
                            (phaseIndex + 1) % 2 === 0 
                              ? 'bg-white/5 border-white/20' 
                              : 'bg-white border-softblack/10'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-sans text-xs font-bold ${
                              (phaseIndex + 1) % 2 === 0 
                                ? 'bg-white/15 text-white' 
                                : 'bg-forest-dark/10 text-forest-dark'
                            }`}>
                              {idx + 1}
                            </div>
                            <p className={`font-body text-sm md:text-base leading-relaxed ${
                              (phaseIndex + 1) % 2 === 0 ? 'text-white/85' : 'text-softblack/85'
                            }`}>
                              {principle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Strategic Decisions */}
                {phase.keyFeatures && phase.keyFeatures.length > 0 && (
                  <div className="mb-12">
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-6 ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                    }`}>
                      Key Strategic Decisions
                    </h5>
                    <div className="relative">
                      {phase.keyFeatures.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="sticky"
                          style={{
                            top: `${80 + idx * 20}px`,
                          }}
                        >
                          <div 
                            className={`group relative mb-6 transition-all duration-500 hover:scale-[1.01] ${
                              (phaseIndex + 1) % 2 === 0 
                                ? 'bg-gradient-to-br from-forest-dark via-forest-dark to-[#012d28]' 
                                : 'bg-gradient-to-br from-white via-white to-gray-50'
                            } rounded-2xl overflow-hidden`}
                            style={{
                              transform: `scale(${1 - idx * 0.015})`,
                              boxShadow: (phaseIndex + 1) % 2 === 0 
                                ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                                : '0 4px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                            }}
                          >
                            {/* Animated gradient border */}
                            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                              (phaseIndex + 1) % 2 === 0 
                                ? 'bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100' 
                                : 'bg-gradient-to-r from-forest-dark/0 via-forest-dark/10 to-forest-dark/0 opacity-0 group-hover:opacity-100'
                            }`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                            
                            {/* Subtle noise texture overlay */}
                            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                            
                            {/* Card content */}
                            <div className="relative p-8 md:p-10">
                              <div className="flex items-start gap-6">
                                {/* Premium number badge */}
                                <div className="relative flex-shrink-0">
                                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-sans text-base font-bold transition-all duration-500 group-hover:scale-110 ${
                                    (phaseIndex + 1) % 2 === 0 
                                      ? 'bg-gradient-to-br from-white/20 to-white/10 text-white backdrop-blur-sm border border-white/20' 
                                      : 'bg-gradient-to-br from-forest-dark to-forest-dark/90 text-white'
                                  }`} style={{
                                    boxShadow: (phaseIndex + 1) % 2 === 0 
                                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)' 
                                      : '0 4px 12px rgba(1, 62, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                  }}>
                                    {String(idx + 1).padStart(2, '0')}
                                  </div>
                                  {/* Glow effect */}
                                  <div className={`absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${
                                    (phaseIndex + 1) % 2 === 0 ? 'bg-white/30' : 'bg-forest-dark/40'
                                  }`} />
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <h4 className={`text-lg md:text-xl font-sans font-bold mb-3 transition-colors duration-300 ${
                                    (phaseIndex + 1) % 2 === 0 ? 'text-white' : 'text-softblack'
                                  }`}>
                                    {feature.title}
                                  </h4>
                                  {feature.description.split('\n\n').map((para, pIdx) => (
                                    <p key={pIdx} className={`font-body text-sm md:text-base leading-relaxed mb-3 last:mb-0 ${
                                      (phaseIndex + 1) % 2 === 0 ? 'text-white/80' : 'text-softblack/70'
                                    }`}>
                                      {para}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                              <div className={`absolute inset-0 ${
                                (phaseIndex + 1) % 2 === 0 
                                  ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' 
                                  : 'bg-gradient-to-r from-transparent via-forest-dark/5 to-transparent'
                              } translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* User Flows */}
                {phase.userFlows && phase.userFlows.length > 0 && (
                  <div className="space-y-4 md:space-y-6 mb-12">
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-6 ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                    }`}>
                      User Flows
                    </h5>
                    {phase.userFlows.map((flow, idx) => (
                      <div 
                        key={idx} 
                        className={`p-5 md:p-6 rounded-lg md:rounded-xl ${(phaseIndex + 1) % 2 === 0 ? 'bg-white/10 backdrop-blur-sm' : 'bg-forest-dark/5'}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm flex-shrink-0 ${(phaseIndex + 1) % 2 === 0 ? 'bg-white text-forest-dark' : 'bg-forest-dark text-white'}`}>
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className={`text-base md:text-lg font-sans font-semibold mb-2 ${(phaseIndex + 1) % 2 === 0 ? 'text-white' : 'text-softblack'}`}>
                              {flow.title}
                            </h4>
                            <p className={`font-body text-sm md:text-base leading-relaxed ${(phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'}`}>
                              {flow.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Lo-Fi Ideation */}
                {phase.loFiIdeation && (
                  <div className={`p-8 md:p-10 rounded-2xl mb-12 ${
                    (phaseIndex + 1) % 2 === 0 
                      ? 'bg-white/5' 
                      : 'bg-forest-dark/5'
                  }`}>
                    <h5 className={`text-sm font-sans font-bold uppercase tracking-wider mb-4 ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/70' : 'text-softblack/70'
                    }`}>
                      Lo-Fi Ideation
                    </h5>
                    <p className={`font-body text-lg md:text-xl leading-relaxed ${
                      (phaseIndex + 1) % 2 === 0 ? 'text-white/90' : 'text-softblack/90'
                    }`}>
                      {phase.loFiIdeation}
                    </p>
                  </div>
                )}

                {/* Phase Images */}
                {phase.images && phase.images.length > 0 && (
                  <div className={`grid gap-4 md:gap-6 ${phase.images.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : phase.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {phase.images.map((image, idx) => (
                      <div key={idx} className="group">
                        <div className="aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden mb-3">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {image.caption && (
                          <p className={`font-body text-xs md:text-sm text-center ${(phaseIndex + 1) % 2 === 0 ? 'text-white/60' : 'text-softblack/60'}`}>
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </>
      ) : (
        // Fallback to simple Double Diamond if no detailed phases
        <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">Approach</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-softblack leading-tight mb-6">
                The Design <span className="font-serif italic font-normal text-softblack/60">Process</span>
              </h2>
              <p className="text-softblack/60 font-body text-lg leading-relaxed">
                {caseStudy.id === 1 && "As with most of my projects, I employed the Double Diamond design process—starting with user research and problem definition to understand transaction pain points, then moving to solution ideation and implementation to deliver a streamlined mobile money experience."}
                {caseStudy.id === 2 && "Following my proven approach, I applied the Double Diamond design process—beginning with user research and problem definition to identify navigation and engagement issues, then progressing to solution ideation and implementation to create an intuitive, high-converting website."}
                {caseStudy.id === 4 && "Leveraging the Double Diamond framework, I started with user research and problem definition to uncover platform inconsistencies and user frustrations, then moved to solution ideation and implementation to build a unified, accessible banking experience."}
              </p>
            </div>

            {/* Double Diamond Process */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
              {/* First Diamond - Discover the Problem */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-forest-dark/5 rounded-full text-forest-dark font-body text-sm font-medium mb-4">
                    First Diamond
                  </div>
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-softblack mb-2">
                    Discover the Problem
                  </h3>
                </div>

                {/* Discover Phase */}
                <div className="pl-6 border-l-2 border-forest-dark/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest-dark text-white flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-softblack mb-2">Discover</h4>
                      <p className="text-softblack/60 font-body text-sm leading-relaxed">
                        Research users, explore the problem space, gather insights through interviews, surveys, and competitive analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Define Phase */}
                <div className="pl-6 border-l-2 border-forest-dark/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest-dark text-white flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-softblack mb-2">Define</h4>
                      <p className="text-softblack/60 font-body text-sm leading-relaxed">
                        Synthesize findings, identify key problems, define user needs, and establish clear design objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Diamond - Deliver the Solution */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-forest-dark/5 rounded-full text-forest-dark font-body text-sm font-medium mb-4">
                    Second Diamond
                  </div>
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-softblack mb-2">
                    Deliver the Solution
                  </h3>
                </div>

                {/* Develop Phase */}
                <div className="pl-6 border-l-2 border-forest-dark/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest-dark text-white flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-softblack mb-2">Develop</h4>
                      <p className="text-softblack/60 font-body text-sm leading-relaxed">
                        Ideate multiple solutions, create prototypes, explore different approaches, and test concepts with users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deliver Phase */}
                <div className="pl-6 border-l-2 border-forest-dark/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest-dark text-white flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-softblack mb-2">Deliver</h4>
                      <p className="text-softblack/60 font-body text-sm leading-relaxed">
                        Refine the final solution, validate with testing, prepare for launch, and ensure successful implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section ref={resultsRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <p className="reveal text-softblack/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4 opacity-0">Results</p>
            <h2 className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-softblack mb-4 opacity-0">
              Measurable <span className="font-serif italic font-normal text-softblack/60">Business Impact</span>
            </h2>
            <p className="reveal text-softblack/60 font-body text-base md:text-lg opacity-0">Within 90 days</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="reveal text-center opacity-0">
                <div className="mb-3 md:mb-4">
                  <span 
                    className="counter text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-forest-dark"
                    data-value={result.value.replace(/[^0-9]/g, '')}
                    data-suffix={result.value.replace(/[0-9]/g, '')}
                  >
                    {result.value}
                  </span>
                </div>
                <p className="text-softblack font-sans font-medium mb-1 md:mb-2 text-sm md:text-base">{result.metric}</p>
                <p className="text-softblack/60 font-body text-xs md:text-sm">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <p className="reveal text-softblack/70 font-body text-lg md:text-xl italic opacity-0">
              This redesign directly improved pipeline quality and inbound velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      {caseStudy.takeaways && caseStudy.takeaways.length > 0 && (
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-forest-dark">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mb-12 md:mb-16">
              <p className="text-white/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4">Learnings</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white leading-tight mb-4 md:mb-6">
                Strategic <span className="font-serif italic font-normal text-white/80">Learnings</span>
              </h2>
            </div>

            <div className="relative">
              {caseStudy.takeaways.map((takeaway, index) => (
                <div 
                  key={index} 
                  className="sticky"
                  style={{
                    top: `${80 + index * 20}px`,
                  }}
                >
                  <div 
                    className="group relative mb-6 transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-forest-dark via-forest-dark to-[#012d28] rounded-2xl overflow-hidden"
                    style={{
                      transform: `scale(${1 - index * 0.015})`,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    
                    {/* Subtle noise texture overlay */}
                    <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                    
                    {/* Card content */}
                    <div className="relative p-8 md:p-10">
                      <div className="flex items-start gap-6">
                        {/* Premium number badge */}
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-sans text-base font-bold transition-all duration-500 group-hover:scale-110 bg-gradient-to-br from-white/20 to-white/10 text-white backdrop-blur-sm border border-white/20" style={{
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)',
                          }}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-white/30" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg md:text-xl font-sans font-bold mb-3 transition-colors duration-300 text-white">
                            {takeaway.title}
                          </h4>
                          <p className="font-body text-sm md:text-base leading-relaxed text-white/80">
                            {takeaway.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Reflection Section */}
      {caseStudy.reflection && (
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-softblack/50 text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4">Conclusion</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-softblack leading-tight mb-8 md:mb-12">
                Final <span className="font-serif italic font-normal text-softblack/60">Reflection</span>
              </h2>
              
              {caseStudy.reflection.split('\n\n').map((paragraph, idx) => {
                // Check if paragraph contains bullet points
                if (paragraph.includes('\n•')) {
                  const [intro, ...items] = paragraph.split('\n•');
                  return (
                    <div key={idx} className="mb-8 last:mb-0">
                      {intro && intro.trim() && (
                        <p className="text-softblack/80 font-body text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                          {intro.trim()}
                        </p>
                      )}
                      <ul className="space-y-3 mb-6">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-4 text-softblack/80 font-body text-base md:text-lg leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-forest-dark/60"></span>
                            <span className="flex-1">{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-softblack/80 font-body text-base md:text-lg lg:text-xl leading-relaxed mb-6 last:mb-0 italic">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section ref={galleryRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-forest-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="reveal text-xs sm:text-sm font-body uppercase tracking-widest mb-3 md:mb-4 opacity-0 text-white/50">Gallery</p>
            <h2 className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold opacity-0 text-white">
              Final <span className="font-serif italic font-normal text-white/80">Designs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {caseStudy.gallery.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item group relative opacity-0 cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden bg-forest-light/20 shadow-2xl group-hover:shadow-white/10 transition-shadow duration-500">
                  {/* Image with parallax and zoom effect */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      style={{
                        willChange: 'transform'
                      }}
                    />
                  </div>
                  
                  {/* Overlay with gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption overlay on hover */}
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-body text-sm md:text-base font-medium">
                        {image.caption}
                      </p>
                    </div>
                  )}
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Visit Live Site */}
      {caseStudy.liveUrl && (
        <section ref={ctaRef} className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 overflow-hidden bg-white">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
          
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-dark/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-dark/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-dark/5 backdrop-blur-sm border border-forest-dark/10 mb-8 opacity-0">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-softblack/80 font-body text-sm font-medium">Live Project</span>
            </div>
            
            {/* Heading */}
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack leading-tight mb-6 md:mb-8 opacity-0">
              Experience the
              <br />
              <span className="font-serif italic font-normal text-softblack/60">Redesigned Platform</span>
            </h2>
            
            {/* Description */}
            <p className="reveal text-softblack/70 font-body text-lg md:text-xl leading-relaxed mb-10 md:mb-12 opacity-0 max-w-3xl mx-auto">
              See how strategic design decisions and AI-accelerated prototyping transformed a static brochure into a high-converting business development engine.
            </p>
            
            {/* CTA Button */}
            <div className="reveal opacity-0">
              <a 
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-forest-dark text-white font-sans font-bold text-base md:text-lg hover:bg-forest-mid transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-dark focus:ring-offset-2 rounded-full shadow-2xl hover:shadow-forest-dark/30 hover:scale-105"
              >
                Visit Live Site
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section - Fallback if no live URL */}
      {!caseStudy.liveUrl && caseStudy.testimonial && (
        <section ref={testimonialRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal mb-6 md:mb-8 opacity-0">
              <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-softblack/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="reveal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-6 md:mb-8 opacity-0 px-4 text-softblack">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="reveal opacity-0">
              <p className="font-sans font-medium text-base md:text-lg text-softblack">{caseStudy.testimonial.author}</p>
              <p className="font-body text-xs md:text-sm text-softblack/50">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Section */}
      {caseStudy.nextProject && (
        <section ref={nextProjectRef} className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 bg-forest-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div className="reveal opacity-0">
                <p className="text-white/50 text-xs font-body uppercase tracking-widest mb-3 md:mb-4">Next Project</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white mb-2">
                  {caseStudy.nextProject.title}
                </h3>
                <p className="text-white/60 font-body text-xs md:text-sm">Explore this case study</p>
              </div>
              
              <Link 
                to={`/case-study/${caseStudy.nextProject.id}`}
                className="reveal group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-forest-dark font-sans font-semibold text-sm md:text-base hover:bg-offwhite transition-all duration-300 opacity-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark"
              >
                View Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Simple Footer */}
      <footer className="relative py-12 px-6 md:px-12 bg-forest-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 font-body text-sm">
            © 2024 {heroConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white/40 hover:text-white font-body text-sm transition-colors duration-300">
              Home
            </Link>
            <Link to="/#work" className="text-white/40 hover:text-white font-body text-sm transition-colors duration-300">
              Work
            </Link>
            <a href="mailto:otienoconrad58@gmail.com" className="text-white/40 hover:text-white font-body text-sm transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

