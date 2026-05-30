import Services from '../components/Services';
import Industries from '../components/Industries';
import { ALL_SERVICES, SERVICE_CATEGORIES, ENGINEERING_SERVICES } from '../constants/services';

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Services</span>
          <h1>Global IT Operations & Engineering Services</h1>
          <p>
            {ALL_SERVICES.length} services across {SERVICE_CATEGORIES.length} categories —
            including {ENGINEERING_SERVICES.length} digital product engineering services,
            AI & data innovation, cloud, cybersecurity, field support, and global project delivery.
          </p>
        </div>
      </section>
      <Services showAllDefault showCategories />
      <Industries />
    </>
  );
}
