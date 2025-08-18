import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectById, getAllProjects } from '@/lib/projectService';
import ProjectDetailsWrapper from '@/components/ProjectDetailsWrapper';

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};

type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
};


const siteUrl = 'https://www.bravixcreative.com';
const langs = ['tr', 'en', 'ru'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const canonical = `${siteUrl}/${locale}/project/${project.slug}/${id}`;

  const alternatesEntries = langs
    .map((lng) => {
      const proj = getProjectById(id, lng);
      if (!proj) return null;
      return [lng, `${siteUrl}/${lng}/project/${proj.slug}/${id}`];
    })
    .filter(Boolean) as [string, string][]; // TS: kesinlikle [string, string] olduğu garanti

  const alternates = Object.fromEntries(alternatesEntries);

  return {
    title: `${project.title} | Bravix Creative`,
    description: project.description,
    alternates: {
      canonical,
      languages: {
        ...alternates,
        'x-default': alternates['en'] ?? canonical, // EN yoksa canonical kullan
      },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      type: 'website',
      images: project.images.map((img) => ({
        url: `${siteUrl}${img}`,
        width: 1200,
        height: 630,
        alt: project.title,
      })),
    },
  };
}



export default async function ProjectPage({ params }: Props) {
  const { locale, id } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return notFound();
  }

  return <ProjectDetailsWrapper project={project} />;
}

export async function generateStaticParams(): Promise<Array<{ locale: string; slug: string; id: string }>> {
  const projects: Project[] = getAllProjects();
  const paths: Array<{ locale: string; slug: string; id: string }> = [];

  projects.forEach((project) => {
    langs.forEach((lng) => {
      paths.push({
        locale: lng,
        slug: project.slug,
        id: project.id.toString(),
      });
    });
  });

  return paths;
}