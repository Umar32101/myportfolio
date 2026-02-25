export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-sky-400 text-lg">Umar</h1>
        <div className="space-x-4 text-sm">
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#join" className="hover:text-sky-400 transition-colors">Join</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>
      </nav>
    );
  }
  