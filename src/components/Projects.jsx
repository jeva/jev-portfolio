
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../styles/projects.css";


function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            role={project.role}
            technologies={project.technologies}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;