import { Shield, Server, Users, Globe, CheckCircle, Briefcase } from '../icons';
import { WHY_AXCIS } from '../constants/homepage';

const ICON_MAP = {
  security: Shield,
  architecture: Server,
  experts: Users,
  scalable: Globe,
  standards: CheckCircle,
  partnership: Briefcase,
};

export default function WhyAXCIS() {
  return (
    <section className="section" id="why-axcis">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Why AXCIS</p>
          <h2>Built for Enterprise Trust</h2>
          <p>The standards, security, and scalability that Fortune 500 organizations require — delivered with long-term partnership at the core.</p>
        </div>

        <div className="why-axcis__grid">
          {WHY_AXCIS.map((item) => {
            const Icon = ICON_MAP[item.id] || CheckCircle;
            return (
              <article key={item.id} className="why-axcis__card">
                <div className="why-axcis__icon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
