import "../styles/experienceCard.css";

function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
}) {
  return (
    <div className="experience-card">

      <div className="experience-header">
        <div>
          <h3>{role}</h3>
          <h4>{company}</h4>
        </div>

        <span className="experience-period">
          {period}
        </span>
      </div>

      <p className="experience-description">
        {description}
      </p>

      <div className="experience-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default ExperienceCard;
