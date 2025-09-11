"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GetStartedButton } from "@/components/get-started-button"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
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
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import {EmailSignup} from "@/components/email-signup";

function useCarousel(itemsLength: number) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth
            const containerWidth = scrollRef.current.clientWidth
            const itemWidth = scrollWidth / itemsLength
            const scrollPosition = index * itemWidth

            scrollRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            })
            setCurrentIndex(index)
        }
    }

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % itemsLength
        scrollToIndex(nextIndex)
    }

    const prevSlide = () => {
        const prevIndex = currentIndex === 0 ? itemsLength - 1 : currentIndex - 1
        scrollToIndex(prevIndex)
    }

    return {
        currentIndex,
        scrollRef,
        scrollToIndex,
        nextSlide,
        prevSlide,
    }
}

function useScrollAnimation() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-scroll-fade-up")
                        // Add parallax effect to certain elements
                        if (entry.target.classList.contains("parallax-element")) {
                            entry.target.classList.add("animate-parallax-reveal")
                        }
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -80px 0px", // Trigger animation earlier for smoother effect
            },
        )

        const elements = document.querySelectorAll(".scroll-animate")
        elements.forEach((el) => observer.observe(el))

        // Add parallax scrolling effect
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const parallaxElements = document.querySelectorAll(".parallax-bg")

            parallaxElements.forEach((element) => {
                const speed = 0.5
                const yPos = -(scrolled * speed)
                ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
            })
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
}

