import React from "react";
import "./../css/HeroSection.css";

const HeroSection = ({ featuresRef }) => {
  const scrollToFeatures = () => {
    if (featuresRef?.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome</h1>
        <p>Unlock insights from your resume with AI-powered analysis.</p>
        <button className="cta-btn" onClick={scrollToFeatures}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
