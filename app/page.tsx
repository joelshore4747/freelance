import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GetStartedButton } from "@/components/get-started-button"
import Link from "next/link"
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Users,
  Target,
  Rocket,
  Star,
  ArrowRight,
  Database,
  Shield,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Studio | Award-Winning Web Design & Development Services",
  description:
    "Professional freelance design and development studio specializing in modern web design, UI/UX, and full-stack development. We build digital experiences that convert and inspire. 50+ projects completed with 150% average conversion increase.",
  keywords: [
    "web design",
    "web development",
    "UI/UX design",
    "freelance studio",
    "responsive design",
    "modern websites",
    "conversion optimization",
    "full-stack development",
  ],
  authors: [{ name: "Design Studio" }],
  creator: "Design Studio",
  publisher: "Design Studio",
  openGraph: {
    title: "Design Studio | Award-Winning Web Design & Development",
    description:
      "Professional freelance design and development studio. We build digital experiences that convert and inspire with 150% average conversion increase.",
    url: "https://designstudio.com",
    siteName: "Design Studio",
    images: [
      {
        url: "/modern-ecommerce-interface.png",
        width: 1200,
        height: 630,
        alt: "Design Studio - Modern Web Interface Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Studio | Award-Winning Web Design & Development",
    description:
      "Professional freelance design and development studio. We build digital experiences that convert and inspire.",
    images: ["/modern-ecommerce-interface.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-section-white text-section-white-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-6 font-serif">
                Freelance Design & Development Studio
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-sans mb-6 text-balance">
                We Build Digital Experiences That <span className="text-primary font-bold">Convert & Inspire</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif mb-8 max-w-2xl text-pretty">
                A two-person studio specializing in modern web design, development, and user experiences that drive
                measurable results for forward-thinking businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GetStartedButton size="lg" className="font-serif font-semibold" />
                <Button asChild variant="outline" size="lg" className="font-serif font-semibold bg-transparent">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-card rounded-2xl p-8 image-glow">
                <img
                  src="/modern-ecommerce-interface.png"
                  alt="Modern web interface showcase"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                  Award Winning Design
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-serif">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground font-serif">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150%</div>
              <div className="text-muted-foreground font-serif">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2-4</div>
              <div className="text-muted-foreground font-serif">Week Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-section-secondary text-section-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground font-serif mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["TechStart", "GrowthLab", "RetailPro", "InnovateCorp", "DigitalEdge", "FutureScale"].map((company, i) => (
              <div key={i} className="flex justify-center">
                <div className="w-28 h-12 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                  <span className="text-muted-foreground font-serif text-sm font-medium">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-section-white text-section-white-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground font-sans mb-6 text-balance">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              From concept to launch, we handle every aspect of your digital presence with expertise and attention to
              detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces that users love and convert visitors into customers.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Fast, secure, and scalable websites built with modern technologies and best practices.",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile-First Design",
                description: "Responsive designs that work perfectly across all devices and screen sizes.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Performance Optimization",
                description: "Lightning-fast websites optimized for Core Web Vitals and search engine rankings.",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Full-Stack Development",
                description: "Complete web applications with robust backends and seamless user experiences.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security & Maintenance",
                description: "Ongoing support, security updates, and performance monitoring for peace of mind.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="font-sans text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-section-muted text-section-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-section-muted-foreground font-sans mb-6 text-balance">
              Our 4-Stage Process
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: <Users className="h-6 w-6" />,
                  title: "Discovery",
                  description: "We dive deep into your business goals, target audience, and project requirements.",
                },
                {
                  step: "02",
                  icon: <Target className="h-6 w-6" />,
                  title: "Strategy",
                  description: "We create a comprehensive plan and wireframes that align with your objectives.",
                },
                {
                  step: "03",
                  icon: <Palette className="h-6 w-6" />,
                  title: "Design",
                  description: "We craft beautiful, user-centered designs that reflect your brand identity.",
                },
                {
                  step: "04",
                  icon: <Rocket className="h-6 w-6" />,
                  title: "Launch",
                  description: "We develop, test, and deploy your project with ongoing support and optimization.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-4 mx-auto relative z-10 shadow-lg">
                    {process.icon}
                  </div>
                  <div className="text-sm font-bold text-primary font-sans mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-section-muted-foreground font-sans mb-3">{process.title}</h3>
                  <p className="text-muted-foreground font-serif text-pretty">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-section-white text-section-white-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans mb-6 text-balance">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              A selection of our recent projects that showcase our expertise in design and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
                image: "/modern-ecommerce-interface.png",
              },
              {
                title: "SaaS Dashboard",
                category: "UI/UX Design",
                description:
                  "Clean, intuitive dashboard design for a B2B analytics platform with complex data visualization.",
                image: "/saas-dashboard-analytics-interface.jpg",
              },
              {
                title: "Mobile App Design",
                category: "Mobile Design",
                description: "User-friendly mobile app design for a fitness tracking application with social features.",
                image: "/mobile-fitness-app-interface-design.jpg",
              },
            ].map((work, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit font-serif text-xs">
                    {work.category}
                  </Badge>
                  <CardTitle className="font-sans text-card-foreground">{work.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-muted-foreground">{work.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="font-serif font-semibold bg-transparent">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-section-secondary text-section-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-section-secondary-foreground font-sans mb-6 text-balance">
              What Our Customers Think
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Studio Duo transformed our online presence completely. The new website not only looks amazing but has increased our conversion rate by 150%.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                rating: 5,
                avatar: "/professional-woman-portrait.png",
              },
              {
                quote:
                  "Working with this team was a pleasure. They understood our vision perfectly and delivered beyond our expectations. Highly recommended!",
                author: "Michael Chen",
                role: "Founder, GrowthLab",
                rating: 5,
                avatar: "/professional-man-portrait.png",
              },
              {
                quote:
                  "The attention to detail and professionalism is outstanding. Our new e-commerce platform has been a game-changer for our business.",
                author: "Emily Rodriguez",
                role: "Marketing Director, RetailPro",
                rating: 5,
                avatar: "/professional-woman-portrait.png",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-border shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground font-serif mb-6 text-pretty leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground font-sans">{testimonial.author}</div>
                      <div className="text-muted-foreground font-serif text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-section-primary text-section-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 shadow-soft">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans mb-6 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground font-serif mb-8 text-pretty">
              Let's discuss how we can help bring your vision to life. Get in touch for a free consultation and project
              quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetStartedButton size="lg" className="font-serif font-semibold" />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-serif font-semibold bg-white/50 hover:bg-white"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-serif">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-serif">Award-Winning Team</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-serif">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <GetStartedButton variant="sticky" />
    </div>
  )
}
