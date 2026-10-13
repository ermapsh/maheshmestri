"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  Copy,
  Check,
  Phone,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Mobile App (React Native)",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${form.projectType} - ${form.name}`);
    const body = encodeURIComponent(
      `Hi Mahesh,\n\nMy name is ${form.name} (${form.email}).\n\nI am reaching out regarding a ${form.projectType} project:\n\n${form.message}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Left Column: Direct Reachout Cards */}
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Direct Contact
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Prefer direct email or phone? I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-gray-500">Email Address</div>
                  <div className="text-sm font-medium text-white truncate">{personalInfo.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <a
              href={personalInfo.socials.phone}
              className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-500">Direct / WhatsApp</div>
                  <div className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Full NDA & IP protection assured</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Available for both contracts & full-time roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-3">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            Send a Message
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-6">
            Fill out the details below to launch your default mail client with a structured inquiry.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Carter"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Your Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g. alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Project Category
              </label>
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 text-sm"
              >
                <option value="Mobile App (React Native)">Mobile App (React Native / iOS / Android)</option>
                <option value="AI / Computer Vision (MediaPipe)">AI / Computer Vision (MediaPipe)</option>
                <option value="Backend & Microservices (Spring Boot / Kafka)">Backend & Microservices (Spring Boot / Kafka)</option>
                <option value="Full-Stack Web & Next.js">Full-Stack Web & Next.js</option>
                <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Message & Overview *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your requirements, timeline, and current tech stack..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 hover:from-purple-500 hover:to-cyan-400 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/25 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>{submitted ? "Inquiry Prepared! Opening Mail..." : "Send Message via Email"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
