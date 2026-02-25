export default function Projects() {
  const featured = [
    {
      title: "CropSense",
      type: "Research Project",
      status: "In Progress",
      description: "ML-powered system recommending optimal crops based on soil heavy metal analysis.",
      longDescription: "Research project using CNN, ANN, SVM, and ensemble methods to analyze soil composition (Cr, Cu, Pb, Zn) and predict suitable crops. Currently building dataset and comparing model performance.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Google Colab"],
      highlights: [
        "Multi-model comparison (7+ algorithms)",
        "Novel approach to crop recommendation",
        "Real-world agricultural application",
      ],
      accent: "sky",
    },
    {
      title: "ExpenseFlow",
      type: "Mobile App",
      description: "Personal finance management app with multi-tab navigation.",
      longDescription: "Built with Flutter following strict layout fundamentals. Features bottom navigation (Add Entry, Entries List, Dashboard), responsive forms with LayoutBuilder, and real-time balance calculation.",
      tech: ["Flutter", "Dart", "Firebase", "Provider"],
      highlights: [
        "Bottom navigation with 3 tabs",
        "Form validation & state management",
        "Dashboard with financial summaries",
      ],
      accent: "emerald",
    },
    {
      title: "DIP Toolkit",
      type: "Academic Implementation",
      description: "Educational implementation of core image processing algorithms.",
      longDescription: "Implemented grayscale conversion, edge detection (Sobel, Prewitt, Canny), noise filters, and image transformations. Focus on understanding mathematical foundations.",
      tech: ["MATLAB", "Python", "OpenCV"],
      highlights: [
        "8+ filter implementations",
        "Edge detection algorithms",
        "Noise reduction techniques",
      ],
      accent: "purple",
    },
  ];

  const other = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS to showcase my work and skills.",
      tech: ["Next.js", "Tailwind CSS"],
    },
  ];

  const tagClass = (accent: string) => {
    switch (accent) {
      case "emerald":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "purple":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default:
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Academic and personal projects spanning ML, mobile development, and image processing.
        </p>

        {/* Featured: CropSense, ExpenseFlow, DIP Toolkit */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featured.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-left hover:border-sky-500 hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-semibold text-white text-lg">{project.title}</h3>
                <div className="flex gap-2 flex-shrink-0">
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-700/80 text-gray-300 border border-slate-600">
                    {project.type}
                  </span>
                  {project.status && (
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">{project.longDescription}</p>
              <ul className="text-gray-400 text-xs space-y-1 mb-4 list-disc list-inside">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`inline-block text-xs px-2 py-1 rounded-full border ${tagClass(project.accent)}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {other.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-left hover:border-sky-500 hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30"
                  >
                    {t}
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
