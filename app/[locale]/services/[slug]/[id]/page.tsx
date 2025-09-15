import { ReactNode } from "react";
import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
import { getServiceById, getAllServices } from '@/lib/serviceUtil';
import ServiceDetailsWrapper from '@/components/ServiceDetailsWrapper';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};

type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon?: ReactNode;
  process: string[];
  technologies: string[];
  detailedDescription: string;
  benefits: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
  relatedProjects: { title: string; url: string }[];
  blogPosts: { title: string; url: string }[];
  idealFor?: string[];
  pricingModel?: string;
  commonMistakes?: string[];
  performanceMetrics?: string[];
  heroImageUrl?: string;
  keywords?: string[];
  meta?: {
    title: string;
    description: string;
  };
};

const siteUrl = 'https://www.bravixcreative.com';
const langs = ['tr', 'en', 'ru'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const service = getServiceById(id, locale);

  if (!service) {
    return { title: 'Project Not Found' };
  }

  const canonical = `${siteUrl}/${locale}/services/${service.slug}/${id}`;

  const alternatesEntries = langs
    .map((lng) => {
      const proj = getServiceById(id, lng);
      if (!proj) return null;
      return [lng, `${siteUrl}/${lng}/services/${proj.slug}/${id}`];
    })
    .filter(Boolean) as [string, string][]; // TS: kesinlikle [string, string] olduğu garanti

  const alternates = Object.fromEntries(alternatesEntries);

  return {
    title: `${service.title} | Bravix Creative`,
    description: service.description,
    alternates: {
      canonical,
      languages: {
        ...alternates,
        'x-default': alternates['en'] ?? canonical, // EN yoksa canonical kullan
      },
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonical,
      type: 'website',
      // images: service.images.map((img) => ({
      //   url: `${siteUrl}${img}`,
      //   width: 1200,
      //   height: 630,
      //   alt: service.title,
      // })),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, id } = await params;
  const service = getServiceById(id, locale);
  console.log(service)
  if (!service) {
    return notFound();
  }

  return <ServiceDetailsWrapper service={service} />;
}

export async function generateStaticParams(): Promise<Array<{ locale: string; slug: string; id: string }>> {
  const services: Service[] = getAllServices();
  const paths: Array<{ locale: string; slug: string; id: string }> = [];

  services.forEach((service) => {
    langs.forEach((lng) => {
      paths.push({
        locale: lng,
        slug: service.slug,
        id: service.id.toString(),
      });
    });
  });

  return paths;
}