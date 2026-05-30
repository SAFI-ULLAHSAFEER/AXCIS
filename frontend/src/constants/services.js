/**
 * AXCIS service portfolio — field & managed IT (DeepScale/Excis)
 * plus digital engineering, AI, cloud & advisory (tkxel-aligned).
 */

export const SERVICE_CATEGORIES = [
  {
    id: 'managed',
    title: 'Global IT Managed Services',
    desc: 'Round-the-clock support, field engineering, and managed operations across borders.',
    services: [
      { title: '24/7 Global Service Desk', desc: 'Follow-the-sun helpdesk with multilingual agents — proactive support, user access management, and seamless escalation worldwide.' },
      { title: 'Global IT Support & Field Services', desc: 'On-site smart hands, deskside support, and technical troubleshooting delivered by vetted L1–L3 engineers in local languages.' },
      { title: 'Managed IT Services', desc: 'End-to-end managed operations covering application, infrastructure, and IT security — flexible packages or pay-as-you-go.' },
      { title: 'Global IT Staffing', desc: 'Skilled IT professionals deployed on-demand to support projects, rollouts, and peak operational demand globally.' },
    ],
  },
  {
    id: 'engineering',
    title: 'Digital Product Engineering',
    desc: 'Build, modernize, and scale software products — from PoC to enterprise-grade applications with AI-ready architecture.',
    services: [
      { title: 'UX/UI Design', desc: 'Design user experiences that cut friction, improve performance, and align product interfaces with business goals.' },
      { title: 'POC Development', desc: 'Validate feasibility and performance with a proof-of-concept that reduces early risk before full-scale investment.' },
      { title: 'Product Development', desc: 'Build web, mobile, and enterprise products with strong architecture, scalability, and security built in from day one.' },
      { title: 'Application Development', desc: 'Build scalable applications with secure integrations, cloud-native foundations, and AI-powered features.' },
      { title: 'Application Modernization', desc: 'Modernize legacy applications with cloud-native, AI-ready foundations — without disrupting business continuity.' },
      { title: 'AI Software Development', desc: 'Build AI-powered software with scalable models, clean data pipelines, and enterprise-grade security.' },
      { title: 'Quality Assurance & Continuous Delivery', desc: 'Deliver reliable software with QA automation, continuous testing, and CI/CD pipelines at scale.' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Data Innovation',
    desc: 'Turn data into intelligent action — AI agents, machine learning, and analytics that drive measurable business results.',
    services: [
      { title: 'AI Agents', desc: 'Deploy intelligent agents to automate workflows, decisions, and customer interactions across your organisation.' },
      { title: 'GenAI Consulting & Workshops', desc: 'Build your AI roadmap with expert strategy, readiness assessments, and clear ROI frameworks.' },
      { title: 'Intelligent Automation', desc: 'Streamline operations using AI-driven automation that boosts efficiency and reduces manual overhead.' },
      { title: 'AI PoC & MVP Development', desc: 'Validate AI ideas quickly with proof-of-concept and MVP delivery that proves value before scaling.' },
      { title: 'Machine Learning Solutions', desc: 'Custom ML models for prediction, classification, and automation tailored to your business data.' },
      { title: 'MLOps & AI Infrastructure', desc: 'Operationalize AI models with secure, automated pipelines and governed deployment at scale.' },
      { title: 'Data Science & Predictive Analytics', desc: 'Advanced analytics and forecasting for actionable business insights and smarter decision-making.' },
      { title: 'Data Engineering & Integration', desc: 'Scalable data pipelines and system integrations that connect silos and deliver reliable data for AI.' },
      { title: 'Data Governance & Business Intelligence', desc: 'Govern, visualize, and trust your data with consistent, reliable intelligence across the enterprise.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    desc: 'Cloud strategy, migration, engineering, and managed operations — secure, automated, and cost-optimised.',
    services: [
      { title: 'Cloud Strategy & Architecture', desc: 'Design cloud roadmaps and architectures aligned to business goals, security, and scalability requirements.' },
      { title: 'Cloud Migration', desc: 'Migrate confidently with a structured cloud approach that reduces disruption and accelerates time-to-value.' },
      { title: 'Infrastructure Modernization', desc: 'Modernize legacy systems with secure infrastructure built for automation and cloud-native workloads.' },
      { title: 'Cloud Engineering', desc: 'Build secure, automated, cloud-native systems with infrastructure-as-code and best-practice patterns.' },
      { title: 'CloudOps & DevOps', desc: 'Automate delivery and strengthen cloud operations for stable, repeatable deployments.' },
      { title: 'Support & Managed Cloud Services', desc: 'Reduce outages with 24/7 cloud monitoring, incident response, and ongoing optimisation.' },
      { title: 'Cloud Cost Optimization', desc: 'Cut cloud spend with rightsizing, tuning, and FinOps practices without sacrificing performance.' },
      { title: 'Multi-Cloud Security & Compliance', desc: 'Unified threat visibility and security controls across multi-cloud environments with compliance alignment.' },
      { title: 'Cloud & Hybrid Services', desc: 'Seamless hybrid cloud transitions — enhanced agility, efficiency, and cost-effectiveness.' },
      { title: 'Datacenter Services', desc: 'Smart hands, server maintenance, hardware support, and seamless datacenter operations.' },
      { title: 'Network Support & Engineering', desc: 'Wireless and wired network planning, design, installation, troubleshooting, and maintenance.' },
      { title: 'Infrastructure Cabling', desc: 'Structured cabling solutions ensuring seamless connectivity and optimal network performance.' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    desc: 'Protect applications, data, and cloud environments with consulting, testing, and DevSecOps integration.',
    services: [
      { title: 'Cybersecurity Consulting & Risk Assessment', desc: 'Assess security risks with control checks, gap analysis, and expert remediation guidance.' },
      { title: 'Governance, Risk & Compliance (GRC)', desc: 'Assess compliance gaps and apply controls for ISO 27001, SOC 2, GDPR, and industry standards.' },
      { title: 'Application Security & Penetration Testing', desc: 'Test apps, APIs, and systems to identify vulnerabilities and strengthen security posture.' },
      { title: 'Data Security & Encryption', desc: 'Protect sensitive data with encryption, access controls, and continuous monitoring.' },
      { title: 'Cloud Security', desc: 'Protect cloud environments with stronger configurations, monitoring, and identity management.' },
      { title: 'Defensive Security', desc: 'Test how well your defences detect and respond to threats with simulated attack scenarios.' },
      { title: 'Red Teaming', desc: 'Expose critical weaknesses through realistic attack simulations and adversary-style testing.' },
      { title: 'DevSecOps', desc: 'Integrate security into development and deployment workflows without slowing delivery velocity.' },
      { title: 'Firewall & Cloud Security', desc: 'Advanced firewall protocols, cloud gateway security, and network perimeter protection.' },
    ],
  },
  {
    id: 'advisory',
    title: 'Advisory & Strategy',
    desc: 'Discovery, feasibility, product strategy, and digital transformation consulting for AI-ready growth.',
    services: [
      { title: 'Discovery Workshops', desc: 'Align teams, validate assumptions, and uncover risks through structured discovery sessions.' },
      { title: 'Technical Feasibility Study', desc: 'Evaluate feasibility, architecture, and risks to ensure your idea can scale before you invest.' },
      { title: 'Product Strategy', desc: 'Align teams with a shared vision, user insights, and a roadmap for sustainable product growth.' },
      { title: 'UI/UX Design Workshops', desc: 'Use design thinking to refine requirements, map user journeys, and validate experience goals.' },
      { title: 'Digital Transformation Consulting', desc: 'Modernize architecture, data, and workflows to enable AI-ready, scalable business growth.' },
      { title: 'Innovation & Emerging Tech Advisory', desc: 'Evaluate new technologies and evolve your architecture, data, and workflows strategically.' },
    ],
  },
  {
    id: 'optimization',
    title: 'Optimization & Quality',
    desc: 'Audit, optimise, and maintain software systems for peak performance, stability, and user experience.',
    services: [
      { title: 'Software Audit', desc: 'Audit systems and pipelines to uncover bottlenecks, technical debt, and operational risks.' },
      { title: 'UX Audit', desc: 'Find usability gaps and remove friction with an expert-led user experience audit.' },
      { title: 'Process Optimization', desc: 'Optimise cycle times by fixing and automating inefficient workflows across teams.' },
      { title: 'Application Performance Optimization', desc: 'Diagnose and fix performance issues to improve speed, scalability, and reliability.' },
      { title: 'Quality Assurance & Testing', desc: 'Boost product stability with end-to-end QA, automated testing, and validation frameworks.' },
      { title: 'Support & Maintenance', desc: 'Stabilise and secure applications with ongoing maintenance, patching, and proactive support.' },
      { title: 'FinOps', desc: 'Improve cloud cost visibility with FinOps practices, rightsizing, and spend automation.' },
    ],
  },
  {
    id: 'implementation',
    title: 'Solution Implementation',
    desc: 'Enterprise platform implementation and integration — Salesforce, Dynamics, AWS, and more.',
    services: [
      { title: 'Salesforce Implementation & Integration', desc: 'Implement and integrate Salesforce for unified customer data, automation, and sales operations.' },
      { title: 'Microsoft Dynamics 365', desc: 'Tailor Dynamics 365 with custom workflows, data models, and third-party integrations.' },
      { title: 'MuleSoft & ServiceNow Integrations', desc: 'Connect ServiceNow and core systems with scalable MuleSoft integration architecture.' },
      { title: 'AWS Cloud Solutions', desc: 'Design, migrate, and modernise AWS environments with best-practice cloud architecture.' },
      { title: 'Power BI Analytics Enablement', desc: 'Enable data-driven decisions with Power BI dashboards, reporting, and analytics integration.' },
    ],
  },
  {
    id: 'projects',
    title: 'Global Project Services',
    desc: 'Large-scale deployments, rollouts, and project delivery with global visibility.',
    services: [
      { title: 'IT Project Management', desc: 'Experienced PMs managing complex global IT initiatives from planning through execution.' },
      { title: 'Rollouts & Migrations', desc: 'System imaging, deployment, data migration, and end-to-end rollout management.' },
      { title: 'IT Deployments', desc: 'Large-scale technology deployments with trained, compliant engineers worldwide.' },
      { title: 'IT IMACD', desc: 'Installation, moves, adds, changes, and end-of-life disposal of IT infrastructure.' },
      { title: 'Device Management', desc: 'Secure deployment and lifecycle management of endpoints and media devices.' },
      { title: 'IT Infrastructure Audits', desc: 'Comprehensive IT estate assessments — gaps, risks, and optimisation opportunities.' },
    ],
  },
  {
    id: 'lifecycle',
    title: 'Asset Lifecycle & Logistics',
    desc: 'Procurement, staging, warehousing, and responsible asset retirement.',
    services: [
      { title: 'IT Staging & Imaging', desc: 'Professional device staging, imaging, and desktop environment preparation.' },
      { title: 'Storage, Staging & Logistics', desc: 'Secure warehousing, equipment preparation, and global distribution.' },
      { title: 'Rental IT Equipment', desc: 'Quality rentals — laptops, desktops, printers — tailored to business needs.' },
      { title: 'Global Procurement', desc: 'In-country hardware and software sourcing with customs and compliance navigation.' },
      { title: 'IT Asset Lifecycle Management', desc: 'Full lifecycle tracking from procurement through deployment and retirement.' },
      { title: 'IT Asset Recycling (eWaste)', desc: 'Certified e-waste disposal and data destruction with regulatory compliance.' },
    ],
  },
  {
    id: 'engagement',
    title: 'Engagement Models',
    desc: 'Flexible partnership models — dedicated teams, offshore centres, fixed-price, and hybrid delivery.',
    services: [
      { title: 'Dedicated Team', desc: 'Fast-track projects with a dedicated team of technical and management experts.' },
      { title: 'Offshore Development Center', desc: 'Scale with a dedicated offshore team — stability, global talent, and reduced time-to-market.' },
      { title: 'Fixed Price Projects', desc: 'Defined scope projects with fixed costs, clear milestones, and on-budget delivery.' },
      { title: 'Hybrid Delivery Model', desc: 'Adaptive delivery combining onshore leadership with global engineering capacity.' },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.title }))
);

export const ENGINEERING_SERVICES = SERVICE_CATEGORIES.find((c) => c.id === 'engineering')?.services ?? [];

export const SERVICE_FORM_OPTIONS = [
  ...ALL_SERVICES.map((s) => s.title),
  'Partnership Inquiry',
  'Career Application',
  'Other / General Inquiry',
];
