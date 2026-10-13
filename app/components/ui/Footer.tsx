"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../../data/portfolioData";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-gray-950/80 backdrop-blur-xl overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.status}
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">extraordinary</span> together.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl">
                Have an ambitious mobile app, MediaPipe AI feature, or distributed backend system? Let's discuss architecture and execution.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Conversation</span>
              </Link>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white font-medium text-sm transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-400">
                  M
                </div>
              </div>
              <span className="font-bold text-lg text-white">Mahesh Anant Mestri</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Software Engineer with 4+ years building enterprise React Native applications, MediaPipe AI pose tracking, Kafka event pipelines, and distributed Java Spring Boot services.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mumbai, India: {time || "07:30 PM"} IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Career Experience
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About & Tech Matrix
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-4">
              Connect Directly
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub (@{personalInfo.handle})</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.email}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.phone}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            Designed & Engineered with React 19, Three.js, Canvas UI & Tailwind v4
          </div>
          <div>
            © {new Date().getFullYear()} Mahesh Anant Mestri. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

