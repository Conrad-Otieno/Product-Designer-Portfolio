import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';
import { asset } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

// Map each service to a case study image for the bento cards
const serviceImages = [
  asset('/case-study-1-hero.png'),
  asset('/case-study-2-hero.png'),
  asset('/case-study-3-hero.png'),
  asset('/case-study-2-homepage.png'),
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  if (!servicesConfig.titleLine1 && servicesConfig.services.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(headingRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      const cards = bentoRef.current?.querySelectorAll('.bento-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: bentoRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(cards,
              { y: 50, opacity: 0, scale: 0.96 },
              { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
            );
          },
          once: true,
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 md:py-32 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Centered heading — reference style */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-14 md:mb-20 opacity-0">
          {servicesConfig.subtitle && (
            <p className="text-softblack/40 text-xs font-body uppercase tracking-[0.2em] mb-4">
              {servicesConfig.subtitle}
            </p>
          )}
          <h2 id="services-heading" className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack tracking-tight leading-tight mb-4">
            {servicesConfig.titleLine1}{' '}
            <span className="font-serif italic font-normal text-softblack/60">
              {servicesConfig.titleLine2Italic}
            </span>
          </h2>
          {servicesConfig.description && (
            <p className="text-softblack/50 font-body text-base md:text-lg leading-relaxed">
              {servicesConfig.description}
            </p>
          )}
        </div>

        {/* Bento Grid — reference layout */}
        <div ref={bentoRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" role="list">

          {/* Card 1 — large, spans 2 cols on md */}
          <article
            className="bento-card col-span-2 md:col-span-2 relative rounded-2xl overflow-hidden opacity-0 group cursor-default"
            style={{ minHeight: '280px' }}
            role="listitem"
          >
            <img
              src={serviceImages[0]}
              alt={servicesConfig.services[0]?.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="text-white font-sans font-bold text-xl md:text-2xl mb-1">
                {servicesConfig.services[0]?.title}
              </h3>
              <p className="text-white/70 font-body text-sm leading-relaxed max-w-xs">
                {servicesConfig.services[0]?.description}
              </p>
            </div>
          </article>

          {/* Card 2 — single col */}
          <article
            className="bento-card col-span-1 relative rounded-2xl overflow-hidden opacity-0 group cursor-default bg-forest-dark/5"
            style={{ minHeight: '280px' }}
            role="listitem"
          >
            <img
              src={serviceImages[1]}
              alt={servicesConfig.services[1]?.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-forest-dark/10" />
            <div className="absolute bottom-0 left-0 p-5 md:p-6">
              <h3 className="text-white font-sans font-bold text-lg md:text-xl mb-1">
                {servicesConfig.services[1]?.title}
              </h3>
              <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed">
                {servicesConfig.services[1]?.description}
              </p>
            </div>
          </article>

          {/* Card 3 — single col */}
          <article
            className="bento-card col-span-1 relative rounded-2xl overflow-hidden opacity-0 group cursor-default"
            style={{ minHeight: '240px' }}
            role="listitem"
          >
            <img
              src={serviceImages[2]}
              alt={servicesConfig.services[2]?.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 md:p-6">
              <h3 className="text-white font-sans font-bold text-lg md:text-xl mb-1">
                {servicesConfig.services[2]?.title}
              </h3>
              <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed">
                {servicesConfig.services[2]?.description}
              </p>
            </div>
          </article>

          {/* Card 4 — spans 2 cols */}
          <article
            className="bento-card col-span-2 md:col-span-2 relative rounded-2xl overflow-hidden opacity-0 group cursor-default"
            style={{ minHeight: '240px' }}
            role="listitem"
          >
            <img
              src={serviceImages[3]}
              alt={servicesConfig.services[3]?.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="text-white font-sans font-bold text-xl md:text-2xl mb-1">
                {servicesConfig.services[3]?.title}
              </h3>
              <p className="text-white/70 font-body text-sm leading-relaxed max-w-xs">
                {servicesConfig.services[3]?.description}
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
