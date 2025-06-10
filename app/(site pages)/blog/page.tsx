import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogNavbar from "@/components/blog/BlogNavbar";

const blogPosts = [
  {
    slug: "design-trends-2025",
    title: "Top Design Trends for 2025",
    excerpt:
      "Explore the bold typography, immersive interactions, and sustainable UX practices shaping the future.",
    date: "June 10, 2025",
    image: "/blog/design-trends.jpg",
  },
  {
    slug: "ai-dev-tools",
    title: "AI-Powered Dev Tools Revolutionizing Workflow",
    excerpt:
      "From code suggestions to automated testing, discover how AI is reshaping development.",
    date: "June 5, 2025",
    image: "/blog/ai-tools.jpg",
  },
  {
    slug: "accessibility-matters",
    title: "Why Accessibility Should Be at the Core of Your Product",
    excerpt:
      "Inclusivity is not a feature — it's a standard. Learn how accessible design benefits everyone.",
    date: "May 29, 2025",
    image: "/blog/accessibility.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogNavbar />

      <main className="min-h-screen py-24 px-6 max-w-6xl mx-auto">
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Insights & Stories
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore ideas, tutorials, and studio updates from the Syntax Society community.
          </p>
          <div className="mt-8">
            <Link href="/blog/new">
              <Button size="lg">Create New Post</Button>
            </Link>
          </div>
        </section>

        <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(({ slug, title, excerpt, date, image }) => (
            <Link
              href={`/blog/${slug}`}
              key={slug}
              className="group block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-2">
                <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
                <h3 className="text-xl font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{excerpt}</p>
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400 mt-2 inline-block">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}