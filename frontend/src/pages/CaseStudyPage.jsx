import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle } from '../icons';

const CaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    '/images/case-study/coinbase-1.jpg',
    '/images/case-study/coinbase-2.jpg',
    '/images/case-study/coinbase-3.jpg',
    '/images/case-study/coinbase-4.jpg',
    '/images/case-study/coinbase-5.jpg',
    '/images/case-study/coinbase-6.jpg',
    '/images/case-study/coinbase-7.jpg',
    '/images/case-study/coinbase-8.jpg',
    '/images/case-study/coinbase-9.jpg'
  ];

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
        background: '#000000'
      }}
    >
      {/* HERO SECTION - Simple Clean Design */}
      <section 
        className="cs-hero" 
        aria-label="Case Study Hero"
        style={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'transparent',
          paddingTop: 'var(--nav-h)',
          paddingBottom: '4rem'
        }}
      >
        <div className="cs-hero-glow" aria-hidden="true" />
        
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

      {/* FEATURED IMAGE SECTION - Coinbase Office */}
      <section className="cs-featured-image" style={{ padding: '0', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div 
            style={{ 
              padding: '1rem', 
              overflow: 'hidden',
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }}
          >
            <img 
              src="/images/case-study/coinbase-1.jpg" 
              alt="Coinbase office entrance and workspace" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '4px',
                display: 'block',
                maxHeight: '500px',
                objectFit: 'cover'
              }} 
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="cs-overview sec-pad" style={{ background: 'transparent' }}>
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

      {/* INFRASTRUCTURE HIGHLIGHT - Full Width Image */}
      <section 
        className="cs-infrastructure-highlight" 
        style={{ 
          padding: '4rem 0',
          background: 'transparent',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="sec-head text-center" style={{ marginBottom: '2rem' }}>
            <p className="sec-tag" aria-hidden="true">Infrastructure Excellence</p>
            <h2 className="sec-h2">Enterprise-Grade Network Architecture</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Precision-engineered structured cabling and high-density switch configuration ensuring optimal performance and scalability.
            </p>
          </div>
          <div 
            style={{ 
              padding: '1.5rem', 
              overflow: 'hidden',
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }}
          >
            <img 
              src="/images/case-study/coinbase-3.jpg" 
              alt="High-density network switches and structured cabling system" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                display: 'block',
                maxHeight: '600px',
                objectFit: 'cover'
              }} 
            />
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="cs-gallery sec-pad sec-alt" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="sec-head text-center">
            <h2 className="sec-h2">Project Gallery</h2>
            <p>On-site datacenter infrastructure deployment by AXCIS certified field engineers — showcasing enterprise-grade cable management, rack configuration, and power distribution systems.</p>
          </div>
          
          <div className="gallery-grid">
            {imageSources.map((src, index) => (
              <div key={index} className="gallery-item glass-card">
                <img 
                  src={src} 
                  alt={`Coinbase Infrastructure Setup ${index + 1}`} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400/101827/0066ff?text=Upload+Image+" + (index + 1);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cs-cta sec-pad" style={{ background: 'transparent' }}>
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
