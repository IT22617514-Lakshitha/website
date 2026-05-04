"use client";

import { motion } from "framer-motion";
import { Network, Activity, Shield, Cpu, Target, Layers } from "lucide-react";

export default function Domain() {
  const cards = [
    {
      title: "Research Problem",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      desc: "Modern enterprise networks face a dual challenge: maintaining consistent QoS for legitimate traffic while defending against increasingly sophisticated cyber threats. Traditional networks handle these separately without dynamic real-time adaptation.",
      light: true,
    },
    {
      title: "Our Solution",
      icon: <Layers className="w-8 h-8 text-purple-500" />,
      desc: "A unified, ML-driven SDN controller that combines real-time QoS scoring, threat detection, and an adaptive policy engine into a single, deployable system for intent-based network policies.",
      light: false,
    },
    {
      title: "QoS Prediction (XGBoost)",
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      desc: "Predicts a continuous QoS score (0–100) reflecting network-resource impact. High-impact flows receive low scores; low-impact flows receive high scores.",
      light: true,
    },
    {
      title: "Threat Detection (Random Forest)",
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      desc: "Classifies network flows as benign or malicious with a threat score (0–100) using CIC-IDS 2017 features, empowering the policy engine to block or redirect attacks.",
      light: false,
    },
    {
      title: "Adaptive Policy Engine",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      desc: "Translates high-level operator intents into per-flow enforcement decisions (allow, drop, throttle, redirect) using strictest-wins semantics and microsegmentation.",
      light: true,
    },
    {
      title: "Self-Protection & Lockdown",
      icon: <Network className="w-8 h-8 text-purple-500" />,
      desc: "Automatically detects volumetric attacks (e.g., >500 pps), triggering a Critical Mode zero-trust lockdown and mitigating top-talkers directly at the OVS level.",
      light: false,
    },
  ];

  return (
    <section id="domain" className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3">Domain & Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Intelligent Network Management</h3>
          <p className="text-slate-600 text-lg">
            Software-Defined Networking (SDN) decouples the control plane from the data plane. We supercharge this with dual machine learning models for holistic, real-time control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl shadow-lg border transition-transform hover:-translate-y-2 ${
                card.light 
                  ? "bg-white border-slate-200" 
                  : "bg-slate-900 border-slate-800 text-white"
              }`}
            >
              <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl inline-block">
                {card.icon}
              </div>
              <h4 className={`text-xl font-bold mb-4 ${card.light ? "text-slate-900" : "text-white"}`}>
                {card.title}
              </h4>
              <p className={card.light ? "text-slate-600" : "text-slate-400"}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
