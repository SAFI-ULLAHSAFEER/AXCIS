import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../icons';

const REGIONS = [
  { name: 'EMEA', count: 13000, label: 'Engineers' },
  { name: 'APAC', count: 9000, label: 'Engineers' },
  { name: 'LATAM', count: 9500, label: 'Engineers' },
  { name: 'USA', count: 3300, label: 'Engineers' },
];

function useCountUp(target, active, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);

  return value;
}

function RegionStat({ region, active }) {
  const count = useCountUp(region.count, active);
  return (
    <div className="global__stat glass-panel">
      <span className="global__region">{region.name}</span>
      <strong>{count.toLocaleString()}+</strong>
      <small>{region.label}</small>
    </div>
  );
}

export default function GlobalCoverage() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding global" id="global" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Global Existence</span>
          <h2>Coverage Areas</h2>
          <p>
            Growing by leaps and bounds — continuously acquiring resources to meet new clients
            and extending our global reach. All field engineers vetted through our technical team.
          </p>
        </div>

        <div className="global__layout">
          <div className="global__map glass-panel">
            <svg viewBox="0 0 800 400" className="global__map-svg" aria-hidden="true">
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="800" height="400" fill="url(#mapGlow)" />
              {/* Simplified world regions */}
              <ellipse cx="400" cy="200" rx="350" ry="160" fill="none" stroke="rgba(0,240,255,0.1)" strokeWidth="1" />
              <ellipse cx="400" cy="200" rx="280" ry="120" fill="none" stroke="rgba(0,102,255,0.08)" strokeWidth="1" />
              {/* EMEA */}
              <circle cx="420" cy="160" r="6" fill="#ffffff" className="global__map-node" />
              {/* APAC */}
              <circle cx="580" cy="190" r="5" fill="#cccccc" className="global__map-node" style={{ animationDelay: '0.5s' }} />
              {/* USA */}
              <circle cx="180" cy="170" r="5" fill="#aaaaaa" className="global__map-node" style={{ animationDelay: '1s' }} />
              {/* LATAM */}
              <circle cx="220" cy="280" r="5" fill="#dddddd" className="global__map-node" style={{ animationDelay: '1.5s' }} />
              {/* UK HQ */}
              <circle cx="400" cy="145" r="8" fill="#ffffff" stroke="#fff" strokeWidth="1" />
              <text x="400" y="130" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="600">UK HQ</text>
              {/* Connection lines from UK */}
              {[[180,170],[580,190],[220,280]].map(([x,y], i) => (
                <line key={i} x1="400" y1="145" x2={x} y2={y} stroke="rgba(0,240,255,0.2)" strokeWidth="1" strokeDasharray="4 4" className="global__map-line" />
              ))}
            </svg>
          </div>

          <div className="global__stats">
            {REGIONS.map((region) => (
              <RegionStat key={region.name} region={region} active={active} />
            ))}
          </div>
        </div>

        <div className="global__hire glass-panel">
          <div>
            <span className="tag">Let's Grow Together</span>
            <h3>We Are Hiring</h3>
            <p>Experience growth with us. Are you an IT engineer skilled enough to serve our global clients? Join the AXCIS axis.</p>
          </div>
          <Link to="/careers" className="btn-primary">Apply Now <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}
