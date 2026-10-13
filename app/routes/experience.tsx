"use client";

import { Briefcase, GraduationCap, Download, ArrowUpRight, Sparkles, Award } from "lucide-react";
import { ExperienceTimeline } from "../components/ui/ExperienceTimeline";
import { education, personalInfo } from "../data/portfolioData";
import type { Route } from "./+types/experience";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Career Experience | Mahesh Anant Mestri" },
    {
      name: "description",
      content:
        "4+ years software engineering experience at SMFG India Credit, GOQii, and GlobalSpace Technologies.",
    },
  ];
}

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>4+ Years Professional History</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Career Timeline & Deliverables
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Hands-on software engineer specializing in cross-platform mobile architecture, native C++/Java/Objective-C Fabric modules, and event-driven backend microservices.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-medium transition-all"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Experience Timeline */}
      <div className="mb-24">
        <ExperienceTimeline />
      </div>

      {/* Education & Certifications Section */}
      <div className="pt-12 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Education & Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-cyan-400">{item.period}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {item.grade}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{item.degree}</h3>
              <p className="text-sm text-gray-300 mb-2">{item.institution}</p>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

