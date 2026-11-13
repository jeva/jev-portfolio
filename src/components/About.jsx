import "../styles/about.css";
import "../styles/animatedBackground.css";

function About() {
  return (
    <section className="about animated-background" id="about">
      <h2>About Me</h2>

      <div className="about-content">

        <div className="about-text">
          <h3>Software Engineer</h3>

          <p>
            I'm a software engineer passionate about building
            practical applications that solve real-world
            business problems.
          </p>

          <p>
            My development experience includes working with
            .NET applications, Java technologies and Microsoft
            Power Platform solutions. I enjoy exploring new
            technologies and continuously improving my skills.
          </p>

          <p>
            Currently, I'm expanding my frontend development
            knowledge with React and modern JavaScript.
          </p>
        </div>

        <div className="about-highlights">

          <div className="about-item">
            <h3>Backend Development</h3>
            <p>.NET, C#, Java, Spring Boot</p>
          </div>

          <div className="about-item">
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="about-item">
            <h3>Business Automation</h3>
            <p>Power Apps, Power Automate</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
