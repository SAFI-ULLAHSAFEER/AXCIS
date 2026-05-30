import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from '../icons';
import { COMPANY, TAGLINE_DISPLAY } from '../constants/company';

const HIGHLIGHTS = [
  `Founded in ${COMPANY.foundingYear} — UK-registered IT services company`,
  `Registered office: ${COMPANY.registeredOfficeShort}`,
  'Operational across 100+ countries worldwide',
  'Vetted L1–L3 field engineers in our global network',
  'Flexible packages or pay-as-you-go pricing',
  '24/7/365 helpdesk with multi-language support',
  'Application, infrastructure & IT security operations',
];

export default function About() {
  return (
    <section className="section-padding about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="tag">About AXCIS</span>
            <h2><span className="accent-text-gradient">{TAGLINE_DISPLAY}</span></h2>
            <p className="about__concept">&ldquo;{COMPANY.concept}&rdquo;</p>
            <p>
              Founded in {COMPANY.foundingYear}, AXCIS connects enterprises to world-class field engineering,
              managed infrastructure, and intelligent systems — from our UK registered base in {COMPANY.registeredOfficeShort}
              to deployments across 100+ countries.
            </p>
            <p>
              We help your business excel in dynamic market environments through ideal use of technology
              and process excellence. Our consultants deliver advisory and managerial services aligned to
              your short and long-term IT objectives.
            </p>
            <Link to="/contact" className="btn-primary">
              Let's Explore <ArrowRight />
            </Link>
          </div>

          <div className="about__card glass-panel">
            <h3>Why Enterprises Choose AXCIS</h3>
            <ul className="about__list">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="about__stat-row">
              <div className="about__stat">
                <strong>24/7</strong>
                <span>Global Support</span>
              </div>
              <div className="about__stat">
                <strong>100+</strong>
                <span>Countries</span>
              </div>
              <div className="about__stat">
                <strong>{COMPANY.foundingYear}</strong>
                <span>Founded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
