/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface StatCounter {
  value: string;
  label: string;
  subLabel?: string;
}

export interface BentoCard {
  iconType: "brain" | "code" | "bolt" | "terminal";
  value: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  bulletColor: string; // Tailwind class likebg-emerald-400 or border hex
  textColor: string;   // Tailwind text class
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlightLine?: string; // e.g. "-> Automated product indexing pipeline..."
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  locationState: string;
  dateRange: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  dateRange: string;
  statusText: "Ongoing" | "Completed";
  metricLabel: string; // CGPA, Percentage, etc.
  metricValue: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;
  credentialUrl?: string; // Optional links
  highlightTag?: string; // e.g., "AI", "Cloud", "Data"
}
