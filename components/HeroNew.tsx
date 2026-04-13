"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from "next/image";
import { Nunito, Fredoka, Quicksand } from "next/font/google";

import heroImage from "../public/compressed/unconditional.webp";

import image1 from "../public/compressed/beautiful-mother-with-little-daughter.jpg.webp"
import image2 from "../public/compressed/young-girl-sitting-table-drawing-colorful-picture-with-crayons.jpg.webp"
import image3 from "../public/compressed/woman-yellow-dress-with-bunch-children-background.jpg.webp"
import image4 from "../public/compressed/woman-boy-are-smiling-smiling.jpg.webp"

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const taglineFont = Quicksand({ subsets: ["latin"], weight: ["600", "700"] });

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
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
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
      className={`relative w-full min-h-screen flex items-center overflow-hidden ${bodyFont.className}`}
    >
      {/* ── FULL BACKGROUND IMAGE ── */}
      <Image
        src={heroImage}
        alt="Children at Motherhood Preschool"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── LAYERED GRADIENT OVERLAY ──
          Left heavy so text is always readable; right fades so image shines through */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              105deg,
              rgba(255,249,245,0.97) 0%,
              rgba(255,249,245,0.92) 28%,
              rgba(255,249,245,0.70) 52%,
              rgba(255,249,245,0.18) 78%,
              rgba(255,249,245,0.04) 100%
            )
          `,
        }}
      />

      {/* ── BOTTOM FADE for clean section end ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FFF9F5 0%, transparent 100%)" }}
      />

      {/* ── POLKA DOT TEXTURE (very faint, adds warmth) ── */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,61,89,0.07) 1.5px, transparent 1.5px)`,
          backgroundSize: "42px 42px",
        }}
      />

      {/* ── PARTICLES ── */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-20 pointer-events-none"
        options={{
          fullScreen: false,
          particles: {
            color: { value: ["#FCA5A5", "#FDBA74", "#F9A8D4", "#A7F3D0", "#C4B5FD"] },
            move: { enable: true, speed: 0.5, direction: "top", random: true, outModes: "out" },
            number: { value: 18, density: { enable: true, area: 1000 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 5, max: 13 } },
          },
        }}
      />

      {/* ── FLOATING DECORATIVE EMOJIS ── */}
      <div aria-hidden className="absolute inset-0 z-20 pointer-events-none">
        {[
          { top: "8%",  left: "4%",  emoji: "⭐", size: "text-xl",   anim: { rotate: 360 },    dur: 20 },
          { top: "70%", left: "6%",  emoji: "🌸", size: "text-lg",   anim: { y: [0,-12,0] },   dur: 4  },
          { top: "22%", left: "2%",  emoji: "💛", size: "text-base", anim: { rotate: -360 },   dur: 26 },
          { top: "55%", left: "38%", emoji: "✨", size: "text-sm",   anim: { y: [0,8,0] },     dur: 5  },
          { top: "12%", left: "46%", emoji: "🎈", size: "text-lg",   anim: { y: [0,-10,0] },   dur: 6  },
        ].map((s, i) => (
          <motion.span
            key={i}
            style={{ top: s.top, left: s.left }}
            className={`absolute ${s.size} opacity-60 select-none`}
            animate={s.anim}
            transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut" }}
          >
            {s.emoji}
          </motion.span>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32">
        <div className="w-full sm:max-w-xl lg:max-w-2xl flex flex-col items-start gap-5">

       

          {/* heading */}
          <FadeUp delay={0.08}>
            <h1 className={`text-[54px] sm:text-7xl lg:text-[88px] leading-[1.05] text-[#E83D59] ${headingFont.className}`}>
              Motherhood
              <span className={`block text-[#3B6CA8] text-3xl sm:text-4xl lg:text-[50px] mt-1 ${headingFont.className}`}>
                Preschool And Daycare
              </span>
            </h1>
          </FadeUp>

          {/* body */}
          <FadeUp delay={0.16}>
            <p className="text-base sm:text-lg text-gray-800 max-w-md leading-relaxed font-medium">
              A warm, nurturing Montessori space where your little one learns
              through play, builds confidence, and discovers the joy of curiosity
              — wrapped in a{" "}
              <span className="text-[#E83D59] font-bold">mother's love</span>.
            </p>
          </FadeUp>

          {/* tagline */}
          <FadeUp delay={0.22}>
            <p className={`text-lg sm:text-xl text-[#3B6CA8] font-bold ${taglineFont.className}`}>
              ✨ Where Montessori Meets Motherly Love
            </p>
          </FadeUp>
          {/* CTAs */}
          <FadeUp delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 14px 30px rgba(232,61,89,0.38)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-[#E83D59] text-white rounded-full font-bold text-base sm:text-lg shadow-lg shadow-rose-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                🗓️ Schedule a Tour
              </motion.button>
            
            </div>
          </FadeUp>

          {/* social proof */}
          <FadeUp delay={0.42}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[image1 , image2, image3, image4].map((e, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-sm shadow"
                  >
                    <Image src={e} alt="Child" className="w-full h-full object-cover rounded-full" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-700 font-semibold">
                <span className="text-[#E83D59] font-extrabold">200+</span>{" "}
                happy families & counting ⭐
              </p>
            </div>
          </FadeUp>

        </div>
      </div>

  

      {/* ── WAVE DIVIDER ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14" fill="#FFF9F5">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;