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
  const project = getProjectById(id, locale); // Eğer id numara ise Number(id) yap

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const path = `/project/${project.slug}/${id}`;
  const canonical = `${siteUrl}/${locale}${path}`;
  const alternates = Object.fromEntries(
    langs.map((lng) => [lng, `${siteUrl}/${lng}${path}`])
  );

  return {
    title: `${project.title} | Bravix Creative`,
    description: project.description,
    alternates: {
      canonical,
      languages: {
        ...alternates,
        'x-default': `${siteUrl}/en${path}`, // default dil
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