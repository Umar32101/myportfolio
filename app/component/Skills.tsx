const skills = {
  "Mobile Development": {
    items: ["Flutter", "Dart", "Android Studio", "Firebase"],
    level: "Learning",
  },
  "Web Development": {
    items: ["Next.js", "React", "HTML/CSS", "JavaScript", "Tailwind"],
    level: "Building",
  },
  "Machine Learning": {
    items: ["Python", "Scikit-learn", "TensorFlow", "Jupyter", "Pandas"],
    level: "Research",
  },
  "Core CS": {
    items: ["Data Structures", "Algorithms", "Graph Theory", "Security Concepts"],
    level: "Academic",
  },
} as const;

const levelStyles: Record<string, string> = {
  Learning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Building: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  Research: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Academic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-slate-950 text-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Organized by area — beginner is okay; what matters is building and learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { items, level }]) => (
            <div
              key={category}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-left hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <h3 className="font-semibold text-white text-lg">{category}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full border font-medium ${levelStyles[level] ?? "bg-slate-700 text-gray-300 border-slate-600"}`}
                >
                  {level}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm bg-slate-800/80 text-gray-300 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
