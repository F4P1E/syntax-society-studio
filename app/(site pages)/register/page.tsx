"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Brush, Layers3 } from "lucide-react";
import PasswordInput from "@/components/PasswordInput";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-tr from-sky-50 via-emerald-50 to-violet-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">

      {/* Left Side Panel */}
      <div className="hidden md:flex flex-col justify-center px-12 py-20 bg-gradient-to-b from-violet-700 to-indigo-800 text-white space-y-12">
        <div className="space-y-3 flex items-start gap-4">
          <Star className="w-8 h-8 flex-shrink-0 text-white/80" />
          <div>
            <h3 className="text-xl font-semibold">Earned Impact</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Partner with us to create bold, people-first experiences that leave a lasting impression.
            </p>
          </div>
        </div>

        <div className="space-y-3 flex items-start gap-4">
          <Brush className="w-8 h-8 flex-shrink-0 text-white/80" />
          <div>
            <h3 className="text-xl font-semibold">Crafted with Care</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Every detail matters — from typography to transitions. We obsess so your users don’t have to.
            </p>
          </div>
        </div>

        <div className="space-y-3 flex items-start gap-4">
          <Layers3 className="w-8 h-8 flex-shrink-0 text-white/80" />
          <div>
            <h3 className="text-xl font-semibold">Strategic Design</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We blend strategy and creativity to build scalable solutions that evolve with your vision.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign up to <span className="text-violet-600">Syntax Society</span>
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join our creative collective — it's fast, free, and fun.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email Address" required />
            <PasswordInput placeholder="Password" required />
            <Textarea placeholder="What kind of project are you planning?" rows={3} />
            <Button type="submit" className="w-full">Register</Button>
          </form>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-violet-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
