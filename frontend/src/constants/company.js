export const COMPANY = {
  name: 'AXCIS',
  legalName: 'AXCIS LTD',
  tagline: 'Building the Axis of Intelligent Systems',
  taglineShort: 'Intelligent Systems',
  concept:
    'A company that becomes the central system around which technology, data, and innovation revolve.',
  domain: 'axcisltd.co.uk',
  website: 'https://www.axcisltd.co.uk',
  supportEmail: 'support@axcisltd.co.uk',
  contactEmail: 'contact@axcisltd.co.uk',
  phone: '07498512294',
  phoneDisplay: '+44 7498 512294',
  linkedin: 'https://www.linkedin.com/company/axcisltd/',
  industry: 'IT Services and IT Consulting',
  foundingYear: 2026,
  registeredOffice: '10 Stockwood Crescent, Luton LU1 3SS, United Kingdom',
  registeredOfficeShort: 'Luton, United Kingdom',
  location: 'Luton, United Kingdom',
  registration: 'Registered in England & Wales',
  companySize: '2–10 employees',
};

export const TAGLINE_DISPLAY =
  COMPANY.tagline.charAt(0).toUpperCase() + COMPANY.tagline.slice(1);

export const CORE_VALUES = [
  {
    id: 'accountability',
    title: 'Axis Accountability',
    desc: 'One central point of ownership across every deployment — no handoffs, no gaps, no excuses across borders.',
  },
  {
    id: 'velocity',
    title: 'Operational Velocity',
    desc: 'Rapid global field mobilization with structured SLAs — speed without sacrificing engineering standards.',
  },
  {
    id: 'precision',
    title: 'Precision Engineering',
    desc: 'Every engineer vetted through our technical team. Every ticket tracked. Every outcome measured.',
  },
  {
    id: 'transparency',
    title: 'Radical Transparency',
    desc: 'Clear scope, clear pricing, clear communication — from first inquiry to final sign-off.',
  },
  {
    id: 'scale',
    title: 'Scale DNA',
    desc: 'Built for enterprises that operate across continents — infrastructure that grows as you grow.',
  },
  {
    id: 'human',
    title: 'Human Centricity',
    desc: 'Technology amplified by expert humans on the ground — not replaced by automated runbooks.',
  },
];

export const PARTNER_BENEFITS = [
  { title: 'Expand Global Reach', desc: 'Access AXCIS field engineering network across 100+ countries without building local teams.' },
  { title: 'White-Label Delivery', desc: 'Deliver under your brand while we handle dispatch, SLA management, and engineer vetting.' },
  { title: 'Revenue Growth', desc: 'Structured partner economics designed for MSPs, resellers, and technology consultancies.' },
  { title: 'Dedicated Channel Support', desc: 'Single partner manager, co-branded proposals, and priority escalation paths.' },
  { title: 'Engineer Network Access', desc: 'Tap into our vetted L1–L3 engineer database for overflow and peak demand.' },
  { title: 'Joint Go-to-Market', desc: 'Co-marketing opportunities, shared case studies, and enterprise account collaboration.' },
];

export const PARTNER_MODELS = [
  { title: 'Technology Partner', desc: 'Integrate your platform or product with AXCIS global field delivery infrastructure.' },
  { title: 'MSP & Reseller', desc: 'Offer AXCIS managed and field services under your client relationships.' },
  { title: 'Field Network Partner', desc: 'Join our engineer network and receive dispatch assignments in your region.' },
  { title: 'Strategic Alliance', desc: 'Co-develop enterprise solutions for datacenter, cloud, and infrastructure rollouts.' },
];

export const CAREER_ROLES = [
  { title: 'Field Service Engineer (L1–L2)', location: 'Global — Remote & On-site', type: 'Contract / Full-time' },
  { title: 'Network Infrastructure Engineer', location: 'EMEA', type: 'Full-time' },
  { title: 'Datacenter Smart Hands Technician', location: 'UK & Europe', type: 'Contract' },
  { title: 'Service Desk Analyst', location: 'Remote', type: 'Full-time' },
  { title: 'Partner Success Manager', location: 'Luton, UK', type: 'Full-time' },
  { title: 'Project Rollout Coordinator', location: 'Global', type: 'Full-time' },
];
