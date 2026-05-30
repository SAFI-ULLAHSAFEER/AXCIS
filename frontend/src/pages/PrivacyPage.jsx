import { COMPANY } from '../constants/company';

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Legal</span>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="section-padding legal-page">
        <div className="container legal-page__content">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
          <h2>1. Introduction</h2>
          <p>
            {COMPANY.legalName} ("AXCIS", "we", "us") operates {COMPANY.domain}. Registered office:{' '}
            {COMPANY.registeredOffice}. This Privacy Policy explains how we collect, use, and protect
            your personal information when you use our website or contact our services.
          </p>
          <h2>2. Information We Collect</h2>
          <p>We may collect: name, email address, company name, phone number, and messages submitted through our contact forms.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide IT services, process partnership and career applications, and improve our services.</p>
          <h2>4. Data Protection</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data in accordance with UK GDPR requirements.</p>
          <h2>5. Contact</h2>
          <p>For privacy-related enquiries, contact us at {COMPANY.contactEmail}.</p>
        </div>
      </section>
    </>
  );
}
