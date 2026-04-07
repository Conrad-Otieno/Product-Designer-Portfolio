import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Diamond, Users, Sparkles, type LucideIcon } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Diamond,
  Users,
  Sparkles,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!servicesConfig.titleLine1 && servicesConfig.services.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — slide up
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Service cards — staggered slide up
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Heading */}
          <div ref={headingRef} className="opacity-0">
            {servicesConfig.subtitle && (
              <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
                {servicesConfig.subtitle}
              </p>
            )}
            <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack tracking-tight leading-tight">
              {servicesConfig.titleLine1}
              <br />
              <span className="font-serif italic font-normal text-softblack/70">
                {servicesConfig.titleLine2Italic}
              </span>
            </h2>
            {servicesConfig.description && (
              <p className="mt-6 text-softblack/60 font-body text-base md:text-lg max-w-md leading-relaxed">
                {servicesConfig.description}
              </p>
            )}
          </div>

          {/* Right Column - Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E8E8E8]" role="list">
            {servicesConfig.services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Camera;
              return (
                <article
                  key={index}
                  className="service-card group bg-white p-6 md:p-8 opacity-0 transition-all duration-300 hover:bg-[#F5F5F5] cursor-default"
                  role="listitem"
                >
                  <div className="mb-5" aria-hidden="true">
                    <Icon className="w-7 h-7 text-[#111111]/40 group-hover:text-[#111111] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-sans font-semibold text-[#111111] mb-2 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#111111]/50 font-body leading-relaxed group-hover:text-[#111111]/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E8E8E8]" aria-hidden="true" />
    </section>
  );
}
