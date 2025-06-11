'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarCheck, ArrowRight, Users, Search } from 'lucide-react';

const workshops = [
  {
    title: 'Frontend Mastery',
    audience: 'Intermediate Developers',
    duration: '3 days',
    content: [
      'React, Next.js & TailwindCSS deep dive',
      'Design systems and accessibility',
      'Performance and testing practices',
    ],
    registerLink: '/register?workshop=frontend-mastery',
  },
  {
    title: 'AI for Web Creators',
    audience: 'Designers & Developers',
    duration: '2 days',
    content: [
      'Intro to LLMs and APIs',
      'ChatGPT + design workflows',
      'Automation & content generation',
    ],
    registerLink: '/register?workshop=ai-for-web-creators',
  },
  {
    title: 'Fullstack Bootcamp',
    audience: 'Junior Developers',
    duration: '1 week',
    content: [
      'Node.js, Prisma, PostgreSQL setup',
      'Auth, testing & deployment',
      'Team-based project build',
    ],
    registerLink: '/register?workshop=fullstack-bootcamp',
  },
  // Add more workshops here
];

export default function WorkshopsPage() {
  const [query, setQuery] = useState('');

  const filteredWorkshops = workshops.filter(w =>
    w.title.toLowerCase().includes(query.toLowerCase()) ||
    w.audience.toLowerCase().includes(query.toLowerCase())
  );

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
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
        <section className="max-w-5xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight mb-4"
          >
            Workshops & Training
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn by doing. Our immersive, hands-on workshops are crafted to help you and your team master modern technologies and workflows.
          </p>
        </section>

        {/* Filter Input */}
        <section className="max-w-md mx-auto mb-16">
          <div className="flex items-center bg-gray-800 rounded-lg px-4 py-3 shadow-md">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search workshops..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
        </section>

        {/* Workshops List */}
        <section className="space-y-16 max-w-4xl mx-auto mb-32">
          {filteredWorkshops.length > 0 ? filteredWorkshops.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-violet-500 transition-all"
            >
              <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-md text-gray-400 mb-2">Audience: {item.audience}</p>
              <p className="flex items-center gap-2 text-sm text-violet-400 mb-4">
                <CalendarCheck className="w-4 h-4" /> {item.duration}
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                {item.content.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-violet-500 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={item.registerLink}>
                <Button className="w-full">Register Now</Button>
              </Link>
            </motion.div>
          )) : (
            <p className="text-center text-gray-500">No workshops found matching your search.</p>
          )}
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Want a private session?</h3>
          <p className="text-gray-400 mb-6">
            We offer private workshops tailored for your team’s stack and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 text-lg">
              Book a Private Workshop <ArrowRight className="ml-2 w-5 h-5" />
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
