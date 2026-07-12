import Image from "next/image";


export default function About() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Lumbini Digital",
      duration: "Jun 2026 - Present",
      description: [
        "Working as part of a remote frontend team at a Nepal-based digital agency, building and maintaining client-facing web interfaces and UI components.",
        "Collaborating with supervisors and team members in an agile, remote-first workflow as part of academic internship requirements (CAIN403, Tribhuvan University).",
      ],
    },
    {
      role: "Frontend Developer",
      company: "GreenCart - E-commerce Platform (Self-Initiated)",
      duration: "Apr 2024 - Present",
      description: [
        "Built a full-stack e-commerce storefront for Nepali local products using React, Node.js, Express, and MongoDB.",
        "Integrated local payment gateways (eSewa and Khalti) to support real-world checkout flows.",
        "Implemented dynamic user and seller dashboards with cart and address management using React Router and Tailwind CSS.",
        "Collaborated with a small student team on Firebase integration and overall system architecture.",
      ],
    },
    {
      role: "Tech Intern",
      company: "Research and Innovation Unit (RIU)",
      duration: "Jun 2022 - Aug 2022",
      description: [
        "Participated in robotic system prototyping for basic automation tasks.",
        "Assisted in system testing and quality assurance, supporting an industry-style development workflow.",
        "Gained early hands-on exposure to teamwork and structured problem-solving in a tech environment.",
      ],
    },
  ];

  const achievements = [
    "Best Academic Project — BCA 4th Semester (2023)",
    "Led the GreenCart project under a student startup initiative (2024)",
    "Delivered a guest session on “Building Modern UIs with React” at a college tech meetup (2025)",
    "Scored A+ in Software Engineering and Web Programming practical labs",
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-16 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">About Me</h1>
          <p className="mt-4 text-lg text-slate-400">
            A developer who loves crafting performant frontend user interfaces and solid backend APIs.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-full max-w-[320px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
              <Image
                src="/chetan.jpg"
                alt="Chetan Koirala"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-770px) 100vw, 320px"
              />
            </div>
            
            <div className="w-full max-w-[320px] mt-6 bg-slate-900/40 border border-white/5 rounded-2xl p-6 text-center lg:text-left">
              <h2 className="text-xl font-bold text-white">Chetan Koirala</h2>
              <p className="text-sm text-indigo-400 font-medium mt-1">Full Stack Intern @ Lumbini Digital</p>
              <div className="mt-4 border-t border-white/5 pt-4 space-y-2 text-xs text-slate-400">
                <p>📍 Kathmandu, Nepal</p>
                <p>🎓 BCA Student, Tribhuvan University</p>
              </div>
            </div>
          </div>

          {/* Biography & Details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Summary */}
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Professional Biography</h3>
              <p className="text-slate-350 leading-relaxed">
                I am a frontend-focused developer with hands-on experience building web applications across React, Node.js, and MongoDB. Currently interning at <strong className="text-indigo-400">Lumbini Digital</strong> while completing my Bachelor in Computer Application (BCA) at Tribhuvan University.
              </p>
              <p className="text-slate-350 leading-relaxed mt-4">
                I am comfortable owning features end-to-end—from designing interactive, high-fidelity UI components to integrating and writing robust REST APIs. Having successfully shipped self-initiated startups like GreenCart and full-scale college projects, I have experience working with databases, payment gateways, and agile workflows.
              </p>
            </div>

            {/* Education */}
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Bachelor in Computer Application (BCA)</h4>
                  <p className="text-sm text-indigo-400 font-medium">Tribhuvan University</p>
                  <p className="text-xs text-slate-500 mt-1">Advanced College of Engineering and Management, Kathmandu</p>
                  <p className="text-slate-400 text-sm mt-3">
                    Course work focused on software development, database management systems, and project management.
                  </p>
                </div>
                <span className="text-sm text-slate-500 font-medium sm:text-right">2022 – 2026 (Expected)</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-slate-400">
                    <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-indigo-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="border-t border-white/5 pt-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center lg:text-left">Work Experience</h2>
          
          <div className="relative border-l border-indigo-500/20 ml-4 lg:ml-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4.5 w-4.5 rounded-full bg-slate-950 border border-indigo-500 flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>
                
                <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-950 px-3 py-1 rounded-full border border-white/5">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 list-disc pl-5 text-sm text-slate-400">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
