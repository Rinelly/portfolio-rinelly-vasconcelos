import "./Skills.scss";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills__grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div className="skill__card" key={index}>
              <Icon size={32} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
