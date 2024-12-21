// Filename - "./pages/coaching.js"
import React from "react";
import "./coaching.css";
import Tri1 from "../Tri1.jpg";
import Tri2 from "../Tri2.jpg";
import Tri3 from "../Tri3.JPG";

const Coaching = () => {
  return (
    <div className="coaching-container">
      <h1>Triathlon Coaching</h1>

      {/* Coaching Overview */}
      <section className="coaching-section">
        <h2>Work With Us!</h2>
        <p>
          Ready to take your training to the next level? Whether you are just getting started or looking to
          achieve personal bests, our personalized coaching can help you reach your goals.
        </p>
        <a href="https://calendly.com/simonshi/intro-call-simon-coaching" target="_blank" rel="noopener noreferrer" className="cta-button">
          Schedule a Free Consultation
        </a>
      </section>

      {/* Coaching Plans */}
      <section className="coaching-section">
        <h2>Coaching Plans</h2>
        <p>
          Each plan includes custom workouts, one-on-one feedback, and guidance tailored to your goals. We’ll help you structure your training so you can feel confident and prepared on race day.
        </p>
        <ul className="coaching-plan-list">
          <li>Weekly training plan - Personalized training plan posted on Training Peaks</li>
          <li>1:1 Consultation - Direct line to Simon, email & some text support</li>
          <li>Constant feedback - 2-way communication for feedback on your workouts</li>
          <li>Swim Technique videos - Bi-Weekly swim videos where Simon discusses various drills and swim-related techniques you can implement in your training</li>
          <li>Nutrition Guidance - General nutrition guidance as well as a detailed race-day fuel plan</li>
          <li>Form Assessments - Send videos of swim, bike, and run videos for review</li>
        </ul>
      </section>

      {/* Coach Simon Section */}
      <section className="coaching-section">
        <h2>Coach Simon Shi</h2>
        <p>
          As a former NCAA Division 1 swimmer and professional triathlete, I bring years of competitive experience to my coaching. I have been swimming competitively for 15 years, starting at age 7, and have competed at the highest collegiate level at Virginia Tech.
        </p>
        <p>
          Since transitioning to triathlon in 2020, I turned professional within my first year, combining my swimming foundation with extensive training in cycling and running. I’ve raced multiple Ironman events, achieving impressive results, and have learned firsthand the discipline and strategies required for success.
        </p>
        <p>
          My coaching philosophy emphasizes consistency, smart training, and balancing performance with recovery. Whether you’re aiming for your first sprint triathlon or competing in Ironman races, I can help you develop the skills and mindset to succeed.
        </p>
      </section>

      {/* Rachel's Bio Section */}
      <section className="coaching-section">
        <h2>Coach Rachel Krill</h2>
        <p>
          Coaching with Rachel is an incredible opportunity to learn from a seasoned athlete with a lifetime of running experience. As a former Division I sprinter and hurdler, and now in her third year of triathlon, Rachel knows what it takes to excel in high-level competition.
        </p>
        <p>
          Her coaching approach blends track expertise with a passion for triathlon, helping you achieve your personal best.
        </p>
        <p>
          Join Rachel’s coaching program today, and gain the guidance of a coach who’s dedicated to helping you reach your goals while continuing her own athletic journey.
        </p>
        <p className="email-inquire">
          Email <a href="mailto:rachykr@gmail.com">rachykr@gmail.com</a> to inquire.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="coaching-section">
        <h2>Pricing</h2>
        <p>Choose the program that fits your goals:</p>
        <ul className="pricing-list">
          <li>Triathlon Coaching (3 sports): $200/month</li>
          <li>Single-Sport Coaching (1 sport, e.g., swimming): $100/month</li>
        </ul>
        <a href="https://calendly.com/simonshi/intro-call-simon-coaching" target="_blank" rel="noopener noreferrer" className="cta-button">
          Book a Call
        </a>
      </section>

      {/* Image Gallery */}
      <section className="gallery-section">
        <h2>RS Racing</h2>
        <p>Follow our journey on Instagram: <a href="https://www.instagram.com/rachelsimonracing/" target="_blank" rel="noopener noreferrer" className="instagram-link">@rachelsimonracing</a></p>
        <div className="gallery">
          <img src={Tri1} alt="Triathlon 1" className="gallery-image" />
          <img src={Tri2} alt="Triathlon 2" className="gallery-image" />
          <img src={Tri3} alt="Triathlon 3" className="gallery-image" />
        </div>
      </section>
    </div>
  );
};

export default Coaching;
