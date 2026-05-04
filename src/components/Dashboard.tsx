"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const dashboardImages = [
  { src: "/dashboard-1.jpeg", caption: "Real-Time Flow Monitoring & Threat Scores" },
  { src: "/dashboard-2.jpeg", caption: "Network Topology & Segment Analytics" },
  { src: "/dashboard-3.jpeg", caption: "Policy Engine & Intent Management" },
  { src: "/dashboard-4.jpeg", caption: "System Health & Overload Telemetry" },
];

export default function Dashboard() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + dashboardImages.length) % dashboardImages.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % dashboardImages.length : null));

  return (
    <section id="dashboard" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3">
            Live Monitoring
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Monitor className="w-10 h-10 text-blue-500" />
            Dashboard
          </h3>
          <p className="text-slate-400 text-lg">
            Real-time WebSocket-powered dashboard showcasing flow scores, policy hits, audit events,
            system health, and segment analytics — refreshed every 1.5&nbsp;seconds.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {dashboardImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg cursor-pointer hover:border-blue-500/60 transition-colors"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-video">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-5">
                <span className="text-sm font-medium text-slate-200">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90vw] max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={dashboardImages[lightboxIndex].src}
                alt={dashboardImages[lightboxIndex].caption}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
              />
              <p className="absolute -bottom-10 left-0 right-0 text-center text-slate-300 text-sm">
                {dashboardImages[lightboxIndex].caption}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
