import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  if (!faqConfig.titleRegular && faqConfig.faqs.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header — slide up
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Accordion items — staggered slide up
      ScrollTrigger.create({
        trigger: accordionRef.current,
        start: 'top 80%',
        onEnter: () => {
          const items = accordionRef.current?.querySelectorAll('[data-faq-item]');
          if (items) {
            gsap.fromTo(
              items,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.08,
              }
            );
          }
        },
        once: true,
      });

      // CTA — fade up
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 90%',
        onEnter: () => {
          gsap.fromTo(
            ctaRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-white overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <header ref={headerRef} className="mb-16 md:mb-24 opacity-0">
          <div className="max-w-3xl mx-auto text-center">
            {faqConfig.subtitle && (
              <p className="text-softblack/40 text-xs md:text-sm font-body uppercase tracking-[0.2em] mb-6">
                {faqConfig.subtitle}
              </p>
            )}
            <h2 id="faq-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-softblack tracking-tight leading-[1.1] mb-6">
              {faqConfig.titleRegular}{' '}
              <span className="font-serif italic font-normal text-softblack/50">
                {faqConfig.titleItalic}
              </span>
            </h2>
            <div className="w-16 h-px bg-softblack/10 mx-auto" aria-hidden="true" />
          </div>
        </header>

        {/* FAQ Accordion - Premium Design */}
        <div ref={accordionRef} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-1">
            {faqConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-faq-item
                className="opacity-0 border-0 group"
              >
                <AccordionTrigger className="w-full text-left py-8 hover:no-underline transition-all duration-300 group focus:outline-none focus:ring-0 border-b border-softblack/10 hover:border-softblack/20 data-[state=open]:border-softblack/30">
                  <div className="flex items-start gap-6 w-full pr-4">
                    <span className="text-softblack/30 font-sans font-medium text-sm md:text-base tracking-tight flex-shrink-0 mt-1 group-hover:text-softblack/50 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-sans font-semibold text-softblack text-lg md:text-xl lg:text-2xl tracking-tight leading-tight group-hover:text-softblack transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-softblack/20 flex items-center justify-center group-hover:border-softblack group-hover:bg-softblack transition-all duration-300 mt-1">
                      <Plus 
                        className="w-4 h-4 md:w-5 md:h-5 text-softblack/50 group-hover:text-white transition-all duration-300 group-data-[state=open]:rotate-45" 
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-8 pl-[52px] md:pl-[68px] pr-16">
                  <p className="text-softblack/50 font-body text-base md:text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        {(faqConfig.ctaText || faqConfig.ctaButtonText) && (
          <div ref={ctaRef} className="mt-20 md:mt-28 text-center opacity-0">
            <div className="max-w-2xl mx-auto">
              {faqConfig.ctaText && (
                <p className="text-softblack/50 font-body text-base md:text-lg mb-8 leading-relaxed">
                  {faqConfig.ctaText}
                </p>
              )}
              {faqConfig.ctaButtonText && (
                <a
                  href={faqConfig.ctaHref || '#contact'}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-sans font-semibold text-sm rounded-full hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-4 group"
                >
                  {faqConfig.ctaButtonText}
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
