import { LEADERSHIP } from '../constants/homepage';
import { COMPANY } from '../constants/company';

export default function LeadershipVision() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <div className="leadership__layout">
          <div className="leadership__intro">
            <p className="eyebrow">{LEADERSHIP.headline}</p>
            <h2>{LEADERSHIP.subheadline}</h2>
            <blockquote className="leadership__vision">{LEADERSHIP.vision}</blockquote>
            <p className="leadership__meta">
              {COMPANY.legalName} · {COMPANY.registeredOfficeShort} · Est. {COMPANY.foundingYear}
            </p>
          </div>

          <div className="leadership__pillars">
            {LEADERSHIP.pillars.map((pillar, i) => (
              <article key={pillar.title} className="leadership__pillar">
                <span className="leadership__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
