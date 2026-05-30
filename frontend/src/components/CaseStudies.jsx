import { CASE_STUDIES } from '../constants/homepage';

export default function CaseStudies() {
  return (
    <section className="section section--navy" id="case-studies">
      <div className="container">
        <div className="section-header section-header--light">
          <p className="eyebrow eyebrow--light">Case Studies</p>
          <h2>Enterprise Outcomes That Matter</h2>
          <p>Real-world projects delivering measurable business impact across cloud, AI, and security.</p>
        </div>

        <div className="case-studies__grid">
          {CASE_STUDIES.map((study) => (
            <article key={study.id} className="case-studies__card">
              <div className="case-studies__meta">
                <span className="case-studies__industry">{study.industry}</span>
              </div>
              <h3>{study.title}</h3>
              <div className="case-studies__body">
                <div>
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <h4>Outcome</h4>
                  <p>{study.outcome}</p>
                </div>
              </div>
              <div className="case-studies__metrics">
                {study.metrics.map((m) => (
                  <div key={m.label} className="case-studies__metric">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="case-studies__stack">
                {study.stack.map((tech) => (
                  <span key={tech} className="case-studies__tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
