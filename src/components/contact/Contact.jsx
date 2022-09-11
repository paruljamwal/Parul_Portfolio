import "./contact.css";
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import {SiMessenger} from "react-icons/si"
import {SiWhatsapp} from "react-icons/si"
import {useRef} from "react";
import emailjs from 'emailjs-com'
export const Contact = () => {

  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5rpfxqr', 'template_c9rxkxs', form.current, 'iZ6GY3h9_-9E_N9EE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          e.target.reset()
      });
  };
  return (
    <section id="contact">
     <h4 className="end">Get In Touch</h4>
     <h3 className="end">Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, give me a call 🇮🇳  or send me an  email</h3>
     

     <h1 className="end">Don't be a stranger!!!</h1>
<div className="container contact__container">
 
  <div className="contact__options">


    <article className="contact__option" >
    <MdOutlineMarkEmailUnread className="contact__options-icon"></MdOutlineMarkEmailUnread>
     <h4>Email</h4>
     <a href="mailto:paruljamwal46@gmail.com" target="_blank">Send a message</a>
    </article>


    {/* <article className="contact__option" >
     <SiMessenger className="contact__options-icon"></SiMessenger>
     <h4>Messanger</h4>
     <a href="https://www.facebook.com/profile.php?id=100025093908343" target="_blank">Send a message</a>
    </article> */}


  
  </div>

  <form action="" ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="Your Full Name"  required/>
    <input type="email" name="email" placeholder="Your Email" required></input>
     <textarea name="message" rows="7" placeholder="Your message" required></textarea>
     <button type="submit" className="btn btn-primary">Send Message</button>
   </form>
  
</div>
    </section>
  );
};
