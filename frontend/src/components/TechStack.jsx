import { TECH_STACK } from '../constants/homepage';

export default function TechStack() {
  return (
    <section className="section section--gray" id="technology">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Technology Stack</p>
          <h2>Built on Industry-Leading Platforms</h2>
          <p>We engineer solutions on the technologies that power the world&apos;s largest enterprises.</p>
        </div>

        <div className="tech-stack__grid">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="tech-stack__item">
              <span className="tech-stack__name">{tech.name}</span>
              <span className="tech-stack__category">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
