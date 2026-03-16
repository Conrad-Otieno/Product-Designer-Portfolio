import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

      // Form — fade up
      ScrollTrigger.create({
        trigger: formRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            formRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xgonnowa', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        const json = await response.json().catch(() => ({}));
        console.error('Formspree error:', json);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <header ref={headerRef} className="lg:sticky lg:top-32">
            <p className="text-softblack/50 text-xs font-body uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </p>
            <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack tracking-tight leading-[1.05] mb-6">
              Let's Create{' '}
              <span className="font-serif italic font-normal text-softblack/60">
                Something Great
              </span>
            </h2>
            <p className="text-softblack/60 font-body text-lg leading-relaxed">
              Ready to bring your vision to life? Share your project details and I'll get back to you within 24 hours.
            </p>
          </header>

          {/* Right Column - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-softblack/50 font-body text-xs uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-softblack/20 text-softblack placeholder-softblack/30 font-body text-base focus:outline-none focus:border-softblack transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-softblack/50 font-body text-xs uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-softblack/20 text-softblack placeholder-softblack/30 font-body text-base focus:outline-none focus:border-softblack transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-softblack/50 font-body text-xs uppercase tracking-wider mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-softblack/20 text-softblack placeholder-softblack/30 font-body text-base focus:outline-none focus:border-softblack transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-softblack/50 font-body text-xs uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-softblack/20 text-softblack placeholder-softblack/30 font-body text-base focus:outline-none focus:border-softblack transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="group relative inline-flex items-center gap-3 px-12 py-4 bg-forest-dark text-white/80 hover:text-white font-sans font-semibold text-base overflow-hidden transition-all duration-300 hover:px-16 focus:outline-none focus:ring-2 focus:ring-forest-dark focus:ring-offset-4 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                  </span>
                  {formStatus === 'idle' && (
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                  )}
                  {formStatus === 'sending' && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
                  )}
                  {formStatus === 'success' && (
                    <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-forest-mid transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </button>
              </div>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="p-4 border-l-4 border-green-600 bg-green-50">
                  <p className="text-green-800 font-body text-sm">
                    Thank you! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="p-4 border-l-4 border-red-600 bg-red-50">
                  <p className="text-red-800 font-body text-sm">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
