import "../styles/Skills.css";
import { skills } from "../util/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="btn-text">Skills</h3>
      <div className="skill-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
