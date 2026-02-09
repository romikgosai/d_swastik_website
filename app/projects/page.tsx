import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import ProjectsGrid from './ProjectsGrid';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore D. Swastik Construction Pvt. Ltd. portfolio of successful construction projects in Nepal. Residential, commercial, and infrastructure developments.',
  keywords: [
    'D Swastik Construction projects',
    'construction projects Nepal',
    'building portfolio Nepal',
    'residential projects Kathmandu',
    'commercial construction Nepal',
    'infrastructure projects Nepal',
    'real estate projects Nepal',
    'completed construction projects',
    'ongoing construction Nepal',
  ],
  openGraph: {
    title: 'Our Projects | D. Swastik Construction - Top Construction Company in Nepal',
    description: 'Explore our portfolio of successful construction projects across Nepal.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of exceptional construction projects across Nepal.
              From residential complexes to commercial towers and infrastructure developments.
            </p>
          </div>

          <ProjectsGrid initialProjects={projects} />
        </div>
      </section>
    </>
  );
}
