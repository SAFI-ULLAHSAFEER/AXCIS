import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server, Globe, Cloud, Network, Zap, Shield, Cpu, Users,
  Briefcase, MapPin, ArrowRight,
} from '../icons';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../constants/services';
import { COMPANY } from '../constants/company';

const ICON_MAP = {
  'UX/UI Design': Cpu,
  'POC Development': Zap,
  'Product Development': Cpu,
  'Application Development': Cpu,
  'Application Modernization': Zap,
  'AI Software Development': Cpu,
  'Quality Assurance & Continuous Delivery': Shield,
  'AI Agents': Cpu,
  'GenAI Consulting & Workshops': Cpu,
  'Intelligent Automation': Zap,
  'AI PoC & MVP Development': Cpu,
  'Machine Learning Solutions': Cpu,
  'MLOps & AI Infrastructure': Server,
  'Data Science & Predictive Analytics': Cpu,
  'Data Engineering & Integration': Network,
  'Data Governance & Business Intelligence': Server,
  'Cloud Strategy & Architecture': Cloud,
  'Cloud Migration': Cloud,
  'Infrastructure Modernization': Server,
  'Cloud Engineering': Cloud,
  'CloudOps & DevOps': Zap,
  'Support & Managed Cloud Services': Cloud,
  'Cloud Cost Optimization': Cloud,
  'Multi-Cloud Security & Compliance': Shield,
  'Cybersecurity Consulting & Risk Assessment': Shield,
  'Governance, Risk & Compliance (GRC)': Shield,
  'Application Security & Penetration Testing': Shield,
  'Data Security & Encryption': Shield,
  'Defensive Security': Shield,
  'Red Teaming': Shield,
  'DevSecOps': Shield,
  'Discovery Workshops': Briefcase,
  'Technical Feasibility Study': Briefcase,
  'Product Strategy': Briefcase,
  'UI/UX Design Workshops': Cpu,
  'Digital Transformation Consulting': Briefcase,
  'Innovation & Emerging Tech Advisory': Briefcase,
  'Software Audit': Shield,
  'UX Audit': Cpu,
  'Process Optimization': Zap,
  'Application Performance Optimization': Zap,
  'Quality Assurance & Testing': Shield,
  'Support & Maintenance': Server,
  'FinOps': Cloud,
  'Salesforce Implementation & Integration': Briefcase,
  'Microsoft Dynamics 365': Briefcase,
  'MuleSoft & ServiceNow Integrations': Network,
  'AWS Cloud Solutions': Cloud,
  'Power BI Analytics Enablement': Server,
  'Dedicated Team': Users,
  'Offshore Development Center': Globe,
  'Fixed Price Projects': Briefcase,
  'Hybrid Delivery Model': Globe,
  '24/7 Global Service Desk': Users,
  'Global IT Support & Field Services': Globe,
  'Managed IT Services': Server,
  'Global IT Staffing': Users,
  'Datacenter Services': Server,
  'Network Support & Engineering': Network,
  'Infrastructure Cabling': Network,
  'IT Infrastructure Audits': Shield,
  'Cloud & Hybrid Services': Cloud,
  'Firewall & Cloud Security': Shield,
  'Cybersecurity Services': Shield,
  'DevOps Support': Zap,
  'IT Project Management': Briefcase,
  'Rollouts & Migrations': Zap,
  'IT Deployments': MapPin,
  'IT IMACD': MapPin,
  'Device Management': Cpu,
  'IT Staging & Imaging': Cpu,
  'Storage, Staging & Logistics': Briefcase,
  'Rental IT Equipment': Briefcase,
  'Global Procurement': Briefcase,
  'IT Asset Lifecycle Management': Server,
  'IT Asset Recycling (eWaste)': Shield,
};

function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.title] || Server;
  return (
    <article className="services__card glass-panel">
      <div className="services__icon"><Icon /></div>
      <span className="services__category">{service.category}</span>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <Link to="/contact" className="services__link">
        Learn more <ArrowRight />
      </Link>
    </article>
  );
}

export default function Services({ showAllDefault = false, showCategories = false }) {
  const [showAll, setShowAll] = useState(showAllDefault);
  const visible = showAll || showCategories ? ALL_SERVICES : ALL_SERVICES.slice(0, 8);

  return (
    <section className="section-padding services" id="services">
      <div className="container">
        {!showCategories && (
          <div className="section-header">
            <span className="tag">Let's Explore</span>
            <h2>Global IT Operations<br />& Engineering Services</h2>
            <p>
              Founded in {COMPANY.foundingYear}, AXCIS delivers field engineering, managed IT,
              digital product engineering, AI, cloud, and cybersecurity — across 100+ countries.
            </p>
          </div>
        )}

        {showCategories ? (
          SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="services__category-block">
              <div className="services__category-header">
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
              </div>
              <div className="services__grid">
                {cat.services.map((service) => (
                  <ServiceCard key={service.title} service={{ ...service, category: cat.title }} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="services__grid">
              {visible.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>

            {!showAll && (
              <div className="services__more">
                <button type="button" className="btn-secondary" onClick={() => setShowAll(true)}>
                  View All {ALL_SERVICES.length} Services <ArrowRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
