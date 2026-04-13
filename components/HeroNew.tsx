"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from "next/image";
import { Nunito, Luckiest_Guy, Quicksand } from "next/font/google";

import heroImage from "../public/mainimage.png";

const headingFont = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});
const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const taglineFont = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
});

/* ── tiny decorative SVG shapes ── */
const StarShape = ({ color = "#FCA5A5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
  </svg>
);

const HeartShape = ({ color = "#F9A8D4", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
  </svg>
);

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const HeroBanner: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      className={`
        relative w-full min-h-screen flex items-center
        bg-[#FFF9F5] overflow-hidden
        ${bodyFont.className}
      `}
    >
      {/* ── background doodle dots ── */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FBCFE8 1.5px, transparent 1.5px),
                            radial-gradient(circle, #FDE68A 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px, 72px 72px",
          backgroundPosition: "0 0, 24px 24px",
          opacity: 0.35,
        }}
      />

      {/* ── floating bubble particles ── */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: false,
          particles: {
            color: {
              value: ["#FCA5A5", "#FDBA74", "#F9A8D4", "#A7F3D0", "#C4B5FD"],
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              random: true,
              outModes: "out",
            },
            number: { value: 20, density: { enable: true, area: 900 } },
            opacity: { value: 0.55 },
            shape: { type: "circle" },
            size: { value: { min: 5, max: 14 } },
          },
        }}
      />

      {/* ── scattered decorative shapes ── */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-[8%]"
        >
          <StarShape color="#FDBA74" size={22} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[20%]"
        >
          <HeartShape color="#F9A8D4" size={16} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-16 left-[12%]"
        >
          <StarShape color="#A7F3D0" size={18} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-[38%]"
        >
          <HeartShape color="#C4B5FD" size={14} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 right-[42%]"
        >
          <StarShape color="#FCA5A5" size={20} />
        </motion.div>
      </div>

      {/* ── main content wrapper ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* ═══ LEFT — text ═══ */}
        <div className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">

          {/* pill badge */}
          <FadeUp delay={0}>
            <span
              className={`
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-rose-100 text-[#E83D59] text-sm font-bold
                border border-rose-200 shadow-sm
                ${taglineFont.className}
              `}
            >
              <span>🌱</span> Montessori · Ages 2–6
            </span>
          </FadeUp>

          {/* main heading */}
          <FadeUp delay={0.08}>
            <h1
              className={`
                text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1]
                text-[#E83D59] tracking-wide
                ${headingFont.className}
              `}
            >
              Motherhood
              <span className="block text-[#3B6CA8] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mt-1">
                Preschool And Daycare
              </span>
            </h1>
          </FadeUp>

          {/* sub-heading */}
          <FadeUp delay={0.15}>
            <p
              className={`
                text-base sm:text-lg md:text-xl text-gray-700
                max-w-lg leading-relaxed font-medium
              `}
            >
              A warm, nurturing Montessori space where your little one learns
              through play, builds confidence, and discovers the joy of
              curiosity — wrapped in a{" "}
              <span className="text-[#E83D59] font-bold">mother's love</span>.
            </p>
          </FadeUp>

          {/* tagline */}
          <FadeUp delay={0.22}>
            <p
              className={`
                text-lg sm:text-xl text-[#3B6CA8] font-bold
                ${taglineFont.className}
              `}
            >
              ✨ Where Montessori Meets Motherly Love
            </p>
          </FadeUp>

          {/* quick trust badges */}
          <FadeUp delay={0.28}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: "🏡", label: "Home-like Setting" },
                { icon: "🎨", label: "Creative Learning" },
                { icon: "🤝", label: "Small Batches" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-full px-3.5 py-1.5 text-sm text-gray-700 font-semibold shadow-sm"
                >
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTA buttons */}
          <FadeUp delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 28px rgba(232,61,89,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full sm:w-auto px-8 py-3.5
                  bg-[#E83D59] text-white rounded-full
                  font-bold text-base sm:text-lg
                  shadow-lg shadow-rose-200
                  transition-all duration-200
                  flex items-center justify-center gap-2
                "
              >
                <span>🗓️</span> Schedule a Tour
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full sm:w-auto px-8 py-3.5
                  bg-white text-[#3B6CA8] rounded-full
                  font-bold text-base sm:text-lg
                  border-2 border-[#3B6CA8]/25
                  shadow-md transition-all duration-200
                  flex items-center justify-center gap-2
                "
              >
                <span>📖</span> Learn More
              </motion.button>
            </div>
          </FadeUp>

          {/* social proof */}
          <FadeUp delay={0.42}>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {["🧒", "👶", "🧒‍♀️", "👦"].map((e, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {e}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-semibold">
                <span className="text-[#E83D59] font-extrabold">200+</span>{" "}
                happy families &amp; counting ⭐
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ═══ RIGHT — image card ═══ */}
        <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
          <FadeUp delay={0.18} className="w-full">
            <div className="relative mx-auto lg:ml-auto" style={{ maxWidth: 400 }}>

              {/* decorative blob behind card */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[3rem] opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 40%, #FCA5A5 0%, #C4B5FD 50%, #A7F3D0 100%)",
                }}
              />

              {/* image card */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={heroImage}
                  alt="Children learning at Motherhood Preschool"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                {/* subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#E83D59]/25 to-transparent" />
              </div>

              {/* floating info pill — top left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -left-4 sm:-left-8 top-6 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-rose-100"
              >
                <span className="text-2xl">🎒</span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold leading-none mb-0.5">Admissions</p>
                  <p className="text-sm text-[#E83D59] font-extrabold leading-none">Now Open!</p>
                </div>
              </motion.div>

              {/* floating rating pill — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute -right-4 sm:-right-8 bottom-10 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-yellow-100"
              >
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-sm text-gray-800 font-extrabold leading-none">4.9 / 5</p>
                  <p className="text-xs text-gray-400 font-semibold leading-none mt-0.5">Parent Rating</p>
                </div>
              </motion.div>

              {/* floating play pill — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute -bottom-4 left-6 bg-[#3B6CA8] text-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
              >
                <span className="text-xl">🎨</span>
                <p className="text-sm font-bold leading-none">Play &amp; Learn</p>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── bottom wave divider ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16"
          fill="#fff"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;