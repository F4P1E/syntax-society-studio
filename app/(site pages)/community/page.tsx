import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Heart, Share2 } from "lucide-react";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-violet-400 transition">Syntax Society Studio</Link>
          <div className="space-x-6 text-sm">
            <Link href="/services/featured" className="hover:text-violet-300 transition">Featured</Link>
            <Link href="/blog" className="hover:text-violet-300 transition">Blog</Link>
            <Link href="/community" className="hover:text-violet-300 transition">Community</Link>
            <Link href="/contact" className="hover:text-violet-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Our Community
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with other creators, developers, and innovators. Participate in discussions, collaborate on projects, and grow with the community.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <section className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> Community Board
            </h2>
            <p className="text-gray-300 mb-4">
              Join ongoing conversations or start your own thread.
            </p>
            <textarea
              placeholder="Start a new topic..."
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 mb-4"
            ></textarea>
            <Button className="mb-4">Post Topic</Button>

            {/* Example Discussion */}
            <div className="border-t border-gray-700 pt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">How are you using AI in your projects?</h3>
                <p className="text-gray-400 text-sm">Posted by @devjane · 2 days ago</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-400">
                  <button className="flex items-center gap-1 hover:text-pink-400"><Heart className="w-4 h-4" /> 8</button>
                  <button className="flex items-center gap-1 hover:text-blue-400"><MessageCircle className="w-4 h-4" /> 3</button>
                  <button className="flex items-center gap-1 hover:text-green-400"><Share2 className="w-4 h-4" /> Share</button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Looking for blockchain collaborators</h3>
                <p className="text-gray-400 text-sm">Posted by @blockdev · 5 days ago</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-400">
                  <button className="flex items-center gap-1 hover:text-pink-400"><Heart className="w-4 h-4" /> 5</button>
                  <button className="flex items-center gap-1 hover:text-blue-400"><MessageCircle className="w-4 h-4" /> 2</button>
                  <button className="flex items-center gap-1 hover:text-green-400"><Share2 className="w-4 h-4" /> Share</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Member Highlights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">@alicecodes</h3>
                <p className="text-gray-300">Contributed to 3 open source projects last month and launched her own design system.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">@samuelweb</h3>
                <p className="text-gray-300">Led a live workshop on Web3 smart contracts and wrote an extensive tutorial series.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">@emilyui</h3>
                <p className="text-gray-300">Hosted a Figma community jam and shared UI kits with the community.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>
            Want to join our spotlight? <Link href="/contact" className="text-blue-400 hover:underline">Get in touch</Link> and share your story.
          </p>
        </footer>
      </section>
    </main>
  );
}
