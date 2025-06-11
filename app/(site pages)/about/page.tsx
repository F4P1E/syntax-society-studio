'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

interface Person {
  name: string;
  role: string;
  img: string;
  border: string;
  textColor: string;
  desc: string;
  social: string[];
}

export default function AboutPage() {
  const leadership: Person[] = [
    {
      name: 'Dương Phú Đông',
      role: 'Founder & CEO',
      img: '/assets/DuongPhuDong.png',
      border: 'border-blue-500',
      textColor: 'text-blue-400',
      desc:
        'Pioneering the vision for Syntax Society Studio, Đông guides our strategic direction and fosters a culture of technical excellence.',
      social: ['#', '#'],
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'Head of AI & Research',
      img: '/assets/Sailor Monad.png',
      border: 'border-green-500',
      textColor: 'text-green-400',
      desc:
        "Leading our ventures into artificial intelligence and emerging technologies, Dr. Thorne pushes the boundaries of what's possible.",
      social: ['#', '#'],
    },
    {
      name: 'Elara Vance',
      role: 'Creative Director',
      img: 'https://i.pravatar.cc/300?img=10',
      border: 'border-purple-500',
      textColor: 'text-purple-400',
      desc:
        'Elara transforms concepts into captivating visual narratives, ensuring every project embodies stunning aesthetics and seamless user journeys.',
      social: ['#', '#'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <Head>
        <title>About Us - Syntax Society Studio: Innovation & Creativity</title>
        <meta
          name="description"
          content="Discover the core mission, vision, and values that drive Syntax Society Studio. We are pioneers in digital innovation, crafting future experiences."
        />
        <meta property="og:title" content="About Us - Syntax Society Studio" />
        <meta
          property="og:description"
          content="Discover the core mission, vision, and values that drive Syntax Society Studio."
        />
        <meta property="og:image" content="/images/syntax-og-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-white hover:text-blue-400 tracking-wider"
          >
            SYNTAX SOCIETY STUDIO
          </Link>
          <div className="hidden md:flex space-x-8 text-lg uppercase">
            <Link href="/" className="text-gray-300 hover:text-blue-400">Home</Link>
            <Link href="/events" className="text-gray-300 hover:text-blue-400">Events</Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400">Services</Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-300">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
          </div>
          <button
            className="md:hidden text-white hover:text-blue-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Open navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/assets/SyntaxSociety.png"
            alt="Team Collaboration"
            width={1200}
            height={800}
            priority
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Unleashing the Future of Digital Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
              Where Innovation, Design, and Technology converge to build extraordinary experiences.
            </p>
          </div>
        </section>

        {/* Vision/Mission/Values */}
        <section className="py-20 md:py-24 bg-black text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400 animate-fade-in-up delay-100">
              Our Driving Purpose
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['Mission', 'Vision', 'Values'].map((type, i) => (
                <div key={type} className={`animate-fade-in-up delay-${(i + 2) * 100}`}>
                  <h3 className="text-2xl font-bold mb-4 text-white">{type}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {type === 'Mission' &&
                      'To empower individuals and businesses by crafting cutting-edge digital solutions that blend artistic design with robust technology.'}
                    {type === 'Vision' &&
                      'To be the global benchmark for creative technology studios, inspiring a new era of digital innovation and human-centered design.'}
                    {type === 'Values' &&
                      'Innovation: Relentlessly pursue new ideas. Excellence: Deliver uncompromising quality. Collaboration: Thrive on collective genius. Integrity: Act with transparency and trust.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creativity Meets Code */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-400 animate-fade-in-up">
              Where Creativity Meets Code
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Image
                src="/assets/SyntaxSociety.png"
                alt="Team Collaboration"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl object-cover transform hover:scale-[1.01] transition-transform duration-500 animate-slide-in-left"
              />
              <div className="text-gray-300 space-y-8 text-xl leading-relaxed animate-slide-in-right">
                <p>
                  At Syntax Society Studio, our work is a symphony of diverse talents, meticulously orchestrated to bring complex ideas to life. We don&#39;t just build products; we sculpt experiences that resonate, engage, and inspire.
                </p>
                <p>
                  Our expertise spans the entire digital spectrum, from the nuanced artistry of UI/UX design to the robust engineering of scalable full-stack applications. We integrate cutting-edge technologies, ensuring every solution is future-proof and performant.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pioneering Design: Visually stunning, intuitively functional.</li>
                  <li>Engineering Mastery: Robust, scalable, and secure solutions.</li>
                  <li>Strategic Partnership: Guiding your digital journey from concept to launch.</li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg group"
                >
                  Explore Our Services
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Facts */}
        <section className="py-20 md:py-24 bg-black text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400 animate-fade-in-up">
              Our Impact, By the Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { num: '50+', label: 'Successful Projects Delivered' },
                { num: '100%', label: 'Client Satisfaction Rate' },
                { num: '2M+', label: 'Users Reached by Our Apps' },
                { num: '8', label: 'Years of Innovation' },
              ].map(({ num, label }, i) => (
                <div key={num} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
                  <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">{num}</p>
                  <p className="text-lg text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-24 bg-gray-950 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-400 animate-fade-in-up">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {leadership.map((person, idx) => (
                <div key={person.name} className={`animate-fade-in-up delay-${(idx + 1) * 100}`}>
                  <div className={`w-40 h-40 mx-auto mb-6 relative`}>
                    <Image
                      src={person.img}
                      alt={`${person.name} – ${person.role}`}
                      width={160}
                      height={160}
                      className={`rounded-full object-cover ${person.border} shadow-xl`}
                    />
                  </div>
                  <h3 className="font-bold text-2xl text-white">{person.name}</h3>
                  <p className={`text-lg mb-2 ${person.textColor}`}>{person.role}</p>
                  <p className="text-gray-400 leading-relaxed">{person.desc}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    {person.social.map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        className="text-gray-400 hover:text-white"
                        aria-label={`Visit ${person.name}'s LinkedIn profile`}
                        title={`Visit ${person.name}'s LinkedIn profile`}
                      >
                        <i className="fab fa-linkedin-in text-2xl" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
