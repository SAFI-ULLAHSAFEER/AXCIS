import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from '../icons';
import { COMPANY } from '../constants/company';

const SLIDES = [
  {
    id: 0,
    tag: 'The AXCIS Concept',
    headline: ['The Central System', 'Everything Revolves Around'],
    sub: COMPANY.concept,
    accent: '#5eb8ff',
    visual: 'globe',
  },
  {
    id: 1,
    tag: '24/7 Field Engineering',
    headline: ['Smart Hands.', 'Anywhere on Earth.'],
    sub: 'Deskside support, datacenter operations, network rollouts, and IMACD — delivered by vetted L1–L3 engineers with local language capability and global SLA standards.',
    accent: '#2563eb',
    visual: 'network',
  },
  {
    id: 2,
    tag: 'Built in the UK',
    headline: ['Registered in the UK.', 'Deployed Worldwide.'],
    sub: `Based at ${COMPANY.registeredOffice}. Flexible packages or pay-as-you-go — advisory, managed services, and on-site field support that scale with your ambition.`,
    accent: '#5eb8ff',
    visual: 'pulse',
  },
  {
    id: 3,
    tag: 'Future-Ready Infrastructure',
    headline: ['Scale Without', 'Compromise.'],
    sub: 'Cloud migration, DevOps automation, cybersecurity operations, and infrastructure cabling — one axis connecting your entire technology estate.',
    accent: '#2563eb',
    visual: 'orbit',
  },
];

function HeroVisual({ type, accent }) {
  if (type === 'globe') {
    return (
      <div className="hero-visual hero-visual--globe">
        <div className="hero-visual__ring hero-visual__ring--1" style={{ borderColor: accent }} />
        <div className="hero-visual__ring hero-visual__ring--2" style={{ borderColor: accent }} />
        <div className="hero-visual__ring hero-visual__ring--3" style={{ borderColor: accent }} />
        <svg className="hero-visual__globe-svg" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="globeGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
              <stop offset="100%" stopColor="#050507" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="70" fill="url(#globeGrad)" stroke={accent} strokeWidth="0.5" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="100" cy="100" rx="25" ry="70" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.4" />
          <line x1="30" y1="100" x2="170" y2="100" stroke={accent} strokeWidth="0.5" opacity="0.3" />
          <line x1="100" y1="30" x2="100" y2="170" stroke={accent} strokeWidth="0.5" opacity="0.3" />
          {[[60,70],[140,80],[90,130],[120,55],[75,115]].map(([x,y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill={accent} className="hero-visual__node" style={{ animationDelay: `${i * 0.4}s` }} />
              <circle cx={x} cy={y} r="8" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.5" className="hero-visual__node-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            </g>
          ))}
        </svg>
        <div className="hero-visual__badge">
          <span>100+</span>
          <small>Countries</small>
        </div>
      </div>
    );
  }

  if (type === 'network') {
    return (
      <div className="hero-visual hero-visual--network">
        <svg viewBox="0 0 240 240" className="hero-visual__network-svg">
          {[[120,40],[200,100],[180,200],[60,200],[40,100]].map(([x,y], i) => (
            <g key={i}>
              <line x1="120" y1="120" x2={x} y2={y} stroke={accent} strokeWidth="1" opacity="0.3" className="hero-visual__line" style={{ animationDelay: `${i * 0.2}s` }} />
              <rect x={x-12} y={y-12} width="24" height="24" rx="4" fill="rgba(0,102,255,0.1)" stroke={accent} strokeWidth="1" />
            </g>
          ))}
          <circle cx="120" cy="120" r="20" fill="rgba(0,240,255,0.15)" stroke={accent} strokeWidth="2" />
          <text x="120" y="125" textAnchor="middle" fill={accent} fontSize="10" fontWeight="700">AXCIS</text>
        </svg>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className="hero-visual hero-visual--pulse">
        <div className="hero-visual__uk-pin">
          <MapPinIcon accent={accent} />
          <span>Luton, UK</span>
        </div>
        {[1,2,3,4].map((n) => (
          <div key={n} className="hero-visual__pulse-ring" style={{ borderColor: accent, animationDelay: `${n * 0.8}s` }} />
        ))}
        <div className="hero-visual__pulse-core" style={{ background: accent }} />
      </div>
    );
  }

  return (
    <div className="hero-visual hero-visual--orbit">
      <div className="hero-visual__orbit-center" style={{ boxShadow: `0 0 40px ${accent}40` }}>
        <span style={{ color: accent }}>∞</span>
      </div>
      {[0,1,2].map((i) => (
        <div key={i} className={`hero-visual__orbit-path hero-visual__orbit-path--${i + 1}`} style={{ borderColor: `${accent}30` }}>
          <div className="hero-visual__orbit-dot" style={{ background: accent, animationDelay: `${i * 2}s` }} />
        </div>
      ))}
    </div>
  );
}

function MapPinIcon({ accent }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const SLIDE_DURATION = 6000;

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return undefined;

    const tick = 50;
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % SLIDES.length);
          return 0;
        }
        return p + (tick / SLIDE_DURATION) * 100;
      });
    }, tick);

    return () => clearInterval(intervalRef.current);
  }, [paused, current]);

  const slide = SLIDES[current];

  return (
    <section className="hero-slider" id="home">
      <div className="hero-slider__mesh" style={{ '--slide-accent': slide.accent }} />

      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slider__slide ${i === current ? 'hero-slider__slide--active' : ''}`}
          aria-hidden={i !== current}
        >
          <div className="glow-bg" style={{ background: `radial-gradient(circle, ${s.accent}40 0%, transparent 70%)`, left: '10%', top: '20%' }} />
          <div className="glow-bg" style={{ background: `radial-gradient(circle, ${s.accent}20 0%, transparent 70%)`, right: '5%', bottom: '10%', left: 'auto' }} />
        </div>
      ))}

      <div className="container hero-slider__content">
        <div className="hero-slider__text">
          <span className="hero-slider__tag" style={{ borderColor: `${slide.accent}40`, color: slide.accent }}>
            {slide.tag}
          </span>
          <h1 className="hero-slider__headline">
            {slide.headline.map((line, i) => (
              <span key={i} className="hero-slider__headline-line">{line}</span>
            ))}
          </h1>
          <p className="hero-slider__sub">{slide.sub}</p>
          <div className="hero-slider__actions">
            <Link to="/services" className="btn-primary">Explore Services <ArrowRight /></Link>
            <Link to="/contact" className="btn-secondary">Contact Now</Link>
          </div>
        </div>

        <div className="hero-slider__visual">
          <HeroVisual type={slide.visual} accent={slide.accent} />
        </div>
      </div>

      <div className="hero-slider__controls">
        <button type="button" className="hero-slider__arrow" onClick={prev} aria-label="Previous slide">
          <ChevronLeft />
        </button>

        <div className="hero-slider__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`hero-slider__dot ${i === current ? 'hero-slider__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="hero-slider__dot-label">{s.tag}</span>
              {i === current && (
                <span className="hero-slider__dot-progress" style={{ width: `${progress}%`, background: slide.accent }} />
              )}
            </button>
          ))}
        </div>

        <button type="button" className="hero-slider__arrow" onClick={next} aria-label="Next slide">
          <ChevronRight />
        </button>
      </div>

      <div
        className="hero-slider__pause-zone"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      />

      <Link to="/about" className="hero-slider__scroll">
        <span>Scroll</span>
        <div className="hero-slider__scroll-line" />
      </Link>
    </section>
  );
}
