import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
