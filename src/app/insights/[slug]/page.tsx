import type { Metadata } from "next";
import { insights, getInsight } from "@/content/insights";
import { generatePageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { ArticleContent } from "./content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return generatePageMetadata({
    title: article.title,
    description: article.summary,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }}
      />
      <ArticleContent article={article} />
    </>
  );
}
