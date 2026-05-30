import { TRUSTED_INDUSTRIES, PARTNER_ECOSYSTEM } from '../constants/homepage';

export default function TrustedBy() {
  return (
    <section className="trusted-by" aria-label="Trusted by enterprises and technology partners">
      <div className="container">
        <div className="trusted-by__industries">
          <p className="trusted-by__label">Trusted by enterprises across industries</p>
          <div className="trusted-by__marquee" role="list">
            {[...TRUSTED_INDUSTRIES, ...TRUSTED_INDUSTRIES].map((name, i) => (
              <span key={`${name}-${i}`} className="trusted-by__industry" role="listitem">{name}</span>
            ))}
          </div>
        </div>

        <div className="trusted-by__partners">
          <p className="trusted-by__label">Technology partner ecosystem</p>
          <div className="trusted-by__partner-grid">
            {PARTNER_ECOSYSTEM.map((partner) => (
              <div key={partner.name} className="trusted-by__partner">
                <span className="trusted-by__partner-name">{partner.name}</span>
                <span className="trusted-by__partner-label">{partner.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
