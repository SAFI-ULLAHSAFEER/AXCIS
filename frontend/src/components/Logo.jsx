import { Link } from 'react-router-dom';

export default function Logo({ className = '', showTagline = false }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="AXCIS Home">
      <img src="/axcis-logo-dark.svg" alt="AXCIS" className="logo__img" />
      {showTagline && <span className="logo__tagline">UK Registered</span>}
    </Link>
  );
}
