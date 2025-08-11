import { portfolioData } from "@/constants/portfolioData";
import type { Project } from "@/constants/portfolioData";

export function getProjectById(id: string, locale: string): Project | undefined {
  const projects = portfolioData[locale] || portfolioData["en"];
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  // Tüm dillerdeki projeleri tek bir listeye çeviriyoruz
  const allProjects: Project[] = [];

  Object.keys(portfolioData).forEach((locale) => {
    allProjects.push(...portfolioData[locale]);
  });

  return allProjects;
}
