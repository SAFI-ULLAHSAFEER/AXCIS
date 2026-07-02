import { CASE_STUDIES } from '../constants/homepage';

export default function CaseStudies({ onNavigate }) {
  return (
    <section className="section section--navy" id="case-studies">
      <div className="container">
        <div className="section-header section-header--light">
          <p className="eyebrow eyebrow--light">Case Studies</p>
          <h2>Enterprise Outcomes That Matter</h2>
          <p>Real-world projects delivering measurable business impact across cloud, AI, and security.</p>
        </div>

        <div className="case-studies__grid">
          {CASE_STUDIES.map((study, idx) => (
            <article 
              key={study.id} 
              className="case-studies__card"
              style={{ 
                cursor: study.id === 'coinbase-infrastructure' ? 'pointer' : 'default',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.88)), url(${study.image})`,
                backgroundSize: '110%',
                backgroundPosition: 'center',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(16,185,129,0.2)',
                animationDelay: `${idx * 0.15}s`
              }}
              onClick={() => study.id === 'coinbase-infrastructure' && onNavigate && onNavigate('casestudy')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(16,185,129,0.35)';
                e.currentTarget.style.backgroundSize = '120%';
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)';
                const accentLine = e.currentTarget.querySelector('.case-accent-line');
                if(accentLine) accentLine.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                e.currentTarget.style.backgroundSize = '110%';
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)';
                const accentLine = e.currentTarget.querySelector('.case-accent-line');
                if(accentLine) accentLine.style.width = '0';
              }}
            >
              {/* Dark overlay for text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                pointerEvents: 'none',
                zIndex: 1
              }}></div>
              
              {/* Content with higher z-index */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="case-studies__meta">
                  <span className="case-studies__industry" style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                  }}>{study.industry}</span>
                </div>
                <h3 style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>{study.title}</h3>
                <div className="case-studies__body">
                  <div>
                    <h4 style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>Challenge</h4>
                    <p style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>{study.challenge}</p>
                  </div>
                  <div>
                    <h4 style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>Outcome</h4>
                    <p style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>{study.outcome}</p>
                  </div>
                </div>
                <div className="case-studies__metrics">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="case-studies__metric">
                      <strong style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{m.value}</strong>
                      <span style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="case-studies__stack">
                  {study.stack.map((tech) => (
                    <span key={tech} className="case-studies__tag">{tech}</span>
                  ))}
                </div>
                {study.id === 'coinbase-infrastructure' && (
                  <button 
                    className="btn-primary btn-sm" 
                    style={{ marginTop: '1rem', width: '100%' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate && onNavigate('casestudy');
                    }}
                  >
                    View Full Case Study →
                  </button>
                )}
              </div>
              
              {/* Animated bottom accent line */}
              <div className="case-accent-line" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 3
              }}></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
