"use client";

import { User, Cpu, Layers, Terminal, Sparkles, CheckCircle2, Shield, Zap } from "lucide-react";
import { TechMatrix } from "../components/ui/TechMatrix";
import { personalInfo } from "../data/portfolioData";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About & Engineering Philosophy | Mahesh Anant Mestri" },
    {
      name: "description",
      content:
        "Learn about Mahesh Mestri's background in mobile architecture, native C++/Java/Obj-C bridges, and distributed microservices.",
    },
  ];
}

export default function AboutPage() {
  const principles = [
    {
      title: "Native Bridge Without Compromise",
      description:
        "When cross-platform frameworks hit performance ceilings, I drop into native C++, Java, or Objective-C to build custom TurboModules and Fabric components—such as our sub-50ms MediaPipe pose estimation engine at GOQii.",
      icon: Cpu,
      color: "text-cyan-400",
    },
    {
      title: "Offline-First & Reliable Sync",
      description:
        "Mobile users shouldn't lose data when crossing cell dead-zones. I design SQLite local sync engines with automatic conflict resolution and background queues, certified on DocExa with Indian Government M1 standards.",
      icon: Shield,
      color: "text-purple-400",
    },
    {
      title: "Event-Driven Distributed Services",
      description:
        "Telemetry and biometric data shouldn't bottleneck APIs. Using Apache Kafka, Redis pub/sub, and Java Spring Boot microservices, I ensure zero-loss asynchronous processing even under peak burst loads.",
      icon: Layers,
      color: "text-emerald-400",
    },
  ];

  const tools = [
    "Android Studio",
    "Xcode",
    "VS Code",
    "Fastlane CI/CD",
    "Docker",
    "Postman",
    "Git / GitHub",
    "Metro Bundler",
    "Gradle",
    "CocoaPods",
    "Firebase Crashlytics",
    "EAS / Expo CLI",
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-16 pb-8 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <User className="w-3.5 h-3.5" />
          <span>Biography & Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Bridging Mobile & Distributed Systems
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          I am a Software Engineer based in Mumbai, India with 3.7+ years of experience engineering real-world mobile platforms and enterprise backends.
        </p>
      </div>

      {/* Engineering Philosophy Cards */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>Core Engineering Principles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className={`p-3 rounded-2xl bg-white/[0.05] border border-white/10 w-fit mb-4 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Tech Matrix */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">
              Skills Breakdown
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Technical Stack & Proficiency
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500">
            Self-assessed based on 3.7+ years production delivery
          </span>
        </div>

        <TechMatrix />
      </div>

      {/* Development Workflow & Tools */}
      <div className="pt-12 border-t border-white/[0.08]">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-purple-400" />
          <span>Daily Toolkit & Environment</span>
        </h2>
        <p className="text-gray-400 text-sm mb-6 max-w-xl">
          The development environments, build systems, and profilers I use daily to build, benchmark, and deploy enterprise applications.
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-white/[0.03] text-gray-300 border border-white/[0.08] hover:border-purple-400/40 hover:text-white transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
