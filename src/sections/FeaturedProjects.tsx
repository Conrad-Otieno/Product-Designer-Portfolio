import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjectsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!featuredProjectsConfig.titleRegular && featuredProjectsConfig.projects.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(cards,
              { y: 60, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 }
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
      id="projects"
      className="relative w-full py-24 md:py-32 bg-forest-dark"
      aria-labelledby="featured-projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Centered heading — reference style */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14 md:mb-20 opacity-0">
          {featuredProjectsConfig.subtitle && (
            <p className="text-white/40 text-xs font-body uppercase tracking-[0.2em] mb-4">
              {featuredProjectsConfig.subtitle}
            </p>
          )}
          <h2 id="featured-projects-heading" className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight mb-4">
            {featuredProjectsConfig.titleRegular}{' '}
            <span className="font-serif italic font-normal text-white/60">
              {featuredProjectsConfig.titleItalic}
            </span>
          </h2>
          <p className="text-white/50 font-body text-base md:text-lg leading-relaxed">
            A selection of projects where research, strategy, and design came together to create real impact.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" role="list">
          {featuredProjectsConfig.projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className={`project-card group relative rounded-2xl overflow-hidden opacity-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark ${
                index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
              role="listitem"
              aria-label={`View case study: ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/60 font-body text-xs">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-white/60 font-body text-xs">{project.year}</span>
                </div>
                <h3 className="text-white font-sans font-bold text-lg md:text-xl leading-tight mb-3">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-white/70 group-hover:text-white font-body text-xs transition-colors duration-300">
                  {featuredProjectsConfig.viewProjectText}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
