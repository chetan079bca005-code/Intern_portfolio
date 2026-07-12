export default function Projects() {
  const projects = [
    {
      title: "Social Media Handler",
      type: "Personal Project",
      duration: "2025 - Present",
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
      github: "https://github.com/chetan079bca005-code/Intern_portfolio",
      demo: "https://social-media-handler-demo.vercel.app",
      description: [
        "Designed and built the frontend for a multi-platform social media management platform covering content scheduling, an AI-assisted content composer, an analytics dashboard, and role-based workspaces.",
        "Implemented JWT-based authentication and core backend REST APIs with Express and MongoDB; PostgreSQL (Prisma) integrated for relational data.",
        "Used Tip Tap for rich-text content editing and Full Calendar for visual content scheduling.",
      ],
    },
    {
      title: "Inventory Management System",
      type: "Featured Project",
      duration: "2024",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js", "JWT"],
      github: "https://github.com/chetan079bca005-code/Intern_portfolio",
      demo: "https://inventory-system-demo.vercel.app",
      description: [
        "Built a full-featured Inventory Management System to automate product stock tracking, sales logging, and supplier record management.",
        "Designed interactive charts displaying monthly sales revenue, top-selling categories, and low-stock product alerts.",
        "Implemented secure JWT-based role authentication to divide administrative permissions from staff transaction logs.",
      ],
    },
    {
      title: "GreenCart - E-commerce Platform",
      type: "Self-Initiated",
      duration: "Apr 2024 - Present",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React Router", "Firebase"],
      github: "https://github.com/chetan079bca005-code/Intern_portfolio",
      demo: "https://greencart-demo.vercel.app",
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
      github: "https://github.com/chetan079bca005-code/Intern_portfolio",
      demo: "https://newsportal-demo.vercel.app",
      description: [
        "Built a complete multi-role news portal supporting separate admin, reporter, and reader workflows.",
        "Designed the MySQL database schema and implemented role-based access control for content publishing and moderation.",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Projects Showcase</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            A comprehensive list of application systems, platforms, and utilities I have designed and deployed.
          </p>
        </div>

        {/* Projects Responsive Grid (Stacks on mobile, 2 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                      {project.type}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-3">{project.title}</h2>
                  </div>
                  <span className="text-xs text-slate-500 font-medium sm:text-right">{project.duration}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-slate-950 border border-white/5 rounded text-xs text-slate-405 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3 list-disc pl-5 text-slate-400 text-sm mb-8">
                  {project.description.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-900 border border-white/10 rounded-lg text-sm text-slate-200 transition font-semibold"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm text-white font-semibold transition"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
