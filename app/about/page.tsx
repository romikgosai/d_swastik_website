import Link from 'next/link';
import { Building2, Target, Users, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About BuildCraft
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future with precision, passion, and unparalleled
              expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4">
                BuildCraft is a premier construction company with over two
                decades of experience in delivering exceptional building
                projects. Our team of skilled professionals is committed to
                transforming visions into reality through innovative design,
                quality craftsmanship, and sustainable practices.
              </p>
              <p className="text-muted-foreground mb-4">
                From residential complexes to commercial towers and
                infrastructure projects, we bring expertise, dedication, and
                attention to detail to every project we undertake. Our success
                is built on strong relationships with clients, partners, and
                communities.
              </p>
              <p className="text-muted-foreground">
                We believe in building more than structures; we build lasting
                legacies that stand the test of time.
              </p>
            </div>
            <div className="relative h-[500px] bg-slate-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <Building2 className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver exceptional construction projects that exceed
                    expectations while maintaining the highest standards of
                    safety, quality, and sustainability.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Team</h3>
                  <p className="text-muted-foreground">
                    A diverse team of architects, engineers, and construction
                    professionals united by a passion for excellence and
                    innovation in every project.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, innovation, and excellence guide everything we
                    do. We are committed to ethical practices and delivering
                    value to all stakeholders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Experience & Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Over 20 years of construction excellence with a proven track
                    record of successful projects across multiple sectors.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Commitment</h3>
                  <p className="text-muted-foreground">
                    Rigorous quality control processes ensure every project
                    meets the highest standards of craftsmanship and durability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                  <p className="text-muted-foreground">
                    Our efficient project management ensures timely completion
                    without compromising quality or safety standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Sustainable Practices
                  </h3>
                  <p className="text-muted-foreground">
                    We integrate eco-friendly materials and methods to minimize
                    environmental impact and create sustainable structures.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                  <p className="text-muted-foreground">
                    We prioritize clear communication and collaboration to
                    ensure your vision is realized beyond expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Contact us today to discuss your
            construction needs.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>

    </>
  );
}
