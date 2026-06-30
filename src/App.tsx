import Background from "./components/layout/Background/Background";
import Navbar from "./components/layout/Navbar/Navbar";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Contact from "./components/sections/Contact/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      
      <Background />
      
      <Navbar />

      {/* IMPORTANTE: padding por causa da navbar fixed */}
      <div className="pt-20">
        
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>  
      
        
        <section id="contact" className="py-24">
          <Contact />
        </section>

      </div>
    </main>
  );
}