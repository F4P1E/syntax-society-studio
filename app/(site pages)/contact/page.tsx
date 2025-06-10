import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <section className="container mx-auto px-4 py-20 max-w-2xl">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300">
            Have a question, suggestion, or want to collaborate? Reach out to Syntax Society Studio using the form below.
          </p>
        </header>
        <form className="bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-200 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-10 text-gray-400">
          <p>
            Or email us directly at{" "}
            <a
              href="mailto:hello@syntaxsociety.studio"
              className="text-blue-400 hover:underline"
            >
              hello@syntaxsociety.studio
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}