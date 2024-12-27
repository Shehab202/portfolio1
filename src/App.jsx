import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.fog.min.js";

function App() {
  const MyComponent = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          TOPOLOGY({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x252561,
            midtoneColor: 0x5f6770,
            lowlightColor: 0x5050be,
            baseColor: 0x1f1f38,
            blurFactor: 0.62,
            speed: 1.95,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div
        ref={myRef}
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          zIndex: "-200",
        }}
      ></div>
    );
  };
  return (
    <div>
      <MyComponent />
      <Home />
      <About />
      <Navbar />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
