// Filename - "./pages/home.js"
import React, { useState, useEffect } from "react";
import HeadShot from "../headshot-ironman2.JPG";
import Swim from "../swim-square.png";
import Bike from "../bike-square.png";
import Run from "../run-square.png";
import MissionPic from "../mission-pic.png";
import "./home.css";

const Home = () => {
  // Counter Logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    document.title = "Home - Simon Shi";
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="top-image-container">
        <img src={HeadShot} alt="headshot-ironman" className="top-image" />
        <div className="hero-text">
          <h1>Simon Shi</h1>
          <p>Professional Triathlete, Content Creator, and Coach</p>
        </div>
      </div>

      {/* About Section */}
      <section className="about">
        <h2>About Simon</h2>
        <p>
          Simon Shi, a former NCAA Division 1 swimmer, transitioned to become a
          professional triathlete within a year of entering the sport.
          With over 1 billion views across his social media platforms, he shares
          his journey from collegiate swimming to conquering triathlons. In addition to his athletic pursuits, Simon showcases his skills in solving
          Rubik’s cubes, taking on Rubik’s cube challenges.
        </p>
      </section>

      {/* Swim, Bike, Run Section */}
      <section className="activities-container">
        <div className="activity-card">
          <img src={Swim} alt="Swim" />
          <h3>Swim</h3>
          <p>2.4 Miles</p>
        </div>

        <div className="activity-card">
          <img src={Bike} alt="Bike" />
          <h3>Bike</h3>
          <p>112 Miles</p>
        </div>

        <div className="activity-card">
          <img src={Run} alt="Run" />
          <h3>Run</h3>
          <p>26.3 Miles</p>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>My Mission</h2>
          <p>
          My mission is to ignite a passion for health and fitness,
          particularly through the dynamic sport of triathlon.
          I aspire to inspire individuals to embrace an active lifestyle and unlock their full potential.
          </p>
          <p>
          Through sharing my own journey as a professional athlete,
          I aim to provide guidance, motivation, and support to others on their fitness journeys.
          </p>
        </div>
        <div className="mission-image">
          <img src={MissionPic} alt="Mission" />
        </div>
      </section>

      {/* Journey to Pro Section */}
      <section className="journey-section">
        <div className="journey-content">
          <h2>Journey to Professional</h2>
          <p>
            I turned pro in less than a year, leveraging my swim background to build my biking and running skills.
            It wasn’t easy starting two new sports in 2020, but I learned a lot from my coach and stayed dedicated.
          </p>
          <p>
          My journey to becoming a professional triathlete has been defined by dedication, perseverance,
          and unwavering commitment. From humble beginnings as a collegiate swimmer, I transitioned into the world of triathlon,
          driven by a relentless passion for pushing my limits.
          </p>
          <p>
          Through years of rigorous training, competing in local races, and overcoming countless obstacles,
          I honed my skills and earned my place among the elite ranks of professional athletes. Today, I stand proud
          as a testament to the power of hard work, resilience, and belief in oneself to achieve the seemingly impossible.
          </p>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/cs-d41FfYLE?si=-rbCa5dnQOc9Bq4n" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </section>

      {/* Next Race Section */}
      <section className="race-section">
        <h2>Next Race: 70.3 Oceanside</h2>
        <h1>Date: April 5, 2025</h1>
        <div className="counter">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
