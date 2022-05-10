import "./header.css";
import React from "react";
import { CTA } from "./CTA";
import ME from '../../assets/p11.png'
import { HeaderSocial } from "./HeaderSocial";
import "./typer.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
function Header() {

  return (
    <header>
      <div className="container header__container ">
      <h4>Hello 👋🏻 I'm</h4>
        <h1>Parul Jamwal</h1>
        <h3>Fullstack Web Developer</h3>
        <CTA></CTA>
      <HeaderSocial></HeaderSocial>
        <div className="me">
          <img src={ME} alt="mine" />
        </div>
        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  );
}

export default Header;
