import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Cpu, Shield, Server, Briefcase, Globe } from '../icons';
import { ENTERPRISE_SERVICES } from '../constants/homepage';

const ICON_MAP = {
  cloud: Cloud,
  ai: Cpu,
  security: Shield,
  devops: Server,
  software: Briefcase,
  transformation: Globe,
};

export default function EnterpriseServices() {
  return (
    <section className="section section--gray" id="services">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">What We Do</p>
          <h2>Enterprise Technology Services</h2>
          <p>End-to-end capabilities across cloud, AI, security, and software — designed for organizations that operate at scale.</p>
        </div>

        <div className="services-enterprise__grid">
          {ENTERPRISE_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.id] || Cloud;
            return (
              <article key={service.id} className="services-enterprise__card">
                <div className="services-enterprise__icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="services-enterprise__features">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn-secondary">
            View All Services <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
