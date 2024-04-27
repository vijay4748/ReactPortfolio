import React from "react";
import "./App.css";

import AboutMe from "./components/AboutMe/AboutMe";
import Contactme from "./components/Contactme/Contactme";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
