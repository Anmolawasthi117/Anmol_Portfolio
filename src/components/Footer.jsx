import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/147149400?v=4"}
          alt="Founder"
        />

        <h2>Anmol Awasthi</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://www.instagram.com/anmol._7._/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/anmol-awasthi-167a35294/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Anmolawasthi117" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;