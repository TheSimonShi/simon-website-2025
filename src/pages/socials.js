// Filename - "./pages/socials.js"
import React from "react";

const Socials = () => {
  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1>Follow Me</h1>
      <p>Check out my social media platforms:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="https://www.youtube.com/@thesimonshi" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        <li><a href="https://www.instagram.com/thesimonshi/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.tiktok.com/@thesimonshi" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        <li><a href="https://twitter.com/TheSimonShi" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </div>
  );
};

export default Socials;
