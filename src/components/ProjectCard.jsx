import "../styles/projectCard.css";

function ProjectCard({ title, description, role, technologies }) {
  return (
    <div className="project-card">

      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <p className="project-role">
        <strong>Role:</strong> {role}
      </p>

      <div className="project-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;