export default function HomePageClient() {
    useScrollAnimation()

    const servicesData = [
        {
            icon: <Palette className="h-10 w-10" />,
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces that users love and convert visitors into customers.",
        },
        {
            icon: <Code className="h-10 w-10" />,
            title: "Web Development",
            description: "Fast, secure, and scalable websites built with modern technologies and best practices.",
        },
        {
            icon: <Smartphone className="h-10 w-10" />,
            title: "Mobile-First Design",
            description: "Responsive designs that work perfectly across all devices and screen sizes.",
        },
        {
            icon: <Zap className="h-10 w-10" />,
            title: "Performance Optimization",
            description: "Lightning-fast websites optimized for Core Web Vitals and search engine rankings.",
        },
        {
            icon: <Database className="h-10 w-10" />,
            title: "Full-Stack Development",
            description: "Complete web applications with robust backends and seamless user experiences.",
        },
        {
            icon: <Shield className="h-10 w-10" />,
            title: "Security & Maintenance",
            description: "Ongoing support, security updates, and performance monitoring for peace of mind.",
        },
    ]

    const worksData = [
        {
            title: "E-commerce Platform",
            category: "Web Development",
            description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
            image: "/modern-ecommerce-interface.png",
        },
        {
            title: "SaaS Dashboard",
            category: "UI/UX Design",
            description: "Clean, intuitive dashboard design for a B2B analytics platform with complex data visualization.",
            image: "/saas-dashboard-analytics-interface.jpg",
        },
        {
            title: "Mobile App Design",
            category: "Mobile Design",
            description: "User-friendly mobile app design for a fitness tracking application with social features.",
            image: "/mobile-fitness-app-interface-design.jpg",
        },
    ]

    const testimonialsData = [
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
    ]

    const servicesCarousel = useCarousel(servicesData.length)
    const worksCarousel = useCarousel(worksData.length)
    const testimonialsCarousel = useCarousel(testimonialsData.length)
    const [activeStep, setActiveStep] = useState(0)
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section with enhanced animations and larger text */}
            <section className="relative py-16 md:py-24 lg:py-48 overflow-hidden bg-section-white text-section-white-foreground">
                <div className="absolute inset-0 parallax-bg bg-gradient-to-br from-primary/5 via-transparent to-standout/5 animate-pulse"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="lg:hidden">

                        {/* Mobile Tagline */}
                        <div className="mb-6">
                            <Badge variant="secondary" className="font-serif text-sm px-3 py-1">
                                ✨ Freelance Design & Development Studio
                            </Badge>
                        </div>

                        {/* Mobile Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground font-sans mb-6 text-balance leading-tight">
                            We Build Digital Experiences That <span className="text-standout font-bold">Convert & Inspire</span>
                        </h1>

                        {/* Mobile Description */}
                        <p className="text-base text-muted-foreground font-serif mb-8 text-pretty leading-relaxed">
                            A two-person studio crafting websites, automations, and AI assistants that ship fast and move metrics.
                        </p>

                        {/* Mobile Features */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {["✓ Conversion-first", "✓ Automations", "✓ AI chatbots", "✓ SEO-friendly"].map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="text-green-500 font-medium">{feature.split(" ")[0]}</span>
                                    <span>{feature.split(" ").slice(1).join(" ")}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Mockup */}
                        <div className="relative mb-8">
                            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl">
                                <div className="grid grid-cols-3 gap-2">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="aspect-square bg-gray-700 rounded-lg"></div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-standout text-standout-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                🏆 Award Winning Design
                            </div>
                        </div>

                        {/* Mobile Buttons */}
                        <div className="space-y-4 mb-12">
                            <GetStartedButton size="lg" className="w-full font-serif font-semibold text-base px-8 py-4 mb-4" />
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full font-serif font-semibold bg-transparent text-base px-8 py-4"
                            >
                                <Link href="/portfolio">View Our Work</Link>
                            </Button>
                        </div>

                        {/* Mobile Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { number: "50+", label: "Projects Completed" },
                                { number: "4.9★", label: "Average Rating" },
                                { number: "150%", label: "Avg. Conversion Increase" },
                                { number: "2-4", label: "Week Delivery" },
                            ].map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                    <div className="text-xl font-bold text-foreground mb-1">{stat.number}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Trusted By */}
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-3">Trusted by founders at</p>
                            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                                <span>Nova</span>
                                <span>Aether</span>
                                <span>Fabric</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-left animate-fade-in-up">
                            <Badge variant="secondary" className="mb-6 lg:mb-10 font-serif text-sm px-4 py-2 animate-bounce-subtle">
                                Freelance Design & Development Studio
                            </Badge>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground font-sans mb-6 lg:mb-12 text-balance leading-tight animate-slide-in-left">
                                We Build Digital Experiences That <span className="text-standout font-bold">Convert & Inspire</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-serif mb-8 lg:mb-14 max-w-2xl text-pretty leading-relaxed animate-fade-in-up animation-delay-300">
                                A two-person studio specializing in modern web design, development, and user experiences that drive
                                measurable results for forward-thinking businesses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up animation-delay-600">
                                <GetStartedButton
                                    size="lg"
                                    className="font-serif font-semibold text-base px-8 py-4 hover:scale-105 transition-transform"
                                />
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="font-serif font-semibold bg-transparent text-base px-8 py-4 hover:scale-105 transition-transform"
                                >
                                    <Link href="/portfolio">View Our Work</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative animate-fade-in-right parallax-element">
                            <div className="relative bg-card rounded-3xl p-6 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
                                <img
                                    src="/modern-ecommerce-interface.png"
                                    alt="Modern web interface showcase"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-standout text-standout-foreground px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-semibold shadow-lg text-xs lg:text-sm animate-bounce-in">
                                    Award Winning Design
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-border animate-fade-in-up animation-delay-900">
                        <div className="text-center group hover:scale-110 transition-transform duration-300">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-standout mb-2 lg:mb-3 animate-count-up">
                                50+
                            </div>
                            <div className="text-muted-foreground font-serif text-xs lg:text-sm">Projects Completed</div>
                        </div>
                        <div className="text-center group hover:scale-110 transition-transform duration-300">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-standout mb-2 lg:mb-3 animate-count-up">
                                4.9
                            </div>
                            <div className="text-muted-foreground font-serif text-xs lg:text-sm">Average Rating</div>
                        </div>
                        <div className="text-center group hover:scale-110 transition-transform duration-300">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-standout mb-2 lg:mb-3 animate-count-up">
                                150%
                            </div>
                            <div className="text-muted-foreground font-serif text-xs lg:text-sm">Avg. Conversion Increase</div>
                        </div>
                        <div className="text-center group hover:scale-110 transition-transform duration-300">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-standout mb-2 lg:mb-3 animate-count-up">
                                2-4
                            </div>
                            <div className="text-muted-foreground font-serif text-xs lg:text-sm">Week Delivery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted by section with enhanced animations and design */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-50 to-teal-100 text-section-secondary-foreground relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-left mb-16 lg:mb-20">
                        <p className="scroll-animate text-sm lg:text-base font-serif mb-4 lg:mb-6 text-gray-600 opacity-0 translate-y-8 uppercase tracking-wider">
                            TRUSTED BY LEADING TEAMS
                        </p>
                        <h3 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-8 lg:mb-12 opacity-0 translate-y-8 animation-delay-300">
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">Innovative</span>{" "}
                            <span className="text-orange-500">Companies</span> Worldwide
                        </h3>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-12">
                        {["TechStart", "GrowthLab", "RetailPro", "InnovateCorp", "DigitalEdge", "FuturesScale"].map(
                            (company, i) => (
                                <div
                                    key={i}
                                    className="flex justify-center animate-slide-in-up"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full">
                                        <span className="text-gray-700 font-medium text-sm lg:text-base text-center block">{company}</span>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>

                    <div className="lg:hidden mb-12">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                            {["TechStart", "GrowthLab", "RetailPro", "InnovateCorp", "DigitalEdge", "FuturesScale"].map(
                                (company, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 w-40 snap-center animate-slide-in-up"
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                                            <span className="text-gray-700 font-medium text-sm text-center block">{company}</span>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-600">
                            <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">98%</div>
                            <div className="text-sm text-gray-600 font-medium">Client satisfaction</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-700">
                            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">24/7</div>
                            <div className="text-sm text-gray-600 font-medium">Support available</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-800">
                            <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">5★</div>
                            <div className="text-sm text-gray-600 font-medium">Average rating</div>
                        </div>
                    </div>

                    <div className="lg:hidden space-y-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-600">
                            <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                            <div className="text-sm text-gray-600 font-medium">Client satisfaction</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-700">
                            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                            <div className="text-sm text-gray-600 font-medium">Support available</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm text-center animate-fade-in-up animation-delay-800">
                            <div className="text-3xl font-bold text-teal-600 mb-2">5★</div>
                            <div className="text-sm text-gray-600 font-medium">Average rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section with carousel for tablet and below */}
            <section className="py-32 lg:py-48 bg-section-white text-section-white-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground font-sans mb-12 text-balance opacity-0 translate-y-8">
                            What We Do <span className="text-standout">Best</span>
                        </h2>
                        <p className="scroll-animate text-lg md:text-xl text-muted-foreground font-serif max-w-3xl mx-auto text-pretty leading-relaxed opacity-0 translate-y-8 animation-delay-300">
                            From concept to launch, we handle every aspect of your digital presence with expertise and attention to
                            detail.
                        </p>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {servicesData.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up hover:border-standout/30"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-standout/20 group-hover:text-standout transition-all duration-300 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="font-sans text-card-foreground text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="font-serif text-muted-foreground text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="lg:hidden relative">
                        <div
                            ref={servicesCarousel.scrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {servicesData.map((service, index) => (
                                <Card
                                    key={index}
                                    className="bg-card border-border hover:shadow-2xl transition-all duration-500 group flex-shrink-0 w-80 snap-center"
                                >
                                    <CardHeader className="pb-4">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-standout/20 group-hover:text-standout transition-all duration-300 group-hover:scale-110">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="font-sans text-card-foreground text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="font-serif text-muted-foreground text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={servicesCarousel.prevSlide}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Previous service"
                            >
                                <ChevronLeft className="w-5 h-5 text-primary" />
                            </button>

                            <div className="flex gap-2">
                                {servicesData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => servicesCarousel.scrollToIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === servicesCarousel.currentIndex ? "bg-standout w-6" : "bg-primary/30 hover:bg-primary/50"
                                        }`}
                                        aria-label={`Go to service ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={servicesCarousel.nextSlide}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Next service"
                            >
                                <ChevronRight className="w-5 h-5 text-primary" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <EmailSignup />

            <section className="py-20 md:py-32 lg:py-48 bg-section-muted text-section-muted-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-section-muted-foreground font-sans mb-8 md:mb-12 text-balance opacity-0 translate-y-8">
                            Our <span className="bg-standout text-white px-3 py-1 rounded-lg">4-Stage</span> Process
                        </h2>
                        <p className="scroll-animate text-base md:text-lg lg:text-xl text-section-muted-foreground/80 font-serif mb-8 md:mb-16 text-pretty leading-relaxed opacity-0 translate-y-8 animation-delay-300">
                            A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
                        </p>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>

                        <div className="grid grid-cols-4 gap-10">
                            {[
                                {
                                    step: "01",
                                    icon: <Users className="h-8 w-8" />,
                                    title: "Discovery",
                                    description: "We dive deep into your business goals, target audience, and project requirements.",
                                },
                                {
                                    step: "02",
                                    icon: <Target className="h-8 w-8" />,
                                    title: "Strategy",
                                    description: "We create a comprehensive plan and wireframes that align with your objectives.",
                                },
                                {
                                    step: "03",
                                    icon: <Palette className="h-8 w-8" />,
                                    title: "Design",
                                    description: "We craft beautiful, user-centered designs that reflect your brand identity.",
                                },
                                {
                                    step: "04",
                                    icon: <Rocket className="h-8 w-8" />,
                                    title: "Launch",
                                    description: "We develop, test, and deploy your project with ongoing support and optimization.",
                                },
                            ].map((process, index) => (
                                <div
                                    key={index}
                                    className="text-center relative animate-fade-in-up group"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-standout rounded-3xl flex items-center justify-center text-white mb-6 mx-auto relative z-10 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        {process.icon}
                                    </div>
                                    <div className="text-sm font-bold text-section-muted-foreground font-sans mb-3">
                                        STEP {process.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-section-muted-foreground font-sans mb-4">{process.title}</h3>
                                    <p className="text-section-muted-foreground/80 font-serif text-pretty text-base leading-relaxed">
                                        {process.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <div className="flex justify-center mb-8">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                {[1, 2, 3, 4].map((step, index) => (
                                    <div key={step} className="flex items-center">
                                        <button
                                            onClick={() => setActiveStep(index)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                                index === activeStep
                                                    ? "bg-primary text-white scale-110"
                                                    : "bg-white/20 text-section-muted-foreground hover:bg-white/30"
                                            }`}
                                        >
                                            {step}
                                        </button>
                                        {index < 3 && <div className="w-6 h-0.5 bg-white/30" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mb-6">
                            <div className="w-72">
                                {[
                                    {
                                        step: "01",
                                        icon: <Users className="h-8 w-8" />,
                                        title: "Discovery",
                                        description:
                                            "We align on goals, audience, scope, and success metrics with short workshops and research sprints.",
                                        link: "What we deliver",
                                    },
                                    {
                                        step: "02",
                                        icon: <Target className="h-8 w-8" />,
                                        title: "Strategy",
                                        description:
                                            "Information architecture, user flows, and low-fi wireframes that map the shortest path to value.",
                                        link: "See approach",
                                    },
                                    {
                                        step: "03",
                                        icon: <Palette className="h-8 w-8" />,
                                        title: "Design",
                                        description:
                                            "We craft beautiful, user-centered designs that reflect your brand identity and convert visitors.",
                                        link: "View designs",
                                    },
                                    {
                                        step: "04",
                                        icon: <Rocket className="h-8 w-8" />,
                                        title: "Launch",
                                        description:
                                            "We develop, test, and deploy your project with ongoing support and optimization for success.",
                                        link: "Launch process",
                                    },
                                ].map((process, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-500 ${
                                            index === activeStep ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
                                        }`}
                                    >
                                        {index === activeStep && (
                                            <div className="bg-white rounded-2xl p-8 shadow-2xl min-h-[400px] flex flex-col">
                                                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto shadow-lg">
                                                    {process.icon}
                                                </div>

                                                <div className="text-sm font-bold text-primary font-sans mb-4 text-center">
                                                    STEP {process.step}
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 font-sans mb-4 text-center">{process.title}</h3>

                                                <p className="text-gray-600 font-serif text-sm leading-relaxed text-center mb-8 flex-grow">
                                                    {process.description}
                                                </p>

                                                <div className="text-center mt-auto">
                                                    <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                                                        {process.link} →
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            {[0, 1, 2, 3].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === activeStep ? "w-8 bg-primary" : "w-2 bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured work section with regular background */}
            <section className="py-32 lg:py-48 bg-section-white text-section-white-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-sans mb-12 text-balance opacity-0 translate-y-8">
                            Featured <span className="text-standout">Work</span>
                        </h2>
                        <p className="scroll-animate text-lg md:text-xl lg:text-xl text-muted-foreground font-serif mb-16 lg:mb-14 max-w-3xl mx-auto text-pretty leading-relaxed opacity-0 translate-y-8 animation-delay-300 text-center">
                            A selection of our recent projects that showcase our expertise in design and development.
                        </p>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {worksData.map((work, index) => (
                            <Card
                                key={index}
                                className="bg-card border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up hover:border-standout/30"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="aspect-video bg-muted overflow-hidden">
                                    <img
                                        src={work.image || "/placeholder.svg"}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <Badge variant="secondary" className="w-fit font-serif text-sm px-3 py-1">
                                        {work.category}
                                    </Badge>
                                    <CardTitle className="font-sans text-card-foreground text-xl">{work.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="font-serif text-muted-foreground text-base leading-relaxed">
                                        {work.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="lg:hidden relative">
                        <div
                            ref={worksCarousel.scrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {worksData.map((work, index) => (
                                <Card
                                    key={index}
                                    className="bg-card border-border overflow-hidden hover:shadow-2xl transition-all duration-500 group flex-shrink-0 w-80 snap-center"
                                >
                                    <div className="aspect-video bg-muted overflow-hidden">
                                        <img
                                            src={work.image || "/placeholder.svg"}
                                            alt={work.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardHeader>
                                        <Badge variant="secondary" className="w-fit font-serif text-sm px-3 py-1">
                                            {work.category}
                                        </Badge>
                                        <CardTitle className="font-sans text-card-foreground text-xl">{work.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="font-serif text-muted-foreground text-base leading-relaxed">
                                            {work.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={worksCarousel.prevSlide}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Previous work"
                            >
                                <ChevronLeft className="w-5 h-5 text-primary" />
                            </button>

                            <div className="flex gap-2">
                                {worksData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => worksCarousel.scrollToIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === worksCarousel.currentIndex ? "bg-standout w-6" : "bg-primary/30 hover:bg-primary/50"
                                        }`}
                                        aria-label={`Go to work ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={worksCarousel.nextSlide}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Next work"
                            >
                                <ChevronRight className="w-5 h-5 text-primary" />
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="font-serif font-semibold bg-transparent text-base px-8 py-4 hover:scale-105 transition-transform"
                        >
                            <Link href="/portfolio">
                                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/*/!* Testimonials section with carousel for all screen sizes *!/*/}
            {/*<section className="py-32 lg:py-48 bg-section-secondary text-section-secondary-foreground">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <div className="text-center mb-24">*/}
            {/*            <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-section-secondary-foreground font-sans mb-12 text-balance opacity-0 translate-y-8">*/}
            {/*                What Our <span className="text-primary">Customers</span> Think*/}
            {/*            </h2>*/}
            {/*            <p className="scroll-animate text-lg md:text-xl text-muted-foreground font-serif max-w-3xl mx-auto text-pretty leading-relaxed opacity-0 translate-y-8 animation-delay-300">*/}
            {/*                Don't just take our word for it. Here's what our clients have to say about working with us.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">*/}
            {/*            {testimonialsData.map((testimonial, index) => (*/}
            {/*                <Card*/}
            {/*                    key={index}*/}
            {/*                    className="bg-white border-border shadow-soft hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-105"*/}
            {/*                    style={{ animationDelay: `${index * 150}ms` }}*/}
            {/*                >*/}
            {/*                    <CardContent className="pt-8">*/}
            {/*                        <div className="flex mb-6">*/}
            {/*                            {[...Array(testimonial.rating)].map((_, i) => (*/}
            {/*                                <Star key={i} className="h-5 w-5 fill-standout text-standout" />*/}
            {/*                            ))}*/}
            {/*                        </div>*/}
            {/*                        <blockquote className="text-foreground font-serif mb-8 text-pretty leading-relaxed text-base">*/}
            {/*                            "{testimonial.quote}"*/}
            {/*                        </blockquote>*/}
            {/*                        <div className="flex items-center gap-4">*/}
            {/*                            <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary">*/}
            {/*                                <img*/}
            {/*                                    src={testimonial.avatar || "/placeholder.svg"}*/}
            {/*                                    alt={testimonial.author}*/}
            {/*                                    className="w-full h-full object-cover"*/}
            {/*                                />*/}
            {/*                            </div>*/}
            {/*                            <div>*/}
            {/*                                <div className="font-semibold text-foreground font-sans text-base">{testimonial.author}</div>*/}
            {/*                                <div className="text-muted-foreground font-serif text-sm">{testimonial.role}</div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*        <div className="lg:hidden relative">*/}
            {/*            <div*/}
            {/*                ref={testimonialsCarousel.scrollRef}*/}
            {/*                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"*/}
            {/*                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}*/}
            {/*            >*/}
            {/*                {testimonialsData.map((testimonial, index) => (*/}
            {/*                    <Card*/}
            {/*                        key={index}*/}
            {/*                        className="bg-white border-border shadow-soft hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-80 snap-center"*/}
            {/*                    >*/}
            {/*                        <CardContent className="pt-8">*/}
            {/*                            <div className="flex mb-6">*/}
            {/*                                {[...Array(testimonial.rating)].map((_, i) => (*/}
            {/*                                    <Star key={i} className="h-5 w-5 fill-standout text-standout" />*/}
            {/*                                ))}*/}
            {/*                            </div>*/}
            {/*                            <blockquote className="text-foreground font-serif mb-8 text-pretty leading-relaxed text-base">*/}
            {/*                                "{testimonial.quote}"*/}
            {/*                            </blockquote>*/}
            {/*                            <div className="flex items-center gap-4">*/}
            {/*                                <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary">*/}
            {/*                                    <img*/}
            {/*                                        src={testimonial.avatar || "/placeholder.svg"}*/}
            {/*                                        alt={testimonial.author}*/}
            {/*                                        className="w-full h-full object-cover"*/}
            {/*                                    />*/}
            {/*                                </div>*/}
            {/*                                <div>*/}
            {/*                                    <div className="font-semibold text-foreground font-sans text-base">{testimonial.author}</div>*/}
            {/*                                    <div className="text-muted-foreground font-serif text-sm">{testimonial.role}</div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </CardContent>*/}
            {/*                    </Card>*/}
            {/*                ))}*/}
            {/*            </div>*/}

            {/*            <div className="flex justify-center items-center gap-4 mt-8">*/}
            {/*                <button*/}
            {/*                    onClick={testimonialsCarousel.prevSlide}*/}
            {/*                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"*/}
            {/*                    aria-label="Previous testimonial"*/}
            {/*                >*/}
            {/*                    <ChevronLeft className="w-5 h-5 text-primary" />*/}
            {/*                </button>*/}

            {/*                <div className="flex gap-2">*/}
            {/*                    {testimonialsData.map((_, index) => (*/}
            {/*                        <button*/}
            {/*                            key={index}*/}
            {/*                            onClick={() => testimonialsCarousel.scrollToIndex(index)}*/}
            {/*                            className={`w-2 h-2 rounded-full transition-all duration-300 ${*/}
            {/*                                index === testimonialsCarousel.currentIndex*/}
            {/*                                    ? "bg-standout w-6"*/}
            {/*                                    : "bg-primary/30 hover:bg-primary/50"*/}
            {/*                            }`}*/}
            {/*                            aria-label={`Go to testimonial ${index + 1}`}*/}
            {/*                        />*/}
            {/*                    ))}*/}
            {/*                </div>*/}

            {/*                <button*/}
            {/*                    onClick={testimonialsCarousel.nextSlide}*/}
            {/*                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"*/}
            {/*                    aria-label="Next testimonial"*/}
            {/*                >*/}
            {/*                    <ChevronRight className="w-5 h-5 text-primary" />*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* CTA section with enhanced styling *!/*/}
            {/*<section className="py-32 lg:py-48 bg-gradient-to-br from-primary via-accent to-standout text-white relative overflow-hidden">*/}
            {/*    <div className="absolute inset-0 bg-black/20 parallax-bg"></div>*/}
            {/*    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">*/}
            {/*        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 md:p-20 border border-white/20 shadow-2xl animate-fade-in-up">*/}
            {/*            <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-sans mb-12 text-balance opacity-0 translate-y-8">*/}
            {/*                Ready to Start Your <span className="text-standout">Project?</span>*/}
            {/*            </h2>*/}
            {/*            <p className="scroll-animate text-lg md:text-xl text-muted-foreground font-serif mb-16 text-pretty leading-relaxed opacity-0 translate-y-8 animation-delay-300">*/}
            {/*                Let's discuss how we can help bring your vision to life. Get in touch for a free consultation and project*/}
            {/*                quote.*/}
            {/*            </p>*/}
            {/*            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">*/}
            {/*                <GetStartedButton*/}
            {/*                    size="lg"*/}
            {/*                    className="font-serif font-semibold text-base px-8 py-4 hover:scale-105 transition-transform"*/}
            {/*                />*/}
            {/*                <Button*/}
            {/*                    asChild*/}
            {/*                    variant="outline"*/}
            {/*                    size="lg"*/}
            {/*                    className="font-serif font-semibold bg-white/50 hover:bg-white text-base px-8 py-4 hover:scale-105 transition-transform"*/}
            {/*                >*/}
            {/*                    <Link href="/about">Learn More About Us</Link>*/}
            {/*                </Button>*/}
            {/*            </div>*/}

            {/*            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/30">*/}
            {/*                <div className="flex items-center justify-center gap-3 text-muted-foreground group hover:text-standout transition-colors">*/}
            {/*                    <Clock className="w-6 h-6 text-standout group-hover:scale-110 transition-transform" />*/}
            {/*                    <span className="font-serif text-base">Free Consultation</span>*/}
            {/*                </div>*/}
            {/*                <div className="flex items-center justify-center gap-3 text-muted-foreground group hover:text-standout transition-colors">*/}
            {/*                    <Award className="w-6 h-6 text-standout group-hover:scale-110 transition-transform" />*/}
            {/*                    <span className="font-serif text-base">Award-Winning Team</span>*/}
            {/*                </div>*/}
            {/*                <div className="flex items-center justify-center gap-3 text-muted-foreground group hover:text-standout transition-colors">*/}
            {/*                    <TrendingUp className="w-6 h-6 text-standout group-hover:scale-110 transition-transform" />*/}
            {/*                    <span className="font-serif text-base">Proven Results</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <Footer />

            <GetStartedButton variant="sticky" />
        </div>
    )
}
