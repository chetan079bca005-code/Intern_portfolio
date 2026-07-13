"use client";

import Link from "next/link";

export default function Home() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    frontend: ["React", "React Router", "Zustand", "Tailwind CSS", "Vite", "Framer Motion"],
    backend: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Authentication"],
    databases: ["MongoDB (Mongoose)", "MySQL", "PostgreSQL"],
    tools: ["Git", "Postman", "Firebase", "Responsive Design", "UI/UX", "Payment Gateway Integration"],
  };

  const projects = [
    {
      title: "Social Media Handler - Multi-Platform Content Management Tool",
      type: "Personal Project",
      duration: "2025 - Present",
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
      description: [
        "Designed and built the frontend for a multi-platform social media management platform covering content scheduling, an AI-assisted content composer, an analytics dashboard, a media/design library, and role-based team workspaces.",
        "Implemented JWT-based authentication and core backend REST APIs with Express and MongoDB; PostgreSQL (Prisma) integrated for relational data.",
        "Used Tip Tap for rich-text content editing and Full Calendar for visual content scheduling.",
      ],
    },
    {
      title: "GreenCart - E-commerce Platform",
      type: "Self-Initiated",
      duration: "Apr 2024 - Present",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "React Router", "Firebase"],
      description: [
        "Built a full-stack e-commerce storefront for Nepali local products.",
        "Integrated local payment gateways (eSewa and Khalti) to support real-world checkout flows.",
        "Implemented dynamic user and seller dashboards with cart and address management.",
      ],
    },
    {
      title: "Online News Portal System",
      type: "College Project",
      duration: "Oct 2023 - Dec 2023",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description: [
        "Built a complete multi-role news portal supporting separate admin, reporter and reader workflows.",
        "Designed the MySQL database schema and implemented role-based access control for content publishing and moderation.",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-white/5">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for Frontend & Full-Stack Roles
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Chetan Koirala</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium">
            Frontend-focused Full Stack Developer
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            I&apos;m a developer specializing in React, Node.js, and MongoDB. Currently interning at <strong className="text-indigo-400">Lumbini Digital</strong> while completing my BCA at Tribhuvan University. I own features end-to-end—from sleek UI components to robust backend API integrations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition duration-300 text-center"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition duration-300 text-center"
            >
              Read Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Expertise</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            A comprehensive set of tools, libraries, and frameworks I use to build robust web products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition duration-300">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-white/5 rounded-md text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition duration-300">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-white/5 rounded-md text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition duration-300">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-white/5 rounded-md text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-white/5 rounded-md text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          {/* Tools & Practices */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition duration-300 md:col-span-2">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">Tools & Practices</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-white/5 rounded-md text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 border-t border-white/5 bg-slate-900/20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              A selection of application workflows, databases, and products I have successfully designed and built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-1 rounded-full">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                    <span className="text-sm text-slate-500">{project.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-slate-950 border border-white/5 rounded text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 text-slate-300 list-disc pl-5">
                    {project.description.map((bullet, idx) => (
                      <li key={idx} className="text-slate-400 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 border-t border-white/5 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              Have a role or project you&apos;d like to discuss? Drop me a message or connect through my contacts below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-indigo-400">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                      <a href="mailto:koiralachetan16@gmail.com" className="text-slate-300 hover:text-white transition">koiralachetan16@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-indigo-400">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.528-.733.417-1.173L6.763 3.55a1.125 1.125 0 00-1.091-.852H4.37C3.062 2.7 2 3.762 2 5.07c0 1.144.184 2.244.522 3.284a15.03 15.03 0 005.316 7.632" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                      <a href="tel:+9779849756660" className="text-slate-300 hover:text-white transition">+977-9849756660</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-indigo-400">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-slate-300">Kathmandu, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-indigo-400">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Website</p>
                      <a href="https://chetankoirala.com.np" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 transition">chetankoirala.com.np</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Contact Form */}
            <div className="lg:col-span-7 bg-slate-900/30 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition" placeholder="name@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition" placeholder="Write your message here..." />
                </div>
                <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
