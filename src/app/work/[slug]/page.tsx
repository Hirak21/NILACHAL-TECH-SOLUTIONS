import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";
import { generatePageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "./content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return generatePageMetadata({
    title: project.name,
    description: project.problem,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudyContent project={project} />;
}
