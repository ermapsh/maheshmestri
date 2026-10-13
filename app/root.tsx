import { useState } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { CommandPalette } from "./components/ui/CommandPalette";
import { ToastContainer } from "react-toastify/unstyled";
// import "react-toastify/dist/ReactToastify.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" sizes="any" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-950 text-gray-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <ToastContainer
        // position="bottom-right"
        // autoClose={4000}
        // theme="dark"
        // newestOnTop
        // closeOnClick
        // pauseOnHover
        />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#030712]">
      {/* Ambient background glow nodes */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/15 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Persistent Glass Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Page Content Routed via Outlet */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Persistent Modern Footer */}
      <Footer />

      {/* Global ⌘K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-32 pb-20 px-4 max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-black font-mono text-cyan-400 mb-4">{message}</h1>
      <p className="text-gray-300 mb-8">{details}</p>
      {stack && (
        <pre className="p-4 bg-gray-900 rounded-xl text-left font-mono text-xs overflow-x-auto text-gray-400">
          <code>{stack}</code>
        </pre>
      )}
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold text-sm mt-8"
      >
        Return to Home
      </a>
    </main>
  );
}
