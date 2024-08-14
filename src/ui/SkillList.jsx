import Skills from "./Skills";
import {skillsLearned} from "../data/skills";

export default function SkillList() {
  return (
    <ul className="skill-list">
      {skillsLearned.map((skil) => {
        const {skill, level, color} = skil;
        return <Skills skill={skill} level={level} color={color} key={skill} />;
      })}
    </ul>
  );
}
