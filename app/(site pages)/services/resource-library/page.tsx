'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileDown, Search } from 'lucide-react';
import { useSession } from 'next-auth/react';

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

  // Fetch from Sanity CMS
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
        body: JSON.stringify({ query, countQ, params: { search: `${searchTerm}*`, filter, countQ } }),
      });
      const { items, total } = await res.json();
      setResources(items);
      setTotal(total);
    }
    fetchData();
  }, [searchTerm, filter, page]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20">
      {/* Header + Search */}
      <section className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-extrabold">Resource Library</motion.h1>
        <p className="mt-2 text-gray-400">Curated guides, templates & tools.</p>
      </section>
      <div className="flex flex-wrap justify-between max-w-4xl mx-auto gap-4 mb-8">
        <Input 
          className="flex-grow" placeholder="Search..." 
          value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        {['All','Guide','Template','Snippet'].map(cat => (
          <Button 
            key={cat}
            onClick={() => { setFilter(cat); setPage(1); }}
            variant={filter===cat ? 'default' : 'outline'}
          >{cat}</Button>
        ))}
      </div>

      {/* Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((res, i) => (
          <motion.div
            key={res._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-violet-500"
          >
            <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{res.description}</p>
            <span className="uppercase text-xs text-gray-500">{res.category}</span>
            <div className="mt-4 flex justify-end">
              <Link href={session ? res.downloadUrl : '/api/auth/signin'}>
                <Button variant="ghost" size="sm">
                  <FileDown className="w-4 h-4 mr-1" /> 
                  {session ? 'Download' : 'Sign in to Download'}
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <Button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Previous</Button>
        <span>{page} / {totalPages}</span>
        <Button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)}>Next</Button>
      </div>

      {/* Footer CTA */}
      <section className="mt-16 text-center text-gray-400">
        {session ? (
          <Link href="/resources/upload"><Button>Upload Resource</Button></Link>
        ) : (
          <Link href="/api/auth/signin"><Button>Login to Upload</Button></Link>
        )}
      </section>
    </main>
  );
}
