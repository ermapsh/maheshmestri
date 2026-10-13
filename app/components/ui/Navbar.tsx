"use client";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import {
  Menu,
  X,
  Command,
  Sparkles,
  Download,
  FolderGit2,
  Briefcase,
  User,
  Mail,
  Home,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-gray-950/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-950/20"
            : "bg-gray-950/50 backdrop-blur-md border border-white/[0.06]"
        )}
      >
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-cyan-500 to-blue-500 p-[1px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-400">
              M
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-gray-950 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Mahesh Mestri
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">
              @ErMapsh
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1 rounded-xl">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-white/10 shadow-sm"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                )
              }
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* ⌘K Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-400 hover:text-white transition-all text-xs group"
            title="Open Command Palette (⌘K / Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline font-mono text-[11px] text-gray-400 group-hover:text-gray-200">
              Search
            </span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] border border-white/10 text-gray-300">
              ⌘K
            </kbd>
          </button>

          {/* Quick Contact CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium text-xs transition-all shadow-md shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-gray-950/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-purple-600/20 text-cyan-300 border border-purple-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  )
                }
              >
                <item.icon className="w-4 h-4 text-cyan-400" />
                <span>{item.name}</span>
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette?.();
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-gray-300"
              >
                <span className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-cyan-400" />
                  <span>Command Palette</span>
                </span>
                <span className="font-mono text-xs text-gray-500">⌘K</span>
              </button>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium shadow-md shadow-purple-600/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Build Something</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
