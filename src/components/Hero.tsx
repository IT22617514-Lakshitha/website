"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0F1E]"
    >
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jfif')" }}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-left pt-12 md:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Secure<br />
            <span className="gradient-text">Decentralized</span><br />
            Future-Ready.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Risk-Based Adaptive QoS and Threat-Aware SDN Protection using Machine Learning. A unified, ML-driven SDN controller for real-time QoS scoring, threat detection, and adaptive policy enforcement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#domain" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Explore Architecture
            </a>
            <a 
              href="#documents" 
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-medium transition-all border border-slate-700"
            >
              View Research
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Partners/Trust section as seen in design */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl py-6 px-8 max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-4 font-medium tracking-wide">POWERED BY NEXT-GEN TECHNOLOGIES</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
              <span className="text-white font-bold text-xl">XGBoost</span>
              <span className="text-white font-bold text-xl">Ryu SDN</span>
              <span className="text-white font-bold text-xl">FastAPI</span>
              <span className="text-white font-bold text-xl">Mininet</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
