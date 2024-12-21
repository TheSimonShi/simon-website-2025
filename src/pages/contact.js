// Filename - "./pages/contact.js"
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        Reach out to me via Instagram or send an email at
        <a href="mailto:simonshi1997@gmail.com" className="email-link">
          simonshi1997@gmail.com
        </a>
      </p>

      {/* Section 1 - Business Inquiries */}
      <section className="contact-section">
        <h2>Business Inquiries</h2>
        <p>
          For sponsorships, partnerships, and collaborations, please reach out
          via email. I’m always excited to work with brands and companies that
          align with my values.
        </p>
      </section>

      {/* Section 2 - Coaching Opportunities */}
      <section className="contact-section">
        <h2>Coaching Opportunities</h2>
        <p>
          Interested in improving your swim, bike, or run? I offer coaching
          services for athletes at all levels.
          <a href="https://calendly.com/simonshi/intro-call-simon-coaching" target="_blank" rel="noopener noreferrer" className="email-link">
            Book a call with me here.
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
