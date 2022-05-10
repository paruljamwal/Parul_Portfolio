import "./about.css";
import ME from '../../assets/p9.png';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
export const About = () => {
  return (
   <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
         </div>
         <div className="about__content">
         {/* <div className="about__cards">
           <article className="about__card">
              <FaAward className="about__icon"></FaAward>
             <h5 className="purple">Experience</h5>
             <small className="purple"></small>
           </article>

           <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
             <h5 className="purple"></h5>
             <small className="purple"></small>
           </article>

           <article className="about__card">
              <AiFillFolderOpen className="about__icon"></AiFillFolderOpen>
             <h5 className="purple">Hobbies</h5>
             <small className="purple"></small>
           </article>
         </div> */}
              <p>Hello 👋 I am a Full Stack Developer, passionate about working  on exciting projects
                 that test what I've learnt, whilst being exposed to the power and potential 
                of the ever-evolving technologies around us. I'm always looking for better, and more importantly, 
                accessible ways to solve the common problems we are faced with day-to-day.</p>
               <a href="#contact" className="btn btn-primary">Let's Talk</a>

         </div>
      </div>
   </section>
  )
};
