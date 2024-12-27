import "./skills.css";
import htmlIcon from "../../assets/html-1.svg";
import cssIcon from "../../assets/css-3 (1).svg";
import javascriptIcon from "../../assets/javascript-1.svg";
import bootstrapIcon from "../../assets/bootstrap-5-1.svg";
import tailwindIcon from "../../assets/tailwind-css-2.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon-1.svg";
import reactIcon from "../../assets/react-2.svg";
import reduxIcon from "../../assets/redux.svg";
import typescriptIcon from "../../assets/typescript-2.svg";
import gsap from "gsap";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const skills = [
  {
    id: 1,
    icon: htmlIcon,
    title: "HTML",
    description: "I'm proficient in HTML5 and CSS3.",
    ref: "containerRef",
  },
  {
    id: 2,
    icon: cssIcon,
    title: "CSS",
    description: "I'm proficient in CSS3 and Bootstrap 5.",
  },
  {
    id: 3,
    icon: javascriptIcon,
    title: "JavaScript",
    description: "I'm proficient in JavaScript, React, and Redux.",
  },

  {
    id: 9,
    icon: typescriptIcon,
    title: "TypeScript",
    description: "I'm proficient in TypeScript.",
  },
  {
    id: 10,
    icon: bootstrapIcon,
    title: "Bootstrap",
    description: "I've worked with Bootstrap 5 for a few projects.",
  },
  {
    id: 4,
    icon: tailwindIcon,
    title: "Tailwind CSS",
    description: "I've used Tailwind CSS for a few projects.",
  },
  {
    id: 5,
    icon: gitIcon,
    title: "Git",
    description: "I'm proficient in Git and GitHub.",
  },
  {
    id: 6,
    icon: githubIcon,
    title: "Github",
    description: "I'm proficient in GitHub.",
  },

  {
    id: 7,
    icon: reactIcon,
    title: "React",
    description: "I'm proficient in React and Redux.",
  },
  {
    id: 8,
    icon: reduxIcon,
    title: "Redux",
    description: "I've worked with Redux for a few projects.",
  },
];

function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        y: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="skills" id="skills">
        <div className="component">
          <h5>What Skills I Have</h5>
          <h2>My Skills</h2>
        </div>
        <div className="container">
          <div className="box" ref={containerRef}>
            {skills.map((skill) => (
              <div key={skill.id} className="skill">
                <div className="imag">
                  <img src={skill.icon} alt={skill.title} />
                </div>
                <div className="text">
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
