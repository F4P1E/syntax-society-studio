'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CustomSolutionsPage() {
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
          <Link href="/services" className="hover:text-violet-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-violet-400 transition">Portfolio</Link>
          <Link href="/about" className="hover:text-violet-400 transition">About</Link>
          <Link href="/contact" className="hover:text-violet-400 transition">Contact</Link>
          <Link href="/login" className="text-violet-500 hover:underline">Login</Link>
          <Link href="/register" className="text-violet-500 hover:underline">Register</Link>
        </nav>
        <Link href="/contact" className="md:hidden block">
          <Button size="sm" variant="secondary">Start a Project</Button>
        </Link>
      </header>

      {/* Hero */}
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight mb-6"
          >
            Custom Solutions
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get tailored web, software, and design services built specifically for your needs —
            whether you are a startup, enterprise, or creator.
          </p>
        </section>

        {/* Offerings */}
        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32">
          {[
            {
              title: 'Custom Web & App Development',
              points: ['Fullstack solutions', 'Responsive design', 'API integrations'],
            },
            {
              title: 'Branding & Design Systems',
              points: ['Logo & identity', 'UI/UX design', 'Design systems in Figma & code'],
            },
            {
              title: 'Technical Consulting',
              points: ['Architecture planning', 'DevOps setup', 'Scaling guidance'],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-violet-500 transition"
            >
              <h2 className="text-xl font-semibold mb-4 text-white">{item.title}</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {item.points.map((point, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="w-2 h-2 mt-2 bg-violet-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Inquiry Form */}
        <section className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Start Your Custom Project</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Project Description</label>
              <textarea
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                rows={5}
                placeholder="Tell us about your goals and ideas..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Submit Request <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
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
