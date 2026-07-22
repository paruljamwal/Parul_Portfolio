import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo" aria-label="Home">
        Parul
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials"></div>
      <div className="footer__copyright">
        <small>♥ Parul Jamwal</small>
      </div>
    </footer>
  );
}

export default Footer;
