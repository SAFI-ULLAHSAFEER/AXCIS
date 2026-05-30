import { COMPANY } from '../constants/company';

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Legal</span>
          <h1>Terms & Conditions</h1>
        </div>
      </section>
      <section className="section-padding legal-page">
        <div className="container legal-page__content">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
          <h2>1. Agreement</h2>
          <p>
            By accessing {COMPANY.domain}, you agree to these Terms & Conditions. If you do not agree,
            please do not use our website or services.
          </p>
          <h2>2. Services</h2>
          <p>
            AXCIS provides global IT support, field engineering, managed infrastructure, and related
            technology services. Specific service terms are defined in individual client agreements.
          </p>
          <h2>3. Intellectual Property</h2>
          <p>All content on this website, including logos, text, and design, is the property of {COMPANY.legalName}.</p>
          <h2>4. Limitation of Liability</h2>
          <p>AXCIS shall not be liable for any indirect, incidental, or consequential damages arising from use of this website.</p>
          <h2>5. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales. Registered office: {COMPANY.registeredOffice}.</p>
          <h2>6. Contact</h2>
          <p>Questions about these terms: {COMPANY.contactEmail}</p>
        </div>
      </section>
    </>
  );
}
