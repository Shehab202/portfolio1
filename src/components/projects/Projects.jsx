import "./projects.css";
import project1 from "../../assets/portfolio1.jpg.png";
import project2 from "../../assets/portfolio2.jpg";
import project3 from "../../assets/portfolio3.jpg";
import project4 from "../../assets/portfolio4.jpg";
import project5 from "../../assets/portfolio5.png";
import project6 from "../../assets/portfolio6.jpg";
import gsap from "gsap";

import { useEffect, useRef } from "react";

const allProject = [
  {
    id: 1,
    img: project1,
    title: "Project 1",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },

  {
    id: 2,
    img: project2,
    title: "Project 2",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },
  {
    id: 3,
    img: project3,
    title: "Project 3",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },
  {
    id: 4,
    img: project4,
    title: "Project 4",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },
  {
    id: 5,
    img: project5,
    title: "Project 5",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },
  {
    id: 6,
    img: project6,
    title: "Project 6",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
  },
];
function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        y: 0,
        duration: 3,
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
      <div className="project" id="project">
        <div className="component">
          <h5>What Project I Have</h5>
          <h2>SomeProject</h2>
        </div>
        <div className="container">
          <div className="box" ref={containerRef}>
            {allProject.map((e) => (
              <div key={e.id} className="card">
                <div className="imag">
                  <img src={e.img} alt="" />
                </div>
                <div className="text">
                  <h4>{e.title}</h4>
                  <p>technology</p>
                </div>
                <div className="buttons">
                  <a className="btn" href={e.github} target="_blank">
                    Github
                  </a>

                  <a className="btn btn-primary" href={e.demo} target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
