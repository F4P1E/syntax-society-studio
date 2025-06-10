"use client";

import React from "react";
import Link from 'next/link';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <Head>
        <title>About Us - Syntax Society Studio: Innovation & Creativity</title>
        <meta name="description" content="Discover the core mission, vision, and values that drive Syntax Society Studio. We are pioneers in digital innovation, crafting future experiences." />
        {/* Open Graph / Social Sharing Tags */}
        <meta property="og:title" content="About Us - Syntax Society Studio" />
        <meta property="og:description" content="Discover the core mission, vision, and values that drive Syntax Society Studio." />
        <meta property="og:image" content="/images/syntax-og-image.jpg" /> {/* Replace with your actual OG image */}
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Modern, minimalist Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-200 tracking-wider">
            SYNTAX SOCIETY STUDIO
          </Link>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium uppercase">Home</Link>
            <Link href="/events" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium uppercase">Events</Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium uppercase">Services</Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium uppercase">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium uppercase">Contact</Link>
          </div>
          {/* Mobile menu button (if interactive, needs to be in a 'use client' component) */}
          <button className="md:hidden text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - Full-width, dramatic imagery */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <img
            src="/assets/SyntaxSocietyHero.jpeg" // High-quality, abstract tech/creative image
            alt="Syntax Society Studio Vision"
            className="absolute inset-0 w-full h-full object-cover object-center animate-zoom-fade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 p-4 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
              Unleashing the Future of Digital Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
              Where Innovation, Design, and Technology converge to build extraordinary experiences.
            </p>
          </div>
        </section>

        {/* Our Purpose & Mission Section - Clean and impactful */}
        <section className="py-20 md:py-24 bg-black text-center relative z-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400 animate-fade-in-up delay-100">
              Our Driving Purpose
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower individuals and businesses by crafting cutting-edge digital solutions that blend artistic design with robust technology.
                </p>
              </div>
              <div className="animate-fade-in-up delay-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To be the global benchmark for creative technology studios, inspiring a new era of digital innovation and human-centered design.
                </p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <h3 className="text-2xl font-bold mb-4 text-white">Values</h3>
                <ul className="text-gray-400 leading-relaxed text-lg list-none p-0 space-y-2">
                  <li>Innovation: Relentlessly pursue new ideas.</li>
                  <li>Excellence: Deliver uncompromising quality.</li>
                  <li>Collaboration: Thrive on collective genius.</li>
                  <li>Integrity: Act with transparency and trust.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Studio's Core - What We Do with impactful imagery */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-blue-400 animate-fade-in-up">
              Where Creativity Meets Code
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <img
                  src="/assets/SyntaxSociety.png" // Image of a team collaborating, or abstract tech
                  alt="Team Collaboration"
                  className="w-full h-auto rounded-lg shadow-2xl object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
              <div className="text-gray-300 space-y-8 text-xl leading-relaxed animate-slide-in-right">
                <p>
                  At Syntax Society Studio, our work is a symphony of diverse talents, meticulously orchestrated to bring complex ideas to life. We don't just build products; we sculpt experiences that resonate, engage, and inspire.
                </p>
                <p>
                  Our expertise spans the entire digital spectrum, from the nuanced artistry of UI/UX design to the robust engineering of **scalable full-stack applications**. We integrate cutting-edge technologies, ensuring every solution is future-proof and performant.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pioneering Design: Visually stunning, intuitively functional.</li>
                  <li>Engineering Mastery: Robust, scalable, and secure solutions.</li>
                  <li>Strategic Partnership: Guiding your digital journey from concept to launch.</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold text-lg group">
                  Explore Our Services
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Milestones (Sony-style "Fast Facts") */}
        <section className="py-20 md:py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400 animate-fade-in-up">
              Our Impact, By the Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="animate-fade-in-up delay-100">
                <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">50+</p>
                <p className="text-lg text-gray-400">Successful Projects Delivered</p>
              </div>
              <div className="animate-fade-in-up delay-200">
                <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">100%</p>
                <p className="text-lg text-gray-400">Client Satisfaction Rate</p>
              </div>
              <div className="animate-fade-in-up delay-300">
                <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">2M+</p>
                <p className="text-lg text-gray-400">Users Reached by Our Apps</p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">8</p>
                <p className="text-lg text-gray-400">Years of Innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team - Sleek presentation */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-400 animate-fade-in-up">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="animate-fade-in-up delay-100">
                <img
                  src="/assets/DuongPhuDong.png" // Actual image
                  alt="Dương Phú Đông - Founder & CEO"
                  className="w-40 h-40 mx-auto rounded-full mb-6 object-cover border-4 border-blue-500 shadow-xl"
                />
                <h3 className="font-bold text-2xl text-white">Dương Phú Đông</h3>
                <p className="text-blue-400 text-lg mb-2">Founder & CEO</p>
                <p className="text-gray-400 text-md leading-relaxed">
                  Pioneering the vision for Syntax Society Studio, Đông guides our strategic direction and fosters a culture of technical excellence.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin-in text-2xl"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-twitter text-2xl"></i></a>
                </div>
              </div>
              <div className="animate-fade-in-up delay-200">
                <img
                  src="/assets/Sailor Monad.png" // Placeholder
                  alt="Dr. Aris Thorne - Head of AI & Research"
                  className="w-40 h-40 mx-auto rounded-full mb-6 object-cover border-4 border-green-500 shadow-xl"
                />
                <h3 className="font-bold text-2xl text-white">Dr. Aris Thorne</h3>
                <p className="text-green-400 text-lg mb-2">Head of AI & Research</p>
                <p className="text-gray-400 text-md leading-relaxed">
                  Leading our ventures into artificial intelligence and emerging technologies, Dr. Thorne pushes the boundaries of what's possible.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin-in text-2xl"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-github text-2xl"></i></a>
                </div>
              </div>
              <div className="animate-fade-in-up delay-300">
                <img
                  src="https://i.pravatar.cc/300?img=10" // Placeholder
                  alt="Elara Vance - Creative Director"
                  className="w-40 h-40 mx-auto rounded-full mb-6 object-cover border-4 border-purple-500 shadow-xl"
                />
                <h3 className="font-bold text-2xl text-white">Elara Vance</h3>
                <p className="text-purple-400 text-lg mb-2">Creative Director</p>
                <p className="text-gray-400 text-md leading-relaxed">
                  Elara transforms concepts into captivating visual narratives, ensuring every project embodies stunning aesthetics and seamless user journeys.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin-in text-2xl"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-behance text-2xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action: Join Us - Full width, engaging */}
        <section className="relative py-20 md:py-24 bg-gradient-to-r from-blue-700 to-purple-600 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width=".5" height=".5" patternUnits="userSpaceOnUse">
                            <circle cx=".25" cy=".25" r=".05" fill="rgba(255,255,255,0.2)" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up delay-400">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
              Shape Tomorrow with Us
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Whether you're an aspiring talent, a visionary client, or a potential partner, we invite you to connect and explore the endless possibilities of digital creation.
            </p>
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg uppercase tracking-wide">
                Partner With Us
              </Link>
              <Link href="/careers" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300 text-lg uppercase tracking-wide">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modern, minimalist Footer */}
      <footer className="py-16 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Link href="/" className="text-2xl font-bold text-white tracking-wider">
              SYNTAX SOCIETY STUDIO
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="font-semibold text-white mb-3">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/events" className="hover:text-blue-400 transition-colors duration-200">Events</Link></li>
                <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors duration-200">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors duration-200">Blog</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@syntaxsociety.com" className="hover:text-blue-400 transition-colors duration-200">hello@syntaxsociety.com</a></li>
                <li><a href="https://twitter.com/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">Twitter</a></li>
                <li><a href="https://linkedin.com/company/syntaxsociety" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Syntax Society Studio. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Global CSS for animations (place this in your globals.css or equivalent) */}
      <style jsx global>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes zoomFade {
          0% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-zoom-fade { animation: zoomFade 10s ease-out forwards; /* Longer for background */ }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        /* Add more delays as needed */
      `}</style>
    </div>
  );
}