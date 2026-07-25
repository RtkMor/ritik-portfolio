// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the
// site — components read from these exports, so you rarely need to
// touch the JSX.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ritik Mor",
  role: "Frontend Engineer",
  location: "Hisar, Haryana, India",
  email: "ritikraja45@gmail.com",
  phone: "+91 70569 71111",
  tagline:
    "I build complex, multi-module React & TypeScript applications end to end — role-based dashboards, schema-driven forms, real-time data, and reusable design systems.",
  about:
    "Frontend Engineer with 2 years of production experience building React and TypeScript applications for enterprise B2B and consumer products across fintech, insurance, and logistics. I own complex, multi-module UIs — from role-based consoles and multi-step journeys to reusable component systems — and ramp onto unfamiliar codebases fast. On the side, I've built and shipped a restaurant SaaS solo, now live and in daily use.",
  resumeUrl: "/resume.pdf", // drop your PDF into /public as resume.pdf
  socials: {
    github: "https://github.com/RtkMor",
    linkedin: "https://www.linkedin.com/in/ritik-mor-87a716229/",
    leetcode: "https://leetcode.com/u/rtkmor/",
    portfolio: "https://my-portfolio-nine-iota-29.vercel.app/",
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "TartanHQ",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    location: "Gurgaon, India",
    points: [
      "Own core modules of an enterprise B2B group health insurance platform spanning four role-based consoles — Insurer, Broker, HR, and Employee — including a 5-step Quote Journey, Broker Onboarding, and the HR Employee Directory.",
      "Designed a schema-driven, reusable CSV bulk-upload component (config-driven validation, downloadable error report, partial-success handling, re-uploadable failed-rows file) adopted across ~10 flows in all four consoles.",
      "Built coverage-aware enrollment and endorsement flows — dependent gating by policy cover type and policy-scoped sum-insured — catching invalid submissions on the frontend before they reach the backend.",
      "Drove self-initiated performance work: systematic route-level code-splitting and lazy loading (React.lazy + Suspense across all consoles) and memoization to reduce re-renders. Awarded Rising Star of the Quarter.",
    ],
    stack: ["React", "TypeScript", "Jotai", "TanStack Query", "Chakra UI"],
  },
  {
    company: "RapidShyp",
    role: "Software Engineer",
    period: "Jul 2024 — Jul 2025",
    location: "Gurgaon, India",
    points: [
      "Architected a Warehouse Management System from scratch — inbound receiving, bin-level inventory, picking workflows, and dispatch — owned from component design through API integration.",
      "Refactored a large multi-step Create Order form to React Hook Form + Yup with schema-based field-level validation, eliminating a class of silent runtime failures and cutting component complexity.",
      "Built a real-time Help & Support panel with WebSocket chat so ops agents resolve tickets in-dashboard, plus a Return Order module with item-level quantity validation.",
      "Took over and delivered a B2B Order Management System on a tight deadline after the original owner left mid-build — keeping full scope, recognized by QA for consistently low bug-reopen rates.",
    ],
    stack: ["React", "TypeScript", "React Hook Form", "Yup", "WebSockets"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Dynamu.AI",
    tagline: "Restaurant SaaS · Co-founder & Solo Frontend Engineer",
    description:
      "A production restaurant platform, live and in daily use, with three role-based portals (Customer, Restaurant Admin, Super Admin). Real-time order pipeline over Socket.IO drives a live Kanban board — orders flow from QR scan to kitchen to served with no refresh. Includes an AI chat assistant with SSE streaming and voice input, XLSX bulk menu import, revenue analytics, and Petpooja POS integration.",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Zustand", "Socket.IO", "SSE"],
    liveUrl: "https://dynamuai.com/",
    featured: true,
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "React 19", "Next.js", "Vite", "React Hook Form", "Yup"],
  },
  {
    title: "State & Data",
    items: ["Jotai", "Zustand", "React Context", "TanStack Query", "REST APIs"],
  },
  {
    title: "Real-time",
    items: ["Socket.IO", "WebSockets", "Server-Sent Events", "Web Speech API"],
  },
  {
    title: "UI & Styling",
    items: ["Tailwind CSS (v3 & v4)", "Chakra UI", "ShadCN/UI", "Responsive / Mobile-first"],
  },
  {
    title: "Practices & Tooling",
    items: ["Design systems", "Code-splitting", "Figma-to-code", "Git", "Jira", "CSV / XLSX handling"],
  },
];
