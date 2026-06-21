import React, { useState, useEffect, useRef } from 'react';
import CaseStudyPage from './pages/CaseStudyPage';
import { CASE_STUDIES } from './constants/homepage';

/* ─── ICONS ─────────────────────────────────────────────────────────────── */
const ArrowRight   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const MenuIcon     = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon    = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const MailIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPinIco    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const BriefcaseIco = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const ShieldIco    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const CloudIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const CpuIco       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>;
const ServerIco    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
const GlobeIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const UsersIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ZapIco       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const NetworkIco   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>;
const CheckIco     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>;
const LinkedInIco  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const ActivityIco  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const MonitorIco   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const PhoneDevIco  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;

/* ─── AXCIS LOGO ─────────────────────────────────────────────────────────── */
const AxcisLogo = ({ size = 'md' }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const getLogoHeight = () => {
    if (size === 'lg') return '110px';  // Navbar - EXTRA LARGE
    if (size === 'sm') return '85px';   // Footer
    return '100px'; // Default - BOHOT BARA
  };
  
  return (
    <div 
      className="brand-logo-block"
      style={{ 
        display: 'flex', 
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        position: 'relative',
        minWidth: '180px', // Space for text
        height: getLogoHeight()
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Image - Hide on hover */}
      <img 
        src="/axcis-logo.png" 
        alt="AXCIS" 
        style={{ 
          height: getLogoHeight(),
          width: 'auto',
          display: 'block',
          minHeight: getLogoHeight(),
          objectFit: 'contain',
          opacity: isHovered ? 0 : 1,
          visibility: isHovered ? 'hidden' : 'visible',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      />
      
      {/* Text - Show on hover (DevInc Style) */}
      <span
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: size === 'lg' ? '36px' : size === 'sm' ? '28px' : '32px',
          fontWeight: '700',
          letterSpacing: '0.05em',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #10b981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          pointerEvents: 'none',
          textTransform: 'uppercase',
          fontFamily: "'Outfit', sans-serif",
          whiteSpace: 'nowrap',
          zIndex: 10,
          filter: 'drop-shadow(0 2px 8px rgba(16, 185, 129, 0.3))'
        }}
      >
        AXCIS
      </span>
    </div>
  );
};

/* ─── ANIMATED COUNTER ───────────────────────────────────────────────────── */
const Counter = ({ to, suffix = '', prefix = '' }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        const t0 = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - t0) / 1600, 1);
          setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(tick); else setN(to);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
};

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const SLIDES = [
  { h1a:'The Central Axis of', h1b:'Enterprise Technology', sub:'AXCIS delivers world-class IT infrastructure, managed cloud, cybersecurity, and UK field services — all from one unified command centre.', accent:'#10b981', cta:'Get a Free Consultation' },
  { h1a:'Your Partner in', h1b:'Seamless IT Operations', sub:'From deskside support to datacenter management, AXCIS engineers keep your business running without interruption across every timezone.', accent:'#10b981', cta:'Explore Services' },
  { h1a:'Field Operations', h1b:'Under 4-Hour SLA', sub:'Certified engineers dispatched across the United Kingdom with guaranteed response times. Hardware, cabling, audits — on-site, on time.', accent:'#10b981', cta:'Request Field Dispatch' },
  { h1a:'Engineering', h1b:'the Future, Together', sub:'Custom software platforms, AI integrations, and zero-trust cloud architectures built for enterprises that demand global-scale performance.', accent:'#10b981', cta:'Start a Project' },
];

const SERVICES = [
  { id:'support',    icon:<NetworkIco/>,   color:'#10b981', title:'Global IT Support',           short:'Empowering global businesses with agile IT solutions, bridging geographical gaps seamlessly.',                                tagline:'Empowering global businesses with agile IT solutions, bridging geographical gaps seamlessly.',                                features:['Deskside support & network operations','Datacenter support & management','Multilingual helpdesk (L1–L3)','Proactive monitoring & incident response','Global fiber & edge networking solutions'] },
  { id:'cloud',      icon:<CloudIco/>,     color:'#10b981', title:'Cybersecurity & Cloud',        short:'Zero-trust security and managed cloud operations.',                                                                          tagline:'Continuous, zero-trust cloud orchestration engineered for maximum reliability.',                                              features:['24/7/365 Security Operations Center (SOC)','Firewall & cloud security solutions','Advanced threat intelligence & zero-trust','GDPR, ISO 27001 compliance assurance','Multi-cloud architecture & migration'] },
  { id:'ai',         icon:<CpuIco/>,       color:'#10b981', title:'AI & Business Automation',     short:'Intelligent automation and AI solutions for enterprise.',                                                                    tagline:'Harness the power of AI to automate workflows and unlock business intelligence.',                                             features:['AI agent development & LLM integrations','Business process automation (RPA)','Machine learning models & predictive analytics','AI-powered chatbots & virtual assistants','Data pipelines & real-time intelligence dashboards'] },
  { id:'web',        icon:<MonitorIco/>,   color:'#10b981', title:'Web Development & Web Apps',   short:'High-performance web applications and platforms.',                                                                           tagline:'Next-generation web applications built for scale, speed, and seamless UX.',                                                  features:['Custom web application development','React, Next.js & modern frontend frameworks','RESTful & GraphQL API development','E-commerce & enterprise portal solutions','Performance optimisation & SEO-ready architecture'] },
  { id:'mobile',     icon:<PhoneDevIco/>,  color:'#10b981', title:'Mobile App Development',       short:'Native and cross-platform mobile experiences.',                                                                              tagline:'Powerful mobile apps engineered for iOS, Android, and cross-platform delivery.',                                             features:['iOS & Android native app development','React Native & Flutter cross-platform apps','Mobile UI/UX design & prototyping','App Store & Google Play deployment','Push notifications, offline mode & API integration'] },
  { id:'software',   icon:<ZapIco/>,       color:'#10b981', title:'Software Engineering',         short:'Custom enterprise software built to scale.',                                                                                 tagline:'Bespoke software solutions architected for enterprise-grade performance.',                                                   features:['Custom enterprise software development','Microservices & API architecture','DevOps, CI/CD & cloud-native delivery','Legacy system modernisation','Real-time analytics & business intelligence'] },
  { id:'cabling',    icon:<NetworkIco/>,   color:'#10b981', title:'Infrastructure Cabling',       short:'Efficient IT infrastructure cabling solutions, ensuring seamless connectivity and optimal performance.',                     tagline:'Efficient IT infrastructure cabling solutions, ensuring seamless connectivity and optimal performance.',                     features:['Structured cabling design & installation','Fibre optic & copper cabling solutions','Patch panel & rack cabling management','Cable testing, certification & documentation','Network infrastructure upgrades & migrations'] },
  { id:'datacenter', icon:<ServerIco/>,    color:'#10b981', title:'Datacenter Services',          short:'Flexible engineering support for seamless datacenter operations and hardware maintenance.',                                  tagline:'Flexible engineering support for seamless operations, server-based systems and hardware maintenance.',                       features:['Server installation, configuration & maintenance','Rack & stack cabling & decommissioning','Hardware break-fix & smart-hands support','Datacenter audits & capacity planning','Remote hands & eyes services globally'] },
  { id:'field',      icon:<MapPinIco/>,    color:'#10b981', title:'UK Field Operations',          short:'Smart-hands deployment across the United Kingdom.',                                                                          tagline:'Smart-hands deployment and real-time hardware maintenance nationwide.',                                                       features:['Under-4-hour emergency hardware SLA','Datacenter audits, rack cabling & decommissioning','On-demand certified engineers dispatched on-site','IT IMACD (Install, Move, Add, Change, Dispose)','Infrastructure cabling & structured wiring'] },
  { id:'rental',     icon:<ServerIco/>,    color:'#10b981', title:'IT Rental & Asset Lifecycle',  short:'Quality IT equipment rentals and lifecycle management.',                                                                     tagline:'Flexible IT equipment rental tailored to diverse business needs.',                                                           features:['Laptops, desktops, printers & peripherals','Short and long-term rental packages','IT staging, imaging & logistics','Global procurement & in-country sourcing','Certified e-waste disposal & data destruction'] },
  { id:'devops',     icon:<ZapIco/>,       color:'#10b981', title:'DevOps Support',               short:'Comprehensive DevOps support ensuring agile collaboration and continuous delivery.',                                         tagline:'Comprehensive DevOps support services, ensuring agile collaboration and continuous delivery.',                               features:['CI/CD pipeline design & automation','Docker & Kubernetes orchestration','Infrastructure as Code (Terraform, Ansible)','Site reliability engineering (SRE)','Monitoring, alerting & incident management'] },
  { id:'consult',    icon:<BriefcaseIco/>, color:'#10b981', title:'IT Consulting & Advisory',     short:'Strategic advisory to grow your business with tech.',                                                                        tagline:'Expert consultants helping you meet short and long-term IT objectives.',                                                     features:['Business technology strategy & roadmapping','Digital transformation advisory','Vendor selection & procurement guidance','IT budget optimisation & cost reduction','Compliance & governance frameworks'] },
];

