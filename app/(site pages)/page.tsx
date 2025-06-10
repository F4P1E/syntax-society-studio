"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brush, Phone } from "lucide-react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Tilt from 'react-parallax-tilt';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-sky-50 via-emerald-50 to-violet-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-[family-name:var(--font-geist-sans)] selection:bg-violet-200 selection:text-violet-900 dark:selection:bg-violet-600/60 dark:selection:text-white">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-violet-400/30 dark:bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 bg-emerald-300/30 dark:bg-emerald-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
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

  {/* Desktop Navigation with Flip Animation */}
  <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
    {[
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/login', label: 'Login', isAuth: true },
      { href: '/register', label: 'Register', isAuth: true },
    ].map(({ href, label, isAuth }) => (
      <div key={href} className="relative group perspective">
        <Link
          href={href}
          className={`relative block preserve-3d transition-transform duration-500 group-hover:rotate-y-180 ${
            isAuth ? 'text-violet-600' : ''
          }`}
        >
          <span className="block backface-hidden">{label}</span>
          <span className="absolute inset-0 backface-hidden rotate-y-180 text-violet-600 dark:text-violet-400">
            {label}
          </span>
        </Link>
      </div>
    ))}
  </nav>

  {/* CTA for Mobile */}
  <Link href="/contact" className="md:hidden block">
    <Button size="sm" variant="secondary">Start a Project</Button>
  </Link>
</header>

      {/* Hero */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-black text-white">
        {/* Animated Grid Background */}
        <AnimatedGridPattern
          className="absolute inset-0 -z-10 h-full w-full"
          numSquares={15}
          patternSize={24}
          speed={2}
          fade
          squareClassName="fill-white/5"
        />

        {/* Hero Content */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-red-600 drop-shadow-md">
          Digital Craftsmanship
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-white/80">
          We design and build human‑centered products that drive impact and inspire audiences.
        </p>
        <div className="relative z-10 mt-10 flex gap-4 flex-wrap justify-center">
          <InteractiveHoverButton className="px-8 py-4 text-lg text-black hover:text-white bg-white hover:bg-transparent border border-white">
            See Our Work
          </InteractiveHoverButton>
          <InteractiveHoverButton
            variant="outline"
            className="px-8 py-4 text-lg border-white text-black hover:bg-white hover:text-black"
          >
            Let’s Talk
          </InteractiveHoverButton>
        </div>
      </section>
      {/* Services */}
      <section className="relative z-10 w-full py-24 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">Our Expertise</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Product Design",
                description:
                  "User‑centered UI/UX that delights and converts, from wireframes to polished visuals.",
                icon: Brush,
              },
              {
                title: "Full‑Stack Development",
                description:
                  "Robust and scalable web & mobile apps built with the latest technologies.",
                icon: Code,
              },
              {
                title: "Ongoing Partnership",
                description:
                  "Continuous improvement, A/B testing, and support to keep you ahead of the curve.",
                icon: Phone,
              },
            ].map(({ title, description, icon: Icon }) => (
              <Tilt
                key={title}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={400}
                glareEnable={false}
                className="w-full"
              >
                <Card className="group hover:-translate-y-1 transition-transform">
                  <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                    <Icon className="w-12 h-12 text-red-600 dark:text-violet-400 transition-transform group-hover:scale-110" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <section className="relative z-10 w-full py-20 bg-black text-center px-6 animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-red-600 drop-shadow-lg">
          Ready to Elevate Your Vision?
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90 mb-8 text-red-400">
          Let’s collaborate to build something extraordinary. Drop us a line and tell us what you have in mind.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 animate-pulseOnce"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 text-sm backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          <div>
            <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-100">About</h4>
            <p className="text-sm leading-relaxed">
              Syntax Society Studio is a creative digital agency specializing in modern design and scalable development.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-100">Services</h4>
            <ul className="space-y-1">
              <li><Link href="/services" className="hover:underline">Overview</Link></li>
              <li><Link href="/services/design" className="hover:underline">Design</Link></li>
              <li><Link href="/services/development" className="hover:underline">Development</Link></li>
              <li><Link href="/services/consulting" className="hover:underline">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-100">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-100">Connect</h4>
            <ul className="space-y-1">
              <li><a href="mailto:hello@syntaxsociety.com" className="hover:underline">hello@syntaxsociety.com</a></li>
              <li><a href="https://twitter.com/syntaxsociety" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://github.com/syntaxsociety" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="" className="hover:underline" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center text-xs text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Syntax Society Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

