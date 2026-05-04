"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Documents() {
  const docs = [
    { title: "Project Charter", type: "Document", icon: <FileText />, download: true },
    { title: "Proposal Document", type: "Document", icon: <FileText />, download: true },
    { title: "Check List Documents", type: "Checklist", icon: <FileText />, download: true },
    { title: "Final Documentation", type: "Document", icon: <FileText />, download: true },
    { title: "Proposal Slides", type: "Presentation", icon: <FileText />, download: true },
    { title: "Progress 1 Slides", type: "Presentation", icon: <FileText />, download: true },
    { title: "Progress 2 Slides", type: "Presentation", icon: <FileText />, download: true },
    { title: "Final Slides", type: "Presentation", icon: <FileText />, download: true },
  ];

  return (
    <section id="documents" className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase mb-3">Resources</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Documents & Presentations</h3>
          <p className="text-slate-600 text-lg">
            Access our comprehensive research papers, system documentation, and presentation slides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {doc.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{doc.title}</h4>
                <p className="text-slate-500 text-sm mb-6">{doc.type}</p>
              </div>
              
              <button className="flex items-center justify-between w-full text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors pt-4 border-t border-slate-100">
                <span>{doc.download ? "Download File" : "View Online"}</span>
                {doc.download ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