const INDUSTRIES = ['Financial Services','Healthcare & Life Sciences','Telecommunications','Manufacturing','Retail & E-Commerce','Energy & Utilities','Public Sector','Technology & SaaS'];

const VALUES = [
  { icon:<ShieldIco/>,   title:'Integrity First',       desc:'Complete transparency in every engagement. No hidden costs, no surprises, no excuses.' },
  { icon:<ZapIco/>,      title:'Operational Velocity',  desc:'Rapid global field mobilization with structured SLAs. Speed without sacrificing standards.' },
  { icon:<GlobeIco/>,    title:'Global Mindset',        desc:'Think and operate at worldwide scale while delivering local precision and expertise.' },
  { icon:<UsersIco/>,    title:'People Powered',        desc:'Certified L1-L3 engineers and consultants are the backbone of every deployment.' },
  { icon:<ActivityIco/>, title:'Relentless Uptime',     desc:'Engineer for 99.999% availability because your business cannot afford downtime.' },
  { icon:<CheckIco/>,    title:'Excellence Always',     desc:'Every project, every ticket, every field dispatch executed to the highest standard.' },
];

const JOBS = [
  { title:'Senior Network Engineer',    location:'London, UK',       type:'Full-time', dept:'Infrastructure' },
  { title:'Cloud Security Architect',   location:'Remote (UK)',      type:'Full-time', dept:'Security' },
  { title:'Field Support Technician',   location:'Manchester, UK',   type:'Full-time', dept:'Field Ops' },
  { title:'Full Stack Developer',       location:'Remote (Global)',  type:'Full-time', dept:'Software' },
  { title:'IT Project Manager',         location:'London, UK',       type:'Full-time', dept:'Consulting' },
  { title:'Datacenter Operations Lead', location:'Birmingham, UK',   type:'Full-time', dept:'Infrastructure' },
];

const SVC_FORM_OPTS = ['Global IT Support','Cybersecurity & Cloud','AI & Business Automation','Web Development & Web Apps','Mobile App Development','Software Engineering','UK Field Operations','IT Rental & Asset Lifecycle','IT Consulting & Advisory','Partnership Inquiry','General Inquiry'];

const COLLAB_MODELS = [
  { icon:<BriefcaseIco/>, t:'Project Collaboration',    d:'Have a large-scale IT project needing additional capacity? AXCIS can step in as a delivery partner, subcontractor, or co-prime on any engagement worldwide.',    cta:'Discuss a Project',  bullets:['Subcontracting & overflow capacity','Co-delivery on enterprise contracts','Specialist skill augmentation'] },
  { icon:<GlobeIco/>,     t:'Reseller & White-Label',   d:'Expand your service portfolio by reselling AXCIS managed services, field operations, or software engineering capabilities to your own client base.',              cta:'Become a Reseller',  bullets:['White-label field & managed services','Revenue share partnership model','Dedicated channel support'] },
  { icon:<NetworkIco/>,   t:'Technology Alliance',      d:'Are you a technology vendor, SaaS platform, or hardware manufacturer? Partner with AXCIS to integrate your solutions into our global delivery framework.',        cta:'Explore Alliance',   bullets:['Joint go-to-market strategy','Co-branded enterprise proposals','Integration & API partnerships'] },
  { icon:<UsersIco/>,     t:'Engineer & Talent Network',d:'We partner with staffing agencies, training providers, and independent engineers to build the world-class workforce that powers AXCIS field operations globally.', cta:'Join Our Network',   bullets:['Vetted L1–L3 engineer placements','Field dispatch assignments','Long-term staffing contracts'] },
];

