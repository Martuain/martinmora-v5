import type { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { caseStudies } from "@/content/caseStudies";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/approach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...caseStudies.map((cs) => ({
      url: `${siteConfig.url}/case-studies/${cs.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((i) => ({
      url: `${siteConfig.url}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
