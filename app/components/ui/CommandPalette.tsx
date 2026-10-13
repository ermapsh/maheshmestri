"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  FolderGit2,
  Briefcase,
  User,
  Mail,
  Home,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { projects, personalInfo } from "../../data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const pages = [
    { name: "Home", path: "/", icon: Home, desc: "Hero, Highlights & Stats" },
    { name: "Projects", path: "/projects", icon: FolderGit2, desc: "Flagship mobile & AI showcase" },
    { name: "Experience", path: "/experience", icon: Briefcase, desc: "SMFG, GOQii & GlobalSpace history" },
    { name: "About & Tech Matrix", path: "/about", icon: User, desc: "Architecture philosophy & skill matrix" },
    { name: "Contact Hub", path: "/contact", icon: Mail, desc: "Get in touch & direct channels" },
  ];

  const filteredPages = pages.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gray-950/95 border border-white/10 rounded-2xl shadow-2xl shadow-purple-950/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or tech stack..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-gray-400 bg-white/[0.05] border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs sm:text-sm">
          {/* Quick Actions */}
          <div>
            <div className="px-2 pb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">
              Quick Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left bg-white/[0.02] hover:bg-cyan-500/10 hover:text-cyan-300 text-gray-300 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  )}
                  <span>{copied ? "Copied to clipboard!" : `Copy Email (${personalInfo.email})`}</span>
                </div>
                <span className="font-mono text-[11px] text-gray-500">Action</span>
              </button>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] hover:bg-purple-500/10 hover:text-purple-300 text-gray-300 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub Profile (@{personalInfo.handle})</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] hover:bg-blue-500/10 hover:text-blue-300 text-gray-300 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Navigation Pages */}
          {filteredPages.length > 0 && (
            <div>
              <div className="px-2 pb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">
                Navigation
              </div>
              <div className="space-y-1">
                {filteredPages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => {
                      navigate(page.path);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <page.icon className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">{page.name}</div>
                        <div className="text-[11px] text-gray-500">{page.desc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 pb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      navigate(`/projects#${p.id}`);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left bg-white/[0.02] hover:bg-purple-500/10 text-gray-300 hover:text-purple-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                      <div>
                        <div className="font-medium text-white">{p.title}</div>
                        <div className="text-[11px] text-gray-400 line-clamp-1">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 shrink-0">
                      {p.techStack.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded text-[10px] bg-white/[0.05] text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-500 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span>Mahesh Mestri Portfolio 2026</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
