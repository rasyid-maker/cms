import React from 'react';

interface CMSLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

export const CMSLogo: React.FC<CMSLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'auto',
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', subtext: 'text-[9px]' },
    md: { icon: 42, text: 'text-xl', subtext: 'text-[10px]' },
    lg: { icon: 54, text: 'text-2xl', subtext: 'text-xs' },
    xl: { icon: 72, text: 'text-4xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Logo Emblem: Digital Document with Blue, Red & White Elements */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Outer glow filter definition */}
          <defs>
            <linearGradient id="blueDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1677FF" />
              <stop offset="50%" stopColor="#0B2D5C" />
              <stop offset="100%" stopColor="#071B3A" />
            </linearGradient>
            <linearGradient id="redAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D5E" />
              <stop offset="100%" stopColor="#E52535" />
            </linearGradient>
            <linearGradient id="lightShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
            </linearGradient>
            <filter id="shadowFilter" x="-10%" y="-10%" width="125%" height="125%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.25" floodColor="#071B3A" />
            </filter>
          </defs>

          {/* Background Rounded Shield / Portal Badge */}
          <rect
            x="6"
            y="6"
            width="88"
            height="88"
            rx="22"
            fill="url(#blueDocGrad)"
            stroke="#1677FF"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />

          {/* Digital Document Base (White & Translucent Sheet with Folded Corner) */}
          <path
            d="M26 22 H62 L74 34 V74 C74 76.2 72.2 78 70 78 H26 C23.8 78 22 76.2 22 74 V26 C22 23.8 23.8 22 26 22 Z"
            fill="#FFFFFF"
            filter="url(#shadowFilter)"
          />

          {/* Folded Top-Right Corner of Document (Red Accent Visual) */}
          <path
            d="M62 22 L74 34 H64 C62.9 34 62 33.1 62 32 V22 Z"
            fill="url(#redAccentGrad)"
          />

          {/* Digital Network Nodes & Document Data Lines */}
          {/* Line 1 - Blue Primary */}
          <rect x="30" y="34" width="24" height="4" rx="2" fill="#0B2D5C" />
          {/* Line 2 - Light Gray */}
          <rect x="30" y="42" width="34" height="3" rx="1.5" fill="#94A3B8" />
          {/* Line 3 - Light Gray */}
          <rect x="30" y="49" width="30" height="3" rx="1.5" fill="#CBD5E1" />

          {/* Red Accent Checkmark & Community Node Badge at bottom right of document */}
          <circle cx="60" cy="62" r="14" fill="url(#redAccentGrad)" filter="url(#shadowFilter)" />
          {/* Digital checkmark / verified stamp */}
          <path
            d="M54 62.5 L58 66.5 L67 57.5"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Subtle Electric Blue Data Connectors / Tech Circuit Dot */}
          <circle cx="30" cy="64" r="2.5" fill="#1677FF" />
          <path d="M30 64 H42" stroke="#1677FF" strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="42" cy="64" r="2.5" fill="#1677FF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-extrabold tracking-tight ${currentSize.text} ${
                variant === 'dark'
                  ? 'text-[#071B3A]'
                  : variant === 'light'
                  ? 'text-white'
                  : 'text-white'
              }`}
            >
              CMS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52535]"></span>
          </div>
          <span
            className={`font-semibold tracking-wider uppercase ${currentSize.subtext} ${
              variant === 'dark'
                ? 'text-slate-600'
                : 'text-slate-300'
            }`}
          >
            Chepi Multi System
          </span>
        </div>
      )}
    </div>
  );
};
