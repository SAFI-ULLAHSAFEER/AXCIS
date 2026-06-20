import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle } from '../icons';

const CaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Slider state for manual control
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const sliderRef = React.useRef(null);

  const galleryImages = [
    '/images/case-study/coinbase-1.jpg',
    '/images/case-study/coinbase-2.jpg',
    '/images/case-study/coinbase-3.jpg',
    '/images/case-study/coinbase-4.jpg',
    '/images/case-study/coinbase-5.jpg',
    '/images/case-study/coinbase-6.jpg',
    '/images/case-study/coinbase-7.jpg',
    '/images/case-study/coinbase-8.jpg'
    // coinbase-9.jpg removed (Structured Cabling)
  ];

  // Device details for each image (8 devices - coinbase-9 removed)
  const deviceDetails = [
    { 
      label: 'Juniper Network Switch', 
      desc: 'Enterprise-grade routing',
      details: 'Juniper EX4300 series switches provide high-performance Layer 2/3 switching with 48 x 1GbE ports and redundant uplinks. Features include Virtual Chassis technology, advanced security, and zero-touch provisioning for seamless datacenter integration.'
    },
    { 
      label: 'APC Smart-UPS System', 
      desc: 'Power backup & distribution',
      details: 'APC Smart-UPS 3000VA rack-mounted UPS systems deliver N+1 redundancy with automatic voltage regulation (AVR), LCD status display, and hot-swappable batteries. Ensures 99.999% uptime with seamless power failover during outages.'
    },
    { 
      label: '48-Port Patch Panel', 
      desc: 'Structured cabling hub',
      details: 'Cat6a shielded patch panels with color-coded ports for organized cable management. Supports 10Gbps data transmission with 500MHz bandwidth. Includes integrated cable management bars and labeling systems for easy troubleshooting.'
    },
    { 
      label: 'Server Rack Assembly', 
      desc: 'High-density mounting',
      details: '42U rack enclosures with perforated doors for optimal airflow, adjustable mounting rails, and integrated PDU mounts. Designed for high-density server deployments with cable management arms and side-panel access for maintenance.'
    },
    { 
      label: 'Cable Management System', 
      desc: 'Organized pathways',
      details: 'Professional cable management using vertical and horizontal organizers, Velcro straps, and color-coded labeling. Ensures proper bend radius for Cat6a and fiber cables while maintaining clean aesthetics and easy traceability.'
    },
    { 
      label: 'Network Equipment Rack', 
      desc: 'Professional installation',
      details: 'Enterprise-grade 4-post racks with adjustable depth, cable management channels, and grounding kits. Houses switches, routers, and UPS units with proper spacing for heat dissipation and easy access for maintenance.'
    },
    { 
      label: 'Fiber Optic Cabling', 
      desc: 'High-speed connectivity',
      details: 'Single-mode and multi-mode fiber optic cables (LC/SC connectors) providing 10Gbps+ backbone connectivity. Features low latency, immunity to electromagnetic interference, and future-proof scalability for 40G/100G upgrades.'
    },
    { 
      label: 'PDU Installation', 
      desc: 'Power distribution unit',
      details: 'Intelligent rack PDUs with per-outlet monitoring, remote power control, and environmental sensors. Provides 208V 3-phase power distribution with overcurrent protection and real-time power consumption analytics.'
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deviceDetails.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deviceDetails.length) % deviceDetails.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Fallback to SVG placeholders if JPG not found
  const [imageSources, setImageSources] = React.useState(galleryImages);
  
  React.useEffect(() => {
    const checkImages = async () => {
      const svgFallbacks = galleryImages.map(src => src.replace('.jpg', '.svg'));
      const sources = await Promise.all(
        galleryImages.map(async (src, idx) => {
          try {
            const response = await fetch(src, { method: 'HEAD' });
            return response.ok ? src : svgFallbacks[idx];
          } catch {
            return svgFallbacks[idx];
          }
        })
      );
      setImageSources(sources);
    };
    checkImages();
  }, []);

  return (
    <main 
      id="main-content" 
      className="case-study-page"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/images/case-study/coinbase-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Full page dark overlay for readability */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      {/* HERO SECTION - Content Over Background */}
      <section 
        className="cs-hero" 
        aria-label="Case Study Hero"
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'transparent',
          paddingTop: 'var(--nav-h)',
          paddingBottom: '4rem',
          zIndex: 1
        }}
      >
        <div className="container cs-hero-inner" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <div className="cs-hero-content">
            <p className="cs-tag">Case Study</p>
            <h1 className="cs-title">
              Engineering High-Availability Infrastructure for <span className="grad-text">Coinbase</span>
            </h1>
            <p className="cs-subtitle">
              How AXCIS deployed certified field engineers to architect and cable a robust, scalable datacenter environment for a global cryptocurrency leader.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="cs-overview sec-pad" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="cs-grid">
            {/* Left Column: Details */}
            <div className="cs-details">
              <div className="cs-detail-block">
                <h3>Executive Summary</h3>
                <p>
                  Coinbase, a global leader in cryptocurrency and digital asset platforms, required a highly resilient and organized IT infrastructure to support their rapid scaling and mission-critical financial operations. AXCIS deployed certified field engineers on-site to design, implement, and configure high-density server racks, enterprise-grade networking equipment, structured cabling systems, and robust power management infrastructure — all engineered to deliver 99.999% availability with zero tolerance for downtime.
                </p>
              </div>

              <div className="cs-detail-block">
                <h3>The Challenge</h3>
                <p>
                  As a leading financial services platform operating in the cryptocurrency sector, Coinbase operates with zero tolerance for latency, downtime, or infrastructure failures. They needed a comprehensive datacenter infrastructure overhaul involving complex structured cabling (Cat6a and fiber optics), precise rack-and-stack operations for high-density server deployments, enterprise-grade network switch configuration, and reliable power distribution systems with redundant UPS backup — all to be executed swiftly and with military precision without disrupting existing critical workflows or trading operations.
                </p>
              </div>

              <div className="cs-detail-block">
                <h3>Our Solution & Outcome</h3>
                <p>
                  AXCIS engineered a scalable, future-proof infrastructure that unified Coinbase's local datacenter network operations into a single cohesive ecosystem. Our certified field engineers executed meticulous cable management with color-coded organization, deployed and configured Juniper networking gear with enterprise-grade switches and patch panels, integrated APC Smart-UPS systems for uninterruptible power supply, and implemented professional rack-and-stack procedures for optimal airflow and hardware maintainability. 
                  <br /><br />
                  <strong>The Result:</strong> Seamless network connectivity across all infrastructure layers, optimal power distribution with redundant failover protection, enterprise-grade structured cabling that supports high-speed data transfer, and a future-proof datacenter environment ready for immediate scaling and long-term growth. The deployment achieved faster turnaround times on network operations, improved hardware accessibility, and world-class cable management that sets the industry standard for datacenter excellence.
                </p>
              </div>
            </div>

            {/* Right Column: Metadata */}
            <div className="cs-meta">
              <div className="glass-card">
                <div className="meta-item">
                  <span className="meta-label">Client</span>
                  <span className="meta-value">Coinbase</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Industry</span>
                  <span className="meta-value">Financial Services / Cryptocurrency</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Project Type</span>
                  <span className="meta-value">Datacenter Infrastructure & Field Operations</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Service</span>
                  <span className="meta-value">UK Field Operations / Datacenter Services</span>
                </div>
              </div>

              <div className="glass-card mt-4">
                <h4 className="meta-heading">Tools & Technologies</h4>
                <div className="tech-stack">
                  <div className="tech-category">
                    <strong>Networking Equipment</strong>
                    <p>Juniper Enterprise Switches, Cisco Meraki Access Points, 48-Port Patch Panels, Network Cabling Infrastructure</p>
                  </div>
                  <div className="tech-category">
                    <strong>Power & Management</strong>
                    <p>APC Smart-UPS Systems, Redundant Power Distribution Units (PDUs), UPS Battery Backup Systems, Power Monitoring</p>
                  </div>
                  <div className="tech-category">
                    <strong>Infrastructure & Cabling</strong>
                    <p>High-density Structured Cabling (Cat6a/Cat6/Fiber Optic), Professional Cable Management Systems, Server Rack-and-Stack, Equipment Installation</p>
                  </div>
                  <div className="tech-category">
                    <strong>Deployment & Operations</strong>
                    <p>On-site Certified Field Engineering, Datacenter Design & Audits, Hardware Configuration, 24/7 Smart-Hands Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY - Interactive Slider */}
      <section className="cs-gallery sec-pad sec-alt" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="sec-head text-center">
            <h2 className="sec-h2">Project Gallery</h2>
            <p>On-site datacenter infrastructure deployment by AXCIS certified field engineers — showcasing enterprise-grade cable management, rack configuration, and power distribution systems.</p>
          </div>
          
          {/* Manual Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <button 
              onClick={prevSlide}
              className="slider-nav-btn"
              aria-label="Previous slide"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="slider-nav-btn"
              aria-label="Next slide"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Featured Device Detail Card */}
          <div className="glass-card" style={{ marginBottom: '3rem', padding: '2.5rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <img 
                  src={imageSources[currentSlide]} 
                  alt={deviceDetails[currentSlide].label}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '2px solid rgba(16, 185, 129, 0.3)'
                  }}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/400x200/101827/10b981?text=" + encodeURIComponent(deviceDetails[currentSlide].label);
                  }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                    {deviceDetails[currentSlide].label}
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#10b981', fontWeight: '600', marginBottom: '1rem' }}>
                  {deviceDetails[currentSlide].desc}
                </p>
                <p style={{ fontSize: '0.95rem', color: '#e5e7eb', lineHeight: '1.7' }}>
                  {deviceDetails[currentSlide].details}
                </p>
              </div>
            </div>
          </div>

          {/* Slider Dots Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            {deviceDetails.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: currentSlide === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: currentSlide === index ? '#10b981' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: currentSlide === index ? '0 0 12px rgba(16, 185, 129, 0.5)' : 'none'
                }}
              />
            ))}
          </div>

          {/* Auto-Scrolling Slider - Continuously Running */}
          <div className="cs-slider-container">
            <div 
              className="cs-slider-track"
              ref={sliderRef}
            >
              {/* First set of images with specific device labels */}
              {deviceDetails.map((item, index) => (
                <div 
                  key={`img-${index}`} 
                  className="cs-slider-item"
                  onClick={() => goToSlide(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={imageSources[index]} 
                    alt={item.label} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x400/101827/10b981?text=" + encodeURIComponent(item.label);
                    }}
                  />
                  <div className="cs-slider-overlay">
                    <div className="cs-slider-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div className="cs-slider-content">
                      <span className="cs-slider-label">{item.label}</span>
                      <span className="cs-slider-desc">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {deviceDetails.map((item, index) => (
                <div 
                  key={`img-dup-${index}`} 
                  className="cs-slider-item"
                  onClick={() => goToSlide(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={imageSources[index]} 
                    alt={item.label} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x400/101827/10b981?text=" + encodeURIComponent(item.label);
                    }}
                  />
                  <div className="cs-slider-overlay">
                    <div className="cs-slider-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div className="cs-slider-content">
                      <span className="cs-slider-label">{item.label}</span>
                      <span className="cs-slider-desc">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE EXCELLENCE - Stats & Images */}
      <section className="cs-infrastructure sec-pad" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div className="container">
          {/* Header */}
          <div className="sec-head text-center" style={{ marginBottom: '3rem' }}>
            <p className="sec-tag" aria-hidden="true">Infrastructure Excellence</p>
            <h2 className="sec-h2">Enterprise-Grade Network Architecture</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Precision-engineered structured cabling and high-density switch configuration ensuring optimal performance and scalability.
            </p>
          </div>

          {/* Key Metrics - Animated Stats Grid */}
          <div className="cs-metrics-grid cs-animate-metrics">
            <div className="cs-metric-card glass-card">
              <div className="cs-metric-value">99.999%</div>
              <div className="cs-metric-label">Uptime SLA</div>
            </div>
            <div className="cs-metric-card glass-card" style={{ animationDelay: '0.1s' }}>
              <div className="cs-metric-value">&lt;4hrs</div>
              <div className="cs-metric-label">Response Time</div>
            </div>
            <div className="cs-metric-card glass-card" style={{ animationDelay: '0.2s' }}>
              <div className="cs-metric-value">500+</div>
              <div className="cs-metric-label">Network Ports</div>
            </div>
            <div className="cs-metric-card glass-card" style={{ animationDelay: '0.3s' }}>
              <div className="cs-metric-value">24/7</div>
              <div className="cs-metric-label">Smart Hands</div>
            </div>
          </div>

          {/* Visual Showcase - Continuous Horizontal Slider */}
          <div className="cs-visual-slider-container" style={{ marginTop: '4rem', marginBottom: '4rem', overflow: 'hidden', position: 'relative' }}>
            <div className="cs-visual-slider-track">
              {/* First set of images */}
              {[
                { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', alt: 'Enterprise datacenter infrastructure', tag: 'Primary Infrastructure', fallback: '/images/case-study/coinbase-1.jpg' },
                { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', alt: 'Network switches', tag: 'Network Layer', fallback: '/images/case-study/coinbase-2.jpg' },
                { src: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?w=600&q=80', alt: 'Cable management', tag: 'Structured Cabling', fallback: '/images/case-study/coinbase-3.jpg' },
                { src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&q=80', alt: 'Server racks', tag: 'Server Racks', fallback: '/images/case-study/coinbase-4.jpg' },
                { src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80', alt: 'Equipment installation', tag: 'Deployment', fallback: '/images/case-study/coinbase-5.jpg' }
              ].map((item, idx) => (
                <div key={`infra-img-${idx}`} className="cs-visual-slide-card">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = item.fallback;
                    }}
                  />
                  <div className="cs-visual-slide-overlay">
                    <span className="cs-visual-slide-tag">{item.tag}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', alt: 'Enterprise datacenter infrastructure', tag: 'Primary Infrastructure', fallback: '/images/case-study/coinbase-1.jpg' },
                { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', alt: 'Network switches', tag: 'Network Layer', fallback: '/images/case-study/coinbase-2.jpg' },
                { src: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?w=600&q=80', alt: 'Cable management', tag: 'Structured Cabling', fallback: '/images/case-study/coinbase-3.jpg' },
                { src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&q=80', alt: 'Server racks', tag: 'Server Racks', fallback: '/images/case-study/coinbase-4.jpg' },
                { src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80', alt: 'Equipment installation', tag: 'Deployment', fallback: '/images/case-study/coinbase-5.jpg' }
              ].map((item, idx) => (
                <div key={`infra-img-dup-${idx}`} className="cs-visual-slide-card">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = item.fallback;
                    }}
                  />
                  <div className="cs-visual-slide-overlay">
                    <span className="cs-visual-slide-tag">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Grid - Minimal Design */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {/* Left Column - Technical Achievements */}
            <div className="glass-card cs-feature-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle style={{ color: '#10b981', width: '24px', height: '24px' }} />
                Technical Achievements
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'High-density structured cabling (Cat6a/Fiber) with color-coded management',
                  'Enterprise-grade Juniper network switches with redundant uplinks',
                  'APC Smart-UPS systems with N+1 power redundancy',
                  'Professional rack-and-stack with optimized airflow design',
                  'Comprehensive cable labeling and documentation',
                  '48-port patch panels with organized cable runs'
                ].map((item, idx) => (
                  <li key={idx} className="cs-achievement-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Technologies Used */}
            <div className="glass-card cs-feature-card" style={{ animationDelay: '0.2s' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
                Technologies Deployed
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { name: 'Juniper Networks', desc: 'Enterprise switches & routing' },
                  { name: 'APC by Schneider Electric', desc: 'Smart-UPS & power distribution' },
                  { name: 'Panduit/CommScope', desc: 'Structured cabling systems' },
                  { name: 'Cisco Meraki', desc: 'Network management & monitoring' }
                ].map((tech, idx) => (
                  <div key={idx} className="cs-tech-item" style={{ animationDelay: `${idx * 0.1}s`, paddingBottom: '1rem', borderBottom: idx < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div style={{ fontWeight: '700', color: '#10b981', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{tech.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Badge */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div className="glass-card cs-cert-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certified Engineers</div>
                <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>ISO 27001 Compliant | Enterprise-Grade Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cs-cta sec-pad" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div className="container text-center">
          <h2 className="sec-h2">Ready to Upgrade Your Infrastructure?</h2>
          <p className="cs-cta-sub">Discover how AXCIS field operations can power your enterprise.</p>
          <a href="/#contact" className="btn-primary btn-lg mt-4" style={{ display: 'inline-flex' }}>
            Start a Project <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyPage;
