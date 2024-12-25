import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillList = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


function Avatar () {
    return <img className="avatar" src="12.jpeg" alt="Param" />
}


function Intro () {
    return <div className="data">
        <h1>Paramjeet Singh</h1>
        <p>I'm python developer working on the python project and currently learning the front end code</p>
    </div>
}



function Skill(props) {
    return <div className="skill" style={{backgroundColor: props.color}}>
        <span>{props.skillName}</span>
        <span>{props.level === "beginner" ? "👶" : props.level === "advanced" ? "💪" : props.level === "intermediate" ? "👍" : ""}</span>
    </div>
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <li className="skill-list">
          {skillList.map((skill) => (<Skill skillName={skill.skill}
          level={skill.level} color={skill.color}
          />))}
        </li>
        
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
