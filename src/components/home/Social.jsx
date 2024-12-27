import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
function Social() {
  return (
    <div className="icon">
      <a
        href="https://www.linkedin.com/in/shehab-hussein-270a141b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Shehab202" target="_blank">
        {" "}
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=201145082201&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        {" "}
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Social;
