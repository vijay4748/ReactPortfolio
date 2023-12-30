import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contactme from "./components/Contactme/Contactme";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Home /> */}
      <AboutMe />
      <Skills />
      <Projects />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
