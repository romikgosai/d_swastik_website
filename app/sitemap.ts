import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import fs from 'fs';
import path from 'path';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://romikgosai.github.io/d_swastik_website';

function getProjectLastModified(projectId: string): Date {
  const projectPath = path.join(process.cwd(), 'public', 'projects', projectId, 'project.json');
  if (fs.existsSync(projectPath)) {
    const stats = fs.statSync(projectPath);
    return stats.mtime;
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ];

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: getProjectLastModified(project.id),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
