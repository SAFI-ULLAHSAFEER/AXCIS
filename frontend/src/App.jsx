import React, { useState, useEffect, useRef } from 'react';

/* ─── ICONS ─────────────────────────────────────────────────────────────── */
const ArrowRight   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ChevLeft     = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const ChevRight    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const MenuIcon     = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon    = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const MailIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPin       = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const BriefcaseIco = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const ShieldIco    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const CloudIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const CpuIco       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>;
const ServerIco    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
const GlobeIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const UsersIco     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ZapIco       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const NetworkIco   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>;
const CheckIco     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const LinkedInIco  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const ActivityIco  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;

/* ─── AXCIS LOGO (icon mark + wordmark) ─────────────────────────────────── */
const AxcisLogo = ({ size = 'md' }) => {
  const s = size === 'lg' ? 48 : size === 'sm' ? 30 : 38;
  const fs = size === 'lg' ? 30 : size === 'sm' ? 19 : 24;
  const gap = size === 'sm' ? '0.45rem' : '0.65rem';
  return (
    <div style={{ display:'flex', alignItems:'center', gap, cursor:'pointer', userSelect:'none' }}>
      <svg width={s} height={s} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="lgo-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect x="2" y="2" width="96" height="96" rx="22" ry="22" fill="#0a0a0c" stroke="rgba(0,200,255,0.18)" strokeWidth="1.5"/>
        <line x1="50" y1="17" x2="50" y2="35" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="50" y1="65" x2="50" y2="83" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="17" y1="50" x2="35" y2="50" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="65" y1="50" x2="83" y2="50" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="24" y1="24" x2="37" y2="37" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="63" y1="63" x2="76" y2="76" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="76" y1="24" x2="63" y2="37" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="24" y1="76" x2="37" y2="63" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="4.5" fill="#00d4ff" filter="url(#lgo-glow)"/>
      </svg>
      <svg width={fs * 4.4} height={fs * 1.3} viewBox="0 0 148 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wm-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="50%" stopColor="#d0d6e8"/>
            <stop offset="100%" stopColor="#8892aa"/>
          </linearGradient>
        </defs>
        <text x="2" y="34" fill="url(#wm-g)" fontSize="36" fontWeight="900"
          fontFamily="'Outfit','Inter',sans-serif" letterSpacing="5">AXCIS</text>
      </svg>
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
          const ease = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(ease * to));
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
  {
    tag: 'UK Registered IT Services · Global Operations',
    h1a: 'The Central Axis of', h1b: 'Enterprise Technology',
    sub: 'AXCIS delivers world-class IT infrastructure, managed cloud, cybersecurity, and UK field services — all from one unified command centre.',
    accent: '#00d4ff', cta: 'Get a Free Consultation',
  },
  {
    tag: 'Your Partner in Seamless IT Operations',
    h1a: 'Your Partner in', h1b: 'Seamless IT Operations',
    sub: 'From deskside support to datacenter management, AXCIS engineers keep your business running without interruption across every timezone.',
    accent: '#0066ff', cta: 'Explore Services',
  },
  {
    tag: 'Nationwide UK Smart-Hands',
    h1a: 'Field Operations', h1b: 'Under 4-Hour SLA',
    sub: 'Certified engineers dispatched across the United Kingdom with guaranteed response times. Hardware, cabling, audits — on-site, on time.',
    accent: '#10b981', cta: 'Request Field Dispatch',
  },
  {
    tag: 'AI · Cloud · Custom Software',
    h1a: 'Engineering', h1b: 'the Future, Together',
    sub: 'Custom software platforms, AI integrations, and zero-trust cloud architectures built for enterprises that demand global-scale performance.',
    accent: '#7c3aed', cta: 'Start a Project',
  },
];

