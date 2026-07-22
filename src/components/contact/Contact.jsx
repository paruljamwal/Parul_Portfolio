import "./contact.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5rpfxqr",
        "template_c9rxkxs",
        form.current,
        "iZ6GY3h9_-9E_N9EE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <section id="contact">
      <h4 className="end">Get In Touch</h4>
      <h3 className="end">
        Thanks for stopping by. I’m a Frontend Software Development Engineer
        open to joining a product team where I can keep shipping high-impact
        SaaS UIs. If that sounds like a fit, reach out —
      </h3>
      <h1 className="end">Don't be a stranger!!!</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className="contact__options-icon" />
            <h4>Email</h4>
            <a
              href="mailto:parul.jamwal19@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
