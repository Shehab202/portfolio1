import "./contact.css";
import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";

import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import gsap from "gsap";

import { useEffect } from "react";

const contact = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    text: "mailto:shehabqoteit@gmail.com",
    action: "Send Message",
  },

  {
    id: 2,
    icon: <IoLogoWhatsapp />,
    title: "whatsapp",
    text: "https://api.whatsapp.com/send/?phone=201145082201&text&type=phone_number&app_absent=0",
    action: "Send Message",
  },

  {
    id: 3,
    icon: <FaFacebookMessenger />,
    title: "messenger",
    text: "https://m.me/100004425994744?hash=Abb2toS5J7La_ntd&source=qr_link_share",
    action: "Send Message",
  },
];
function Contact() {
  const containerRef = useRef(null);
  const x = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    const ele = x.current;
    gsap.fromTo(
      ele,
      { opacity: 0, x: 100 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ele,
        },
      }
    );
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "serviceo",
      "template_nejs8mq",
      form.current,
      "p2N0SmiNhlQa3hnvi"
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="contant" id="contant">
        <div className="component">
          <h5>git in touch</h5>
          <h2> Contant Me</h2>
        </div>
        <div className="container">
          <div className="content">
            <div className="main" ref={containerRef}>
              {contact.map((e) => {
                return (
                  <div key={e.id}>
                    <div className="box">
                      <div className="text">
                        <h2>{e.icon}</h2>

                        <h4>{e.title}</h4>
                        <a href={e.text} target="_blank">
                          {e.action}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="form" ref={x}>
              <form onSubmit={sendEmail} ref={form}>
                <input type="text" placeholder="Name" name="z" required />
                <input type="email" placeholder="Email" name="x" required />
                <textarea name="c" placeholder="Message" required></textarea>
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
