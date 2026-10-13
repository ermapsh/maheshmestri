"use client";

import { useState } from "react";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Cpu,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import type { Project } from "../../data/portfolioData";

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={project.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-950/30"
    >
      {/* Background Accent Gradient glow on hover */}
      <div
        className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}
      />

      <div>
        {/* Top Header: Company, Period, Platforms */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              {project.company}
            </span>
            <span className="text-gray-600">•</span>
            <span className="font-mono text-xs text-gray-400">{project.period}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.platforms.map((plat) => (
              <span
                key={plat}
                className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300"
                title={`Platform: ${plat}`}
              >
                {plat === "android" || plat === "ios" ? (
                  <Smartphone className="w-3.5 h-3.5" />
                ) : plat === "hardware" ? (
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Globe className="w-3.5 h-3.5" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm font-medium leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Highlights Bullet Points */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
            Key Architecture & Impact
          </div>
          <ul className="space-y-1.5 text-xs text-gray-300">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span className="leading-normal">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] text-gray-300 border border-white/[0.08] hover:border-cyan-400/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.webUrl && (
            <a
              href={project.webUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Web</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-all"
            >
              <img src="/playstore.png" alt="Play Store" className="w-3.5 h-3.5 object-contain" />
              <span>Google Play</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}

          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-medium transition-all"
            >
              <img src="/appstore.png" alt="App Store" className="w-3.5 h-3.5 object-contain" />
              <span>Apple Store</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