const SERVICES = [
  { id:'support', icon:<NetworkIco/>, color:'#0066ff', cat:'Managed IT',
    title:'24/7 Global IT Support', short:'Round-the-clock support across 100+ countries.',
    tagline:'Deskside, network & datacenter support — always on, always global.',
    features:['Deskside support & network operations','Datacenter support & management','Multilingual helpdesk (L1–L3)','Proactive monitoring & incident response','Global fiber & edge networking solutions'] },
  { id:'cloud', icon:<CloudIco/>, color:'#4f46e5', cat:'Cloud & Security',
    title:'Cybersecurity & Cloud', short:'Zero-trust security and managed cloud operations.',
    tagline:'Continuous, zero-trust cloud orchestration engineered for maximum reliability.',
    features:['24/7/365 Security Operations Center (SOC)','Firewall & cloud security solutions','Advanced threat intelligence & zero-trust','GDPR, ISO 27001 compliance assurance','Multi-cloud architecture & migration'] },
  { id:'software', icon:<CpuIco/>, color:'#00d4ff', cat:'Engineering',
    title:'Software Engineering & AI', short:'Custom platforms and AI integrations at scale.',
    tagline:'Next-generation custom platforms structured for ultimate throughput.',
    features:['Custom web & mobile application development','AI & machine learning integrations','Microservices & API architecture','DevOps, CI/CD & cloud-native delivery','Real-time analytics & business intelligence'] },
  { id:'field', icon:<MapPin/>, color:'#10b981', cat:'Field Services',
    title:'UK Field Operations', short:'Smart-hands deployment across the United Kingdom.',
    tagline:'Smart-hands deployment and real-time hardware maintenance nationwide.',
    features:['Under-4-hour emergency hardware SLA','Datacenter audits, rack cabling & decommissioning','On-demand certified engineers dispatched on-site','IT IMACD (Install, Move, Add, Change, Dispose)','Infrastructure cabling & structured wiring'] },
  { id:'rental', icon:<ServerIco/>, color:'#f59e0b', cat:'Asset Services',
    title:'IT Rental & Asset Lifecycle', short:'Quality IT equipment rentals and lifecycle management.',
    tagline:'Flexible IT equipment rental tailored to diverse business needs.',
    features:['Laptops, desktops, printers & peripherals','Short and long-term rental packages','IT staging, imaging & logistics','Global procurement & in-country sourcing','Certified e-waste disposal & data destruction'] },
  { id:'consult', icon:<BriefcaseIco/>, color:'#ec4899', cat:'Advisory',
    title:'IT Consulting & Advisory', short:'Strategic advisory to grow your business with tech.',
    tagline:'Expert consultants helping you meet short and long-term IT objectives.',
    features:['Business technology strategy & roadmapping','Digital transformation advisory','Vendor selection & procurement guidance','IT budget optimisation & cost reduction','Compliance & governance frameworks'] },
];


const INDUSTRIES = [
  { name:'Financial Services', icon:<ActivityIco/>, color:'#10b981' },
  { name:'Healthcare & Life Sciences', icon:<ShieldIco/>, color:'#0066ff' },
  { name:'Telecommunications', icon:<NetworkIco/>, color:'#00d4ff' },
  { name:'Manufacturing', icon:<ZapIco/>, color:'#f59e0b' },
  { name:'Retail & E-Commerce', icon:<UsersIco/>, color:'#ec4899' },
  { name:'Energy & Utilities', icon:<GlobeIco/>, color:'#ef4444' },
  { name:'Public Sector', icon:<BriefcaseIco/>, color:'#7c3aed' },
  { name:'Technology & SaaS', icon:<CpuIco/>, color:'#00d4ff' },
];

const VALUES = [
  { icon:<ShieldIco/>, title:'Integrity First', desc:'Complete transparency in every engagement — no hidden costs, no surprises, no excuses.' },
  { icon:<ZapIco/>, title:'Operational Velocity', desc:'Rapid global field mobilisation with structured SLAs — speed without sacrificing standards.' },
  { icon:<GlobeIco/>, title:'Global Mindset', desc:'Thinking and operating at worldwide scale while delivering local precision and expertise.' },
  { icon:<UsersIco/>, title:'People Powered', desc:'Our certified L1–L3 engineers and consultants are the backbone of every deployment.' },
  { icon:<ActivityIco/>, title:'Relentless Uptime', desc:'We engineer for 99.999% availability because your business cannot afford downtime.' },
  { icon:<CheckIco/>, title:'Excellence Always', desc:'Every project, every ticket, every field dispatch executed to the highest standard.' },
];

const JOBS = [
  { title:'Senior Network Engineer', location:'London, UK', type:'Full-time', dept:'Infrastructure' },
  { title:'Cloud Security Architect', location:'Remote (UK)', type:'Full-time', dept:'Security' },
  { title:'Field Support Technician', location:'Manchester, UK', type:'Full-time', dept:'Field Ops' },
  { title:'Full Stack Developer', location:'Remote (Global)', type:'Full-time', dept:'Software' },
  { title:'IT Project Manager', location:'London, UK', type:'Full-time', dept:'Consulting' },
  { title:'Datacenter Operations Lead', location:'Birmingham, UK', type:'Full-time', dept:'Infrastructure' },
];

