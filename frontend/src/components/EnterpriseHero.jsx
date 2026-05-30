import { Link } from 'react-router-dom';
import { ArrowRight } from '../icons';
import { HERO } from '../constants/homepage';

function ArchitectureDiagram() {
  return (
    <svg className="hero-enterprise__diagram" viewBox="0 0 480 400" fill="none" aria-hidden="true">
      <rect x="180" y="160" width="120" height="80" rx="4" fill="#F7F8FA" stroke="#DDE1E6" strokeWidth="1.5"/>
      <text x="240" y="195" textAnchor="middle" fill="#0B1426" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">AXCIS Platform</text>
      <text x="240" y="212" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Inter, sans-serif">Central Axis</text>

      {[
        { x: 60, y: 60, label: 'Cloud', sub: 'AWS · Azure · GCP' },
        { x: 340, y: 60, label: 'AI & Data', sub: 'ML · Analytics' },
        { x: 60, y: 300, label: 'Security', sub: 'Zero Trust · SOC' },
        { x: 340, y: 300, label: 'DevOps', sub: 'K8s · CI/CD' },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width="100" height="56" rx="4" fill="#FFFFFF" stroke="#DDE1E6" strokeWidth="1.5"/>
          <text x={node.x + 50} y={node.y + 24} textAnchor="middle" fill="#0B1426" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{node.label}</text>
          <text x={node.x + 50} y={node.y + 40} textAnchor="middle" fill="#6B7280" fontSize="8" fontFamily="Inter, sans-serif">{node.sub}</text>
        </g>
      ))}

      <line x1="160" y1="88" x2="210" y2="165" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
      <line x1="320" y1="88" x2="270" y2="165" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
      <line x1="160" y1="328" x2="210" y2="240" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
      <line x1="320" y1="328" x2="270" y2="240" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>

      <rect x="155" y="12" width="170" height="28" rx="4" fill="#0B1426"/>
      <text x="240" y="30" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif">Enterprise Applications</text>

      <rect x="155" y="360" width="170" height="28" rx="4" fill="#EEF0F3" stroke="#DDE1E6" strokeWidth="1"/>
      <text x="240" y="378" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif">Business Outcomes &amp; SLAs</text>
    </svg>
  );
}

export default function EnterpriseHero() {
  return (
    <section className="hero-enterprise">
      <div className="container hero-enterprise__inner">
        <div className="hero-enterprise__content">
          <p className="eyebrow">Enterprise Technology</p>
          <h1>{HERO.headline}</h1>
          <p className="hero-enterprise__sub">{HERO.subheadline}</p>
          <div className="hero-enterprise__actions">
            <Link to={HERO.primaryCta.to} className="btn-primary">
              {HERO.primaryCta.label} <ArrowRight />
            </Link>
            <Link to={HERO.secondaryCta.to} className="btn-secondary">
              {HERO.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="hero-enterprise__visual">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
