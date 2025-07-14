import { portfolioData } from "@/constants/portfolioData";
import type { Project } from "@/constants/portfolioData";

export function getProjectById(id: string, locale: string): Project | undefined {
  const projects = portfolioData[locale] || portfolioData["en"];
  return projects.find((project) => project.id === id);
}
