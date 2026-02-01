import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Building2, MapPin, Calendar, Ruler, User, CheckCircle2 } from 'lucide-react';
import { getProjectById, getAllProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <>

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="relative h-[400px] bg-slate-200 rounded-lg mb-8 overflow-hidden">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Building2 className="h-32 w-32" />
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.images.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                  <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="break-inside-avoid bg-slate-200 rounded-lg overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-auto block"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Completion Date
                      </p>
                      <p className="font-medium">
                        {new Date(project.completionDate).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Ruler className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-medium">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Interested in Similar Projects?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with us to discuss your construction needs.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}
