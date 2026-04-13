"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GirlHead from "../../public/girlfaceonly.png"; // Placeholder Image
import Boywithbrush from "../../public/boywithbrush.png"; // Placeholder Image
import girlonswing from "../../public/girlonwing.png"; // Placeholder Image
import { Target, Lightbulb, Heart, Sparkles } from "lucide-react";
import boyonbucket from "../../public/boywithcup.png"; // Placeholder Image
import AboutHeaderSimple from "@/components/AboutHeader";
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import girlwithbook from "../../public/girlwithbook.png"

// --- REUSABLE WAVE COMPONENT ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color?: string; // Allow changing wave color if needed
}

const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const handwritingFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color = "text-white" }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full ${color} ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[60px] sm:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};

const AboutUsSegmented: React.FC = () => {
  return (
    <div className="w-full flex flex-col">

      <AboutHeaderSimple />
      
      {/* =========================================
          SECTION 1: OUR AIM (Wavy Background)
      ========================================= */}
      <section className="relative w-full bg-amber-200 md:py-14  py-10 overflow-hidden">
        <WaveSeparator position="top" color="text-white" />
        
        {/* Background Doodle */}
        <div className="absolute inset-0 pointer-events-none opacity-10 top-2">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,100 100,0" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-2 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* TEXT (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-amber-900 uppercase tracking-tight" ${titleFont.className}`}>
                  Our Aim
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-amber-800 font-medium leading-relaxed mb-6">
                At <strong>Little Dreamers at Cambridge</strong>, we are committed to nurturing young minds through quality early education for children aged 2 to 6 years.
              </p>
              <p className="text-lg md:text-xl text-amber-800 font-medium leading-relaxed">
                Our programs focus on creativity, curiosity, and confidence — helping every child discover their unique potential. We don’t just teach — we inspire future leaders.
              </p>
            </motion.div>

            {/* IMAGE (Right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[400px]">
                 {/* No Card, just image with shape */}
                 <Image 
                   src={Boywithbrush} 
                   alt="Our Aim" 
                   width={500}
                   height={500}
                   className="object-contain drop-shadow-2xl"
                 />
                 {/* Floating Element */}
                 <div className="absolute top-0 right-10 animate-bounce">
                    <Sparkles className="w-10 h-10 text-amber-400" />
                 </div>
              </div>
            </motion.div>

          </div>
        </div>

        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: OUR VISION (White Background - Clean)
      ========================================= */}
      <section className="w-full bg-white py-2 lg:py-0 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center md:gap-8 gap-8">
            
            {/* TEXT (Right) */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 text-left lg:text-right"
            >
              <div className="flex items-center gap-4 mb-6 justify-start lg:justify-end">
                 <h2 className={`text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight order-2 lg:order-1 ${titleFont.className}`}>
                  Our Vision
                </h2>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center order-1 lg:order-2">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
              </div>

              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6">
                We strive to create a joyful, safe, and stimulating environment where children learn through exploration, imagination, and purposeful play.
              </p>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                With a strong focus on holistic development — intellectual, emotional, social, and physical — we aspire to empower every child to become an independent thinker and a future-ready leader.
              </p>
            </motion.div>

            {/* IMAGE (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
               <div className="relative">
                 {/* Simple Blob Background behind image */}
                 <div className=" inset-0 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10 transform scale-100"></div>
                 <Image 
                   src={girlwithbook} 
                   alt="Our Vision" 
                   width={350}
                   height={350}
                   className="object-contain"
                 />
               </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: WHY US (Wavy Background)
      ========================================= */}
      <section className="relative w-full bg-rose-400 pt-14 pb-14 overflow-hidden">
        <WaveSeparator position="top" color="text-white" />
        
        {/* Background Doodle */}
         <div className="absolute inset-0 pointer-events-none opacity-10 top-4">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M100,0 Q50,100 0,0" fill="none" stroke="#e11d48" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* TEXT (Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-rose-900 uppercase tracking-tight ${titleFont.className}`}>
                  Why Choose Us
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-rose-800 font-medium leading-relaxed mb-6">
                Parents choose <strong>Little Dreamers</strong> because we blend care, creativity, and high-quality education to create a warm, nurturing environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 bg-rose-500 rounded-full shrink-0" />
                  <span className="text-lg text-rose-800 font-medium">Curriculum that balances play with purposeful learning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 bg-rose-500 rounded-full shrink-0" />
                  <span className="text-lg text-rose-800 font-medium">Compassionate educators focusing on unique strengths.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 bg-rose-500 rounded-full shrink-0" />
                  <span className="text-lg text-rose-800 font-medium">Holistic development for life, not just school.</span>
                </li>
              </ul>
            </motion.div>

            {/* IMAGE (Right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
               <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                 <Image 
                   src={boyonbucket} 
                   alt="Why Choose Us" 
                   width={500}
                   height={500}
                   className="object-contain drop-shadow-2xl"
                 />
               </div>
            </motion.div>

          </div>
        </div>

        <WaveSeparator position="bottom" color="text-white" />
      </section>

    </div>
  );
};

export default AboutUsSegmented;