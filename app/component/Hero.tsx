import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-gray-200 px-6 pt-20">
  <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
    {/* Image - reverted to simpler circular view */}
    <div className="w-64 h-64 relative">
      <Image
        src="/portfolio.jpg"
        alt="Umar Mustafa"
        fill
        className="rounded-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="text-center md:text-left">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-400 mb-3">
        Full Stack Developer | Mobile App Developer | ML Enthusiast
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-sky-400">Umar Mustafa</span> 👋
      </h1>
      <p className="text-lg text-gray-400 max-w-xl mb-4">
        Full Stack Developer focused on building clean, modern, and responsive web
        experiences.
      </p>
      <p className="text-gray-400 max-w-xl mb-8">
        Computer Science student (2022–2026) building real-world solutions with
        Flutter, Next.js, and Machine Learning.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#projects"
          className="bg-sky-500 text-slate-950 font-semibold px-8 py-3 rounded-lg hover:bg-sky-400 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-sky-500 text-sky-400 font-semibold px-8 py-3 rounded-lg hover:bg-sky-500/10 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
