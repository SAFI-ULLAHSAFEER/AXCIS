import { TAGLINE_DISPLAY, COMPANY } from '../constants/company';

const ORBIT_ITEMS = ['Technology', 'Data', 'Innovation'];

export default function ConceptSection() {
  return (
    <section className="concept" id="concept">
      <div className="container">
        <div className="concept__inner glass-panel">
          <div className="concept__text">
            <span className="tag">The AXCIS Concept</span>
            <p className="concept__tagline">{TAGLINE_DISPLAY}</p>
            <blockquote className="concept__quote">
              &ldquo;{COMPANY.concept}&rdquo;
            </blockquote>
            <p className="concept__explain">
              AXCIS is not another IT vendor — it is the axis. Every service we deliver,
              every engineer we deploy, and every system we build exists to sit at the centre
              of your technology estate while everything else orbits with precision.
            </p>
          </div>

          <div className="concept__visual" aria-hidden="true">
            <div className="concept__core">
              <span>AXCIS</span>
              <small>The Axis</small>
            </div>
            {ORBIT_ITEMS.map((item, i) => (
              <div
                key={item}
                className={`concept__orbit concept__orbit--${i + 1}`}
              >
                <span className="concept__orbit-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
