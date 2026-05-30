import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 100, suffix: '+', label: 'Countries Covered' },
  { value: 24, suffix: '/7', label: 'Global Support' },
  { value: 365, suffix: '', label: 'Days a Year' },
  { value: 3, suffix: '', label: 'Engineer Levels (L1–L3)' },
];

function useCountUp(target, active, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);
  return value;
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active);
  return (
    <div className="stats-bar__item">
      <strong>{count}{stat.suffix}</strong>
      <span>{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref}>
      <div className="container stats-bar__inner">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