const SVC_FORM_OPTS = ['Global IT Support','Cybersecurity & Cloud','Software Engineering & AI','UK Field Operations','IT Rental & Asset Lifecycle','IT Consulting & Advisory','Partnership Inquiry','General Inquiry'];

/* ─── MAIN APP ───────────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage]           = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [slide, setSlide]         = useState(0);
  const [activeSvc, setActiveSvc] = useState('support');
  const [toasts, setToasts]       = useState([]);
  const [form, setForm]           = useState({ name:'', email:'', company:'', phone:'', service:'Global IT Support', message:'' });
  const [sending, setSending]     = useState(false);
  const slideTimer = useRef(null);
  const canvasRef  = useRef(null);

  // ── Particle canvas ──────────────────────────────────────────────────────
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let raf;
    let W = (cv.width  = window.innerWidth);
    let H = (cv.height = window.innerHeight);
    const count = Math.min(70, Math.floor(W / 20));
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r:  Math.random() * 1.5 + 0.6,
    }));
    let mx = null, my = null;
    const onMove  = e => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { mx = null; my = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // background gradient
      const g = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W, H));
      g.addColorStop(0,   '#07090f');
      g.addColorStop(0.55,'#050608');
      g.addColorStop(1,   '#020203');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // ambient glows
      ctx.beginPath(); ctx.arc(W*0.78, H*0.18, 340, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(0,102,255,0.045)'; ctx.fill();
      ctx.beginPath(); ctx.arc(W*0.12, H*0.82, 240, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(0,212,255,0.03)'; ctx.fill();
      // move & draw dots
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(0,212,255,0.28)'; ctx.fill();
      });
      // particle-to-particle lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,102,255,${0.11*(1-d/130)})`;
            ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
        // cursor-to-particle lines
        if (mx !== null) {
          const dx = pts[i].x - mx, dy = pts[i].y - my;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 200) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(0,212,255,${0.18*(1-d/200)})`;
            ctx.lineWidth = 0.9; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',    onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave',onLeave);
    };
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    slideTimer.current = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(slideTimer.current);
  }, []);

  const goSlide = i => {
    clearInterval(slideTimer.current);
    setSlide(i);
    slideTimer.current = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 5500);
  };

  const showToast = (msg, type = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 5000);
  };

  const handleInput = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { showToast('Please fill all required fields.', 'error'); return; }
    setSending(true);
    try {
      const res = await fetch('/api/inquire', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { showToast(data.message || 'Message sent! We will contact you shortly.'); setForm({ name:'', email:'', company:'', phone:'', service:'Global IT Support', message:'' }); }
      else showToast(data.error || 'Submission failed.', 'error');
    } catch { showToast('Network error. Please try again.', 'error'); }
    finally { setSending(false); }
  };

  const nav = (p, hash) => {
    setPage(p);
    setMenuOpen(false);
    if (hash) setTimeout(() => { const el = document.getElementById(hash); if (el) el.scrollIntoView({ behavior:'smooth' }); }, 80);
    else window.scrollTo(0, 0);
  };

  const S = SLIDES[slide];
  const svc = SERVICES.find(s => s.id === activeSvc);

  return (
    <div className="axcis-root">
      <canvas ref={canvasRef} style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }} />

      {/* TOASTS */}
      <div className="toast-wrap">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast--${t.type}`}>
            <span>{t.type === 'success' ? '✓' : '✕'}</span> {t.msg}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════════════ */}
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        {/* Top bar — left side only */}
        <div className="topbar">
          <div className="container topbar__inner">
            <div className="topbar__left">
              <a href="tel:07498512294" className="topbar__item"><PhoneIcon/>07498 512294</a>
              <a href="mailto:contact@axcisltd.co.uk" className="topbar__item"><MailIcon/>contact@axcisltd.co.uk</a>
              <a href="mailto:support@axcisltd.co.uk" className="topbar__item"><MailIcon/>support@axcisltd.co.uk</a>
            </div>
          </div>
        </div>
        {/* Main nav */}
        <div className="container nav__inner">
          <div onClick={() => nav('home')} className="nav__logo"><AxcisLogo/></div>
          <nav className="nav__links">
            {[['About','home','about'],['Services','home','services'],['Industries','home','industries'],['Why AXCIS','home','why'],['Careers','careers',null],['Contact','home','contact']].map(([label, pg, hash]) => (
              <span key={label} className="nav__link" onClick={() => nav(pg, hash)}>{label}</span>
            ))}
          </nav>
          <div className="nav__cta">
            <a href="mailto:support@axcisltd.co.uk" className="btn-ghost btn-sm">Support</a>
            <span className="btn-primary btn-sm" onClick={() => nav('home','contact')}>Get in Touch <ArrowRight/></span>
          </div>
          <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            {menuOpen ? <CloseIcon/> : <MenuIcon/>}
          </button>
        </div>
        {/* Mobile menu */}
        <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}>
          {[['About','home','about'],['Services','home','services'],['Industries','home','industries'],['Why AXCIS','home','why'],['Careers','careers',null],['Contact','home','contact']].map(([label, pg, hash]) => (
            <span key={label} className="nav__mobile-link" onClick={() => nav(pg, hash)}>{label}</span>
          ))}
          <span className="btn-primary" style={{textAlign:'center',justifyContent:'center',marginTop:'1rem'}} onClick={() => nav('home','contact')}>Get in Touch <ArrowRight/></span>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          HOME PAGE
      ══════════════════════════════════════════════════ */}
      {page === 'home' && (
        <>
        {/* ── HERO SLIDER ── */}
        <section id="home" className="hero-sec">
          <div className="hero-glow" style={{ background:`radial-gradient(ellipse at 50% 40%, ${S.accent}14 0%, transparent 65%)` }}/>
          <div className="container hero-inner hero-inner--centered" key={slide}>
            <h1 className="hero-h1">
              {S.h1a}<br/>
              <span style={{ color:S.accent }}>{S.h1b}</span>
            </h1>
            <p className="hero-sub">{S.sub}</p>
            <div className="hero-actions">
              <span className="btn-primary btn-lg" onClick={() => nav('home','contact')}>{S.cta} <ArrowRight/></span>
              <span className="btn-ghost btn-lg" onClick={() => nav('home','services')}>Explore Services</span>
            </div>
          </div>
          {/* Slide dots */}
          <div className="hero-controls">
            <div className="hero-dots">
              {SLIDES.map((_, i) => (
                <button key={i} className={`hero-dot${i === slide ? ' hero-dot--active' : ''}`} onClick={() => goSlide(i)}
                  style={i === slide ? { background:S.accent, boxShadow:`0 0 8px ${S.accent}` } : {}}/>
              ))}
            </div>
          </div>
        </section>


        {/* ── ABOUT ── */}
        <section id="about" className="sec-pad">
          <div className="container">
            <div className="about-grid">
              <div className="about-left">
                <span className="sec-tag">About AXCIS</span>
                <h2 className="sec-h2">The Central Axis of<br/><span className="grad-text">Global Technology</span></h2>
                <p style={{ fontSize:'1.05rem', lineHeight:1.85, marginBottom:'1.1rem' }}>
                  AXCIS is a UK-registered technology company delivering world-class IT infrastructure, managed services, cybersecurity, and custom software engineering to enterprises globally. Headquartered in Luton, United Kingdom and operational across 100+ countries.
                </p>
                <p style={{ lineHeight:1.8, marginBottom:'1.8rem' }}>
                  Founded with a vision to become the central axis around which enterprise technology revolves, AXCIS bridges the gap between global IT strategy and local execution. Our flexible services are available as packages or pay-as-you-go — ensuring every business can access premium technology support.
                </p>
                <span className="btn-primary" style={{ marginTop:'1rem', display:'inline-flex', cursor:'pointer' }} onClick={() => nav('home','contact')}>Partner With Us <ArrowRight/></span>
              </div>
              <div className="about-right">
                <div className="glass-card">
                  <span className="sec-tag" style={{ marginBottom:'1.25rem', display:'block' }}>Why Choose AXCIS?</span>
                  {[
                    { icon:<ActivityIco/>, t:'24×7-365 Helpdesk', d:'Always-on support with multilingual engineers across every timezone.' },
                    { icon:<GlobeIco/>, t:'Global Service Availability', d:'Operational presence in 100+ countries with local expertise.' },
                    { icon:<UsersIco/>, t:'L1–L3 Certified Engineers', d:'Skilled professionals from deskside to datacenter level.' },
                    { icon:<ShieldIco/>, t:'Guaranteed SLA Response', d:'Under-4-hour UK field dispatch with contractual SLA guarantees.' },
                  ].map((f, i) => (
                    <div key={i} className="about-feat">
                      <div className="about-feat__icon">{f.icon}</div>
                      <div>
                        <h4 style={{ fontSize:'0.95rem', marginBottom:'0.2rem', color:'#e8ecf4' }}>{f.t}</h4>
                        <p style={{ fontSize:'0.83rem' }}>{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="sec-pad sec-alt">
          <div className="container">
            <div className="sec-head">
              <span className="sec-tag">Our Capabilities</span>
              <h2 className="sec-h2">Global Core Services</h2>
              <p>AXCIS provides the critical technology layers modern enterprises need — from infrastructure and security to custom software and on-site field operations.</p>
            </div>
            <div className="svc-grid">
              {SERVICES.map(s => (
                <div key={s.id} className={`svc-card${activeSvc === s.id ? ' svc-card--active' : ''}`}
                  onClick={() => setActiveSvc(s.id)}
                  style={{ '--sc': s.color }}>
                  <div className="svc-card__icon" style={{ color:s.color, borderColor:`${s.color}30`, background:`${s.color}10` }}>{s.icon}</div>
                  <span className="svc-card__cat" style={{ color:s.color }}>{s.cat}</span>
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__short">{s.short}</p>
                  <span className="svc-card__arrow" style={{ color:s.color }}><ArrowRight/></span>
                  <div className="svc-card__glow" style={{ background:s.color }}/>
                </div>
              ))}
            </div>
            {svc && (
              <div className="svc-detail" style={{ '--sc': svc.color }}>
                <div className="svc-detail__glow" style={{ background:svc.color }}/>
                <div className="svc-detail__left">
                  <div className="svc-detail__icon" style={{ color:svc.color, borderColor:`${svc.color}40`, background:`${svc.color}10` }}>{svc.icon}</div>
                  <span className="sec-tag" style={{ marginBottom:'0.75rem', display:'block' }}>Core Specialty</span>
                  <h3 style={{ fontSize:'1.8rem', marginBottom:'0.75rem' }}>{svc.title}</h3>
                  <p style={{ fontSize:'1.02rem', color:'#c8d0e8', marginBottom:'2rem', lineHeight:1.75 }}>{svc.tagline}</p>
                  <span className="btn-primary" style={{ cursor:'pointer' }} onClick={() => nav('home','contact')}>Request This Service <ArrowRight/></span>
                </div>
                <ul className="svc-detail__feats">
                  {svc.features.map((f, i) => (
                    <li key={i} className="svc-detail__feat">
                      <span style={{ color:svc.color, flexShrink:0 }}><CheckIco/></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section id="industries" className="sec-pad">
          <div className="container">
            <div className="sec-head">
              <span className="sec-tag">Industries We Serve</span>
              <h2 className="sec-h2">Built for Every Sector</h2>
              <p>From financial services to manufacturing, AXCIS delivers tailored technology solutions across the industries that power the global economy.</p>
            </div>
            <div className="ind-grid">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="ind-card" style={{ '--ic': ind.color }}>
                  <div className="ind-card__icon" style={{ color:ind.color, background:`${ind.color}12`, borderColor:`${ind.color}25` }}>{ind.icon}</div>
                  <span className="ind-card__name">{ind.name}</span>
                  <div className="ind-card__glow" style={{ background:ind.color }}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY AXCIS + COLLABORATE ── */}
        <section id="why" className="sec-pad">
          <div className="container">
            <div className="sec-head">
              <span className="sec-tag">Why AXCIS</span>
              <h2 className="sec-h2">Built for Enterprise Trust</h2>
              <p>The standards, security, and scalability that global enterprises require — delivered with long-term partnership at the core.</p>
            </div>
            <div className="values-grid">
              {VALUES.map((v, i) => (
                <div key={i} className="value-card">
                  <div className="value-card__icon">{v.icon}</div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* ── COLLABORATE (nested inside Why AXCIS) ── */}
            <div id="collaborate" style={{ marginTop:'5rem' }}>
            {/* Hero pitch */}
            <div className="collab-hero">
              <div className="collab-hero__text">
                <span className="sec-tag">Strategic Collaboration</span>
                <h2 className="sec-h2">Let's Build Something<br/><span className="grad-text">Extraordinary Together</span></h2>
                <p style={{ fontSize:'1.08rem', lineHeight:1.85, maxWidth:560 }}>
                  AXCIS is a fast-growing UK technology company with global ambitions. We are actively seeking IT service providers, technology companies, and field operations firms to collaborate on projects, share capacity, and grow together. If you operate in the same space — let's talk.
                </p>
                <div style={{ display:'flex', gap:'1rem', marginTop:'2rem', flexWrap:'wrap' }}>
                  <span className="btn-primary" style={{ cursor:'pointer' }} onClick={() => nav('home','contact')}>Start a Conversation <ArrowRight/></span>
                  <a href="mailto:contact@axcisltd.co.uk" className="btn-ghost">contact@axcisltd.co.uk</a>
                </div>
              </div>
              <div className="collab-hero__visual">
                {/* Orbit diagram */}
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="160" cy="160" r="130" stroke="rgba(0,102,255,0.1)" strokeWidth="1" strokeDasharray="4 6"/>
                  <circle cx="160" cy="160" r="90" stroke="rgba(0,212,255,0.12)" strokeWidth="1" strokeDasharray="3 5"/>
                  <circle cx="160" cy="160" r="50" stroke="rgba(0,102,255,0.2)" strokeWidth="1.5"/>
                  {/* Center — AXCIS */}
                  <rect x="130" y="140" width="60" height="40" rx="8" fill="#0a0f1a" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"/>
                  <text x="160" y="165" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="800" fontFamily="Outfit,sans-serif">AXCIS</text>
                  {/* Orbit nodes */}
                  {[
                    { angle:0,   label:'IT Firms',    c:'#0066ff' },
                    { angle:60,  label:'MSPs',        c:'#00d4ff' },
                    { angle:120, label:'Resellers',   c:'#10b981' },
                    { angle:180, label:'Field Ops',   c:'#7c3aed' },
                    { angle:240, label:'Tech Vendors',c:'#f59e0b' },
                    { angle:300, label:'Consultants', c:'#ec4899' },
                  ].map(({ angle, label, c }) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 160 + 130 * Math.cos(rad);
                    const y = 160 + 130 * Math.sin(rad);
                    const lx = 160 + 90 * Math.cos(rad);
                    const ly = 160 + 90 * Math.sin(rad);
                    return (
                      <g key={label}>
                        <line x1={lx} y1={ly} x2={x} y2={y} stroke={c} strokeWidth="1" strokeOpacity="0.4"/>
                        <circle cx={x} cy={y} r="22" fill="#0a0f1a" stroke={c} strokeWidth="1.5"/>
                        <text x={x} y={y + 4} textAnchor="middle" fill={c} fontSize="7.5" fontWeight="700" fontFamily="Outfit,sans-serif">{label}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Collaboration models */}
            <div className="collab-grid">
              {[
                {
                  icon:<BriefcaseIco/>, c:'#0066ff',
                  t:'Project Collaboration',
                  d:'Have a large-scale IT project needing additional capacity or specialist expertise? AXCIS can step in as a delivery partner, subcontractor, or co-prime on any engagement worldwide.',
                  cta:'Discuss a Project',
                  bullets:['Subcontracting & overflow capacity','Co-delivery on enterprise contracts','Specialist skill augmentation'],
                },
                {
                  icon:<GlobeIco/>, c:'#00d4ff',
                  t:'Reseller & White-Label',
                  d:'Expand your service portfolio by reselling AXCIS managed services, field operations, or software engineering capabilities to your own client base — under your brand.',
                  cta:'Become a Reseller',
                  bullets:['White-label field & managed services','Revenue share partnership model','Dedicated channel support'],
                },
                {
                  icon:<NetworkIco/>, c:'#10b981',
                  t:'Technology Alliance',
                  d:'Are you a technology vendor, SaaS platform, or hardware manufacturer? Partner with AXCIS to integrate your solutions into our global delivery framework and reach new markets.',
                  cta:'Explore Alliance',
                  bullets:['Joint go-to-market strategy','Co-branded enterprise proposals','Integration & API partnerships'],
                },
                {
                  icon:<UsersIco/>, c:'#7c3aed',
                  t:'Engineer & Talent Network',
                  d:'We partner with staffing agencies, training providers, and independent engineers to build the world-class workforce that powers AXCIS field operations globally.',
                  cta:'Join Our Network',
                  bullets:['Vetted L1–L3 engineer placements','Field dispatch assignments','Long-term staffing contracts'],
                },
              ].map((c, i) => (
                <div key={i} className="collab-card" style={{ '--cc': c.c }}>
                  <div className="collab-card__icon" style={{ color:c.c, borderColor:`${c.c}35`, background:`${c.c}10` }}>{c.icon}</div>
                  <h3 className="collab-card__title">{c.t}</h3>
                  <p className="collab-card__desc">{c.d}</p>
                  <ul className="collab-card__bullets">
                    {c.bullets.map(b => (
                      <li key={b}><span style={{ color:c.c }}><CheckIco/></span>{b}</li>
                    ))}
                  </ul>
                  <span className="collab-card__cta" style={{ color:c.c }} onClick={() => nav('home','contact')}>{c.cta} <ArrowRight/></span>
                  <div className="collab-card__glow" style={{ background:c.c }}/>
                </div>
              ))}
            </div>

            {/* Why collaborate with AXCIS */}
            <div className="collab-why-points">
              {[
                { n:'01', t:'Fast Deal Cycles', d:'No lengthy procurement. We move at startup speed — decisions made in days, not months.' },
                { n:'02', t:'Direct Access', d:'Work directly with AXCIS leadership. No account managers, no middlemen.' },
                { n:'03', t:'Global Reach', d:'Tap into our 100+ country operational network to deliver projects anywhere.' },
                { n:'04', t:'Long-Term Vision', d:'We are building for decades. Our partnerships are designed to grow with us.' },
              ].map(p => (
                <div key={p.n} className="collab-why__point">
                  <span className="collab-why__num">{p.n}</span>
                  <div>
                    <h4 style={{ fontSize:'0.95rem', marginBottom:'0.3rem', color:'#e2e8f4' }}>{p.t}</h4>
                    <p style={{ fontSize:'0.85rem' }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* end collab-ecosystem */}
            </div>
            {/* end collaborate wrapper */}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="sec-pad sec-alt">
          <div className="container">
            <div className="sec-head">
              <span className="sec-tag">Get in Touch</span>
              <h2 className="sec-h2">Architect Your Solution</h2>
              <p>Connect with the AXCIS team to optimise your IT operations, secure your infrastructure, or schedule a UK field dispatch.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                {[
                  { icon:<PhoneIcon/>, label:'Phone', val:'+44 7498 512294', href:'tel:07498512294' },
                  { icon:<MailIcon/>, label:'General Enquiries', val:'contact@axcisltd.co.uk', href:'mailto:contact@axcisltd.co.uk' },
                  { icon:<MailIcon/>, label:'Technical Support', val:'support@axcisltd.co.uk', href:'mailto:support@axcisltd.co.uk' },
                  { icon:<MapPin/>, label:'Registered Office', val:'10 Stockwood Crescent, Luton LU1 3SS, United Kingdom', href:null },
                  { icon:<GlobeIco/>, label:'Website', val:'axcisltd.co.uk', href:'https://www.axcisltd.co.uk' },
                ].map((item, i) => (
                  <div key={i} className="contact-info__item">
                    <div className="contact-info__icon">{item.icon}</div>
                    <div>
                      <div className="contact-info__label">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="contact-info__val" style={{ color:'#00d4ff' }}>{item.val}</a>
                        : <div className="contact-info__val">{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-form-wrap">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleInput} placeholder="Jane Smith" required/>
                    </div>
                    <div className="form-group">
                      <label>Corporate Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleInput} placeholder="jane@company.com" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" name="company" value={form.company} onChange={handleInput} placeholder="Acme Corp"/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleInput} placeholder="+44 7700 900000"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service Required</label>
                    <select name="service" value={form.service} onChange={handleInput}>
                      {SVC_FORM_OPTS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleInput} placeholder="Tell us about your requirements..." required/>
                  </div>
                  <button type="submit" className="btn-primary btn-full" disabled={sending}>
                    {sending ? 'Sending...' : <><span>Send Enquiry</span><ArrowRight/></>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
      )}

      {/* ══════════════════════════════════════════════════
          CAREERS PAGE
      ══════════════════════════════════════════════════ */}
      {page === 'careers' && (
        <section className="sec-pad" style={{ minHeight:'100vh', paddingTop:'calc(var(--nav-h) + 4rem)' }}>
          <div className="container">
            <div className="sec-head">
              <span className="sec-tag">Join AXCIS</span>
              <h2 className="sec-h2">Build the Future With Us</h2>
              <p>Join our global team of elite engineers, consultants, and visionaries driving technological excellence across the globe. We are a startup with billion-dollar ambitions — and we want people who share that vision.</p>
            </div>
            <div className="perks-grid">
              {[
                { icon:<GlobeIco/>, t:'Remote-First Culture', d:'Work from anywhere in the world with flexible hours.' },
                { icon:<ZapIco/>, t:'Fast-Track Growth', d:'Startup pace means rapid career progression and ownership.' },
                { icon:<ShieldIco/>, t:'Competitive Packages', d:'Market-rate salaries, equity options, and performance bonuses.' },
                { icon:<UsersIco/>, t:'Elite Team', d:'Work alongside world-class engineers and industry veterans.' },
              ].map((p, i) => (
                <div key={i} className="perk-card">
                  <div className="perk-card__icon">{p.icon}</div>
                  <h3 style={{ fontSize:'1rem', marginBottom:'0.4rem' }}>{p.t}</h3>
                  <p style={{ fontSize:'0.85rem' }}>{p.d}</p>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize:'1.4rem', marginBottom:'1.5rem', marginTop:'3rem' }}>Open Positions</h3>
            <div className="jobs-grid">
              {JOBS.map((j, i) => (
                <div key={i} className="job-card">
                  <div className="job-card__dept">{j.dept}</div>
                  <h3 className="job-card__title">{j.title}</h3>
                  <div className="job-card__meta">
                    <span><MapPin/>{j.location}</span>
                    <span><BriefcaseIco/>{j.type}</span>
                  </div>
                  <span className="btn-primary btn-sm" style={{ cursor:'pointer', marginTop:'auto' }} onClick={() => nav('home','contact')}>Apply Now <ArrowRight/></span>
                </div>
              ))}
            </div>
            <div className="general-apply">
              <div>
                <h3 style={{ fontSize:'1.3rem', marginBottom:'0.5rem' }}>Don't see your role?</h3>
                <p>We are always looking for exceptional talent. Send us your CV and we will be in touch.</p>
              </div>
              <a href="mailto:contact@axcisltd.co.uk?subject=General Application" className="btn-primary">Send Your CV <ArrowRight/></a>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          FOOTER (all pages)
      ══════════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <AxcisLogo size="sm"/>
              <p>Building the Axis of Intelligent Systems — enterprise cloud, AI, cybersecurity, and digital transformation solutions from the United Kingdom worldwide.</p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/axcisltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIco/></a>
                <a href="mailto:contact@axcisltd.co.uk" aria-label="Email"><MailIcon/></a>
                <a href="tel:07498512294" aria-label="Phone"><PhoneIcon/></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <div className="footer-links-col">
                {['24/7 Global IT Support','Cybersecurity & Cloud','Software Engineering & AI','UK Field Operations','IT Rental & Asset Lifecycle','IT Consulting & Advisory'].map(s => (
                  <span key={s} className="footer-link" onClick={() => nav('home','services')}>{s}</span>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links-col">
                <span className="footer-link" onClick={() => nav('home','about')}>About AXCIS</span>
                <span className="footer-link" onClick={() => nav('home','industries')}>Industries</span>
                <span className="footer-link" onClick={() => nav('home','collaborate')}>Collaborate</span>
                <span className="footer-link" onClick={() => nav('home','why')}>Why AXCIS</span>
                <span className="footer-link" onClick={() => nav('careers', null)}>Careers</span>
                <span className="footer-link" onClick={() => nav('home','contact')}>Contact</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-links-col">
                <a href="tel:07498512294" className="footer-link footer-link--icon"><PhoneIcon/>+44 7498 512294</a>
                <a href="mailto:contact@axcisltd.co.uk" className="footer-link footer-link--icon"><MailIcon/>contact@axcisltd.co.uk</a>
                <a href="mailto:support@axcisltd.co.uk" className="footer-link footer-link--icon"><MailIcon/>support@axcisltd.co.uk</a>
                <span className="footer-link footer-link--icon"><MapPin/>Luton, United Kingdom</span>
                <a href="https://www.axcisltd.co.uk" target="_blank" rel="noopener noreferrer" className="footer-link footer-link--icon"><GlobeIco/>axcisltd.co.uk</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AXCIS Ltd. All rights reserved. Registered in England &amp; Wales.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
