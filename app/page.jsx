import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigator from "@/components/Navigator";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {

  return (
    <>
      <Navigator/> 
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}
