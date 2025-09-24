// import styles
import "../styles/contact.scss";

//imoport image
import contactImg from "../assets/images/contact.png";

// import emailjs
import emailjs from "@emailjs/browser";

//import useRf
import {useRef} from "react";

//Contact page content
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp94xli",    // Service ID
        "template_wxf5e95",   // Template ID
        form.current,
        "QbBym5lKgY1crq9jL"   //Public key
      )

      .then(
        (result) => {
          alert ("Message sent successfully!");
          form.current.reset();
        },
        
        (error) => {
          alert ("Failed to send message. Try again!")
        }
        
      );
  };

  return(
    <div className="contact-page d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* left side */}
          <div className="col-md-6 text-center left-section">
            <h1 className="contact-title"> Contact</h1>
            <img
              src={contactImg}
              alt="Contact"
              className="contact-img"
            />
          </div>

          {/* right side */}
          <div className="col-md-6 right-section">
            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-3">
                <label className="form-label"> Name</label>
                <input type="text" name="user_name" className="form-control" required></input>
              </div>

              <div className="mb-3">
                <label className="form-label"> Email</label>
                <input type="email" name="user_email" className="form-control" required></input>
              </div>

              <div className="mb-3">
                <label className="form-label"> Message </label>
                <textarea name="message" className="form-control" rows="4" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}