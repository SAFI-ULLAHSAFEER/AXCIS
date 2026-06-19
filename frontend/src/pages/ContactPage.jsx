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

      {/* Map Section - Vector.ai Style */}
      <section className="location-map-section">
        <div className="container">
          <div className="location-map-header">
            <span className="sec-tag">Locate Us</span>
            <h2 className="sec-h2">Our Location</h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', color: 'var(--text-m)' }}>
              Visit our office in Hatfield, United Kingdom
            </p>
          </div>
          <div className="location-map-container">
            <a 
              href="https://maps.app.goo.gl/4iBi9sW3mLKrgoM38" 
              target="_blank" 
              rel="noopener noreferrer"
              className="location-map-link"
              aria-label="View our location on Google Maps"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1781862622412!6m8!1m7!1s7CrAJCMpquRKw5YbnQlV7g!2m2!1d51.87310624558452!2d-0.4193536509153122!3f217.69347!4f0!5f0.7820865974627469" 
                width="100%" 
                height="500" 
                style={{ border: 0, borderRadius: 'var(--r-lg)', display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AXCIS Office Location - Hatfield, United Kingdom"
              />
              <div className="map-overlay">
                <span className="map-overlay-text">
                  <MapPin style={{ width: '20px', height: '20px' }} />
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
