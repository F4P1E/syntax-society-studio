import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Required for mobile CTA

const services = [
  {
    href: "/services/featured",
    title: "Featured",
    color: "blue-500",
    description:
      "Discover our curated selection of outstanding projects, articles, and community highlights.",
    details: [
      "Handpicked projects and articles",
      "Spotlight on community achievements",
      "Inspiration for your next idea",
    ],
  },
  {
    href: "/services/events",
    title: "Events",
    color: "green-500",
    description:
      "Stay up to date with our meetups, workshops, and hackathons. Connect and grow with the community.",
    details: [
      "Monthly meetups",
      "Workshops and hackathons",
      "Event recaps and resources",
    ],
  },
  {
    href: "/services/consulting",
    title: "Consulting & Mentorship",
    color: "purple-500",
    description:
      "Receive expert guidance, code reviews, and mentorship from experienced professionals.",
    details: [
      "One-on-one mentorship",
      "Project reviews",
      "Career and technical advice",
    ],
  },
  {
    href: "/services/workshops",
    title: "Workshops & Training",
    color: "yellow-500",
    description:
      "Participate in hands-on sessions on the latest technologies and best practices.",
    details: [
      "Project-based learning",
      "Top instructors",
      "Certificates of completion",
    ],
  },
  {
    href: "/services/collaboration",
    title: "Collaboration Hub",
    color: "pink-500",
    description:
      "Connect with peers to collaborate on open-source and creative projects.",
    details: [
      "Find collaborators",
      "Open-source initiatives",
      "Community-driven innovation",
    ],
  },
  {
    href: "/services/portfolio-reviews",
    title: "Portfolio Reviews",
    color: "indigo-500",
    description:
      "Get expert feedback to improve your portfolio and stand out to employers.",
    details: [
      "Portfolio feedback",
      "Resume reviews",
      "Showcase your best work",
    ],
  },
  {
    href: "/services/custom-solutions",
    title: "Custom Solutions",
    color: "teal-500",
    description:
      "Request custom web, design, or software solutions tailored to your needs.",
    details: [
      "Web/app development",
      "Branding & design",
      "Technical consulting",
    ],
  },
  {
    href: "/services/resource-library",
    title: "Resource Library",
    color: "orange-500",
    description:
      "Access curated learning materials, templates, and tools for your projects.",
    details: [
      "Tutorials & guides",
      "Starter kits",
      "Recommended tools",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header Navigation */}
      <header className="relative z-10 w-full py-6 px-6 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src="/SyntaxSociety.svg"
            alt="Syntax Society Studio Logo"
            width={60}
            height={60}
            priority
            className="dark:invert"
          />
          <span className="text-2xl font-extrabold tracking-tight hidden sm:inline">
            Syntax Society Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</Link>
          <Link href="/login" className="text-violet-600 hover:underline">Login</Link>
          <Link href="/register" className="text-violet-600 hover:underline">Register</Link>
        </nav>

        {/* Mobile CTA */}
        <Link href="/contact" className="md:hidden block">
          <Button size="sm" variant="secondary">Start a Project</Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 px-6">
        <section className="max-w-6xl mx-auto">
          <header className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From mentorship to custom solutions, Syntax Society Studio provides the tools, support,
              and community you need to succeed in your creative and professional journey.
            </p>
          </header>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ href, title, description, details, color }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-2xl bg-gray-900 hover:ring-2 hover:ring-offset-2 hover:ring-white/20 transition p-6 shadow-md"
              >
                <div className={`text-lg font-bold text-${color}`}>{title}</div>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
                <ul className="mt-4 list-disc list-inside text-gray-400 text-sm space-y-1">
                  {details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-sm font-medium text-white/80 group-hover:text-white">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <footer className="mt-24 text-center text-sm text-gray-500">
            <p>
              Not sure which service is right for you?{' '}
              <Link href="/contact" className="text-blue-400 hover:underline">
                Contact our team
              </Link>{' '}
              for personalized recommendations.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