/* Services Mega Menu Categories */
const SERVICE_CATEGORIES = {
  'Infrastructure & Support': [
    { id: 'support', title: 'Global IT Support', desc: 'Enterprise helpdesk & network operations', icon: <NetworkIco/> },
    { id: 'datacenter', title: 'Datacenter Services', desc: 'Server management & operations', icon: <ServerIco/> },
    { id: 'cabling', title: 'Infrastructure Cabling', desc: 'Structured cabling & fiber optics', icon: <NetworkIco/> },
    { id: 'field', title: 'UK Field Operations', desc: 'On-site smart hands deployment', icon: <MapPinIco/> },
  ],
  'Cloud & Security': [
    { id: 'cloud', title: 'Cybersecurity & Cloud', desc: 'Zero-trust security & managed cloud', icon: <CloudIco/> },
    { id: 'devops', title: 'DevOps Support', desc: 'CI/CD & infrastructure automation', icon: <ZapIco/> },
  ],
  'Software Engineering': [
    { id: 'ai', title: 'AI & Business Automation', desc: 'Intelligent automation & AI solutions', icon: <CpuIco/> },
    { id: 'software', title: 'Software Engineering', desc: 'Custom enterprise software', icon: <ZapIco/> },
    { id: 'web', title: 'Web Development', desc: 'Modern web applications', icon: <MonitorIco/> },
    { id: 'mobile', title: 'Mobile App Development', desc: 'iOS & Android native apps', icon: <PhoneDevIco/> },
  ],
  'Consulting & Advisory': [
    { id: 'consult', title: 'IT Consulting & Advisory', desc: 'Strategic technology guidance', icon: <BriefcaseIco/> },
    { id: 'rental', title: 'IT Rental & Asset Lifecycle', desc: 'Equipment rental & management', icon: <ServerIco/> },
  ],
};

