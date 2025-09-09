import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Target, Zap, Users, Code, Palette } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Studio Duo | Freelance Design & Development",
  description:
    "Meet the two-person team behind Studio Duo. Learn about our mission, values, and passion for creating exceptional digital experiences.",
  openGraph: {
    title: "About Us - Studio Duo",
    description:
      "Meet the two-person team behind Studio Duo. Learn about our mission, values, and passion for creating exceptional digital experiences.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 font-serif">
              About Studio Duo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-sans mb-6 text-balance">
              We're a Two-Person <span className="text-primary">Powerhouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-3xl mx-auto text-pretty">
              Combining years of experience in design and development to create digital experiences that not only look
              amazing but drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground font-sans mb-6 text-balance">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              Two passionate professionals who complement each other perfectly to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <Card className="bg-background border-border overflow-hidden">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/professional-designer-portrait.jpg"
                  alt="Alex Chen - Lead Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-sans text-foreground text-2xl">Alex Chen</CardTitle>
                <CardDescription className="font-serif text-primary text-lg font-semibold">
                  Lead Designer & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-serif text-pretty">
                  With 8+ years in UI/UX design, Alex specializes in creating user-centered designs that convert. Former
                  design lead at two successful startups, with expertise in design systems, user research, and brand
                  identity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-serif">
                    UI/UX Design
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    Design Systems
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    User Research
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    Branding
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Palette className="h-4 w-4" />
                  <span className="font-serif text-sm">Figma, Adobe Creative Suite, Principle</span>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="bg-background border-border overflow-hidden">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/professional-developer-portrait.jpg"
                  alt="Jordan Smith - Lead Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-sans text-foreground text-2xl">Jordan Smith</CardTitle>
                <CardDescription className="font-serif text-primary text-lg font-semibold">
                  Lead Developer & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-serif text-pretty">
                  Full-stack developer with 10+ years of experience building scalable web applications. Expert in modern
                  JavaScript frameworks, cloud architecture, and performance optimization. Former senior engineer at a
                  Fortune 500 company.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-serif">
                    React/Next.js
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    Cloud Architecture
                  </Badge>
                  <Badge variant="secondary" className="font-serif">
                    Performance
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code className="h-4 w-4" />
                  <span className="font-serif text-sm">TypeScript, AWS, Docker, PostgreSQL</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans mb-6 text-balance">Our Values</h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do and ensure exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion-Driven",
                description: "We love what we do, and it shows in every pixel and line of code.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Focused",
                description: "Beautiful design means nothing without measurable business impact.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation First",
                description: "We stay ahead of trends to deliver cutting-edge solutions.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client Partnership",
                description: "Your success is our success. We're in this together.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="font-sans text-card-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-muted-foreground">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground font-sans mb-6 text-balance">
              Our Story
            </h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground font-serif">
            <p className="text-pretty">
              Studio Duo was born from a simple belief: that great design and development shouldn't be exclusive to big
              corporations with massive budgets. After years of working at large agencies and tech companies, Alex and
              Jordan decided to combine their expertise to help businesses of all sizes create exceptional digital
              experiences.
            </p>
            <p className="text-pretty">
              What started as a side project quickly grew into a full-time passion. We've had the privilege of working
              with startups, established businesses, and everything in between. Each project teaches us something new
              and reinforces our commitment to delivering work that makes a real difference.
            </p>
            <p className="text-pretty">
              Today, we're proud to be a lean, efficient team that delivers big agency quality with the personal touch
              and agility that only a boutique studio can provide. We believe in building long-term partnerships with
              our clients, not just completing projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-sans mb-2">50+</div>
              <div className="text-muted-foreground font-serif">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-sans mb-2">18+</div>
              <div className="text-muted-foreground font-serif">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-sans mb-2">100%</div>
              <div className="text-muted-foreground font-serif">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans mb-6 text-balance">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground font-serif mb-8 text-pretty">
            We'd love to learn about your project and discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif font-semibold"
            >
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-serif font-semibold bg-transparent">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
