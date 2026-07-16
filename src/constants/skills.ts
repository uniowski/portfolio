import { SkillDefinition } from "../types";

export const skillsConfig: SkillDefinition[] = [
  {
    id: "frontend-architecture",
    icon: "Cpu",
    technologies: ["React", "TanStack Query", "Redux Toolkit", "React Router"],
    translationKey: "skills.frontendArchitecture"
  },
  {
    id: "ui-design-systems",
    icon: "LayoutTemplate",
    technologies: ["Tailwind CSS", "Shadcn/ui", "HTML5 & CSS3"],
    translationKey: "skills.uiDesignSystems"
  },
  {
    id: "type-safety-quality",
    icon: "ShieldCheck",
    technologies: ["TypeScript", "ESLint", "Prettier", "Zod"],
    translationKey: "skills.typeSafetyQuality"
  },
  {
    id: "backend-automation",
    icon: "Terminal",
    technologies: ["Python", "Node.js", "REST APIs"],
    translationKey: "skills.backendAutomation"
  },
  {
    id: "dev-workflow",
    icon: "GitBranch",
    technologies: ["Git", "Vite", "npm / pnpm", "Linux"],
    translationKey: "skills.devWorkflow"
  }
];
