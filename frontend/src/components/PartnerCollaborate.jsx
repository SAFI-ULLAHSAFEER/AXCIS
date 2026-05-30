import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from '../icons';
import { PARTNER_BENEFITS, PARTNER_MODELS } from '../constants/company';

export default function PartnerCollaborate({ fullPage = false }) {
  return (
    <section className={`section-padding partner-collab ${fullPage ? 'partner-collab--full' : ''}`} id="partner">
      <div className="container">
        <div className="partner-collab__hero glass-panel">
          <div className="partner-collab__hero-text">
            <span className="tag">Collaborate on the Axis</span>
            <h2>Build Global IT Delivery — Together</h2>
            <p>
              We don't display partner logos we haven't earned yet. Instead, we invite
              MSPs, technology vendors, and field networks to co-build the AXCIS global
              delivery axis — with transparent economics and shared growth.
            </p>
            {!fullPage && (
              <Link to="/partner" className="btn-primary">
                Explore Partnership <ArrowRight />
              </Link>
            )}
          </div>
          <div className="partner-collab__hero-visual">
            <div className="partner-collab__orbit">
              <div className="partner-collab__center">YOU</div>
              <div className="partner-collab__node partner-collab__node--1">MSPs</div>
              <div className="partner-collab__node partner-collab__node--2">Vendors</div>
              <div className="partner-collab__node partner-collab__node--3">Field Net</div>
              <div className="partner-collab__node partner-collab__node--4">Enterprise</div>
            </div>
          </div>
        </div>

        <div className="section-header" style={{ marginTop: '4rem' }}>
          <span className="tag">Why Partner With AXCIS</span>
          <h2>Your Benefits</h2>
        </div>

        <div className="partner-collab__benefits">
          {PARTNER_BENEFITS.map((b) => (
            <div key={b.title} className="partner-collab__benefit glass-panel">
              <CheckCircle />
              <div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header" style={{ marginTop: '3rem' }}>
          <span className="tag">Partnership Models</span>
          <h2>How We Collaborate</h2>
        </div>

        <div className="partner-collab__models">
          {PARTNER_MODELS.map((m) => (
            <article key={m.title} className="partner-collab__model glass-panel">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>

        <div className="partner-collab__cta glass-panel">
          <div>
            <h3>Ready to Partner With Us?</h3>
            <p>Join the axis. Expand your reach. Deliver globally.</p>
          </div>
          <Link to="/contact?type=partner" className="btn-primary">
            Start Partnership Conversation <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
