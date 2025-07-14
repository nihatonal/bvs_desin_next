import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectById } from '@/lib/projectService';
import ProjectDetailsWrapper from '@/components/ProjectDetailsWrapper';

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://seninsiten.com/${locale}/project/${project.slug}/${id}`,
      images: project.images.map(img => `https://seninsiten.com${img}`),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, id } = await params;
  const project =  getProjectById(id, locale);

  if (!project) {
    return notFound();
  }
  // TypeScript açısından burada project kesinlikle var artık
  return <ProjectDetailsWrapper project={project} />;
}
