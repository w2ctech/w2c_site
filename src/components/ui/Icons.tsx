import type { SVGProps } from "react";

export function Arrow({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={`arr transition-transform group-hover:translate-x-[3px] ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Spark({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M8 1.5c.3 2.7 1.8 4.2 4.5 4.5C9.8 6.3 8.3 7.8 8 10.5 7.7 7.8 6.2 6.3 3.5 6 6.2 5.7 7.7 4.2 8 1.5Z" fill="currentColor"/>
      <path d="M13 9.5c.15 1.35.9 2.1 2.25 2.25C13.9 11.9 13.15 12.65 13 14c-.15-1.35-.9-2.1-2.25-2.25C12.1 11.6 12.85 10.85 13 9.5Z" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

export function Moon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}
