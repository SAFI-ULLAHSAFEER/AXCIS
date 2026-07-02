export const HERO = {
  headline: 'Building the Axis of Intelligent Systems',
  subheadline:
    'Cloud, AI, Cybersecurity, and Enterprise Solutions engineered for the next generation of businesses.',
  primaryCta: { label: 'Schedule Consultation', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
};

export const TRUSTED_INDUSTRIES = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail & E-Commerce',
  'Telecommunications',
  'Energy & Utilities',
  'Public Sector',
  'Technology',
];

export const PARTNER_ECOSYSTEM = [
  { name: 'AWS', label: 'Amazon Web Services' },
  { name: 'Azure', label: 'Microsoft Azure' },
  { name: 'Google Cloud', label: 'Google Cloud Platform' },
  { name: 'Kubernetes', label: 'Cloud Native' },
  { name: 'Terraform', label: 'Infrastructure as Code' },
  { name: 'Salesforce', label: 'Enterprise CRM' },
];

export const ENTERPRISE_SERVICES = [
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    desc: 'Multi-cloud architecture, migration, optimization, and managed cloud operations across AWS, Azure, and Google Cloud.',
    features: ['Cloud Strategy & Migration', 'Hybrid & Multi-Cloud', 'Cost Optimization', 'Managed Cloud Ops'],
  },
  {
    id: 'ai',
    title: 'AI & Data Intelligence',
    desc: 'Machine learning pipelines, data platforms, analytics, and AI-powered automation for enterprise decision-making.',
    features: ['Data Engineering', 'ML & AI Models', 'Business Intelligence', 'Real-time Analytics'],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    desc: 'Zero-trust architecture, threat detection, compliance frameworks, and 24/7 security operations for regulated industries.',
    features: ['SOC & Threat Detection', 'Identity & Access', 'Compliance (ISO, SOC 2)', 'Penetration Testing'],
  },
  {
    id: 'devops',
    title: 'DevOps & Platform Engineering',
    desc: 'CI/CD pipelines, container orchestration, infrastructure as code, and platform teams that accelerate delivery.',
    features: ['Kubernetes & Containers', 'CI/CD Automation', 'Site Reliability', 'Platform Engineering'],
  },
  {
    id: 'software',
    title: 'Enterprise Software Development',
    desc: 'Custom applications, API integrations, legacy modernization, and scalable software built for enterprise workloads.',
    features: ['Custom Applications', 'API & Integration', 'Legacy Modernization', 'Quality Engineering'],
  },
  {
    id: 'transformation',
    title: 'Digital Transformation',
    desc: 'End-to-end technology roadmaps, process automation, and organizational change for enterprise-scale modernization.',
    features: ['Technology Advisory', 'Process Automation', 'Change Management', 'Enterprise Architecture'],
  },
];

export const WHY_AXCIS = [
  {
    id: 'security',
    title: 'Security First',
    desc: 'Security embedded at every layer — from architecture design to deployment, monitoring, and incident response.',
  },
  {
    id: 'architecture',
    title: 'Enterprise Grade Architecture',
    desc: 'Scalable, resilient systems designed for high availability, fault tolerance, and global enterprise workloads.',
  },
  {
    id: 'experts',
    title: 'Certified Experts',
    desc: 'Cloud-certified engineers across AWS, Azure, and GCP with deep expertise in security, data, and platform engineering.',
  },
  {
    id: 'scalable',
    title: 'Scalable Solutions',
    desc: 'Infrastructure and software that grows with your business — from startup scale to Fortune 500 operations.',
  },
  {
    id: 'standards',
    title: 'Global Standards',
    desc: 'Delivery aligned with ISO, SOC 2, and industry compliance frameworks across regulated sectors worldwide.',
  },
  {
    id: 'partnership',
    title: 'Long-Term Partnership',
    desc: 'Dedicated account teams, transparent SLAs, and strategic advisory — not one-off project engagements.',
  },
];

