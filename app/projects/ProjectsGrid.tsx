'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProjectsGridProps {
  initialProjects: Project[];
}

export default function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  const filteredProjects =
    filter === 'all'
      ? initialProjects
      : initialProjects.filter((p) => p.status === filter);

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mb-12">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter('all')}>
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              onClick={() => setFilter('completed')}
            >
              Completed
            </TabsTrigger>
            <TabsTrigger value="ongoing" onClick={() => setFilter('ongoing')}>
              Ongoing
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-slate-200">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Building2 className="h-16 w-16" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={
                      project.status === 'completed' ? 'default' : 'secondary'
                    }
                  >
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
