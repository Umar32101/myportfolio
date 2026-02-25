export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-gray-200">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>

        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I'm a Computer Science student (2022–2026) passionate about building
            things that matter. My journey started with class projects, but now
            I'm diving deep into real-world development.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Current focus:</strong> Building my
            first production-ready Next.js portfolio while exploring Flutter for
            mobile apps. I believe in learning by building — even if it's messy
            at first.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">What drives me:</strong> The
            intersection of web, mobile, and ML. My research on crop
            recommendation using ML shows how I think about applying tech to
            real problems.
          </p>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl mt-8">
            <h3 className="font-bold mb-3 text-sky-400">Currently</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Building CropSense ML research project</li>
              <li>Learning Next.js through this portfolio</li>
              <li>Open to freelance opportunities</li>
              <li>Looking to contribute to open source</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
