
import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";
import "../styles/experience.css";

function Experience() {
  return (
    <section
      className="experience animated-background"
      id="experience"
    >
      <h2>Professional Experience</h2>

      <div className="experience-timeline">

        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-entry" key={item.id}>

              <div className="timeline-marker">
                <span className="timeline-date">
                  {item.period}
                </span>
                <span className="timeline-dot"></span>
              </div>

              <div className="experience-card-wrapper">
                <ExperienceCard
                  role={item.role}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  technologies={item.technologies}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
