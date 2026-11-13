import "../styles/hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero(props) {



  return (
    <section className="hero" id="home">
      <div className="hero-text">

        <p className="greeting">Hello, I'm</p>

        <div className="hero-name">
          <h1>&lt; {props.firstName}</h1>
          <h1>{props.lastName} /&gt; </h1>
        </div>

        <h2>{props.title}</h2>

        <p className="description">
          {props.description}
        </p>

        <div className="hero-buttons">
          <button onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth"
            });
          }}>
            View Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>

        <div className="hero-socials">

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:YOUR-EMAIL@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/Vijay.PNG"
          alt="Profile"
        />

      </div>
    </section>
  );
}

export default Hero;