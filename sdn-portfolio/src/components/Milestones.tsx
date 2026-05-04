"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function Milestones() {
  const milestones = [
    {
      title: "Project Proposal",
      date: "Initial Phase",
      desc: "Literature survey, defining the research gap, and establishing the dual machine learning approach for SDN.",
      status: "completed",
    },
    {
      title: "Progress Presentation - 1",
      date: "Mid Phase 1",
      desc: "Development of the XGBoost QoS prediction model and the Random Forest threat detection model. Initial integration with Mininet.",
      status: "completed",
    },
    {
      title: "Progress Presentation - 2",
      date: "Mid Phase 2",
      desc: "Implementation of the adaptive policy engine, strictest-wins semantics, and real-time dashboard monitoring.",
      status: "completed",
    },
    {
      title: "Final Assessment",
      date: "Final Phase",
      desc: "Complete system testing, including volumetric attacks (DDoS) and mitigation using the Critical Mode zero-trust lockdown.",
      status: "completed",
    },
    {
      title: "Viva",
      date: "Project Conclusion",
      desc: "Final defense of the project showcasing the 1.5s dashboard refresh, flow offload effectiveness, and classification latency.",
      status: "pending",
    },
  ];

  return (
    <section id="milestones" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3">Timeline</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Project Milestones</h3>
          <p className="text-slate-400 text-lg">
            A step-by-step breakdown of our research and development lifecycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between mb-8 group">
                {/* Desktop Line & Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800" />
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-blue-400">{milestone.date}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                    <p className="text-slate-400 text-sm">{milestone.desc}</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10 mt-6 md:mt-0 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:bg-blue-500 transition-colors" />
                
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2 md:pl-12 text-left' : 'md:pr-12 text-right'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm">
                    {milestone.status === "completed" ? (
                      <><CheckCircle2 className="w-4 h-4 text-green-500" /><span className="text-slate-300">Completed</span></>
                    ) : (
                      <><div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" /><span className="text-slate-300">Pending</span></>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
