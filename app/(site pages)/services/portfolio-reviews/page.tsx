import React from "react";

export default function PortfolioReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <section className="container mx-auto px-4 py-20 max-w-2xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Portfolio Reviews
          </h1>
          <p className="text-lg text-gray-300">
            Get personalized feedback on your portfolio, resume, or LinkedIn profile from industry experts. Stand out to employers and clients with a polished professional presence.
          </p>
        </header>
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">How It Works</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 mb-6">
            <li>Submit your portfolio, resume, or LinkedIn profile for review.</li>
            <li>Receive actionable feedback and improvement tips from our team.</li>
            <li>Schedule a 1:1 session for in-depth discussion (optional).</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">Why Get a Review?</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 mb-6">
            <li>Highlight your strengths and unique skills.</li>
            <li>Identify areas for improvement and growth.</li>
            <li>Boost your confidence for job applications and client pitches.</li>
          </ul>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
            >
              Request a Review
            </a>
          </div>
        </div>
        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>
            Have questions?{" "}
            <a href="/contact" className="text-indigo-400 hover:underline">
              Contact our team
            </a>
            .
          </p>
        </footer>
      </section>
    </main>
  );
}