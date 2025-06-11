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
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full py-6 px-6 flex items-center justify-between max-w-7xl mx-auto border-b border-neutral-700">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src="/SyntaxSociety.svg"
            alt="Syntax Society Studio Logo"
            width={60}
            height={60}
            priority
            className="invert"
          />
          <span className="text-2xl font-extrabold tracking-tight hidden sm:inline text-white">
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
                className={`relative block preserve-3d transition-transform duration-500 group-hover:rotate-y-180 ${isAuth ? 'text-blue-400' : ''}`}
              >
                <span className="block backface-hidden">{label}</span>
                <span className="absolute inset-0 backface-hidden rotate-y-180 text-blue-500">
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
        <AnimatedGridPattern
          className="absolute inset-0 -z-10 h-full w-full"
          numSquares={15}
          speed={2}
        />

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-blue-400 drop-shadow-xl">
          Digital Craftsmanship
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-white/70">
          We design and build human‑centered products that drive impact and inspire audiences.
        </p>
        <div className="relative z-10 mt-10 flex gap-4 flex-wrap justify-center">
          <InteractiveHoverButton className="px-8 py-4 text-lg text-white bg-transparent border border-white hover:bg-white hover:text-black">
            See Our Work
          </InteractiveHoverButton>
          <InteractiveHoverButton
            className="px-8 py-4 text-lg border-white text-black hover:bg-white hover:text-black"
          >
            Let’s Talk
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 w-full py-24 bg-neutral-950 backdrop-blur-sm border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 text-white">
            Our Expertise
          </h2>

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
                <Card className="group hover:-translate-y-1 transition-transform bg-neutral-800 border border-neutral-700">
                  <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                    <Icon className="w-12 h-12 text-blue-400 transition-transform group-hover:scale-110" />
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 w-full py-20 bg-neutral-900 text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-xl">
          Ready to Elevate Your Vision?
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90 mb-8 text-blue-300">
          Let’s collaborate to build something extraordinary. Drop us a line and tell us what you have in mind.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 bg-neutral-900 text-neutral-300 border-t border-neutral-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">About</h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Syntax Society Studio is a creative digital agency specializing in modern design and scalable development. We bring your visions to life.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400">Overview</Link></li>
              <li><Link href="/services/design" className="hover:text-blue-400">Design</Link></li>
              <li><Link href="/services/development" className="hover:text-blue-400">Development</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400">Consulting</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@syntaxsociety.com" className="hover:text-blue-400">hello@syntaxsociety.com</a></li>
              <li><a href="https://twitter.com/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="https://github.com/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Discord</a></li>
              <li><Link href="/newsletter" className="hover:text-blue-400">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Syntax Society Studio</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}