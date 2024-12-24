// Filename - "./pages/socials.js"
import React, { useEffect } from "react";
import "./socials.css";

const Socials = () => {

    useEffect(() => {
      document.title = "Socials - Simon Shi";
    }, []);

  return (
    <div className="socials-container">
      <h1>Follow Me</h1>
      <p>Check out my social media platforms:</p>
      <div className="social-links">
        <a href="https://www.youtube.com/@simonshi" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          Triathlon YouTube
        </a>
        <a href="https://www.instagram.com/the_simonshi/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@thesimonshi" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
          TikTok
        </a>
        <a href="https://twitter.com/TheSimonShi" target="_blank" rel="noopener noreferrer" className="social-link twitter">
          Twitter
        </a>
        <a href="https://www.strava.com/athletes/thesimonshi" target="_blank" rel="noopener noreferrer" className="social-link strava">
          Strava
        </a>
        <a href="https://www.linkedin.com/in/simon-shi/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          LinkedIn
        </a>
        <a href="https://www.facebook.com/thesimonshi2" target="_blank" rel="noopener noreferrer" className="social-link facebook">
          Facebook
        </a>
        <a href="https://www.youtube.com/@thesimonshi" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          Rubik's Cube YouTube
        </a>
      </div>
    </div>
  );
};

export default Socials;
