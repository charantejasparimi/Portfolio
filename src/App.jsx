import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Experience, Skills, Background, Contact } from "./components/Sections";
import useReveal from "./hooks/useReveal";

const App = () => {
  useReveal();
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Background />
        <Contact />
      </main>
    </>
  );
};

export default App;
