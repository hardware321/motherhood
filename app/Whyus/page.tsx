"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, BookHeart, School, Smile } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import safetyImage from "../../public/compressed/young-european-female-with-daugheters-posing-isolated-white-surface.jpg.webp";
import affectionImage from "../../public/compressed/young-beautiful-darkhaired-mother-holds-her-newborn-daughter-her-arms-cozy-home-family-portrait-motherhood-young-woman-kisses-her-2-month-old-baby.jpg.webp";
import learningImage from "../../public/compressed/young-child-is-thoughtfully-engaged-with-abacus-suggesting-learning-play-environment.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const reasons = [
  {
    icon: HeartHandshake,
    title: "Emotionally Nurturing Care",
    copy: "We create a first-school experience where children feel reassured, loved, and gently welcomed into each day.",
    bg: "bg-rose-50",
    iconStyle: "bg-rose-100 text-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Safe And Supportive Spaces",
    copy: "Parents trust us because safety, supervision, comfort, and thoughtful routines remain central to everything we do.",
    bg: "bg-blue-50",
    iconStyle: "bg-blue-100 text-blue-500",
  },
  {
    icon: BookHeart,
    title: "Learning With Joy",
    copy: "Our classrooms blend creativity, structure, exploration, and emotional warmth so growth feels natural and happy.",
    bg: "bg-amber-50",
    iconStyle: "bg-amber-100 text-amber-500",
  },
  {
    icon: School,
    title: "Strong School Readiness",
    copy: "Children build communication, confidence, routine, and foundational learning without losing the joy of childhood.",
    bg: "bg-emerald-50",
    iconStyle: "bg-emerald-100 text-emerald-500",
  },
  {
    icon: Smile,
    title: "Warm Parent Partnership",
    copy: "We stay connected with families so each child receives continuity of care, understanding, and encouragement.",
    bg: "bg-violet-50",
    iconStyle: "bg-violet-100 text-violet-500",
  },
];

export default function WhyUsPage() {
  return (
    <div className={`overflow-x-hidden bg-[#fff9f4] text-slate-800 ${bodyFont.className}`}>
      <section className="px-6 pt-32 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-[#3b6ca8] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Why MothersPride
            </div>
            <h1 className={`mt-6 text-5xl leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Families choose us for the feeling
              <span className="block text-[#3b6ca8]">their child carries home.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              That feeling is safety, affection, confidence, and joy. We focus on how children learn, but also on how they feel while learning, because both shape a strong beginning.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[240px] overflow-hidden rounded-[34px] shadow-[0_22px_70px_rgba(15,23,42,0.12)] sm:row-span-2">
              <Image src={safetyImage} alt="Happy child and parent" fill className="object-cover" />
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-[34px] shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
              <Image src={affectionImage} alt="Motherly affection" fill className="object-cover" />
            </div>
            <div className="rounded-[34px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e83d59]">Our Difference</p>
              <p className={`mt-3 text-2xl leading-tight text-slate-900 ${headingFont.className}`}>
                We balance premium preschool quality with the softness of everyday care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className={`rounded-[30px] p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] ${reason.bg}`}
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${reason.iconStyle}`}>
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className={`text-2xl text-slate-900 ${headingFont.className}`}>{reason.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{reason.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[42px] bg-white p-6 shadow-[0_26px_90px_rgba(15,23,42,0.08)] md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e83d59]">The MothersPride Experience</p>
            <h2 className={`mt-4 text-4xl leading-tight text-slate-900 md:text-5xl ${headingFont.className}`}>
              A child-first environment where confidence grows through comfort.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Our teaching teams support communication, social ease, imagination, and foundational learning through warm interactions and purposeful classroom experiences.
              </p>
              <p>
                Whether a child is joining preschool or daycare, the goal stays the same: to create an environment where they feel emotionally secure, seen as individuals, and excited to return the next day.
              </p>
              <p>
                That is what gives families confidence in MothersPride, and what helps children step forward with trust.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[34px]">
            <Image src={learningImage} alt="Learning with joy" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
