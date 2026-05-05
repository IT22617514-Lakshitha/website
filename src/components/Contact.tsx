"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/ratrlakshitha@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050B14] text-white border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h3>
            <p className="text-slate-400 text-lg mb-10">
              Have questions about our SDN research or want to collaborate? Send us a message and we&apos;ll get back to you shortly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:ratrlakshitha@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors underline underline-offset-2">ratrlakshitha@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-slate-400">+94767272397</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-slate-400">Sri Lanka Institute of Information Technology,<br />Faculty of computing,<br />Malabe</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New submission from SDN Portfolio!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                
                {status === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-80">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Failed to send message</p>
                      <p className="text-sm opacity-80">Please try again later or contact us directly.</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                    placeholder="How can we help you?"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} SDN Research Project. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Controller Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
