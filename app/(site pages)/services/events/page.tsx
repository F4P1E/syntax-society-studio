// pages/event-detail.tsx (or pages/events/[slug].tsx for dynamic routes)

import Link from 'next/link'; // Assuming you are using Next.js for routing

const EventDetailPage: React.FC = () => {
  // Placeholder for event data. In a real app, this would come from an API or props.
  const event = {
    title: "Global Tech Summit 2025: Innovate & Connect",
    date: "Saturday, August 17, 2025",
    time: "9:00 AM - 5:00 PM (GMT+7)",
    location: "Saigon Exhibition & Convention Center (SECC), Ho Chi Minh City",
    image: "https://th.bing.com/th/id/OIP.eOMyEGIm5E3g-qs00I_ebQHaE8?rs=1&pid=ImgDetMain",
    description: `Join us for the highly anticipated Global Tech Summit 2025, where industry leaders, innovators, and enthusiasts converge to explore the future of technology. This year's summit focuses on AI, sustainable tech, blockchain, and quantum computing.
    
    Expect engaging keynote speeches, interactive workshops, a vibrant exhibition hall showcasing cutting-edge innovations, and unparalleled networking opportunities. Whether you're a seasoned professional, an aspiring entrepreneur, or a tech enthusiast, GTS 2025 offers valuable insights and connections to propel you forward.
    
    Highlights include:
    - AI-Powered Futures: Deep dives into machine learning, neural networks, and generative AI.
    - Green Tech Innovations: Solutions for a sustainable digital world.
    - Web3 & Beyond: The evolution of decentralized technologies.
    - Interactive Demo Zones: Experience the latest gadgets and software firsthand.
    
    Don't miss out on the premier technology event of the year!`,
    speakers: [
      { name: "Dr. Anya Sharma", title: "CEO, Quantum Innovations", bio: "Pioneering research in quantum machine learning." },
      { name: "Mark Chen", title: "Lead AI Ethicist, FutureAI Labs", bio: "Expert in ethical AI development and governance." },
    ],
    registrationLink: "#", // Replace with actual registration link
  };

  // Helper to generate a simplified calendar for a specific month
  const generateCalendar = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = date.getDay(); // 0 for Sunday, 1 for Monday

    const calendarDays = [];
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }
    return calendarDays;
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // getMonth() is 0-indexed

  const calendarDays = generateCalendar(currentYear, currentMonth); // Example: Current Month
  const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('en-US', { month: 'long' });

  // Dummy 'featured' days for the calendar (e.g., event dates)
  const featuredDays = [10, 17, 25]; // Example: 17th is the event date, 10th and 25th are other events

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 text-2xl font-bold text-black-700 dark:text-blue-400 hover:text-black-800 dark:hover:text-blue-300 transition-colors duration-200">
            Syntax Society Studio
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">Contact</Link>
          </div>
          {/* Mobile menu button (can add functionality with state) */}
          <button className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Event Details Section */}
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 transform hover:scale-[1.005] transition-transform duration-300 ease-out">
          {event.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100 animate-fade-in-down">
            {event.title}
          </h1>

          <div className="space-y-3 mb-8 text-gray-700 dark:text-gray-300 text-lg">
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <strong>Date:</strong> {event.date}
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <strong>Time:</strong> {event.time}
            </p>
            <p className="flex items-start">
              <svg className="w-6 h-6 mr-2 mt-0.5 flex-shrink-0 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <strong>Location:</strong> {event.location}
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed mb-10">
            {event.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <img src={`https://i.pravatar.cc/64?img=${index + 1}`} alt={speaker.name} className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-400 dark:border-blue-300" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{speaker.name}</h3>
                      <p className="text-blue-600 dark:text-blue-300 text-sm mb-1">{speaker.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-white-700 text-red font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg"
          >
            Register Now
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </section>

        {/* Calendar Section */}
        <aside className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sticky top-28 transform hover:scale-[1.005] transition-transform duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Event Calendar</h2>

            <div className="flex justify-between items-center mb-4">
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{monthName} {currentYear}</h3>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    p-2 rounded-lg aspect-square flex items-center justify-center
                    ${day
                      ? (featuredDays.includes(day)
                        ? (day === 17 // Highlight the main event day
                          ? 'bg-blue-600 text-white font-bold shadow-md transform hover:scale-110 transition-all duration-200 cursor-pointer'
                          : 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 font-medium hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200 cursor-pointer'
                        )
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer'
                      )
                      : 'bg-transparent' // Empty cells for padding
                    }
                  `}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    <span>Main Event Day</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-100 dark:bg-blue-800 rounded-full mr-2"></span>
                    <span>Other Events</span>
                </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer (Re-using the professional footer from previous request) */}
      <footer className="relative z-10 py-16 px-6 bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">About</h4>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Syntax Society Studio is a creative digital agency specializing in modern design and scalable development. We bring your visions to life.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Services Overview">Overview</Link></li>
              <li><Link href="/services/design" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Design Services">Design</Link></li>
              <li><Link href="/services/development" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Development Services">Development</Link></li>
              <li><Link href="/services/consulting" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Consulting Services">Consulting</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="About Us">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Our Portfolio">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Our Blog">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Contact Us">Contact</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@syntaxsociety.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Email us at hello@syntaxsociety.com">hello@syntaxsociety.com</a></li>
              <li><a href="https://twitter.com/syntaxsociety" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">Twitter</a></li>
              <li><a href="https://github.com/syntaxsociety" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="Check out our GitHub">GitHub</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord">Discord</a></li>
              <li><Link href="/newsletter" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Subscribe to our Newsletter">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Syntax Society Studio</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default EventDetailPage;