"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Heart, Star, Sparkles, BookOpen, Users, Palette, Crown } from "lucide-react";
import { Fredoka, Nunito, Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import boywithcup from "../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";
import girlwithbook from "../public/compressed/heartfelt-moment-mother-embracing-her-newborn-baby-with-pure-love-joy.jpg.webp";
import boywithelephant from "../public/compressed/maternal-love-mother-baby-white-background.jpg.webp";
import girlonswing from "../public/compressed/mother-baby.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const taglineFont = Quicksand({ subsets: ["latin"], weight: ["600", "700"] });

interface Program {
  id: number;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  highlights: string[];
  image: any;
  linkId: string;
  accentColor: string;
  bgGradient: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Little Explorers",
    subtitle: "Play Group",
    ageRange: "2–3 Years",
    description: "A joyful journey of discovery through sensory play and imagination. Every day is a brand new adventure!",
    highlights: ["Sensory Play", "Social Skills", "Music & Movement", "Storytime"],
    image: boywithcup,
    linkId: "explorers",
    accentColor: "#F472B6", // Soft Warm Pink
    bgGradient: "from-rose-400/80 via-orange-300/70 to-amber-200/60", // Warmth & Mother Love
  },
  {
    id: 2,
    title: "Curious Learners",
    subtitle: "Nursery",
    ageRange: "3–4 Years",
    description: "Exploring colors, numbers, and letters through hands-on play and interactive experiences.",
    highlights: ["Numbers & Letters", "Art & Craft", "Group Play", "Phonics"],
    image: girlwithbook,
    linkId: "learners",
    accentColor: "#2DD4BF", // Soft Teal
    bgGradient: "from-teal-400/80 via-emerald-300/70 to-sky-200/60", // Peace & Serenity
  },
  {
    id: 3,
    title: "Creative Thinkers",
    subtitle: "LKG",
    ageRange: "4–5 Years",
    description: "Strengthening early academics while fostering creative expression, confidence, and curiosity.",
    highlights: ["Reading Ready", "STEM Basics", "Drama & Dance", "Creative Arts"],
    image: boywithelephant,
    linkId: "thinkers",
    accentColor: "#A78BFA", // Soft Lavender
    bgGradient: "from-violet-400/80 via-purple-300/70 to-fuchsia-200/60", // Care & Gentleness
  },
  {
    id: 4,
    title: "Future Leaders",
    subtitle: "UKG",
    ageRange: "5–6 Years",
    description: "Building a strong foundation for formal schooling and essential life skills with joy and confidence.",
    highlights: ["School Readiness", "Leadership", "Critical Thinking", "Problem Solving"],
    image: girlonswing,
    linkId: "leaders",
    accentColor: "#FB923C", // Soft Apricot
    bgGradient: "from-orange-400/80 via-amber-300/70 to-yellow-100/60", // Nurturing Sunshine
  },
];

/* ── Floating particle ── */
const FloatingDot = ({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, backgroundColor: color }}
    animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

/* ── Individual card ── */
const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[560px] rounded-[36px] overflow-hidden cursor-pointer"
      whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* ── Shadow ring on hover ── */}
      <div
        className="absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
        style={{ boxShadow: `0 0 0 3px ${program.accentColor}60, 0 30px 60px ${program.accentColor}40` }}
      />

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div
        className={`absolute inset-0 z-[1] bg-gradient-to-t ${program.bgGradient} opacity-70 group-hover:opacity-80 transition-opacity duration-500`}
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-black/20" />


      {/* ── Age range arc ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-10 pointer-events-none">
        <span className="text-[130px] font-black text-white leading-none select-none">
          {program.ageRange.split("–")[0]}
        </span>
      </div>

      {/* ── CONTENT BOTTOM ── */}
      <div className="absolute inset-0 z-20 p-7 flex flex-col justify-end">
        {/* Subtitle */}
        <p className={`text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-1 ${taglineFont.className}`}>
          {program.subtitle} · {program.ageRange}
        </p>

        {/* Title */}
        <h3 className={`text-4xl text-white mb-2 leading-tight ${headingFont.className}`}>
          {program.title}
        </h3>

        {/* Animated underline */}
        <div
          className="h-1 w-12 rounded-full mb-4 transition-all duration-500 group-hover:w-24"
          style={{ backgroundColor: "white", opacity: 0.5 }}
        />

        {/* Description */}
        <p className={`text-sm text-white/90 leading-relaxed mb-5 ${bodyFont.className}`}>
          {program.description}
        </p>

        {/* Highlights chips — slide up on hover */}
        <div className="flex flex-wrap gap-2 mb-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          {program.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white"
            >
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href={`/programs#${program.linkId}`}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl w-fit"
            style={{ color: program.accentColor }}
          >
            Explore Program
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};


/* ── Main section ── */
const ProgramSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className={`relative py-28 overflow-hidden ${bodyFont.className}`}
      style={{ background: "linear-gradient(160deg, #FFF5F7 0%, #FFF9F5 40%, #F0F7FF 100%)" }}
    >
      {/* ── Decorative background blobs ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-32 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-[100px]" />
      </motion.div>

      {/* ── Floating decorative dots ── */}
      <FloatingDot x="8%" y="15%" size={14} color="#E83D5940" delay={0} />
      <FloatingDot x="90%" y="10%" size={10} color="#3B6CA840" delay={1} />
      <FloatingDot x="5%" y="70%" size={18} color="#9333EA30" delay={2} />
      <FloatingDot x="92%" y="65%" size={12} color="#05966930" delay={0.5} />
      <FloatingDot x="50%" y="5%" size={8} color="#E83D5950" delay={1.5} />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* ────── HEADER ────── */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400" />
              <p className={`text-[#E83D59] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-1.5 ${taglineFont.className}`}>
                <Sparkles className="w-3.5 h-3.5" />
                Our Learning Pathways
                <Sparkles className="w-3.5 h-3.5" />
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400" />
            </div>

            {/* Headline */}
            <h2 className={`text-6xl md:text-7xl text-[#1a1a2e] mb-4 leading-tight ${headingFont.className}`}>
              Where Every Child{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #E83D59, #F97316, #E83D59)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Shines
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M 0 8 Q 50 0 100 8 Q 150 16 200 8"
                    stroke="#E83D59"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
              </span>
            </h2>

            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Thoughtfully designed programs that grow with your child — from first steps to school readiness.
            </p>
          </motion.div>
        </div>

                
        {/* ────── PROGRAM CARDS GRID ────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;