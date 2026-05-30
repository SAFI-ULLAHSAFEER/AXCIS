import { CORE_VALUES } from '../constants/company';

export default function CoreValues() {
  return (
    <section className="section-padding core-values" id="values">
      <div className="container">
        <div className="section-header">
          <span className="tag">Our DNA</span>
          <h2>Core Values That Define the Axis</h2>
          <p>
            Not borrowed from industry playbooks — built for a company engineered to operate
            at global scale with startup precision.
          </p>
        </div>

        <div className="core-values__grid">
          {CORE_VALUES.map((value, i) => (
            <article key={value.id} className="core-values__card glass-panel">
              <span className="core-values__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
