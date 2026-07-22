import "./about.css";
import ME from "../../assets/p9.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Tenants</h5>
              <small>100+ Enterprise</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Scale</h5>
              <small>52K+ Orders/Day</small>
            </article>
          </div>
          <p>
            Frontend Software Development Engineer with 3+ years building
            scalable SaaS UIs for enterprise logistics (WMS, OMS, TMS) at
            Omniful in Gurugram. I work with React.js, Next.js, TypeScript, and
            Redux to ship real-time, RBAC-aware product surfaces — including
            ~40% faster page loads through caching, code splitting, and
            memoized rendering.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
