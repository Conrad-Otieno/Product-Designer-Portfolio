import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Twitter, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!footerConfig.logoText && !footerConfig.email && footerConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo — scale up + fade
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Content — fade up
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-forest-dark pt-24 md:pt-32 lg:pt-40 pb-12 overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Footer Content */}
        <div ref={contentRef} className="opacity-0">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Contact Info */}
            <div>
              {footerConfig.contactLabel && (
                <h3 className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
                  {footerConfig.contactLabel}
                </h3>
              )}
              <p className="text-white/70 font-body text-base mb-4">
                Click the mail icon to send me a message
              </p>
              {footerConfig.locationText && (
                <p className="mt-4 text-white/60 font-body text-sm whitespace-pre-line">
                  {footerConfig.locationText}
                </p>
              )}
            </div>

            {/* Navigation */}
            {footerConfig.navLinks.length > 0 && (
              <div>
                {footerConfig.navigationLabel && (
                  <h3 className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
                    {footerConfig.navigationLabel}
                  </h3>
                )}
                <nav aria-label="Footer navigation">
                  <ul className="space-y-3">
                    {footerConfig.navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block text-white/70 hover:text-white font-body transition-colors duration-300 focus:outline-none rounded"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Social Links */}
            <div>
              {footerConfig.socialLabel && (
                <h3 className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
                  {footerConfig.socialLabel}
                </h3>
              )}
              {footerConfig.socialLinks.length > 0 && (
                <ul className="flex items-center gap-4" role="list">
                  {footerConfig.socialLinks.map((social) => {
                    const Icon = iconMap[social.iconName] || Mail;
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-forest-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark"
                        >
                          <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
              {footerConfig.tagline && (
                <p className="mt-6 text-white/40 font-body text-sm whitespace-pre-line">
                  {footerConfig.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-body text-sm">
              {footerConfig.copyright || `© ${new Date().getFullYear()} All rights reserved.`}
            </p>
            {footerConfig.bottomLinks.length > 0 && (
              <nav aria-label="Legal navigation">
                <ul className="flex items-center gap-6 text-white/40 font-body text-sm">
                  {footerConfig.bottomLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark rounded"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
