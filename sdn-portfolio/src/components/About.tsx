"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

export default function About() {
  const supervisors = [
    {
      role: "PROJECT SUPERVISOR",
      name: "Mr. Uditha Dharmakeerthi",
      desc: "Academic Fellow | Department of Computer Systems Engineering | Faculty of Computing.",
      img: "/uditha.jpeg", 
    },
    {
      role: "CO-SUPERVISOR",
      name: "Ms. Shashika Lokuliyana",
      desc: "Senior Lecturer | Department of Computer Systems Engineering | Faculty of Computing",
      img: "/Shashika-Lokuliyana.png", 
    }
  ];

  const teamMembers = [
    { role: "TEAM MEMBER", name: "AMARASINGHE A.G.C.J", img: "/Amarasinghe A.G.C.J.png" },
    { role: "TEAM MEMBER", name: "LAKSHITHA R.A.T.R", img: "/Lakshitha R.A.T.R.png" },
    { role: "TEAM MEMBER", name: "MAYADUNNE D. G. N", img: "/Mayadunne D. G. N.png" },
    { role: "TEAM MEMBER", name: "PERERA K.C.S.P", img: "/Perera K.C.S.P.png" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">The Research Team</h3>
          <p className="text-slate-600 text-lg">
            Meet the researchers and supervisors behind the Risk-Based Adaptive QoS and Threat-Aware SDN Protection System.
          </p>
        </div>

        {/* Research Supervision */}
        <div className="mb-20">
          <h4 className="text-sm font-bold tracking-wider text-[#E86C4A] uppercase mb-8">Research Supervision</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supervisors.map((supervisor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-40 h-40 rounded-full mb-6 overflow-hidden bg-slate-200 border-4 border-orange-50 shadow-inner flex items-center justify-center relative">
                  {supervisor.img ? (
                    <Image src={supervisor.img} alt={supervisor.name} fill className="object-cover" />
                  ) : (
                    <User className="w-16 h-16 text-slate-400" />
                  )}
                </div>
                <p className="text-xs font-bold tracking-wider text-[#E86C4A] mb-2">{supervisor.role}</p>
                <h5 className="text-xl font-extrabold text-slate-900 mb-4">{supervisor.name}</h5>
                <p className="text-sm text-slate-500 max-w-sm">{supervisor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Team Members */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-[#E86C4A] uppercase mb-8">Project Team Members</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden shadow-md flex items-end p-6 border border-slate-700"
              >
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 z-0">
                  {member.img ? (
                    <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <User className="w-20 h-20 text-slate-600" />
                    </div>
                  )}
                </div>
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-20 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="bg-[#E86C4A] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider inline-block mb-2">
                    {member.role}
                  </div>
                  <h5 className="text-lg font-bold text-white leading-tight">
                    {member.name}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
