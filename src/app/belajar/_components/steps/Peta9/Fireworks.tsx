"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
};

type Rocket = { x: number; y: number; vy: number; targetY: number; color: string };

const COLORS = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#F472B6", "#FFFFFF"];

export default function Fireworks({ intensity = 1 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];
    let lastLaunch = 0;
    let frame = 0;

    const explode = (x: number, y: number, color: string) => {
      const count = Math.round(70 * intensity);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 1.5 + Math.random() * 4;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color: Math.random() < 0.25 ? "#FFFFFF" : color,
          size: 1.5 + Math.random() * 2,
        });
      }
    };

    const launch = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      rockets.push({
        x: w * (0.1 + Math.random() * 0.8),
        y: h,
        vy: -(9 + Math.random() * 4),
        targetY: h * (0.12 + Math.random() * 0.4),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    for (let i = 0; i < 3; i++) setTimeout(launch, i * 150);

    const tick = (time: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";

      if (time - lastLaunch > 350 / intensity) {
        launch();
        if (Math.random() < 0.4) launch();
        lastLaunch = time;
      }

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();
        if (r.y <= r.targetY) {
          explode(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 + 0.05;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.013;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[60] w-screen h-screen pointer-events-none" aria-hidden />;
}
