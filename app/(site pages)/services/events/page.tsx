import React from "react";

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg mb-6">
          Stay up to date with our upcoming and past events at Syntax Society Studio.
        </p>
        <div className="space-y-8">
          {/* Example event cards */}
          <div className="border rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">Tech Meetup June 2025</h2>
            <p className="mb-1">Date: June 20, 2025</p>
            <p className="mb-2">Location: Online</p>
            <p>
              Join us for our monthly meetup featuring talks on AI, web development, and networking opportunities.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">Design Sprint Workshop</h2>
            <p className="mb-1">Date: July 10, 2025</p>
            <p className="mb-2">Location: Syntax Society Studio HQ</p>
            <p>
              A hands-on workshop to learn and apply design sprint methodologies with industry experts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}