/* ─── MAIN APP ───────────────────────────────────────────────────────────── */
export default function App() {
  const [theme, setTheme]         = useState(() => localStorage.getItem('axcis-theme') || 'dark');
  const [themeOpen, setThemeOpen] = useState(false);
  const [page, setPage]           = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [servicesMegaOpen, setServicesMegaOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Infrastructure & Support');

  // Enable scroll-triggered animations (only on home page)
  useEffect(() => {
    // Only run on home page
    if (page !== 'home') return;
    
    // Small delay to ensure page content is rendered
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-blur'
      );
      
      revealElements.forEach(el => {
        // Check if element is in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [page]);

  useScrollReveal(page);
  const [slide, setSlide]       = useState(0);
  const [activeSvc, setActiveSvc] = useState('support');
  const [toasts, setToasts]     = useState([]);
  const [form, setForm]         = useState({ name:'', email:'', company:'', phone:'', service:'Global IT Support', message:'' });
  const [sending, setSending]   = useState(false);
  const slideTimer = useRef(null);
  const canvasRef  = useRef(null);

  /* Particle canvas */
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let raf, W = (cv.width = window.innerWidth), H = (cv.height = window.innerHeight);
    const pts = Array.from({ length: Math.min(70, Math.floor(W / 20)) }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.32, vy: (Math.random()-.5)*.32, r: Math.random()*1.5+.6,
    }));
    let mx = null, my = null;
    const onMove = e => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { mx = null; my = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      const g = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H));
      g.addColorStop(0,'#080808'); g.addColorStop(.55,'#040404'); g.addColorStop(1,'#000');
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>H) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(0,212,255,0.28)'; ctx.fill();
      });
      for(let i=0;i<pts.length;i++){
        for(let j=i+1;j<pts.length;j++){
          const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<130){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,102,255,${.11*(1-d/130)})`;ctx.lineWidth=.7;ctx.stroke();}
        }
        if(mx!==null){const dx=pts[i].x-mx,dy=pts[i].y-my,d=Math.sqrt(dx*dx+dy*dy);if(d<200){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(mx,my);ctx.strokeStyle=`rgba(0,212,255,${.18*(1-d/200)})`;ctx.lineWidth=.9;ctx.stroke();}}
      }
      raf=requestAnimationFrame(draw);
    };
    draw();
    const onResize=()=>{W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;};
    window.addEventListener('resize',onResize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',onResize);window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseleave',onLeave);};
  }, []);

  useEffect(() => { const fn=()=>setScrolled(window.scrollY>60); window.addEventListener('scroll',fn); return()=>window.removeEventListener('scroll',fn); }, []);
  useEffect(() => { slideTimer.current=setInterval(()=>setSlide(p=>(p+1)%SLIDES.length),5500); return()=>clearInterval(slideTimer.current); }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  /* Theme */
  useEffect(() => {
    const root = document.documentElement;
    const apply = (t) => {
      const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    };
    apply(theme);
    localStorage.setItem('axcis-theme', theme);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => { if (theme === 'system') apply('system'); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme]);

  /* Close theme dropdown on outside click */
  useEffect(() => {
    if (!themeOpen) return;
    const fn = (e) => { if (!e.target.closest('.theme-toggle')) setThemeOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [themeOpen]);

  /* Close services mega menu on outside click */
  useEffect(() => {
    if (!servicesMegaOpen) return;
    const fn = (e) => { 
      if (!e.target.closest('.services-mega-wrapper')) setServicesMegaOpen(false); 
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [servicesMegaOpen]);

  const goSlide = i => { clearInterval(slideTimer.current); setSlide(i); slideTimer.current=setInterval(()=>setSlide(p=>(p+1)%SLIDES.length),5500); };
  const showToast = (msg, type='success') => { const id=Math.random().toString(36).slice(2); setToasts(p=>[...p,{id,msg,type}]); setTimeout(()=>setToasts(p=>p.filter(t=>t.id!==id)),5000); };
  const handleInput = e => setForm(p=>({...p,[e.target.name]:e.target.value}));
  const handleSubmit = async e => {
    e.preventDefault();
    if(!form.name||!form.email||!form.message){showToast('Please fill all required fields.','error');return;}
    setSending(true);
    try {
      const res=await fetch(`${import.meta.env.VITE_API_URL||''}/api/inquire`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const data=await res.json();
      if(res.ok){showToast(data.message||'Message sent! We will contact you shortly.');setForm({name:'',email:'',company:'',phone:'',service:'Global IT Support',message:''});}
      else showToast(data.error||'Submission failed.','error');
    } catch{showToast('Network error. Please try again.','error');}
    finally{setSending(false);}
  };
  const nav = (p, hash) => { setPage(p); setMenuOpen(false); setServicesMegaOpen(false); if(hash) setTimeout(()=>{const el=document.getElementById(hash);if(el)el.scrollIntoView({behavior:'smooth'});},80); else window.scrollTo(0,0); };

  const S = SLIDES[slide];
  const svc = SERVICES.find(s => s.id === activeSvc);

  return (
    <div className="axcis-root">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <canvas ref={canvasRef} style={{position:'fixed',inset:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}} aria-hidden="true"/>

      {/* Live region for toasts */}
      <div role="status" aria-live="polite" aria-atomic="true" className="toast-wrap">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast--${t.type}`}>{t.msg}</div>
        ))}
      </div>

      {/* ── HEADER ── */}
      <header className={`site-header${scrolled?' site-header--scrolled':''}`} role="banner">
        <div className="container nav__inner">
          <a href="#home" className="nav__logo" onClick={e=>{e.preventDefault();nav('home');}} aria-label="AXCIS — Go to homepage">
            <AxcisLogo size="lg"/>
          </a>
          <nav className="nav__links services-mega-wrapper" aria-label="Main navigation">
            <button className="nav__link" onClick={()=>{nav('home','about');setServicesMegaOpen(false);}}>About</button>
            <div style={{position:'relative'}}>
              <button 
                className="nav__link" 
                onMouseEnter={()=>setServicesMegaOpen(true)}
                onClick={()=>setServicesMegaOpen(!servicesMegaOpen)}
                aria-expanded={servicesMegaOpen}
              >
                Services <span style={{marginLeft:'4px',fontSize:'0.7em'}}>▼</span>
              </button>
              
              {/* SERVICES MEGA MENU */}
              <div className={`services-mega${servicesMegaOpen?' is-open':''}`}>
                <div className="services-mega__inner">
                  {/* Left - Categories */}
                  <div className="services-mega__categories">
                    <h3 className="services-mega__cat-title">Categories</h3>
                    <ul className="services-mega__cat-list">
                      {Object.keys(SERVICE_CATEGORIES).map(cat => (
                        <li 
                          key={cat}
                          className={`services-mega__cat-item${selectedCategory===cat?' active':''}`}
                          onMouseEnter={()=>setSelectedCategory(cat)}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Middle - Services Grid */}
                  <div className="services-mega__grid">
                    {SERVICE_CATEGORIES[selectedCategory].map(service => (
                      <button 
                        key={service.id}
                        className="services-mega__service"
                        onClick={()=>{setActiveSvc(service.id);nav('home','services');setServicesMegaOpen(false);}}
                      >
                        <div className="services-mega__service-icon">{service.icon}</div>
                        <div className="services-mega__service-content">
                          <h4 className="services-mega__service-title">
                            {service.title}
                            <ArrowRight/>
                          </h4>
                          <p className="services-mega__service-desc">{service.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Right - Featured */}
                  <div className="services-mega__featured">
                    <div className="services-mega__featured-card">
                      <span className="services-mega__featured-tag">Enterprise Ready</span>
                      <h4 className="services-mega__featured-title">Global IT Services at Scale</h4>
                      <p className="services-mega__featured-desc">
                        AXCIS delivers enterprise-grade technology solutions across 100+ countries with 24/7/365 support.
                      </p>
                      <div className="services-mega__featured-stats">
                        <div className="services-mega__stat">
                          <div className="services-mega__stat-value">100+</div>
                          <div className="services-mega__stat-label">Countries</div>
                        </div>
                        <div className="services-mega__stat">
                          <div className="services-mega__stat-value">24/7</div>
                          <div className="services-mega__stat-label">Support</div>
                        </div>
                      </div>
                      <button className="btn-primary btn-sm services-mega__cta" onClick={()=>{nav('home','contact');setServicesMegaOpen(false);}}>
                        Get Started <ArrowRight/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="nav__link" onClick={()=>{nav('home','industries');setServicesMegaOpen(false);}}>Industries</button>
            <button className="nav__link" onClick={()=>{nav('home','why');setServicesMegaOpen(false);}}>Why AXCIS</button>
            <button className="nav__link" onClick={()=>{nav('casestudy',null);setServicesMegaOpen(false);}}>Our Work</button>
            <button className="nav__link" onClick={()=>{nav('careers',null);setServicesMegaOpen(false);}}>Careers</button>
            <button className="nav__link" onClick={()=>{nav('home','contact');setServicesMegaOpen(false);}}>Contact</button>
          </nav>
          <div className="nav__cta">
            <a href="mailto:support@axcisltd.co.uk" className="btn-ghost btn-sm">Support</a>
            <button className="btn-primary btn-sm" onClick={()=>nav('home','contact')}>Get in Touch <ArrowRight/></button>
          </div>
          <button className="nav__toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-nav">
            {menuOpen?<CloseIcon/>:<MenuIcon/>}
          </button>
        </div>
        <nav id="mobile-nav" className={`nav__mobile${menuOpen?' nav__mobile--open':''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          <div className="mobile-menu-header">
            <AxcisLogo size="lg"/>
          </div>
          {[['About','home','about'],['Services','home','services'],['Industries','home','industries'],['Why AXCIS','home','why'],['Our Work','casestudy',null],['Careers','careers',null],['Contact','home','contact']].map(([label,pg,hash])=>(
            <button key={label} className="nav__mobile-link" onClick={()=>nav(pg,hash)} tabIndex={menuOpen?0:-1}>{label}</button>
          ))}
          <button className="btn-primary" style={{textAlign:'center',justifyContent:'center',marginTop:'1.5rem',width:'100%'}} onClick={()=>nav('home','contact')} tabIndex={menuOpen?0:-1}>Get in Touch <ArrowRight/></button>
        </nav>
      </header>

      {/* ── HOME ── */}
      {page==='home' && (
        <main id="main-content">
          {/* HERO */}
          <section id="home" className="hero-sec" aria-label="Hero">
            <div className="hero-glow" style={{background:`radial-gradient(ellipse at 50% 40%,${S.accent}14 0%,transparent 65%)`}} aria-hidden="true"/>
            <div className="container hero-inner hero-inner--centered" key={slide}>
              <h1 className="hero-h1">{S.h1a}<br/><span style={{color:S.accent}}>{S.h1b}</span></h1>
              <p className="hero-sub">{S.sub}</p>
              <div className="hero-actions">
                <button className="btn-primary btn-lg" onClick={()=>nav('home','contact')}>{S.cta} <ArrowRight/></button>
                <button className="btn-ghost btn-lg" onClick={()=>nav('home','services')}>Explore Services</button>
              </div>
            </div>
            <div className="hero-controls">
              <div className="hero-dots" role="tablist" aria-label="Hero slides">
                {SLIDES.map((sl,i)=>(
                  <button key={i} role="tab" aria-selected={i===slide} aria-label={`Slide ${i+1}: ${sl.h1a} ${sl.h1b}`}
                    className={`hero-dot${i===slide?' hero-dot--active':''}`} onClick={()=>goSlide(i)}
                    style={i===slide?{background:S.accent,boxShadow:`0 0 8px ${S.accent}`}:{}}/>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="sec-pad scroll-reveal" aria-labelledby="about-heading">
            <div className="container">
              <div className="about-grid">
                <div className="about-left">
                  <p className="sec-tag" aria-hidden="true">About AXCIS</p>
                  <h2 id="about-heading" className="sec-h2">The Central Axis of<br/><span className="grad-text">Global Technology</span></h2>
                  <p style={{fontSize:'1.05rem',lineHeight:1.85,marginBottom:'1.1rem'}}>AXCIS is a UK-registered technology company delivering world-class IT infrastructure, managed services, cybersecurity, and custom software engineering to enterprises globally. Headquartered in Luton, United Kingdom and operational across 100+ countries.</p>
                  <p style={{lineHeight:1.8,marginBottom:'1.8rem'}}>Founded with a vision to become the central axis around which enterprise technology revolves, AXCIS bridges the gap between global IT strategy and local execution. Our flexible services are available as packages or pay-as-you-go — ensuring every business can access premium technology support.</p>
                  <button className="btn-primary" style={{marginTop:'1rem',display:'inline-flex'}} onClick={()=>nav('home','contact')}>Partner With Us <ArrowRight/></button>
                </div>
                <div className="about-right">
                  <div className="glass-card">
                    <p className="sec-tag" style={{marginBottom:'1.25rem',display:'block'}} aria-hidden="true">Why Choose AXCIS?</p>
                    <dl>
                      {[
                        {icon:<ActivityIco/>,t:'24×7-365 Helpdesk',d:'Always-on support with multilingual engineers across every timezone.'},
                        {icon:<GlobeIco/>,t:'Global Service Availability',d:'Operational presence in 100+ countries with local expertise.'},
                        {icon:<UsersIco/>,t:'L1–L3 Certified Engineers',d:'Skilled professionals from deskside to datacenter level.'},
                        {icon:<ShieldIco/>,t:'Guaranteed SLA Response',d:'Under-4-hour UK field dispatch with contractual SLA guarantees.'},
                      ].map((f,i)=>(
                        <div key={i} className="about-feat">
                          <div className="about-feat__icon" aria-hidden="true">{f.icon}</div>
                          <div>
                            <dt style={{fontSize:'0.95rem',fontWeight:700,marginBottom:'0.2rem',color:'var(--text-b)'}}>{f.t}</dt>
                            <dd style={{fontSize:'0.83rem',color:'var(--text-m)'}}>{f.d}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="sec-pad sec-alt scroll-reveal" aria-labelledby="services-heading">
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Our Capabilities</p>
                <h2 id="services-heading" className="sec-h2">Global Core Services</h2>
                <p>AXCIS provides the critical technology layers modern enterprises need — from infrastructure and security to custom software and on-site field operations.</p>
              </div>
              <div className="svc-grid" role="list">
                {SERVICES.map(s=>(
                  <button key={s.id} role="listitem" className={`svc-card${activeSvc===s.id?' svc-card--active':''}`}
                    onClick={()=>setActiveSvc(s.id)} aria-pressed={activeSvc===s.id}
                    aria-label={`${s.title} — ${s.short}`} style={{'--sc':s.color}}>
                    <h3 className="svc-card__title">{s.title}</h3>
                    <p className="svc-card__short">{s.short}</p>
                    <span className="svc-card__arrow" aria-hidden="true"><ArrowRight/></span>
                  </button>
                ))}
              </div>
              {svc && (
                <div className="svc-detail" aria-live="polite" aria-label={`${svc.title} details`} style={{'--sc':svc.color}}>
                  <div className="svc-detail__left">
                    <h3 style={{fontSize:'2rem',marginBottom:'1rem',fontWeight:900,letterSpacing:'-0.02em'}}>{svc.title}</h3>
                    <p style={{fontSize:'1rem',color:'var(--text-m)',marginBottom:'2.5rem',lineHeight:1.8}}>{svc.tagline}</p>
                    <button className="btn-primary" style={{marginTop:'auto'}} onClick={()=>nav('home','contact')}>Request This Service <ArrowRight/></button>
                  </div>
                  <ul className="svc-detail__feats" aria-label={`${svc.title} features`}>
                    {svc.features.map((f,i)=>(
                      <li key={i} className="svc-detail__feat">
                        <span aria-hidden="true"><CheckIco/></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* INDUSTRIES */}
          <section id="industries" className="sec-pad scroll-reveal" aria-labelledby="industries-heading">
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Industries We Serve</p>
                <h2 id="industries-heading" className="sec-h2">Built for Every Sector</h2>
                <p>From financial services to manufacturing, AXCIS delivers tailored technology solutions across the industries that power the global economy.</p>
              </div>
              <ul className="ind-grid" aria-label="Industries served">
                {INDUSTRIES.map((name,i)=>(
                  <li key={i} className="ind-card">
                    <span className="ind-card__name">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* WHY AXCIS + COLLABORATE */}
          <section id="why" className="sec-pad scroll-reveal" aria-labelledby="why-heading">
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Why AXCIS</p>
                <h2 id="why-heading" className="sec-h2">Built for Enterprise Trust</h2>
                <p>The standards, security, and scalability that global enterprises require — delivered with long-term partnership at the core.</p>
              </div>
              <ul className="values-grid" aria-label="AXCIS values">
                {VALUES.map((v,i)=>(
                  <li key={i} className="value-card">
                    <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                    <h3 className="value-card__title">{v.title}</h3>
                    <p className="value-card__desc">{v.desc}</p>
                  </li>
                ))}
              </ul>

              {/* COLLABORATE */}
              <div id="collaborate" style={{marginTop:'5rem'}}>
                <div className="collab-hero">
                  <div className="collab-hero__text">
                    <p className="sec-tag" aria-hidden="true">Strategic Collaboration</p>
                    <h2 className="sec-h2">Let's Build Something<br/>Extraordinary Together</h2>
                    <p style={{fontSize:'1.05rem',lineHeight:1.85,maxWidth:560,color:'var(--text-m)'}}>AXCIS is a fast-growing UK technology company with global ambitions. We are actively seeking IT service providers, technology companies, and field operations firms to collaborate on projects, share capacity, and grow together.</p>
                    <div style={{display:'flex',gap:'1rem',marginTop:'2rem',flexWrap:'wrap'}}>
                      <button className="btn-primary" onClick={()=>nav('home','contact')}>Start a Conversation <ArrowRight/></button>
                      <a href="mailto:contact@axcisltd.co.uk" className="btn-ghost">contact@axcisltd.co.uk</a>
                    </div>
                  </div>
                  <div className="collab-hero__visual" aria-hidden="true">
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <circle cx="160" cy="160" r="130" className="collab-orbit-ring" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="4 6"/>
                      <circle cx="160" cy="160" r="90" className="collab-orbit-ring" stroke="rgba(16,185,129,0.18)" strokeWidth="1" strokeDasharray="3 5"/>
                      <circle cx="160" cy="160" r="50" className="collab-orbit-ring" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5"/>
                      <rect x="130" y="140" width="60" height="40" rx="6" className="collab-orbit-center" fill="#10b981" stroke="#059669" strokeWidth="1.5"/>
                      <text x="160" y="165" textAnchor="middle" className="collab-orbit-center-text" fill="#fff" fontSize="11" fontWeight="800" fontFamily="Outfit,sans-serif">AXCIS</text>
                      {[{a:0,l:'IT Firms'},{a:60,l:'MSPs'},{a:120,l:'Resellers'},{a:180,l:'Field Ops'},{a:240,l:'Tech Vendors'},{a:300,l:'Consultants'}].map(({a,l})=>{
                        const r=(a*Math.PI)/180,x=160+130*Math.cos(r),y=160+130*Math.sin(r),lx=160+90*Math.cos(r),ly=160+90*Math.sin(r);
                        return(<g key={l}><line x1={lx} y1={ly} x2={x} y2={y} className="collab-orbit-line" stroke="rgba(16,185,129,0.4)" strokeWidth="1"/><circle cx={x} cy={y} r="22" className="collab-orbit-node" fill="#10b981" stroke="#059669" strokeWidth="1.5"/><text x={x} y={y+4} textAnchor="middle" className="collab-orbit-text" fill="#fff" fontSize="7.5" fontWeight="700" fontFamily="Outfit,sans-serif">{l}</text></g>);
                      })}
                    </svg>
                  </div>
                </div>
                <ul className="collab-grid" aria-label="Collaboration models">
                  {COLLAB_MODELS.map((c,i)=>(
                    <li key={i} className="collab-card">
                      <div className="collab-card__icon" aria-hidden="true" style={{color:'#10b981',borderColor:'rgba(16,185,129,0.35)',background:'rgba(16,185,129,0.1)'}}>{c.icon}</div>
                      <h3 className="collab-card__title">{c.t}</h3>
                      <p className="collab-card__desc">{c.d}</p>
                      <ul className="collab-card__bullets" aria-label={`${c.t} benefits`}>
                        {c.bullets.map(b=>(<li key={b}><span aria-hidden="true"><CheckIco/></span>{b}</li>))}
                      </ul>
                      <button className="collab-card__cta" style={{color:'#10b981'}} onClick={()=>nav('home','contact')}>{c.cta} <ArrowRight/></button>
                      <div className="collab-card__glow" style={{background:'#10b981'}} aria-hidden="true"/>
                    </li>
                  ))}
                </ul>
                <ul className="collab-why-points" aria-label="Why collaborate with AXCIS">
                  {[{n:'01',t:'Fast Deal Cycles',d:'No lengthy procurement. We move at startup speed — decisions made in days, not months.'},{n:'02',t:'Direct Access',d:'Work directly with AXCIS leadership. No account managers, no middlemen.'},{n:'03',t:'Global Reach',d:'Tap into our 100+ country operational network to deliver projects anywhere.'},{n:'04',t:'Long-Term Vision',d:'We are building for decades. Our partnerships are designed to grow with us.'}].map(p=>(
                    <li key={p.n} className="collab-why__point">
                      <span className="collab-why__num" aria-hidden="true">{p.n}</span>
                      <div><h3 style={{fontSize:'0.95rem',marginBottom:'0.3rem',color:'var(--text-b)'}}>{p.t}</h3><p style={{fontSize:'0.85rem',color:'var(--text-m)'}}>{p.d}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section id="case-studies" className="sec-pad scroll-reveal" aria-labelledby="case-studies-heading" style={{background:'linear-gradient(180deg, var(--bg-main) 0%, #001125 100%)'}}>
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Case Studies</p>
                <h2 id="case-studies-heading" className="sec-h2">Enterprise Outcomes That Matter</h2>
                <p>Real-world projects delivering measurable business impact across infrastructure, cloud, AI, and security.</p>
              </div>
              <ul className="case-studies__grid" style={{display:'grid',gap:'2rem',gridTemplateColumns:'repeat(auto-fit,minmax(min(340px,100%),1fr))',marginTop:'3rem'}}>
                {CASE_STUDIES.map((study)=>(
                  <li 
                    key={study.id} 
                    className="glass-card" 
                    style={{
                      padding:'2rem',
                      cursor: study.id === 'coinbase-infrastructure' ? 'pointer' : 'default',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                    onClick={() => study.id === 'coinbase-infrastructure' && nav('casestudy')}
                    onMouseEnter={(e) => study.id === 'coinbase-infrastructure' && (e.currentTarget.style.transform = 'translateY(-4px)', e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.25)')}
                    onMouseLeave={(e) => study.id === 'coinbase-infrastructure' && (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '')}
                  >
                    <span style={{fontSize:'0.75rem',textTransform:'uppercase',color:'#10b981',fontWeight:700,letterSpacing:'0.08em',display:'block',marginBottom:'0.75rem'}}>{study.industry}</span>
                    <h3 style={{fontSize:'1.25rem',fontWeight:700,marginBottom:'1rem',color:'var(--text-b)'}}>{study.title}</h3>
                    <div style={{marginBottom:'1.5rem'}}>
                      <h4 style={{fontSize:'0.8rem',textTransform:'uppercase',color:'var(--text-m)',fontWeight:700,letterSpacing:'0.05em',marginBottom:'0.5rem'}}>Challenge</h4>
                      <p style={{fontSize:'0.9rem',color:'var(--text-m)',lineHeight:1.6}}>{study.challenge}</p>
                    </div>
                    <div style={{marginBottom:'1.5rem'}}>
                      <h4 style={{fontSize:'0.8rem',textTransform:'uppercase',color:'var(--text-m)',fontWeight:700,letterSpacing:'0.05em',marginBottom:'0.5rem'}}>Outcome</h4>
                      <p style={{fontSize:'0.9rem',color:'var(--text-m)',lineHeight:1.6}}>{study.outcome}</p>
                    </div>
                    <div style={{display:'flex',gap:'1.5rem',marginBottom:'1.5rem',flexWrap:'wrap'}}>
                      {study.metrics.map((m)=>(
                        <div key={m.label}>
                          <div style={{fontSize:'1.6rem',fontWeight:800,color:'#10b981',lineHeight:1}}>{m.value}</div>
                          <div style={{fontSize:'0.75rem',color:'var(--text-m)',marginTop:'0.25rem'}}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
                      {study.stack.map((tech)=>(
                        <span key={tech} style={{fontSize:'0.75rem',padding:'0.35rem 0.75rem',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'4px',color:'#10b981',fontWeight:600}}>{tech}</span>
                      ))}
                    </div>
                    {study.id === 'coinbase-infrastructure' && (
                      <button 
                        className="btn-primary btn-sm" 
                        style={{marginTop:'1.5rem',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}
                        onClick={(e) => {
                          e.stopPropagation();
                          nav('casestudy');
                        }}
                      >
                        View Full Case Study <ArrowRight/>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="sec-pad sec-alt scroll-reveal" aria-labelledby="contact-heading">
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Get in Touch</p>
                <h2 id="contact-heading" className="sec-h2">Architect Your Solution</h2>
                <p>Connect with the AXCIS team to optimise your IT operations, secure your infrastructure, or schedule a UK field dispatch.</p>
              </div>
              <div className="contact-grid">
                <div className="contact-info" aria-label="Contact details">
                  {[
                    {icon:<PhoneIcon/>,label:'Phone',val:'+44 7498 512294',href:'tel:+4407498512294'},
                    {icon:<MailIcon/>,label:'General Enquiries',val:'contact@axcisltd.co.uk',href:'mailto:contact@axcisltd.co.uk'},
                    {icon:<MailIcon/>,label:'Technical Support',val:'support@axcisltd.co.uk',href:'mailto:support@axcisltd.co.uk'},
                    {icon:<MapPinIco/>,label:'Registered Office',val:'10 Stockwood Crescent, Luton LU1 3SS, United Kingdom',href:null},
                    {icon:<GlobeIco/>,label:'Website',val:'axcisltd.co.uk',href:'https://www.axcisltd.co.uk'},
                  ].map((item,i)=>(
                    <div key={i} className="contact-info__item">
                      <div className="contact-info__icon" aria-hidden="true">{item.icon}</div>
                      <div>
                        <p className="contact-info__label">{item.label}</p>
                        {item.href
                          ? <a href={item.href} className="contact-info__val" style={{color:'#ffffff'}}>{item.val}</a>
                          : <p className="contact-info__val">{item.val}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contact-form-wrap">
                  <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact enquiry form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="f-name">Full Name <span aria-label="required">*</span></label>
                        <input id="f-name" type="text" name="name" value={form.name} onChange={handleInput} placeholder="Jane Smith" required autoComplete="name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="f-email">Corporate Email <span aria-label="required">*</span></label>
                        <input id="f-email" type="email" name="email" value={form.email} onChange={handleInput} placeholder="jane@company.com" required autoComplete="email"/>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="f-company">Company Name</label>
                        <input id="f-company" type="text" name="company" value={form.company} onChange={handleInput} placeholder="Acme Corp" autoComplete="organization"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="f-phone">Phone Number</label>
                        <input id="f-phone" type="tel" name="phone" value={form.phone} onChange={handleInput} placeholder="+44 7700 900000" autoComplete="tel"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-service">Service Required</label>
                      <select id="f-service" name="service" value={form.service} onChange={handleInput}>
                        {SVC_FORM_OPTS.map(o=><option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-message">Message <span aria-label="required">*</span></label>
                      <textarea id="f-message" name="message" value={form.message} onChange={handleInput} placeholder="Tell us about your requirements..." required/>
                    </div>
                    <button type="submit" className="btn-primary btn-full" disabled={sending} aria-busy={sending}>
                      {sending?'Sending…':'Send Enquiry'} {!sending && <ArrowRight/>}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* MAP LOCATION - Vector.ai Style */}
          <section className="location-map-section scroll-reveal-scale">
            <div className="container">
              <div className="location-map-header">
                <p className="sec-tag">Locate Us</p>
                <h2 className="sec-h2">Our Location</h2>
                <p style={{textAlign:'center',maxWidth:'600px',margin:'0 auto 2.5rem',color:'var(--text-m)'}}>
                  Visit our office in Hatfield, United Kingdom
                </p>
              </div>
              <div className="location-map-container">
                <a 
                  href="https://maps.app.goo.gl/4iBi9sW3mLKrgoM38" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-map-link"
                  aria-label="View our location on Google Maps"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!4v1781862622412!6m8!1m7!1s7CrAJCMpquRKw5YbnQlV7g!2m2!1d51.87310624558452!2d-0.4193536509153122!3f217.69347!4f0!5f0.7820865974627469" 
                    width="100%" 
                    height="500" 
                    style={{border:0,borderRadius:'var(--r-lg)',display:'block'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AXCIS Office Location - Hatfield, United Kingdom"
                  />
                  <div className="map-overlay">
                    <span className="map-overlay-text">
                      <MapPinIco style={{width:'20px',height:'20px'}}/>
                      Open in Google Maps
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ── CAREERS ── */}
      {page==='careers' && (
        <main id="main-content">
          <section className="sec-pad" style={{minHeight:'100vh',paddingTop:'calc(var(--nav-h) + 4rem)'}} aria-labelledby="careers-heading">
            <div className="container">
              <div className="sec-head">
                <p className="sec-tag" aria-hidden="true">Join AXCIS</p>
                <h1 id="careers-heading" className="sec-h2">Build the Future With Us</h1>
                <p>Join our global team of elite engineers, consultants, and visionaries. We are a startup with billion-dollar ambitions — and we want people who share that vision.</p>
              </div>
              <ul className="perks-grid" aria-label="Employee benefits">
                {[{icon:<GlobeIco/>,t:'Remote-First Culture',d:'Work from anywhere in the world with flexible hours.'},{icon:<ZapIco/>,t:'Fast-Track Growth',d:'Startup pace means rapid career progression and ownership.'},{icon:<ShieldIco/>,t:'Competitive Packages',d:'Market-rate salaries, equity options, and performance bonuses.'},{icon:<UsersIco/>,t:'Elite Team',d:'Work alongside world-class engineers and industry veterans.'}].map((p,i)=>(
                  <li key={i} className="perk-card">
                    <div className="perk-card__icon" aria-hidden="true">{p.icon}</div>
                    <h2 style={{fontSize:'1rem',marginBottom:'0.4rem'}}>{p.t}</h2>
                    <p style={{fontSize:'0.85rem',color:'var(--text-m)'}}>{p.d}</p>
                  </li>
                ))}
              </ul>
              <h2 style={{fontSize:'1.4rem',marginBottom:'1.5rem',marginTop:'3rem'}}>Open Positions</h2>
              <ul className="jobs-grid" aria-label="Open job positions">
                {JOBS.map((j,i)=>(
                  <li key={i} className="job-card">
                    <p className="job-card__dept">{j.dept}</p>
                    <h3 className="job-card__title">{j.title}</h3>
                    <dl className="job-card__meta">
                      <div><dt className="sr-only">Location</dt><dd><MapPinIco/>{j.location}</dd></div>
                      <div><dt className="sr-only">Type</dt><dd><BriefcaseIco/>{j.type}</dd></div>
                    </dl>
                    <button className="btn-primary btn-sm" style={{marginTop:'auto'}} onClick={()=>nav('home','contact')}>Apply Now <ArrowRight/></button>
                  </li>
                ))}
              </ul>
              <div className="general-apply">
                <div>
                  <h2 style={{fontSize:'1.3rem',marginBottom:'0.5rem'}}>Don't see your role?</h2>
                  <p style={{color:'var(--text-m)'}}>We are always looking for exceptional talent. Send us your CV and we will be in touch.</p>
                  <p style={{fontSize:'0.85rem',marginTop:'0.4rem'}}>
                    <a href="mailto:careers@axcisltd.co.uk" style={{color:'#ffffff',fontWeight:600}}>careers@axcisltd.co.uk</a>
                  </p>
                </div>
                <a href="mailto:contact@axcisltd.co.uk?subject=General Application" className="btn-primary">Send Your CV <ArrowRight/></a>
              </div>
            </div>
          </section>
        </main>
      )}

      {page==='casestudy' && <CaseStudyPage />}

      {/* ── FOOTER ── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" onClick={e=>{e.preventDefault();nav('home');}} aria-label="AXCIS homepage"><AxcisLogo size="sm"/></a>
              <p>Building the Axis of Intelligent Systems — enterprise cloud, AI, cybersecurity, and digital transformation solutions from the United Kingdom worldwide.</p>
              <nav className="footer-social" aria-label="Social media links">
                <a href="https://www.linkedin.com/company/axcisltd/" target="_blank" rel="noopener noreferrer" aria-label="AXCIS on LinkedIn"><LinkedInIco/></a>
                <a href="mailto:contact@axcisltd.co.uk" aria-label="Email AXCIS"><MailIcon/></a>
                <a href="tel:+4407498512294" aria-label="Call AXCIS"><PhoneIcon/></a>
              </nav>
            </div>
            <div className="footer-col">
              <h2 className="footer-col-heading">Services</h2>
              <nav aria-label="Services links">
                {['Global IT Support','Cybersecurity & Cloud','Software Engineering & AI','UK Field Operations','IT Rental & Asset Lifecycle','IT Consulting & Advisory'].map(s=>(
                  <button key={s} className="footer-link" onClick={()=>nav('home','services')}>{s}</button>
                ))}
              </nav>
            </div>
            <div className="footer-col">
              <h2 className="footer-col-heading">Company</h2>
              <nav aria-label="Company links">
                <button className="footer-link" onClick={()=>nav('home','about')}>About AXCIS</button>
                <button className="footer-link" onClick={()=>nav('home','industries')}>Industries</button>
                <button className="footer-link" onClick={()=>nav('home','collaborate')}>Collaborate</button>
                <button className="footer-link" onClick={()=>nav('home','why')}>Why AXCIS</button>
                <button className="footer-link" onClick={()=>nav('careers',null)}>Careers</button>
                <button className="footer-link" onClick={()=>nav('home','contact')}>Contact</button>
              </nav>
            </div>
            <div className="footer-col">
              <h2 className="footer-col-heading">Contact</h2>
              <address style={{fontStyle:'normal'}}>
                <a href="tel:+4407498512294" className="footer-link footer-link--icon"><PhoneIcon/>+44 7498 512294</a>
                <a href="mailto:contact@axcisltd.co.uk" className="footer-link footer-link--icon"><MailIcon/>contact@axcisltd.co.uk</a>
                <a href="mailto:support@axcisltd.co.uk" className="footer-link footer-link--icon"><MailIcon/>support@axcisltd.co.uk</a>
                <p className="footer-link footer-link--icon"><MapPinIco/>10 Stockwood Crescent, Luton LU1 3SS, UK</p>
                <a href="https://www.axcisltd.co.uk" target="_blank" rel="noopener noreferrer" className="footer-link footer-link--icon"><GlobeIco/>axcisltd.co.uk</a>
              </address>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AXCIS Ltd. All rights reserved. Registered in England &amp; Wales.</p>
            <nav className="footer-bottom-links" aria-label="Legal links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms &amp; Conditions</a>
              <a href="#cookies">Cookie Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
