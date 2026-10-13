export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "mobile" | "ai" | "backend" | "all";
  company: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  platforms: ("android" | "ios" | "web" | "hardware")[];
  image?: string;
  webUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; featured?: boolean }[];
}

export const personalInfo = {
  name: "Mahesh Anant Mestri",
  handle: "ErMapsh",
  role: "Software Engineer & Mobile Specialist",
  tagline: "Architecting high-performance cross-platform mobile apps, MediaPipe AI vision, and event-driven microservices.",
  experienceYears: "3.7+",
  location: "Mumbai, Maharashtra, India",
  email: "maheshmestri73@gmail.com",
  phone: "+91 9405135389",
  status: "Open to high-impact roles & consulting",
  bio: "Software Engineer with 3.7+ years of experience building scalable, cross-platform mobile and backend applications using TypeScript, React Native, React.js, Expo, Java, and Spring Boot. Specialized in real-time systems, MediaPipe pose detection, hardware IoT communication, and distributed microservices with Kafka, Redis, and PostgreSQL.",
  socials: {
    github: "https://github.com/ErMapsh",
    linkedin: "https://www.linkedin.com/in/ermapsh",
    email: "mailto:maheshmestri73@gmail.com",
    phone: "tel:+919405135389",
  },
  stats: [
    { label: "Years Experience", value: "3.7+" },
    { label: "Apps Deployed", value: "30+" },
    { label: "User Downloads", value: "100K+" },
    { label: "Crash Rate Drop", value: "-15%" },
  ],
};

