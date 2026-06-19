import EnterpriseHero from '../components/EnterpriseHero';
import TrustedBy from '../components/TrustedBy';
import EnterpriseServices from '../components/EnterpriseServices';
import WhyAXCIS from '../components/WhyAXCIS';
import CaseStudies from '../components/CaseStudies';
import TechStack from '../components/TechStack';
import LeadershipVision from '../components/LeadershipVision';
import ContactCTA from '../components/ContactCTA';

export default function HomePage({ onNavigate }) {
  return (
    <>
      <EnterpriseHero />
      <TrustedBy />
      <EnterpriseServices />
      <WhyAXCIS />
      <CaseStudies onNavigate={onNavigate} />
      <TechStack />
      <LeadershipVision />
      <ContactCTA />
    </>
  );
}
