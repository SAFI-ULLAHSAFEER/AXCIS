import { Link } from 'react-router-dom';
import { LinkedIn, Mail, Phone } from '../icons';
import Logo from './Logo';
import { COMPANY, TAGLINE_DISPLAY } from '../constants/company';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>
              {TAGLINE_DISPLAY} — enterprise cloud, AI, cybersecurity, and digital
              transformation solutions from the United Kingdom worldwide.
            </p>
            <div className="footer__social">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href={`mailto:${COMPANY.contactEmail}`} aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="footer__links">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/partner">Partner With Us</Link>
            <Link to="/careers">Careers</Link>
          </div>

          <div className="footer__links">
            <h4>Services</h4>
            <Link to="/services">Engineering</Link>
            <Link to="/services">AI & Data</Link>
            <Link to="/services">Cloud</Link>
            <Link to="/services">Cybersecurity</Link>
          </div>

          <div className="footer__links">
            <h4>Contact</h4>
            <a href={`mailto:${COMPANY.contactEmail}`}><Mail /> {COMPANY.contactEmail}</a>
            <a href={`mailto:${COMPANY.supportEmail}`}><Mail /> {COMPANY.supportEmail}</a>
            <a href={`tel:${COMPANY.phone}`}><Phone /> {COMPANY.phoneDisplay}</a>
            <span className="footer__address">{COMPANY.registeredOffice}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Copyright {year}. {COMPANY.legalName} — All Rights Reserved. {COMPANY.registration}.
            Est. {COMPANY.foundingYear}.
          </p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
