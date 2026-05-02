import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Experience, Skills, Education, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
