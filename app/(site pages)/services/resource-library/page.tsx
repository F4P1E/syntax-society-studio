'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { FileDown } from 'lucide-react';

// Dummy Header Component
const Header = () => (
  <header className="bg-black text-white py-6 px-6 border-b border-neutral-800">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Syntax Society</Link>
      <nav className="space-x-6 hidden md:block">
        <Link href="/services" className="hover:text-violet-400">Services</Link>
        <Link href="/portfolio" className="hover:text-violet-400">Portfolio</Link>
        <Link href="/resource-library" className="hover:text-violet-400">Resources</Link>
        <Link href="/contact" className="hover:text-violet-400">Contact</Link>
      </nav>
    </div>
  </header>
);

type Resource = {
  _id: string;
  title: string;
  category: string;
  description: string;
  downloadUrl: string;
};

export default function ResourceLibraryPage() {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [resources, setResources] = useState<Resource[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 6;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "resource" && 
        (title match $search or category match $filter or $filter=="All")]
        | order(_createdAt desc)
        [${(page - 1) * perPage}...${page * perPage}]{
          _id, title, category, description, downloadUrl
        }`;
      const countQ = `count(*[_type == "resource" && 
        (title match $search or category match $filter or $filter=="All")])`;

      const res = await fetch('/api/resources', {
        method: 'POST',
        body: JSON.stringify({ query, countQ, params: { search: `${searchTerm}*`, filter } }),
      });
      const { items, total } = await res.json();
      setResources(items);
      setTotal(total);
    }
    fetchData();
  }, [searchTerm, filter, page]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
        {/* Header */}
        <section className="max-w-6xl mx-auto text-center mb-12">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-extrabold">
            Resource Library
          </motion.h1>
          <p className="mt-2 text-gray-400">Curated guides, templates & tools for creators and developers.</p>
        </section>

        {/* Search + Filters */}
        <div className="flex flex-wrap justify-between max-w-4xl mx-auto gap-4 mb-10">
          <Input
            className="flex-grow bg-gray-800 text-white border border-gray-700 placeholder-gray-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {['All', 'Guide', 'Template', 'Snippet'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((res, i) => (
            <motion.div
              key={res._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-violet-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{res.description}</p>
              <span className="uppercase text-xs text-gray-500">{res.category}</span>
              <div className="mt-4 flex justify-end">
                <Link href={session ? res.downloadUrl : '/api/auth/signin'}>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-violet-600 transition shadow-md">
                    <FileDown className="w-4 h-4" />
                    {session ? 'Download' : 'Sign in to Download'}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-14">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">Page {page} of {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        {/* CTA */}
        <section className="mt-20 text-center text-gray-400">
          {session ? (
            <Link href="/resources/upload">
              <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:from-indigo-600 hover:to-violet-600 transition-all">
                Upload Your Own Resource
              </button>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
                Sign In to Contribute
              </button>
            </Link>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 bg-neutral-900 text-neutral-300 border-t border-neutral-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">About</h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Syntax Society Studio is a creative digital agency specializing in modern design and scalable development. We bring your visions to life.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400">Overview</Link></li>
              <li><Link href="/services/design" className="hover:text-blue-400">Design</Link></li>
              <li><Link href="/services/development" className="hover:text-blue-400">Development</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@syntaxsociety.com" className="hover:text-blue-400">hello@syntaxsociety.com</a></li>
              <li><a href="https://twitter.com/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="https://github.com/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400">Discord</a></li>
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
