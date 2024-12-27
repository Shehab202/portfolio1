import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import gsap from "gsap";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "./services.css";
function Services() {
  const one = useRef(null);
  const tow = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    const elw = one.current;
    gsap.fromTo(
      elw,
      { opacity: 0, x: -100 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: elw,
        },
      }
    );
    const ela = tow.current;
    gsap.fromTo(
      ela,
      { opacity: 0, y: 100 },
      {
        y: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ela,
        },
      }
    );
    const elc = three.current;
    gsap.fromTo(
      elc,
      { opacity: 0, x: 1000 },
      {
        x: 0,

        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: elc,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="services" id="services">
        <div className="component">
          <h5>What services I Have</h5>
          <h2>My services</h2>
        </div>

        <div className="container">
          <div className="box">
            <div className="card" ref={one}>
              <h1>
                <MdDesignServices />
              </h1>
              <div className="text">
                <h4>Web Design</h4>
                <p>
                  Help you build a strong online presence by designing
                  customized websites that meet your needs and exceed your
                  expectations
                </p>
              </div>
            </div>

            <div className="card" ref={tow}>
              <h1>
                <IoIosRocket />
              </h1>
              <div className="text">
                <h4>Fast Performance</h4>
                <p>
                  I provide fast performance to ensure the best possible
                  experience
                </p>
              </div>
            </div>

            <div className="card" ref={three}>
              <h1>
                <FaCode />
              </h1>
              <div className="text">
                <h4>Clean Code</h4>
                <p>
                  I provide you with clean and clear code to ensure easy
                  maintenance and long-term development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
