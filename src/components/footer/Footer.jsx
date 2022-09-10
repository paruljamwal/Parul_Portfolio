import "./footer.css";
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter}from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
   <ul>
     <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#experience">Exprience</a></li>
     <li><a href="#portfolio">Portfolio</a></li>
     <li><a href="#contact">Contact</a></li>

   </ul>
   <div className="footer__socials">
   
   </div>

   <div className="footer__copyright">
     <small>♥ Parul Jamwal</small>
   </div>
    </footer>
  )
}

export default Footer;
