import About from '../components/About';
import CoreValues from '../components/CoreValues';
import WhyUs from '../components/WhyUs';
import StatsBar from '../components/StatsBar';
import { COMPANY, TAGLINE_DISPLAY } from '../constants/company';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">About AXCIS</span>
          <h1>{TAGLINE_DISPLAY}</h1>
          <p className="page-hero__concept">&ldquo;{COMPANY.concept}&rdquo;</p>
          <p>
            Founded in {COMPANY.foundingYear}. {COMPANY.industry}. UK-registered at{' '}
            {COMPANY.registeredOffice}. Operational globally with vetted field engineers
            across 100+ countries.
          </p>
        </div>
      </section>
      <StatsBar />
      <About />
      <CoreValues />
      <WhyUs />
    </>
  );
}
