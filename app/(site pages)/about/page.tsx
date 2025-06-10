import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <section className="container mx-auto px-4 py-20 max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            About Syntax Society Studio
          </h1>
          <p className="text-xl text-gray-300">
            Empowering creators, developers, and designers to build, learn, and inspire together.
          </p>
        </header>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Our Mission</h2>
          <p className="text-gray-200 leading-relaxed">
            At Syntax Society Studio, our mission is to foster a vibrant, inclusive community where creativity and technology intersect. 
            We provide a collaborative environment for individuals to share knowledge, host events, and showcase innovative projects that inspire and empower.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">What We Do</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Host regular meetups, workshops, and hackathons</li>
            <li>Showcase featured projects and member achievements</li>
            <li>Encourage open collaboration and mentorship</li>
            <li>Promote diversity, inclusion, and continuous learning</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-800 rounded-lg p-4 shadow text-center">
              <img
                src="/assets/DuongPhuDong.png"
                alt="Duong Phu Dong"
                className="w-16 h-16 mx-auto rounded-full mb-2 object-cover border-4 border-blue-500"
              />
              <h3 className="font-semibold text-lg">Jane Doe</h3>
              <p className="text-gray-400 text-sm">Founder & Lead Organizer</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 mb-2" />
              <h3 className="font-semibold text-lg">John Smith</h3>
              <p className="text-gray-400 text-sm">Community Manager</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-600 mb-2" />
              <h3 className="font-semibold text-lg">Alex Lee</h3>
              <p className="text-gray-400 text-sm">Events Coordinator</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}