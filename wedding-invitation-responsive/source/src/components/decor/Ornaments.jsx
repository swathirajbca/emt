import React from "react";

// A collection of hand-built SVG motifs used across the invitation.
// All are pure vector so they stay crisp on every screen.

export const OmSymbol = ({ className = "", ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <path
      d="M30 42c-6 0-11 5-11 12s5 12 12 12c8 0 13-6 13-15 0-6-3-11-8-13 3-1 6-1 9 1 2 1 3 3 3 6h6c0-6-4-11-10-12-5-1-9 1-12 3 1-5 5-8 10-9l-1-6c-9 1-16 8-16 18 0 2 0 3 1 5-1-1-2-1-3-1z"
      fill="currentColor"
    />
    <path d="M60 40c0-6 5-10 11-10s11 4 11 11c0 6-4 10-9 12l-2-5c3-1 5-3 5-7 0-3-2-5-5-5s-5 2-5 5h-6z" fill="currentColor" />
    <circle cx="70" cy="24" r="3.4" fill="currentColor" />
    <path d="M62 20c4-4 11-4 15 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const LotusMark = ({ className = "", ...props }) => (
  <svg viewBox="0 0 120 80" className={className} fill="none" {...props}>
    <path d="M60 8c6 12 6 30 0 46-6-16-6-34 0-46z" fill="currentColor" opacity="0.9" />
    <path d="M60 20c14 8 22 24 22 40-16-6-26-22-22-40z" fill="currentColor" opacity="0.7" />
    <path d="M60 20c-14 8-22 24-22 40 16-6 26-22 22-40z" fill="currentColor" opacity="0.7" />
    <path d="M60 30c22 2 38 14 46 30-20 2-40-8-46-30z" fill="currentColor" opacity="0.5" />
    <path d="M60 30c-22 2-38 14-46 30 20 2 40-8 46-30z" fill="currentColor" opacity="0.5" />
  </svg>
);

export const FluteMotif = ({ className = "", ...props }) => (
  <svg viewBox="0 0 200 40" className={className} fill="none" {...props}>
    <rect x="6" y="16" width="188" height="8" rx="4" fill="currentColor" />
    <circle cx="150" cy="20" r="2.2" fill="#FDFBF7" />
    <circle cx="132" cy="20" r="2.2" fill="#FDFBF7" />
    <circle cx="114" cy="20" r="2.2" fill="#FDFBF7" />
    <circle cx="96" cy="20" r="2.2" fill="#FDFBF7" />
    <circle cx="78" cy="20" r="2.2" fill="#FDFBF7" />
    <path d="M188 14c8 0 8 12 0 12" stroke="currentColor" strokeWidth="3" />
  </svg>
);

export const PeacockFeather = ({ className = "", ...props }) => (
  <svg viewBox="0 0 60 200" className={className} fill="none" {...props}>
    <path d="M30 200V70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="30" cy="46" rx="26" ry="44" fill="url(#pf1)" />
    <ellipse cx="30" cy="52" rx="16" ry="26" fill="#1E6E63" opacity="0.85" />
    <ellipse cx="30" cy="56" rx="9" ry="15" fill="#0E3B57" />
    <ellipse cx="30" cy="58" rx="4.5" ry="8" fill="#6B1D2F" />
    <defs>
      <radialGradient id="pf1" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#3FA796" />
        <stop offset="70%" stopColor="#1E6E63" />
        <stop offset="100%" stopColor="#0E3B57" />
      </radialGradient>
    </defs>
  </svg>
);

export const DiyaFlame = ({ className = "", ...props }) => (
  <svg viewBox="0 0 40 56" className={className} fill="none" {...props}>
    <path
      d="M20 2c1 8-5 10-5 18a5 5 0 0010 0c0-6-3-8-2-14 4 3 6 8 6 14a9 9 0 01-18 0c0-9 6-11 9-18z"
      fill="url(#flame)"
    />
    <path d="M4 40c4 6 28 6 32 0-2 8-30 8-32 0z" fill="#A9821F" />
    <path d="M2 40c0-2 4-4 18-4s18 2 18 4-8 5-18 5S2 42 2 40z" fill="#D4AF37" />
    <defs>
      <linearGradient id="flame" x1="20" y1="2" x2="20" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE39A" />
        <stop offset="0.5" stopColor="#F5A623" />
        <stop offset="1" stopColor="#E86A17" />
      </linearGradient>
    </defs>
  </svg>
);

export const KolamDivider = ({ className = "", ...props }) => (
  <svg viewBox="0 0 400 40" className={className} fill="none" {...props}>
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 20h150" />
      <path d="M240 20h150" />
      <circle cx="200" cy="20" r="10" fill="none" />
      <path d="M200 6c8 0 14 6 14 14M200 34c-8 0-14-6-14-14" />
      <path d="M175 20c0-6 5-9 9-6M225 20c0 6-5 9-9 6" />
      <circle cx="164" cy="20" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="236" cy="20" r="2.5" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

export const CornerKolam = ({ className = "", ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <g stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M4 4c30 0 46 16 46 46" />
      <path d="M4 20c22 0 30 8 30 30" />
      <path d="M20 4c22 0 30 8 30 30" />
      <circle cx="10" cy="10" r="3" />
      <path d="M4 40c8 0 12 4 12 12M40 4c8 0 12 4 12 12" />
    </g>
  </svg>
);

export const ArchFrame = ({ className = "", children }) => (
  <div className={`relative ${className}`}>{children}</div>
);
