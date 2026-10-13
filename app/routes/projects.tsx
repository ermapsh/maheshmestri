"use client";

import { useState } from "react";
import { Search, FolderGit2, Smartphone, Cpu, Server, Filter, Sparkles } from "lucide-react";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../data/portfolioData";
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flagship Projects | Mahesh Anant Mestri" },
    {
      name: "description",
      content:
        "Explore real-time mobile apps, MediaPipe pose detection, GoRoga neuro-wearables, and enterprise microservices built by Mahesh Mestri.",
    },
  ];
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Work", icon: FolderGit2 },
    { id: "ai", label: "AI & Computer Vision", icon: Sparkles },
    { id: "mobile", label: "Mobile & Wearables", icon: Smartphone },
    { id: "backend", label: "Enterprise Systems", icon: Server },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Case Studies & Architectures</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Production Systems & Flagship Apps
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          From on-device computer vision and IoT hardware communication to distributed enterprise microservices and financial loan origination platforms.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stack (e.g. MediaPipe, Kafka)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400/50"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/[0.06]">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center mx-auto mb-3 text-gray-500">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-gray-300 font-medium">No matching projects found</p>
          <p className="text-gray-500 text-xs mt-1">
            Try adjusting your search query or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-white/[0.05] text-xs text-cyan-400 hover:bg-white/[0.1]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