export const CASE_STUDIES = [
  {
    id: 'coinbase-infrastructure',
    industry: 'Financial Services / Cryptocurrency',
    title: 'High-Availability Infrastructure for Coinbase',
    challenge: 'Mission-critical cryptocurrency platform requiring zero-downtime infrastructure with complex structured cabling, precise rack-and-stack operations, and reliable power distribution.',
    outcome: 'Deployed certified field engineers to design, cable, and configure high-density server racks, enterprise switches, and robust power management systems.',
    metrics: [
      { value: '99.999%', label: 'Uptime achieved' },
      { value: '<4hrs', label: 'Emergency response SLA' },
      { value: '100%', label: 'On-site precision' },
    ],
    stack: ['Juniper Switches', 'APC Smart-UPS', 'Cat6a/Fiber Cabling', 'Datacenter Operations'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  },
  {
    id: 'cloud-migration',
    industry: 'Financial Services',
    title: 'Multi-Cloud Migration for a Global Bank',
    challenge: 'Legacy on-premise infrastructure limiting scalability and increasing operational costs across 12 regions.',
    outcome: 'Migrated 200+ workloads to AWS and Azure with zero downtime cutover strategy.',
    metrics: [
      { value: '40%', label: 'Infrastructure cost reduction' },
      { value: '99.99%', label: 'Uptime SLA achieved' },
      { value: '6 mo', label: 'Full migration timeline' },
    ],
    stack: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  },
  {
    id: 'ai-platform',
    industry: 'Healthcare',
    title: 'AI-Powered Analytics Platform',
    challenge: 'Fragmented patient data across systems preventing real-time clinical decision support.',
    outcome: 'Built a unified data platform with ML models for predictive analytics and automated reporting.',
    metrics: [
      { value: '3x', label: 'Faster reporting cycles' },
      { value: '85%', label: 'Data accuracy improvement' },
      { value: '12', label: 'Integrated data sources' },
    ],
    stack: ['Python', 'Azure', 'Power BI', 'ML Pipeline'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'
  },
  {
    id: 'security-ops',
    industry: 'Technology',
    title: 'Enterprise Security Operations Center',
    challenge: 'Rising cyber threats and compliance gaps across a distributed global workforce.',
    outcome: 'Deployed 24/7 SOC with SIEM integration, zero-trust access, and automated incident response.',
    metrics: [
      { value: '60%', label: 'Faster threat response' },
      { value: '100%', label: 'Compliance audit pass rate' },
      { value: '24/7', label: 'Security monitoring' },
    ],
    stack: ['SIEM', 'Zero Trust', 'AWS', 'Palo Alto'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
];

export const TECH_STACK = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Platform' },
  { name: 'Docker', category: 'Platform' },
  { name: 'Terraform', category: 'Platform' },
  { name: 'Python', category: 'Development' },
  { name: 'Node.js', category: 'Development' },
  { name: 'React', category: 'Development' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'Snowflake', category: 'Data' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'Datadog', category: 'Observability' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'Ansible', category: 'DevOps' },
];

export const LEADERSHIP = {
  headline: 'Leadership & Vision',
  subheadline: 'Building the technology company enterprises trust for their most critical systems.',
  vision:
    'AXCIS exists to become the central axis around which enterprise technology operates — connecting cloud infrastructure, intelligent data systems, and security into one cohesive platform for global business.',
  pillars: [
    {
      title: 'Innovation with Discipline',
      desc: 'We invest in emerging technologies — AI, cloud-native, zero-trust — with the engineering rigor enterprises demand.',
    },
    {
      title: 'Client Success as Strategy',
      desc: 'Every engagement is measured by business outcomes, not billable hours. Your success defines our growth.',
    },
    {
      title: 'Global Delivery, Local Excellence',
      desc: 'UK-headquartered with delivery capabilities spanning continents — combining enterprise standards with on-the-ground expertise.',
    },
  ],
};
