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
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
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
        ctx.fillStyle = "rgba(52, 125, 135, 0.4)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52, 125, 135, ${0.06 * (1 - dist / 180)})`;
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
      <Image src="/deck-assets/image6.jpg" alt="" fill className="object-cover opacity-40" priority />
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_30%_40%,_rgba(52,125,135,0.2)_0%,_transparent_60%)]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* MBSX badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 border border-teal/30 rounded-full bg-white/5 backdrop-blur-sm">
          <Image src="/deck-assets/image5.png" alt="OWNR" width={80} height={20} className="h-5 w-auto" priority />
          <div className="w-px h-4 bg-white/20" />
          <span className="text-teal-light text-sm font-bold tracking-wider">MBSX</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-[0.95] tracking-tight text-white">
          The $15 Trillion
          <br />
          <span className="text-teal-light">Opportunity</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          Mortgage-backed securities are the backbone of American housing.
          <br className="hidden md:block" />
          <span className="text-white font-medium">Now, for the first time, they&apos;re going onchain.</span>
        </p>

        <p className="text-white/50 text-sm md:text-base mb-10 max-w-2xl mx-auto">
          MBSX is the first exchange to tokenize MBS — giving institutions
          near-instant settlement and giving everyday investors access to
          government-backed yield for the first time ever.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { value: "$15T", label: "Market Size" },
            { value: "$311B", label: "Traded Daily" },
            { value: "~12s", label: "Settlement" },
            { value: "24/7", label: "Trading" },
          ].map((stat) => (
            <div key={stat.label} className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-teal-light">{stat.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/institutions"
            className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-teal/20 text-lg"
          >
            I&apos;m an Institution
          </Link>
          <Link
            href="/retail"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all text-lg"
          >
            I&apos;m a Retail Investor
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
