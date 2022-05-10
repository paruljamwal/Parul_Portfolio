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
     <a href="https://www.facebook.com/profile.php?id=100025093908343"><BsFacebook></BsFacebook></a>
     <a href="https://www.instagram.com/parul_thakur_0000/"><FiInstagram></FiInstagram></a>
     <a href="https://twitter.com/1802_parul"><BsTwitter></BsTwitter></a>
   </div>

   <div className="footer__copyright">
     <small>Love react❤.</small>
   </div>
    </footer>
  )
}

export default Footer;
