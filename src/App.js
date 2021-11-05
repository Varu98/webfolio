import "./App.css";
import Navbar from "./Components/Navbar";
// import Bio from "./Components/Bio";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Blogs from "./Components/Blogs";

function App() {
  return (
    <div className="App">
      {/* <p>Hi</p>
      <p>Navbar</p>
      <p>bio</p>
      <p>skills</p>
      <p>projects</p>
      <p>blogs</p> */}

      <Navbar to="./Components/Navbar.jsx">Vardaan Agarwal</Navbar>
      {/* <Bio to="./Components/Bio.jsx">Bio</Bio>
      <Skills to="./Components/Skills.jsx">Skills</Skills>
      <Projects to="./Components/Projects.jsx">Projects</Projects>
      <Blogs to="./Components/Blogs.jsx">Blogs</Blogs> */}
    </div>
  );
}

export default App;
