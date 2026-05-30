import { Link } from 'react-router-dom';
import { ArrowRight } from '../icons';
import { CAREER_ROLES, COMPANY } from '../constants/company';
import ContactForm from '../components/ContactForm';

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Careers</span>
          <h1>Join the AXCIS Axis</h1>
          <p>
            Experience growth with us. Are you an IT engineer or professional skilled enough
            to serve our global clients? Build your career on the axis of global IT operations.
          </p>
        </div>
      </section>

      <section className="section-padding careers">
        <div className="container">
          <div className="careers__intro glass-panel">
            <div>
              <h2>Let's Grow Together</h2>
              <p>
                AXCIS is continuously acquiring talent and resources to meet the needs of
                new clients worldwide. All field engineers are vetted through our technical team.
              </p>
            </div>
            <div className="careers__perks">
              <span>Global Opportunities</span>
              <span>Flexible Contracts</span>
              <span>Career Growth</span>
              <span>Expert Network</span>
            </div>
          </div>

          <div className="section-header" style={{ marginTop: '3rem' }}>
            <span className="tag">Open Roles</span>
            <h2>Current Opportunities</h2>
          </div>

          <div className="careers__roles">
            {CAREER_ROLES.map((role) => (
              <article key={role.title} className="careers__role glass-panel">
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.location} · {role.type}</p>
                </div>
                <a href="#apply" className="btn-secondary">Apply <ArrowRight /></a>
              </article>
            ))}
          </div>

          <div className="careers__general glass-panel">
            <p>Don't see your role? We're always looking for exceptional IT talent globally.</p>
            <a href="#apply" className="btn-primary">Send Open Application <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="section-padding section--gray" id="apply">
        <div className="container">
          <div className="section-header">
            <span className="tag">Apply Now</span>
            <h2>Submit Your Application</h2>
            <p>Send your details to {COMPANY.contactEmail} or use the form below.</p>
          </div>
          <div className="contact__grid contact__grid--single">
            <ContactForm defaultService="Career Application" inquiryType="career" />
          </div>
        </div>
      </section>
    </>
  );
}
