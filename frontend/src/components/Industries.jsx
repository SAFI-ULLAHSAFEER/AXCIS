import { Link } from 'react-router-dom';

const INDUSTRIES = [
  { name: 'Network & Communication', color: '#0066ff' },
  { name: 'Data Centre', color: '#00f0ff' },
  { name: 'Enterprise', color: '#4f46e5' },
  { name: 'Finance & Banking', color: '#0066ff' },
  { name: 'Technology', color: '#00f0ff' },
  { name: 'Manufacturing', color: '#4f46e5' },
  { name: 'Retail', color: '#0066ff' },
  { name: 'Energy & Utilities', color: '#00f0ff' },
];

export default function Industries() {
  return (
    <section className="section-padding industries" id="industries">
      <div className="container">
        <div className="section-header">
          <span className="tag">Industries</span>
          <h2>Sectors We Power</h2>
          <p>From hyperscale datacenters to retail branches — AXCIS delivers field and managed IT across every critical industry.</p>
        </div>

        <div className="industries__track">
          <div className="industries__marquee">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div key={`${ind.name}-${i}`} className="industries__pill" style={{ '--pill-color': ind.color }}>
                <span className="industries__dot" />
                {ind.name}
              </div>
            ))}
          </div>
        </div>

        <div className="industries__grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="industries__card glass-panel">
              <div className="industries__card-accent" style={{ background: ind.color }} />
              <h3>{ind.name}</h3>
              <Link to="/contact" className="industries__cta">Get Support →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
