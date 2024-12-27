import { IoHome } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

import "./navbar.css";
function Navbar() {
  const [active, setCtive] = useState("#");
  return (
    <div>
      <nav>
        <ul>
          <li
            className={active === "#" && "active"}
            onClick={() => setCtive("#")}
          >
            <a href="#home">
              {" "}
              <IoHome />
            </a>
          </li>
          <li
            className={active === "#project" && "active"}
            onClick={() => setCtive("#project")}
          >
            <a href="#project">
              <LuUserCheck />
            </a>
          </li>
          <li
            className={active === "#services" && "active"}
            onClick={() => setCtive("#services")}
          >
            <a href="#services">
              <BiBook />
            </a>
          </li>
          <li
            className={active === "#skills" && "active"}
            onClick={() => setCtive("#skills")}
          >
            <a href="#skills">
              <RiServiceLine />
            </a>
          </li>
          <li
            className={active === "#contant" && "active"}
            onClick={() => setCtive("#contant")}
          >
            <a href="#contant">
              <BiMessageSquareDetail />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
