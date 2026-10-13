"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { experience, type ExperienceItem } from "../../data/portfolioData";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical Glowing Timeline Line */}
      <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

      <div className="space-y-12">
        {experience.map((item, idx) => (
          <div key={item.id} className="relative pl-12 sm:pl-20 group">
            {/* Timeline Node Icon */}
            <div className="absolute left-2.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-purple-400 transition-all shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-purple-300 transition-colors" />
            </div>

            {/* Experience Card */}
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-950/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {item.company}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.period}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.badgeColor}`}>
                    {item.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-5 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                  Key Achievements & Responsibilities
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-gray-300 border border-white/[0.06] hover:border-cyan-400/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
