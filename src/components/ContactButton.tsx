import { ArrowUpRight, Send, type LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  label?: string;
  icon?: 'arrow' | 'send';
  status?: 'idle' | 'sending' | 'success' | 'error';
}

export function ContactButton({
  href,
  onClick,
  type = 'button',
  disabled = false,
  label = 'Contact Me',
  icon = 'arrow',
  status = 'idle',
}: ContactButtonProps) {
  const displayLabel =
    status === 'sending' ? 'Sending...' :
    status === 'success' ? 'Message Sent!' :
    label;

  const Icon: LucideIcon = icon === 'send' ? Send : ArrowUpRight;

  const classes =
    'group relative inline-flex items-center gap-3 px-12 py-4 bg-forest-dark text-white/80 hover:text-white font-sans font-semibold text-base overflow-hidden transition-all duration-300 hover:px-16 focus:outline-none focus:ring-2 focus:ring-forest-dark focus:ring-offset-4 disabled:opacity-50 disabled:cursor-not-allowed';

  const inner = (
    <>
      <span className="relative z-10">{displayLabel}</span>
      {status === 'idle' && (
        <Icon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      )}
      {status === 'sending' && (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
      )}
      {status === 'success' && (
        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
      <div className="absolute inset-0 bg-forest-mid transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}
