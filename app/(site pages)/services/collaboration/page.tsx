'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, Send } from 'lucide-react';

export default function CollaborationPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to your CMS or database here
    console.log('Submitted:', form);

    setForm({ name: '', email: '', message: '' });
    alert('Thanks for submitting! We will reach out soon.');
  };

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

      {/* Hero */}
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-4">Collaboration Hub</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partner with Syntax Society Studio to build open-source projects, launch initiatives, or co-create with industry professionals.
          </p>
        </motion.section>

        {/* Collaboration Types */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32">
          {[
            {
              icon: <Users className="w-6 h-6 text-violet-500" />,
              title: 'Open Source Partnerships',
              desc: 'Collaborate on impactful software and tools to benefit the developer community.'
            },
            {
              icon: <Briefcase className="w-6 h-6 text-violet-500" />,
              title: 'Startup Co-Creation',
              desc: 'Work with us on MVPs, UI/UX, or technical strategy to bring your startup idea to life.'
            },
            {
              icon: <Send className="w-6 h-6 text-violet-500" />,
              title: 'Event & Content Collabs',
              desc: 'Team up for tech events, podcasts, design challenges or tutorials.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl transition-all"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Submission Form */}
        <section className="max-w-3xl mx-auto text-white mb-24">
          <h2 className="text-3xl font-semibold mb-6 text-center">Submit a Collaboration Proposal</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                title="Email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                title="Message"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">Submit Proposal</Button>
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
