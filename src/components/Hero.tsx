"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 125, 135, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52, 125, 135, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_20%_30%,_rgba(52,125,135,0.25)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_80%_70%,_rgba(52,125,135,0.15)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-32 bg-gradient-to-t from-[#0f2130] to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 sm:pt-0">
        {/* OWNR + MBSX badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 border border-teal/30 rounded-full bg-white/5 backdrop-blur-md">
          <Image src="/deck-assets/image5.png" alt="OWNR" width={80} height={20} className="h-5 w-auto" priority />
          <div className="w-px h-4 bg-white/20" />
          <span className="text-teal-light text-sm font-bold tracking-wider">MBSX</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-[0.95] tracking-tight text-white">
          Mortgage Markets,
          <br />
          <span className="text-gradient-teal">Rebuilt</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Mortgage-backed securities are the backbone of American housing.
          <br className="hidden md:block" />
          <span className="text-white font-medium">Now, for the first time, they are going onchain.</span>
        </p>

        {/* Three stats bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-14 max-w-xl mx-auto">
          {[
            { value: "~12s", label: "Settlement" },
            { value: "Global", label: "Access" },
            { value: "24/7", label: "Trading" },
          ].map((stat, i) => (
            <div key={stat.label} className={`flex items-center gap-3 px-6 py-3 ${i > 0 ? "sm:border-l sm:border-white/10" : ""}`}>
              <div className="text-2xl md:text-3xl font-bold text-teal-light">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/institutions"
            className="group relative px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal/25 text-lg overflow-hidden"
          >
            <span className="relative z-10">I&apos;m an Institution</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-dark to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/retail"
            className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/[0.15] hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 text-lg"
          >
            I&apos;m an Investor
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
