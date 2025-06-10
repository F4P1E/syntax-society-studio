import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Share2 } from "lucide-react";

const featuredItems = [
  {
    title: "The Rise of AI in Web Development",
    tag: "Tech",
    color: "bg-indigo-600",
    article: (
      <>
        <h2 className="text-3xl font-bold mb-2">The Rise of AI in Web Development</h2>
        <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-indigo-600 bg-opacity-80">Tech</span>
        <h3 className="text-xl font-semibold mt-6 mb-2">AI's Impact on Web Dev</h3>
        <p className="text-gray-200 mb-4">
          From code generation tools to smart bug detection, AI is transforming the way developers approach problem-solving and design. Learn which tools are leading the charge.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>GitHub Copilot & AI-assisted coding</li>
          <li>Predictive UX enhancements</li>
          <li>Automated testing and deployment pipelines</li>
        </ul>
        <p className="text-gray-200">
          Are you using AI in your stack? Share your experience in the comments below.
        </p>
      </>
    ),
  },
  {
    title: "Blockchain Beyond Cryptocurrency",
    tag: "Blockchain",
    color: "bg-yellow-600",
    article: (
      <>
        <h2 className="text-3xl font-bold mb-2">Blockchain Beyond Cryptocurrency</h2>
        <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-yellow-600 bg-opacity-80">Blockchain</span>
        <h3 className="text-xl font-semibold mt-6 mb-2">Decentralized Innovation</h3>
        <p className="text-gray-200 mb-4">
          Blockchain is no longer just for Bitcoin. Discover how it's being used for identity verification, digital voting, and transparent supply chains.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Web3 identity and authentication</li>
          <li>Decentralized social networks</li>
          <li>Tokenized assets and NFTs for ownership tracking</li>
        </ul>
        <p className="text-gray-200">
          What do you think the next big blockchain use case will be?
        </p>
      </>
    ),
  }
];

export default function FeaturedBlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-violet-400 transition">Syntax Society Studio</Link>
          <div className="space-x-6 text-sm">
            <Link href="/featured" className="hover:text-violet-300 transition">Featured</Link>
            <Link href="/blog" className="hover:text-violet-300 transition">Blog</Link>
            <Link href="/community" className="hover:text-violet-300 transition">Community</Link>
            <Link href="/contact" className="hover:text-violet-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Featured Blog Posts
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive into our latest highlights, projects, and community stories. Interact, comment, and share the posts you love.
          </p>
        </header>

        <section className="max-w-3xl mx-auto space-y-16">
          {featuredItems.map((item, idx) => (
            <article key={idx} className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div>{item.article}</div>
              {/* Reactions */}
              <div className="flex gap-6 items-center mt-6 border-t border-gray-700 pt-4">
                <button className="flex items-center gap-2 text-gray-300 hover:text-pink-400">
                  <Heart className="w-4 h-4" /> 12
                </button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-green-400">
                  <MessageCircle className="w-4 h-4" /> Comment
                </button>
              </div>
              {/* Comments Section */}
              <div className="mt-6">
                <textarea
                  placeholder="Leave a comment..."
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                ></textarea>
                <Button className="mt-2">Post Comment</Button>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>
            Want to be featured? {" "}
            <a href="/contact" className="text-blue-400 hover:underline">
              Contact us
            </a>{" "}
            or submit your project for a chance to be highlighted!
          </p>
        </footer>
      </section>
    </main>
  );
}
