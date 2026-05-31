import { Link } from 'react-router-dom';

export default function Logo({ className = '', showTagline = false, size = 'md' }) {
  const iconSize = size === 'lg' ? 52 : size === 'sm' ? 30 : 40;
  const wmWidth = size === 'lg' ? 130 : size === 'sm' ? 75 : 100;
  const wmHeight = size === 'lg' ? 36 : size === 'sm' ? 20 : 28;

  return (
    <Link to="/" className={`logo ${className}`} aria-label="AXCIS Home" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
      {/* Icon mark — black rounded square with white axis burst */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <filter id="logo-glow-nb" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Rounded square background */}
        <rect x="2" y="2" width="96" height="96" rx="20" ry="20" fill="#0a0a0a" stroke="rgba(0,180,255,0.25)" strokeWidth="1.5" />
        {/* Top vertical */}
        <line x1="50" y1="18" x2="50" y2="36" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Bottom vertical */}
        <line x1="50" y1="64" x2="50" y2="82" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Left horizontal */}
        <line x1="18" y1="50" x2="36" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Right horizontal */}
        <line x1="64" y1="50" x2="82" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Top-left diagonal */}
        <line x1="25" y1="25" x2="38" y2="38" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Bottom-right diagonal */}
        <line x1="62" y1="62" x2="75" y2="75" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Top-right diagonal */}
        <line x1="75" y1="25" x2="62" y2="38" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Bottom-left diagonal */}
        <line x1="25" y1="75" x2="38" y2="62" stroke="white" strokeWidth="6" strokeLinecap="round" />
        {/* Center dot — subtle cyan glow */}
        <circle cx="50" cy="50" r="4" fill="#00c8ff" filter="url(#logo-glow-nb)" />
      </svg>

      {/* Wordmark */}
      <svg
        width={wmWidth}
        height={wmHeight}
        viewBox="0 0 130 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wm-grad-nb" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#C8CDD8" />
            <stop offset="100%" stopColor="#8A909E" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="28"
          fill="url(#wm-grad-nb)"
          fontSize="32"
          fontWeight="800"
          fontFamily="'Outfit', 'Inter', sans-serif"
          letterSpacing="5"
        >
          AXCIS
        </text>
      </svg>

      {showTagline && (
        <span style={{ fontSize: '0.7rem', color: 'rgba(0,200,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
          UK Registered
        </span>
      )}
    </Link>
  );
}
