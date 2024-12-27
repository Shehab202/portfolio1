import "./about.css";

import pg2 from "../../assets/ea2ba424-08d3-4afd-80cf-495629201acc.jpeg";

import gsap from "gsap";

import { useEffect, useRef } from "react";

function About() {
  const containerRef = useRef(null);
  const x = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    const ele = x.current;
    gsap.fromTo(
      ele,
      { opacity: 0, x: -50 },
      {
        x: 0,
        duration: 3,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ele,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="about" id="about">
        <div className="component">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className="container">
          <div className="content">
            <div className="imge" ref={x}>
              <img src={pg2} alt="" />
            </div>

            <div className="box">
              <div className="cards"></div>
              <div className="text" ref={containerRef}>
                <h2>Shehab Hussein</h2>
                <p>
                  I`m a <span>Frontend developer</span> based in{" "}
                  <span>Egypt</span> with a relentless drive for excellence,
                  skilled in creating and maintaining functional and responsive
                  web applications and websites. Proficient in the latest web{" "}
                  <span>technologies</span> and frameworks, continuously
                  expanding my skill set to stay at the forefront of the
                  industry.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://api.whatsapp.com/send/?phone=201145082201&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  lets talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
