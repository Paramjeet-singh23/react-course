import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";



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
        <span>{props.emoji}</span>
    </div>
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
            <Skill skillName= "Python" emoji=":)" color="yellow" />
            <Skill skillName= "Java" emoji=":)" color="red"/>
            <Skill skillName= "Pandas" emoji=":)" color="blue"/>
            <Skill skillName= "FastAPI" emoji=":)" color="grey"/>
        </div>
        
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
