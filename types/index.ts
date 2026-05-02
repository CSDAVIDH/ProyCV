import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface Particle {
  w: number;
  h: number;
  top: string;
  left: string;
  delay: number;
  color: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface Highlight {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  color: string;
  tags: string[];
  bullets: string[];
}

export interface Skill {
  name: string;
  level: number;
  note: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  icon: string;
  skills: Skill[];
}

export interface Language {
  lang: string;
  level: string;
  flag: string;
  pct: number;
  color: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  color: string;
  icon: string;
}

export interface AcademicStat {
  label: string;
  value: string;
  icon: IconType;
}

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  inView: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export interface SkillBarProps {
  level: number;
  color: string;
  delay?: number;
  inView: boolean;
}
