import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-gray-200">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
            <Contact />
    </main>
  );
}
