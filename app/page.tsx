import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'D. Swastik Construction Pvt. Ltd. | Top Construction Company in Nepal',
  description: 'D. Swastik Construction Pvt. Ltd. is a leading construction company in Nepal specializing in residential complexes, commercial towers, and infrastructure projects. 20+ years of excellence.',
  keywords: [
    'D Swastik Construction',
    'construction company Nepal',
    'top construction company Nepal',
    'building construction Nepal',
    'residential construction Nepal',
    'commercial construction Nepal',
    'infrastructure development Nepal',
    'real estate Nepal',
    'civil construction Nepal',
    'building contractors Kathmandu',
  ],
  openGraph: {
    title: 'D. Swastik Construction Pvt. Ltd. | Top Construction Company in Nepal',
    description: 'Leading construction company in Nepal specializing in residential, commercial, and infrastructure projects.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.slice(0, 3);
  const completedCount = projects.filter((p) => p.status === 'completed').length;
  const ongoingCount = projects.filter((p) => p.status === 'ongoing').length;

  return (
    <>

      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Building Tomorrow,
            <br />
            <span className="text-primary">Today</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            D. Swastik Construction - Excellence in construction across Nepal.
            From concept to completion, we deliver projects that stand the test of time.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg">View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{projects.length}+</h3>
                  <p className="text-muted-foreground">Total Projects</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{completedCount}</h3>
                  <p className="text-muted-foreground">Completed Projects</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{ongoingCount}</h3>
                  <p className="text-muted-foreground">Ongoing Projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of exceptional construction projects across Nepal
              that showcase our commitment to quality and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-64 bg-slate-200">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} - D. Swastik Construction Project in ${project.location}`}
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
          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Excellence Since Day One
              </h2>
              <p className="text-muted-foreground mb-6">
                D. Swastik Construction Pvt. Ltd. is a leading construction company
                in Nepal dedicated to delivering high-quality residential, commercial,
                and infrastructure projects on time and within budget. Our experienced
                team combines traditional craftsmanship with modern technology to
                create structures that inspire across Nepal.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Quality Assurance</strong>
                    <p className="text-muted-foreground">
                      Rigorous quality control at every stage of construction in Nepal
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Timely Delivery</strong>
                    <p className="text-muted-foreground">
                      Committed to meeting deadlines without compromising quality
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Sustainable Practices</strong>
                    <p className="text-muted-foreground">
                      Environmentally responsible construction methods in Nepal
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button>Learn More About D. Swastik Construction</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] bg-slate-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <Building2 className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
