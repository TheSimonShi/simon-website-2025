import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const thisYear = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Website Navigation Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/socials">Socials</a>
          <a href="/coaching">Coaching</a>
          <a href="/contact">Contact</a>
          <a href="/runCalculator">Run Calculator</a>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Social Media Links */}
        <div className="footer-socials">
          <a
            href="https://www.youtube.com/@SimonShi/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/the_simonshi"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.strava.com/pros/44490302"
            target="_blank"
            rel="noopener noreferrer"
            className="strava"
          >
            Strava
          </a>
          <a
            href="https://www.tiktok.com/@thesimonshi"
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/simon-shi/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="footer-copy">
        &copy; {thisYear} Simon Shi. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
