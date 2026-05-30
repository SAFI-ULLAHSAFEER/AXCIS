import { useEffect, useRef } from 'react';

const NODES = [
  { x: 0.12, y: 0.22, r: 3, pulse: 0 },
  { x: 0.28, y: 0.15, r: 2.5, pulse: 0.4 },
  { x: 0.45, y: 0.28, r: 3.5, pulse: 0.8 },
  { x: 0.62, y: 0.12, r: 2, pulse: 1.2 },
  { x: 0.78, y: 0.25, r: 3, pulse: 0.2 },
  { x: 0.88, y: 0.45, r: 2.5, pulse: 0.6 },
  { x: 0.72, y: 0.58, r: 3, pulse: 1.0 },
  { x: 0.55, y: 0.72, r: 2, pulse: 0.3 },
  { x: 0.38, y: 0.65, r: 3.5, pulse: 0.7 },
  { x: 0.22, y: 0.78, r: 2.5, pulse: 1.4 },
  { x: 0.08, y: 0.55, r: 2, pulse: 0.5 },
  { x: 0.35, y: 0.42, r: 4, pulse: 0 },
  { x: 0.65, y: 0.42, r: 2.5, pulse: 0.9 },
  { x: 0.5, y: 0.18, r: 2, pulse: 0.35 },
  { x: 0.15, y: 0.68, r: 2, pulse: 1.1 },
  { x: 0.85, y: 0.72, r: 2.5, pulse: 0.55 },
  { x: 0.48, y: 0.88, r: 2, pulse: 0.85 },
  { x: 0.92, y: 0.18, r: 2, pulse: 1.3 },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 0],
  [11, 2], [11, 8], [11, 12], [11, 1], [11, 7], [12, 4], [12, 6], [13, 3], [13, 11], [14, 9], [15, 6], [16, 7], [17, 4],
  [0, 11], [2, 13], [4, 12], [8, 14], [6, 15], [7, 16], [3, 17],
];

const CURSOR_RADIUS = 220;
const DOT_LINK_RADIUS = 200;

function drawLine(ctx, x1, y1, x2, y2, alpha, width = 1) {
  const grad = ctx.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, `rgba(37, 99, 235, ${alpha})`);
  grad.addColorStop(0.5, `rgba(94, 184, 255, ${Math.min(alpha * 1.2, 0.85)})`);
  grad.addColorStop(1, `rgba(37, 99, 235, ${alpha})`);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = grad;
  ctx.lineWidth = width;
  ctx.stroke();
}

export default function AxisNetwork({ className = '', opacity = 1, interactive = false }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let t = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const updatePointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      const points = NODES.map((n, i) => ({
        x: n.x * w + Math.sin(t + n.pulse) * 3,
        y: n.y * h + Math.cos(t * 0.7 + n.pulse) * 3,
        r: n.r,
        i,
      }));

      CONNECTIONS.forEach(([a, b]) => {
        const p1 = points[a];
        const p2 = points[b];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const alpha = Math.max(0.03, 0.22 - dist / (w * 0.55));
        drawLine(ctx, p1.x, p1.y, p2.x, p2.y, alpha);
      });

      const { x: mx, y: my, active } = mouseRef.current;

      if (interactive && active) {
        const near = points.filter((p) => Math.hypot(p.x - mx, p.y - my) < CURSOR_RADIUS);

        for (let i = 0; i < near.length; i += 1) {
          for (let j = i + 1; j < near.length; j += 1) {
            const p1 = near[i];
            const p2 = near[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < DOT_LINK_RADIUS) {
              const strength = 1 - dist / DOT_LINK_RADIUS;
              drawLine(ctx, p1.x, p1.y, p2.x, p2.y, 0.08 + strength * 0.28, 0.6 + strength * 0.35);
            }
          }
        }

        near.forEach((p) => {
          const md = Math.hypot(p.x - mx, p.y - my);
          const strength = 1 - md / CURSOR_RADIUS;
          drawLine(ctx, p.x, p.y, mx, my, 0.12 + strength * 0.35, 0.7 + strength * 0.5);
        });

        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#5eb8ff';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, CURSOR_RADIUS * 0.15, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(94, 184, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      points.forEach((p, idx) => {
        const pulse = 0.6 + Math.sin(t * 2 + NODES[idx].pulse) * 0.4;
        const isCore = NODES[idx].r >= 3.5;
        const nearCursor = interactive && active && Math.hypot(p.x - mx, p.y - my) < CURSOR_RADIUS;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse + (nearCursor ? 3 : 1.5), 0, Math.PI * 2);
        ctx.fillStyle = nearCursor
          ? `rgba(94, 184, 255, ${0.1 * pulse})`
          : isCore ? `rgba(94, 184, 255, ${0.06 * pulse})` : 'rgba(37, 99, 235, 0.04)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + (nearCursor ? 0.3 : 0), 0, Math.PI * 2);
        ctx.fillStyle = nearCursor ? '#5eb8ff' : isCore ? '#5eb8ff' : '#2563eb';
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    const onMove = (e) => updatePointer(e.clientX, e.clientY);
    const onTouch = (e) => {
      if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999, active: false }; };

    if (interactive) {
      document.addEventListener('mousemove', onMove, { passive: true });
      document.addEventListener('touchmove', onTouch, { passive: true });
      document.addEventListener('mouseleave', onLeave);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onTouch);
        document.removeEventListener('mouseleave', onLeave);
      }
      cancelAnimationFrame(frameRef.current);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`axis-network ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
