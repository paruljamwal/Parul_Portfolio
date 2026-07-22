import "./skills.css";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/reactjs.svg";
import redux from "../../assets/icons/redux.svg";
import Html from "../../assets/icons/html-5.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/github-icon.svg";

const skills = [
  { name: "JAVASCRIPT", icon: javascript },
  { name: "TYPESCRIPT", icon: null },
  { name: "REACT", icon: react },
  { name: "NEXT.JS", icon: null },
  { name: "REDUX", icon: redux },
  { name: "REACT QUERY", icon: null },
  { name: "TAILWIND", icon: null },
  { name: "HTML", icon: Html },
  { name: "CSS / SCSS", icon: css },
  { name: "REST / AXIOS", icon: null },
  { name: "GIT", icon: git },
];

function Skills() {
  return (
    <section id="skills">
      <h5>What I Work With</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__content">
          {skills.map(({ name, icon }) => (
            <article key={name} className="skills__details">
              {icon ? (
                <img src={icon} alt="" />
              ) : (
                <span aria-hidden="true">◆</span>
              )}
              <h4>{name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
