import { Link } from 'react-router-dom';
import { Zap, Globe, Shield, Users, CheckCircle, ArrowRight } from '../icons';

const REASONS = [
  { icon: Zap, title: '24/7–365 Helpdesk', desc: 'Round-the-clock global support with rapid response SLAs.' },
  { icon: Users, title: 'Vetted Engineer Network', desc: 'Every field engineer screened through our technical team.' },
  { icon: Globe, title: 'Global Availability', desc: 'Operational in 100+ countries with local language support.' },
  { icon: Shield, title: 'L1–L3 Expertise', desc: 'From break-fix to complex infrastructure engineering.' },
  { icon: CheckCircle, title: 'Quality First', desc: 'Process excellence and technology adoption at every touchpoint.' },
  { icon: Globe, title: 'English & Local Languages', desc: 'Communicate seamlessly with teams worldwide.' },
];

export default function WhyUs() {
  return (
    <section className="section-padding why-us" id="why-us">
      <div className="container">
        <div className="why-us__wrapper glass-panel">
          <div className="why-us__header">
            <span className="tag">Why Choose Us</span>
            <h2>Quality is the Keyword for <span className="accent-text-gradient">AXCIS</span></h2>
            <p>Drop us a line — we are here to answer your questions 24/7–365 globally.</p>
          </div>

          <div className="why-us__grid">
            {REASONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="why-us__item">
                  <div className="why-us__icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="why-us__cta">
            <h3>Need IT Support?</h3>
            <Link to="/contact" className="btn-primary">Contact Now <ArrowRight /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
