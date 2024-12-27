import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoWhatsapp />
            </a>
          </li>
        </ul>

        <p>Copyright © 2021 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
