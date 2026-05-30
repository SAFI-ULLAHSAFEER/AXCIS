import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin } from '../icons';
import { COMPANY } from '../constants/company';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const [params] = useSearchParams();
  const type = params.get('type');
  const defaultService = type === 'partner' ? 'Partnership Inquiry' : '';

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Contact</span>
          <h1>Get In Touch</h1>
          <p>
            Drop us a line — we are here to answer your questions 24/7–365 globally.
            A technology partner will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__info-card glass-panel">
                <MapPin />
                <div>
                  <strong>Registered Office</strong>
                  <p>{COMPANY.registeredOffice}<br />{COMPANY.registration}</p>
                </div>
              </div>
              <div className="contact__info-card glass-panel">
                <Mail />
                <div>
                  <strong>Contact</strong>
                  <p>
                    <a href={`mailto:${COMPANY.contactEmail}`}>{COMPANY.contactEmail}</a>
                  </p>
                </div>
              </div>
              <div className="contact__info-card glass-panel">
                <Mail />
                <div>
                  <strong>Support</strong>
                  <p>
                    <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>
                  </p>
                </div>
              </div>
              <div className="contact__info-card glass-panel">
                <Phone />
                <div>
                  <strong>Public Number</strong>
                  <p>
                    <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
                  </p>
                </div>
              </div>
              <div className="contact__info-card glass-panel">
                <MapPin />
                <div>
                  <strong>LinkedIn</strong>
                  <p>
                    <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer">
                      AXCIS LTD
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <ContactForm defaultService={defaultService} inquiryType={type || 'general'} />
          </div>
        </div>
      </section>
    </>
  );
}
