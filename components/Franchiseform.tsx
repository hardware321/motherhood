"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import { 
  Home, 
  ChevronRight, 
  TrendingUp, 
  Baby,       
  BookOpen,   
  Hammer,     
  Award,      
  Users,      
  Megaphone,  
  Globe,      
  CheckCircle,
  Briefcase,
  DollarSign,
  Loader2 
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

// --- FONTS ---
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

// --- REUSABLE WAVE COMPONENT ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color: string; 
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color }) => {
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
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
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


// --- HEADER COMPONENT ---
const FranchiseHeader = () => {
  return (
    <header className="relative w-full h-[50vh] min-h-[450px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center overflow-hidden">
      
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-1/4">
            <Briefcase className="w-24 h-24 text-white" />
         </motion.div>
         <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-1/4">
            <TrendingUp className="w-20 h-20 text-emerald-100" />
         </motion.div>
      </div>

      <div className="relative z-10 text-center px-4 mt-8">
        <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4 opacity-75" />
            <span>Franchise</span>
        </div>

        <h1 className={`text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 ${titleFont.className}`}>
          Partner With
          <span className="block text-emerald-100 mt-2">Success</span>
        </h1>
        
        <p className="text-xl text-white/95 max-w-2xl mx-auto font-bold">
          Join the Little Dreamers family with our Zero Royalty Model.
        </p>
      </div>

      {/* WAVE: Connects to Section 1 (White) */}
      <WaveSeparator position="bottom" color="text-white" />
    </header>
  );
};


// --- FRANCHISE BENEFIT CARD ---
const BenefitCard = ({ icon: Icon, title, desc, color, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className={`bg-white rounded-[2rem] p-8 border-b-8 ${color} shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col`}
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
       <Icon className={`w-8 h-8 ${color.replace('border-', 'text-')}`} />
    </div>
    <h3 className={`text-xl font-black text-slate-800 mb-3 ${titleFont.className}`}>
      {title}
    </h3>
    <p className="text-slate-600 font-medium leading-relaxed">
      {desc}
    </p>
  </motion.div>
);


// --- MAIN PAGE COMPONENT ---
export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {

  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property"
    },
  });

  const { register, formState: { errors } } = form;

  const onSubmit = (data: FranchiseFormSchemaType) => {
    // Pass the fully gathered data to the parent handler
    onHandleSubmit(data);
  };

  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>
      
      <FranchiseHeader />

      {/* =========================================
          SECTION 1: KEY HIGHLIGHTS (White Theme)
      ========================================= */}
      <section className="w-full bg-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm bg-emerald-50 px-4 py-2 rounded-full mb-4 inline-block">
                Why Franchise With Us?
              </span>
              <h2 className={`text-4xl md:text-5xl font-black text-slate-900 mb-6 mt-4 ${titleFont.className}`}>
                The Little Dreamers At Cambridge <span className="text-emerald-500">Advantage</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                 We offer a proven business model designed for high profitability and long-term growth.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* 1. Zero Royalty */}
              <BenefitCard 
                icon={DollarSign}
                title="Zero Royalty Model"
                desc="100% profit retention for franchise partners. We charge only for student kits — no recurring royalty fees."
                color="border-emerald-500"
                delay={0}
              />

              {/* 2. No Royalty on Daycare */}
              <BenefitCard 
                icon={Baby}
                title="100% Daycare Revenue"
                desc="Enjoy full earnings from daycare operations, adding a consistent, royalty-free monthly income stream."
                color="border-teal-500"
                delay={0.1}
              />

              {/* 3. High ROI */}
              <BenefitCard 
                icon={TrendingUp}
                title="High ROI Model"
                desc="Low investment model designed for quick breakeven and scalable profitability for our partners."
                color="border-cyan-500"
                delay={0.2}
              />

              {/* 4. Complete Setup */}
              <BenefitCard 
                icon={Hammer}
                title="Complete Setup Support"
                desc="End-to-end guidance from property selection, interiors, and branding to staff recruitment and training."
                color="border-orange-500"
                delay={0.3}
              />

              {/* 5. Marketing Support */}
              <BenefitCard 
                icon={Megaphone}
                title="Marketing Support"
                desc="Centralized digital marketing, lead generation, and promotional assistance to drive admissions."
                color="border-rose-500"
                delay={0.4}
              />

              {/* 6. Academic Framework */}
              <BenefitCard 
                icon={BookOpen}
                title="Proven Curriculum"
                desc="Scientifically designed curriculum blending play-based, experiential, and value-based learning."
                color="border-purple-500"
                delay={0.5}
              />

              {/* 7. Comprehensive Training */}
              <BenefitCard 
                icon={Users}
                title="Comprehensive Training"
                desc="Step-by-step support for academic planning, parent engagement, and daily center management."
                color="border-blue-500"
                delay={0.6}
              />

              {/* 8. Strong Brand */}
              <BenefitCard 
                icon={Award}
                title="Strong Brand Identity"
                desc="A premium inspired preschool that parents trust and associate with quality education."
                color="border-amber-500"
                delay={0.7}
              />

              {/* 9. Expansion Vision */}
              <BenefitCard 
                icon={Globe}
                title="Expansion Vision"
                desc="Opportunity to grow Pan-India & International with a brand focused on quality and innovation."
                color="border-indigo-500"
                delay={0.8}
              />

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: INQUIRY FORM (Emerald Theme)
      ========================================= */}
      <section className="relative w-full bg-emerald-200 pt-32 pb-32 overflow-hidden">
        
        {/* Top Wave: White to mask previous section */}
        <WaveSeparator position="top" color="text-white" />

        {/* Background Doodle */}
        <div className="absolute inset-0 pointer-events-none opacity-10 top-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,0 Q50,100 100,0" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2,2"/>
              </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           
           <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-5xl font-black text-emerald-900 mb-4 ${titleFont.className}`}>
                Start Your Journey
              </h2>
              <p className="text-emerald-800 text-lg font-medium">
                Fill out the form below to get the Franchise Information Brochure.
              </p>
           </div>

           {/* FORM CARD */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white relative"
           >
              {/* Decorative Corner Icon */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                 <Briefcase className="w-8 h-8 text-white" />
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                 {/* Name */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      {...register("name", { required: true })}
                      type="text" 
                      placeholder="Your name" 
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border-2 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors ${errors.name ? 'border-red-400' : 'border-slate-100'}`}
                    />
                 </div>

                 {/* Phone */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      {...register("phone", { required: true })}
                      type="tel" 
                      placeholder="Your Number" 
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border-2 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors ${errors.phone ? 'border-red-400' : 'border-slate-100'}`}
                    />
                 </div>

                 {/* Email */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      type="email" 
                      placeholder="email@example.com" 
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border-2 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors ${errors.email ? 'border-red-400' : 'border-slate-100'}`}
                    />
                 </div>

                 {/* City */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">City / Location <span className="text-red-500">*</span></label>
                    <input 
                      {...register("city", { required: true })}
                      type="text" 
                      placeholder="e.g. Mumbai, Andheri West" 
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border-2 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors ${errors.city ? 'border-red-400' : 'border-slate-100'}`}
                    />
                 </div>

                 {/* Budget */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Investment Budget</label>
                    <select 
                      {...register("budget")}
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                        <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                        <option value="Montessori (6-7 lakh)">Montessori ( 6-7 lakh)</option>                      
                    </select>
                 </div>

                 {/* Property */}
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Do you own property?</label>
                    <select 
                      {...register("property")}
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                        <option value="Yes, I own commercial property">Yes, I own commercial property</option>
                        <option value="No, I will rent/lease">No, I will rent/lease</option>
                    </select>
                 </div>

                 <div className="md:col-span-2 mt-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg ${isLoading ? 'opacity-70 cursor-not-allowed hover:translate-y-0' : ''}`}
                    >
                      {isLoading ? (
                        <>
                           <Loader2 className="w-5 h-5 animate-spin" />
                           Processing...
                        </>
                      ) : (
                        <>
                           Request Franchise Brochure
                           <CheckCircle className="w-5 h-5" />
                        </>
                      )}
                    </button>
                 </div>

              </form>
           </motion.div>

        </div>

        {/* Bottom Wave (Optional, usually transitions to footer) */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

    </div>
  );
};