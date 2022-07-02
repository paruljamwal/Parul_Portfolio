import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import redux from '../../assets/icons/redux.svg'
import react from '../../assets/icons/reactjs.svg'
import javascript from '../../assets/icons/javascript.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import Aws from '../../assets/icons/amazon-web-services.svg'
import git from '../../assets/icons/github-icon.svg'
import Html from '../../assets/icons/html-5.svg'
import express from '../../assets/icons/expressjs-icon.svg'
import mongo from '../../assets/icons/mongodb.svg'
import mui from '../../assets/icons/material-ui.svg'
import figma from '../../assets/icons/figma-icon.svg'
import css from '../../assets/icons/css3.svg'
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <img src={redux} alt="" />
            <h4>REDUX</h4>
          </article>
         
          <article className="experience__details">
            <img src={react} alt="" />
            <h4>REACT</h4>
          </article>
          <article className="experience__details">
         <img src={javascript} alt="" />
            <h4>JAVASCRIPT</h4>
          </article>
         
          <article className="experience__details">
           <img src={mongo} alt="" />
            <h4>MONGO DB</h4>
          </article>
 
          <article className="experience__details">
           <img src={express} alt="" />
            <h4>EXPRESS</h4>
          </article>
           
          {/* <article className="experience__details">
        <img src={Aws} alt="" />
            <h4>AWS</h4>
          </article> */}

          <article className="experience__details">
        <img src={git} alt="" />
            <h4>GITHUB</h4>
          </article>

          <article className="experience__details">
            <img src={Html} alt="" />
            <h4>HTML</h4>
          </article>

          <article className="experience__details">
           <img src={nodejs} alt="" />
            <h4>NODE JS</h4>
          </article>
           
          {/* <article className="experience__details">
           <img src={figma} alt="" />
            <h4>FIGMA</h4>
          </article> */}

          <article className="experience__details">
           <img src={mui} alt="" />
            <h4>MATERIAL UI</h4>
          </article>

          <article className="experience__details">
           <img src={css} alt="" />
            <h4>CSS</h4>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
