"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // utility for conditional classes

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "All Posts" },
  { href: "/blog/new", label: "Write" },
];

export default function BlogNavbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-violet-700 dark:text-violet-300">
          Syntax Society Blog
        </Link>

        <nav className="flex gap-6 items-center text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-violet-600 dark:hover:text-violet-400 transition-colors",
                pathname === link.href && "text-violet-600 dark:text-violet-300 font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="sm" className="text-xs px-3">
            Log In
          </Button>
        </nav>
      </div>
    </header>
  );
}
