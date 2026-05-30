import PartnerCollaborate from '../components/PartnerCollaborate';
import ContactForm from '../components/ContactForm';

export default function PartnerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Partner With Us</span>
          <h1>Collaborate on the Axis</h1>
          <p>
            Expand your global reach through structured partnerships with AXCIS —
            transparent economics, shared growth, and enterprise-grade delivery.
          </p>
        </div>
      </section>
      <PartnerCollaborate fullPage />
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="tag">Apply</span>
            <h2>Start Your Partnership Application</h2>
            <p>Tell us about your organisation and how you'd like to collaborate.</p>
          </div>
          <div className="contact__grid contact__grid--single">
            <ContactForm defaultService="Partnership Inquiry" inquiryType="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
