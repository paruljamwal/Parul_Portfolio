import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
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
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
