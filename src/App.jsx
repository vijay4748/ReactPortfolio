import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
// import Footer from "./Resuable/Footer/footer";
// import AboutMe from "./components/AboutMe/aboutMe";
// import Contact from "./components/Contact/contact";
// import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/projects";
// import Skill from "./components/Skills/skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
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
