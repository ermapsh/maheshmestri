"use client";

import { Smartphone, Server, Globe, Cpu, Sparkles } from "lucide-react";
import { skillCategories } from "../../data/portfolioData";

const iconMap: Record<string, any> = {
  Smartphone: Smartphone,
  Server: Server,
  Globe: Globe,
  Cpu: Cpu,
};

export function TechMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((cat, idx) => {
        const IconComponent = iconMap[cat.icon] || Sparkles;

        return (
          <div
            key={cat.title}
            className="group rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] hover:border-purple-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              {cat.description}
            </p>

            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-gray-200 flex items-center gap-1.5">
                      {skill.name}
                      {skill.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" title="Core Specialty" />
                      )}
                    </span>
                    <span className="font-mono text-gray-500">{skill.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.04]">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TechMatrix;

