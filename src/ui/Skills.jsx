export default function Skills({skill, level, color}) {
  return (
    <li className="skill" style={{background: color}}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </li>
  );
}
