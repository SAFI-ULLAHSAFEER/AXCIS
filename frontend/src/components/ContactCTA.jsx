import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from '../icons';
import { COMPANY } from '../constants/company';

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container contact-cta__inner">
        <div className="contact-cta__content">
          <p className="eyebrow eyebrow--light">Get Started</p>
          <h2>Ready to Transform Your Enterprise Technology?</h2>
          <p>Schedule a consultation with our team to discuss your cloud, AI, security, or digital transformation requirements.</p>
        </div>
        <div className="contact-cta__actions">
          <Link to="/contact" className="btn-primary btn-primary--light">
            Schedule Consultation <ArrowRight />
          </Link>
          <div className="contact-cta__details">
            <a href={`mailto:${COMPANY.contactEmail}`}><Mail /> {COMPANY.contactEmail}</a>
            <a href={`tel:${COMPANY.phone}`}><Phone /> {COMPANY.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
