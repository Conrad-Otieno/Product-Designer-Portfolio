import { ArrowUpRight, Send, type LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  label?: string;
  icon?: 'arrow' | 'send';
  status?: 'idle' | 'sending' | 'success' | 'error';
  variant?: 'dark' | 'light'; // dark = white btn on dark bg, light = dark btn on light bg
}

export function ContactButton({
  href,
  onClick,
  type = 'button',
  disabled = false,
  label = 'Contact Me',
  icon = 'arrow',
  status = 'idle',
  variant = 'light',
}: ContactButtonProps) {
  const displayLabel =
    status === 'sending' ? 'Sending...' :
    status === 'success' ? 'Message Sent!' :
    label;

  const Icon: LucideIcon = icon === 'send' ? Send : ArrowUpRight;

  // dark variant: white button on dark background (hero)
  // light variant: dark button on light background (contact form)
  const classes = variant === 'dark'
    ? 'group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white text-forest-dark font-sans font-semibold text-sm rounded-full hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-dark disabled:opacity-50 disabled:cursor-not-allowed'
    : 'group relative inline-flex items-center gap-3 px-10 py-4 bg-forest-dark text-white font-sans font-semibold text-sm overflow-hidden transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-forest-dark focus:ring-offset-4 disabled:opacity-50 disabled:cursor-not-allowed';

  const inner = (
    <>
      <span className="relative z-10">{displayLabel}</span>
      {status === 'idle' && (
        <Icon className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
      )}
      {status === 'sending' && (
        <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin relative z-10" />
      )}
      {status === 'success' && (
        <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </>
  );

  if (href) {
    return <a href={href} className={classes}>{inner}</a>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}
