"use client";

import { Link } from "react-router";
import {
  Sparkles,
  ArrowRight,
  FolderGit2,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  Zap,
  ChevronRight,
  Activity,
} from "lucide-react";
import { HeroCanvas } from "../components/3d/HeroCanvas";
import { Liquid } from "../components/canvasui/Liquid";
import { ProjectCard } from "../components/ui/ProjectCard";
import { personalInfo, projects } from "../data/portfolioData";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mahesh Anant Mestri | Mobile & Full-Stack Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Mahesh Mestri: Software Engineer with 3.7+ years experience in React Native, MediaPipe AI pose detection, Java Spring Boot, and Kafka microservices.",
    },
  ];
}

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 3D Three.js Interactive Background Canvas */}
      <div className="absolute inset-0 h-[100vh] z-0">
        <HeroCanvas />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-20 sm:pt-44 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Headline with Canvas UI Liquid Shader */}
        <div className="w-full max-w-4xl mx-auto">
          <Liquid
            curl={2.1}
            radius={0.35}
            distortion={0.3}
            intensity={1.8}
            rainbow={false}
            color={[0.4, 0.6, 1.0]}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] select-none">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                High-Impact
              </span>{" "}
              Mobile & AI Systems.
            </h1>
          </Liquid>
        </div>

        {/* Tagline / Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
          Hi, I’m <span className="text-white font-semibold">{personalInfo.name}</span>. I build cross-platform mobile apps with{" "}
          <span className="text-cyan-300">MediaPipe Computer Vision</span>, hardware IoT integrations, and scalable{" "}
          <span className="text-purple-300">Java Spring Boot & Kafka</span> microservices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-xl shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Flagship Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-200 hover:text-white font-medium text-sm transition-all backdrop-blur-md"
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Career Journey (3.7+ Yrs)</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Innovations Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Flagship Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Case Studies
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Architecture Highlights Banner */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/40 via-gray-950/60 to-cyan-950/40 border border-white/10 p-8 sm:p-12 backdrop-blur-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Full-Spectrum Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              From Native Fabric Bridges to Distributed Kafka Streams
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              I specialize in bridging the gap between raw hardware & native C++/Objective-C/Java modules and reactive modern interfaces, backed by high-throughput enterprise APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="flex items-start gap-3">
              <Activity className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">MediaPipe AI Vision</div>
                <div className="text-xs text-gray-400">On-device real-time pose estimation via Fabric components.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Hardware IoT Bridges</div>
                <div className="text-xs text-gray-400">SerialPort & Bluetooth connectivity for neuro-stimulation wearables.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Event-Driven Services</div>
                <div className="text-xs text-gray-400">Kafka queues, Redis pub/sub, and PostgreSQL microservices.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
