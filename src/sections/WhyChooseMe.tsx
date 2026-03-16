import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseMeConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const wideRef = useRef<HTMLDivElement>(null);

  if (!whyChooseMeConfig.titleRegular && whyChooseMeConfig.stats.length === 0 && whyChooseMeConfig.featureCards.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header — slide up
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

      // Feature cards with images — clip-path reveal + inner scale
      const imageCards = cardsRef.current?.querySelectorAll('.feature-card-image');
      if (imageCards) {
        imageCards.forEach((card, i) => {
          const img = card.querySelector('img');

          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.set(card, { opacity: 1 });
              gsap.fromTo(
                card,
                { clipPath: 'inset(100% 0 0 0)' },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.2,
                  ease: 'power4.inOut',
                  delay: i * 0.15,
                }
              );
              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1.35 },
                  { scale: 1.1, duration: 1.6, ease: 'power3.out', delay: i * 0.15 }
                );
              }
            },
            once: true,
          });

          // Parallax on card images
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -4 },
              {
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.5,
                },
              }
            );
          }
        });
      }

      // Stats card — slide up + fade
      const statsCard = cardsRef.current?.querySelector('.feature-card-stats');
      if (statsCard) {
        ScrollTrigger.create({
          trigger: statsCard,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              statsCard,
              { y: 80, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            );
          },
          once: true,
        });
      }

      // Stats counter trigger
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 75%',
        onEnter: () => {
          // Stats animation handled by GSAP
        },
        once: true,
      });

      // Wide landscape — clip-path expand from center + inner scale + parallax
      const wideWrap = wideRef.current;
      const wideImg = wideWrap?.querySelector('img');
      if (wideWrap) {
        ScrollTrigger.create({
          trigger: wideWrap,
          start: 'top 82%',
          onEnter: () => {
            gsap.set(wideWrap, { opacity: 1 });
            gsap.fromTo(
              wideWrap,
              { clipPath: 'inset(15% 5% 15% 5%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.4,
                ease: 'power4.inOut',
              }
            );
            if (wideImg) {
              gsap.fromTo(
                wideImg,
                { scale: 1.25 },
                { scale: 1.08, duration: 1.8, ease: 'power3.out' }
              );
            }
          },
          once: true,
        });

        // Wide image parallax
        if (wideImg) {
          gsap.fromTo(
            wideImg,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: 'none',
              scrollTrigger: {
                trigger: wideWrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          );
        }
      }

      // Text overlay on wide image — fade up
      const wideText = wideWrap?.querySelector('.wide-text-overlay');
      if (wideText) {
        ScrollTrigger.create({
          trigger: wideWrap,
          start: 'top 70%',
          onEnter: () => {
            gsap.fromTo(
              wideText,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.6 }
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
      id="about"
      className="relative w-full py-24 md:py-32 bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <header ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          {whyChooseMeConfig.subtitle && (
            <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
              {whyChooseMeConfig.subtitle}
            </p>
          )}
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-softblack tracking-tight">
            {whyChooseMeConfig.titleRegular} <span className="font-serif italic font-normal">{whyChooseMeConfig.titleItalic}</span>
          </h2>
        </header>

        {/* Three Cards Row */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Feature Cards with Images */}
          {whyChooseMeConfig.featureCards.map((card, index) => (
            <article key={index} className="feature-card-image opacity-0 group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-forest-dark">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white/90 font-sans font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wide Landscape Image */}
        {whyChooseMeConfig.wideImage && (
          <figure ref={wideRef} className="mt-16 md:mt-24 relative rounded-lg overflow-hidden group opacity-0">
            <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
              <img
                src={whyChooseMeConfig.wideImage}
                alt={whyChooseMeConfig.wideImageAlt}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/60 via-transparent to-transparent" aria-hidden="true" />
            {(whyChooseMeConfig.wideTitle || whyChooseMeConfig.wideDescription) && (
              <figcaption className="wide-text-overlay absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-md opacity-0">
                {whyChooseMeConfig.wideTitle && (
                  <h3 className="text-white/90 font-sans font-bold text-2xl md:text-3xl mb-3">
                    {whyChooseMeConfig.wideTitle}
                  </h3>
                )}
                {whyChooseMeConfig.wideDescription && (
                  <p className="text-white/70 font-body text-sm md:text-base">
                    {whyChooseMeConfig.wideDescription}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
