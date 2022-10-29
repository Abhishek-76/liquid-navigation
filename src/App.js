import "./styles.css";
import Project from "./Project";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div id="about" className="page">
        <About />
      </div>
      <div id="project" className="page">
        <Project />
      </div>
      <div id="contact" className="page">
        <Contact />
      </div>
    </div>
  );
}
