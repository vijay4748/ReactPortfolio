import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contactme from "./components/Contactme/Contactme";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Footer from "./Resuable/Footer/footer";
// import AboutMe from "./components/AboutMe/aboutMe";
// import Contact from "./components/Contact/contact";
// import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/projects";
// import Skill from "./components/Skills/skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contactme />
      <Footer />
      {/* <Home />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
