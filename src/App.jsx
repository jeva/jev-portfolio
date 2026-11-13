import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
 //const [category, setCategory] = useState("All");
  return (
    <>
      <Navbar />
      <Hero 
        firstName="Jevaraajkumar"
        lastName="Selvarajah"
        title="Software Engineer"
        description="I enjoy building modern web applications and learning new technologies"
      />
    <About />  
    <Experience />
    <Skills />
    <Projects />
     <Contact />
    </>
  );
}

export default App;