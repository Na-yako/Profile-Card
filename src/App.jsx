import Avatar from "./ui/Avatar";
import Header from "./ui/Header";
import SkillList from "./ui/SkillList";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Header />
        <SkillList />
      </div>
    </div>
  );
}
