import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Little Lemon Meta Frontend Developer Project",
    description:
      "A collaborative project showcasing the skills of the Meta Frontend Developer community.",
    image: "/assets/LittleLemon.png",
    link: "https://meta-frontend-developer-project.vercel.app/",
    tags: ["Open Source", "Web", "Community"],
  },
  {
    title: "AI Voice Assistant",
    description:
      "This project sets up a voice assistant using the LiveKit framework. The assistant can control the temperature in different zones of a house through voice commands.",
    image: "/assets/AiVoice.jpg",
    link: "https://github.com/F4P1E/AI-Voice-Assistant",
    tags: ["AI", "Productivity"],
  },
  {
    title: "Accessible Web Reader",
    description:
      "A browser extension for accessible content, built by Team Vision.",
    image: "/portfolio/web-reader.jpg",
    link: "#",
    tags: ["Accessibility", "Extension", "UX"],
  },
];

export default function PortfolioPage() {
  const isStudio = false; // or true, based on your logic
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-300 transition"
          >
            Syntax Society Studio
          </Link>
          <div className="space-x-6 text-sm">
            <Link href="/portfolio" className="hover:text-violet-500 dark:hover:text-violet-300 transition">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-violet-500 dark:hover:text-violet-300 transition">
              Blog
            </Link>
            <Link href="/community" className="hover:text-violet-500 dark:hover:text-violet-300 transition">
              Community
            </Link>
            <Link href="/contact" className="hover:text-violet-500 dark:hover:text-violet-300 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Studio Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a selection of our studio’s featured projects, built with passion, creativity, and technical excellence.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-violet-100 dark:bg-violet-700 text-violet-700 dark:text-violet-100 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-auto text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {isStudio && (
          <div className="text-center mt-16">
            <Link
              href="/submit-project"
              className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition"
            >
              Add New Project
            </Link>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Want to collaborate or feature your project? {" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact us
            </a>
            .
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Syntax Society Studio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}