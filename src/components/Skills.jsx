import { useState } from "react";
import SkillCard from "./SkillCard";
import SkillButton from "./SkillButton";
import "../styles/skills.css";
import skills from "../data/skills";
import "../styles/animatedBackground.css";


function Skills() {
  const [category, setCategory] = useState("All");

  const filteredSkills =
    category === "All"
      ? skills
      : skills.filter(
        (skill) => skill.category === category
      );

 const categories = [
  "All",
  ...new Set(skills.map((skill) => skill.category)),
];

  return (
    <section className="skills animated-background" id="skills">

      <h2>My Skills</h2>

      <div className="filter-buttons">
        {categories.map((item) => (
          <SkillButton
            key={item}
            category={item}
            currentCategory={category}
            setCategory={setCategory}
          />
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>

    </section>
  );
}

export default Skills;