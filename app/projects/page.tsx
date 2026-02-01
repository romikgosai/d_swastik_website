import { getAllProjects } from '@/lib/projects';
import ProjectsGrid from './ProjectsGrid';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of exceptional construction projects
            </p>
          </div>

          <ProjectsGrid initialProjects={projects} />
        </div>
      </section>
    </>
  );
}