export const projects: Project[] = [
  {
    id: "goqii-preventive-healthcare",
    title: "GOQii – Preventive Healthcare & Pose Detection",
    tagline: "Real-time AI pose detection engine & live streaming healthcare ecosystem",
    category: "ai",
    company: "GOQii",
    period: "Nov 2025 - Apr 2026",
    description:
      "Engineered real-time cross-platform mobile experiences with live feed, chat, and computer vision. Integrated Google MediaPipe using custom native modules and Fabric components to deliver an on-device pose detection engine with low-latency streaming between native and React Native layers.",
    highlights: [
      "Built custom Fabric components & native bridge for MediaPipe real-time pose tracking",
      "Engineered sub-50ms data streaming pipeline between C++/Objective-C/Java and JavaScript layers",
      "Implemented MQTT & WebSocket listeners for synchronized real-time chat and multi-user sessions",
      "Integrated Apple Pay, Google Pay, and localized regional payment gateways",
    ],
    techStack: ["React Native", "Fabric", "MediaPipe", "MQTT", "WebSockets", "TypeScript", "Android", "iOS"],
    platforms: ["android", "ios"],
    image: "/goroga.png",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "goroga-wellness-platform",
    title: "GoRoga – Neuro-Wellness & Wearables",
    tagline: "Stress reduction platform combining IoT hardware integration & event-driven microservices",
    category: "mobile",
    company: "GlobalSpace Technologies Limited",
    period: "Jan 2023 - Nov 2025",
    description:
      "Developed the GoRoga wellness mobile app from scratch, pairing with wearable neuro-stimulation hardware. Architected the backend using Java, Spring Boot, PostgreSQL, Redis, and Kafka-based event-driven microservices for asynchronous biometric data processing.",
    highlights: [
      "Custom-maintained React Native SerialPort package for reliable Bluetooth/USB hardware communication",
      "Designed event-driven microservices architecture using Apache Kafka for real-time telemetry",
      "Reduced overall app crash rates by 15% through native memory management and error boundary guards",
      "Implemented offline-first encrypted audio & video session playback for guided therapies",
    ],
    techStack: ["React Native", "Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "SerialPort", "Android", "iOS"],
    platforms: ["android", "ios", "hardware"],
    image: "/goroga.png",
    webUrl: "https://corporate.goroga.in/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.docexa.goroga",
    featured: true,
    accentColor: "from-purple-500 to-pink-600",
  },
  {
    id: "patgpt-ai-assistant",
    title: "PATGPT – Enterprise Pharma AI Assistant",
    tagline: "Pharma analytics assistant with real-time natural language query resolution",
    category: "ai",
    company: "GlobalSpace Technologies Limited",
    period: "Jul 2024 - Nov 2025",
    description:
      "Enterprise AI assistant allowing medical representatives and pharma leaders to query multi-dimensional enterprise datasets using natural language. Built streaming conversational UI with formatted tabular and graphical representations.",
    highlights: [
      "Integrated LLM streaming APIs with token-by-token UI rendering and markdown parser",
      "Engineered dynamic data visualization modules for complex tabular and chart payloads",
      "Implemented background push notifications, OTA updates via EAS, and seamless session caching",
      "Cross-platform parity across Web (Next.js), Android, and iOS",
    ],
    techStack: ["React Native", "Next.js", "TypeScript", "Streaming APIs", "Tailwind CSS", "Redux Toolkit"],
    platforms: ["android", "ios", "web"],
    image: "/patgpt.png",
    webUrl: "http://patgpt.globalspace.in/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.globalspace.patgpt",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "docexa-emr-chat-ai",
    title: "DocExa – Healthcare & Telemedicine EMR",
    tagline: "Government M1-certified clinical platform with offline-first sync and AskDocExa AI",
    category: "backend",
    company: "GlobalSpace Technologies Limited",
    period: "Jan 2023 - Nov 2025",
    description:
      "Full-stack clinical EMR and doctor-patient teleconsultation platform. Integrated Indian National Health Authority (NHA) ABHA APIs to achieve government M1 compliance, alongside offline-first local SQLite sync with server conflict resolution.",
    highlights: [
      "Integrated Government of India NHA ABHA healthcare APIs and passed official M1 certification",
      "Implemented offline-first SQLite database architecture using Ionic Capacitor with automatic sync",
      "Integrated streaming AI chat feature (AskDocExa) for automated clinical insights and prescription drafts",
    ],
    techStack: ["Angular", "React Native", "Lumen", "Ionic Capacitor", "SQLite", "REST APIs"],
    platforms: ["web", "ios", "android"],
    image: "/doctor.svg",
    webUrl: "https://docexa.com/",
    appStoreUrl: "https://apps.apple.com/in/app/docexa-clinic/id6742394762",
    featured: true,
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "sfdc-los-smfg",
    title: "SFDC - LOS (Loan Origination System)",
    tagline: "Production React Native 0.81 upgrade & Salesforce API integration",
    category: "mobile",
    company: "SMFG India Credit Company Limited",
    period: "Jun 2026 - Aug 2026",
    description:
      "Upgraded an enterprise financial React Native application from v0.74 to v0.81, modernizing the architecture to leverage React Native's latest engine and tooling. Tuned Metro and Babel for 40% faster local builds and integrated critical Salesforce loan origination workflows.",
    highlights: [
      "Successfully modernized production app from RN 0.74 to 0.81 with zero downtime regressions",
      "Optimized Metro bundler and Babel configuration, cutting cold bundle time by 40%",
      "Engineered secure Salesforce API integrations and synchronized state machines",
    ],
    techStack: ["React Native 0.81", "Salesforce APIs", "Metro Bundler", "Babel", "TypeScript"],
    platforms: ["android", "ios"],
    image: "/bg.png",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: "spiritual-karma",
    title: "Spiritual Karma – Online Ritual Bookings",
    tagline: "Multi-platform puja and priest scheduling platform",
    category: "mobile",
    company: "Freelance",
    period: "2023 - 2024",
    description:
      "End-to-end multi-platform app for managing ritual bookings, priest schedules, and secure payments online. Built with Angular, React Native, and PHP Lumen backend hosted on AWS.",
    highlights: [
      "Secure role-based authentication, real-time booking confirmation, and slot reservation",
      "Deployed and monitored on AWS with CI/CD automation",
    ],
    techStack: ["React Native", "Angular", "Lumen", "AWS", "MySQL"],
    platforms: ["android", "web"],
    image: "/spiritual karma.png",
    webUrl: "https://spiritualkarma.in/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.panditji.customer",
    featured: false,
    accentColor: "from-violet-500 to-purple-600",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "smfg-india-credit",
    role: "React Native Mobile Developer",
    company: "SMFG India Credit Company Limited",
    location: "Mumbai, India",
    period: "Jun 2026 - Aug 2026",
    current: false,
    type: "Full-Time",
    description:
      "Spearheaded the React Native production architecture upgrade to version 0.81 and optimized developer tooling.",
    responsibilities: [
      "Upgraded a production React Native application from v0.74 to v0.81, ensuring compatibility with the latest React Native ecosystem and native dependencies.",
      "Optimized Metro bundler and Babel configurations for improved local developer experience and faster CI build times.",
      "Upgraded and integrated Salesforce workflows and APIs to support application business processes and backend synchronization.",
      "Resolved native dependency conflicts and addressed breaking changes introduced during the upgrade.",
    ],
    skills: ["React Native 0.81", "Metro Bundler", "Babel", "Salesforce APIs", "TypeScript", "Gradle"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    id: "goqii",
    role: "Software Engineer",
    company: "GOQii",
    location: "Mumbai, India",
    period: "Nov 2025 - Apr 2026",
    current: false,
    type: "Full-Time",
    description:
      "Developed cutting-edge mobile health features including real-time MediaPipe pose detection, MQTT chat, and multi-currency payments.",
    responsibilities: [
      "Developed and maintained a cross-platform mobile application using React Native (Android & iOS), improving real-time feed, comment, and chat synchronization by resolving async state and event-handling bottlenecks.",
      "Integrated Google MediaPipe using custom native modules and Fabric components to construct a low-latency real-time pose detection engine.",
      "Designed efficient high-throughput data flow between native (C++/Java/Obj-C) and React Native layers for continuous streaming.",
      "Implemented real-time communication using MQTT, managing subscriptions, listeners, and backend synchronization alongside Apple Pay, Google Pay, and card payments.",
    ],
    skills: ["React Native", "Fabric", "Google MediaPipe", "MQTT", "WebSockets", "Native Modules", "Apple Pay", "Google Pay"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    id: "globalspace-technologies",
    role: "Software Analyst",
    company: "GlobalSpace Technologies Limited",
    location: "Navi Mumbai, India",
    period: "Jan 2023 - Nov 2025",
    current: false,
    type: "Full-Time",
    description:
      "Delivered enterprise healthcare, AI assistants, and hardware-connected wellness mobile and web products.",
    responsibilities: [
      "Developed cross-platform mobile applications using React Native (Android & iOS), Spring Boot, and React.js delivering scalable, user-centric solutions.",
      "Led end-to-end deployment and release management for Android, iOS, and web applications using Android Studio and Xcode, ensuring stable production releases.",
      "Engineered the GoRoga neuro-wellness platform, reducing crash rates by 15% through optimized native module integration and maintaining custom SerialPort hardware communication.",
      "Built PATGPT conversational AI assistant with streaming token responses, dynamic tables, and charts.",
      "Achieved Indian Government NHA M1 certification on DocExa healthcare platform with offline-first SQLite synchronization.",
    ],
    skills: ["React Native", "Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Android Studio", "Xcode", "Ionic Capacitor"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Architecture & Native Bridges",
    description: "Production cross-platform engineering, custom native modules, and hardware integration.",
    icon: "Smartphone",
    skills: [
      { name: "React Native (CLI & Expo)", level: 95, featured: true },
      { name: "Fabric & TurboModules", level: 90, featured: true },
      { name: "MediaPipe Pose Detection", level: 88, featured: true },
      { name: "Objective-C / Swift (iOS)", level: 82 },
      { name: "Java / Kotlin (Android)", level: 85 },
      { name: "SerialPort Hardware Integration", level: 86 },
      { name: "Redux Toolkit & State Management", level: 92 },
      { name: "Fastlane CI/CD & OTA Updates", level: 88 },
    ],
  },
  {
    title: "Backend Services & Distributed Systems",
    description: "Robust microservices, event streaming queues, and relational/cache data stores.",
    icon: "Server",
    skills: [
      { name: "Java & Spring Boot", level: 90, featured: true },
      { name: "Apache Kafka (Event-Driven)", level: 84, featured: true },
      { name: "PostgreSQL & JPA/Hibernate", level: 88 },
      { name: "Redis Caching & Pub/Sub", level: 86 },
      { name: "REST APIs & Microservices", level: 92 },
      { name: "WebSockets & MQTT", level: 90, featured: true },
      { name: "Spring Security & OAuth2", level: 85 },
      { name: "Node.js & Express.js", level: 88 },
    ],
  },
  {
    title: "Web Platforms & Modern Frontend",
    description: "Ultra-responsive, accessible web applications with 3D shaders and fluid UX.",
    icon: "Globe",
    skills: [
      { name: "TypeScript & JavaScript (ES6+)", level: 95, featured: true },
      { name: "React 19 & Next.js", level: 92, featured: true },
      { name: "Angular", level: 82 },
      { name: "Tailwind CSS v4 & Styled UI", level: 95 },
      { name: "Three.js & WebGL Shaders", level: 85, featured: true },
      { name: "Canvas UI & HTML-in-Canvas", level: 86 },
      { name: "Streaming Conversational UI", level: 90 },
    ],
  },
  {
    title: "DevOps, Containerization & Tools",
    description: "Build automation, deployment pipelines, container orchestration, and diagnostics.",
    icon: "Cpu",
    skills: [
      { name: "Docker & Containerization", level: 85 },
      { name: "Kubernetes Basics", level: 75 },
      { name: "Android Studio & Xcode", level: 92, featured: true },
      { name: "Git & GitHub Workflows", level: 94 },
      { name: "Postman API Automation", level: 90 },
      { name: "Crashlytics & App Performance", level: 88 },
      { name: "Government NHA ABHA Protocols", level: 90 },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "SSPM's College of Engineering (Mumbai University)",
    period: "Jun 2018 - May 2022",
    grade: "8.2 CGPA",
    location: "Kankavali, Maharashtra",
  },
  {
    degree: "Higher Secondary Certificate (HSC - Science)",
    institution: "N.S.P Junior College Of Arts, Commerce & Science",
    period: "Aug 2016 - May 2018",
    grade: "First Class",
    location: "Devgad, Maharashtra",
  },
];
