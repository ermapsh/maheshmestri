"use client";

import { Mail, MessageSquare, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "../components/ui/ContactForm";
import { personalInfo } from "../data/portfolioData";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Hub | Mahesh Anant Mestri" },
    {
      name: "description",
      content:
        "Get in touch with Mahesh Mestri for mobile engineering, MediaPipe AI consulting, or full-time software engineering roles.",
    },
  ];
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-14 pb-8 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's Build Something High-Impact
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Whether you need a senior mobile engineer to architect custom native Fabric modules, optimize React Native performance, or build resilient backend services, I’d love to connect.
        </p>
      </div>

      {/* Contact Form & Direct Hub */}
      <ContactForm />
    </div>
  );
}

