export default function Skills() {
  const skills = [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "HTML5", category: "Languages" },
    { name: "CSS3", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "React Router", category: "Frontend" },
    { name: "Zustand", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Vite", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "JWT Authentication", category: "Backend" },
    { name: "MongoDB (Mongoose)", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "Git", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Firebase", category: "Tools" },
    { name: "Responsive Design", category: "Tools" },
    { name: "UI/UX", category: "Tools" },
    { name: "Payment Gateway Integration (eSewa/Khalti)", category: "Tools" },
  ];

  // Helper function to color code categories dynamically
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Languages":
        return "border-emerald-500/20 text-emerald-400 bg-emerald-500/10";
      case "Frontend":
        return "border-sky-500/20 text-sky-400 bg-sky-500/10";
      case "Backend":
        return "border-amber-500/20 text-amber-400 bg-amber-500/10";
      case "Databases":
        return "border-purple-500/20 text-purple-400 bg-purple-500/10";
      default:
        return "border-indigo-500/20 text-indigo-400 bg-indigo-500/10";
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Skills Matrix</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            A comprehensive, dynamically mapped directory of programming languages, tools, and technical concepts I utilize.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name + index}
              className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:scale-102 flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(skill.category)}`}>
                  {skill.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-4">{skill.name}</h3>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 text-xs text-slate-500 flex items-center justify-between">
                <span>Verified Skill</span>
                <svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
