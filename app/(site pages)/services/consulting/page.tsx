'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const tiers = [
  {
    title: 'Starter Mentorship',
    description: 'Perfect for beginners seeking career advice and code reviews.',
    features: [
      'Monthly 1:1 calls',
      'Resume & portfolio guidance',
      'Basic project feedback',
    ],
    cta: 'Start Now',
  },
  {
    title: 'Pro Developer Guidance',
    description: 'Deep technical reviews, pair programming, and architectural help.',
    features: [
      'Bi-weekly strategy sessions',
      'Codebase walkthroughs',
      'Slack access to mentor',
    ],
    cta: 'Apply for Pro',
  },
  {
    title: 'Team Consulting',
    description: 'Tailored sessions for startups, dev teams, or design teams.',
    features: [
      'Team training & workshops',
      'Hiring & structure advice',
      'Tech stack audits',
    ],
    cta: 'Schedule a Demo',
  },
];

export default function ConsultingPage() {
  return (
    <>
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
          <span className="text-2xl font-extrabold tracking-tight hidden sm:inline text-black">
            Syntax Society Studio
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/services" className="hover:text-violet-400 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-violet-400 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-violet-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-violet-400 transition-colors">Contact</Link>
          <Link href="/login" className="text-violet-500 hover:underline">Login</Link>
          <Link href="/register" className="text-violet-500 hover:underline">Register</Link>
        </nav>

        <Link href="/contact" className="md:hidden block">
          <Button size="sm" variant="secondary">Start a Project</Button>
        </Link>
      </header>

      {/* Main Section */}
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
        <section className="max-w-5xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight mb-4"
          >
            Consulting & Mentorship
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Personalized guidance from experienced developers, designers, and creative technologists to help you grow faster and smarter.
          </p>
        </section>

        {/* Tiers */}
        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-violet-500 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{tier.title}</h2>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="space-y-3 text-sm text-gray-300">
                {tier.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">{tier.cta}</Button>
            </motion.div>
          ))}
        </section>

        {/* Booking CTA */}
        <section className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Ready to level up?</h3>
          <p className="text-gray-400 mb-6">
            Book a free intro call to find the right mentor or consulting package for your goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 text-lg">
              Book a Free Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </section>
      </main>

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
    </>
  );
}
