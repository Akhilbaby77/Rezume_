import React from "react";
import "./../css/FeaturesSection.css";


const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <p className="features-description">
        Discover the standout features that make us unique and help you achieve your goals efficiently.
      </p>
      <div className="feature-cards">
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-bolt"></i>
          </div>
          <h3>Scoring System</h3>
          <p>Evaluates resumes based on key industry metrics and assigns a structured score for quick assessment.</p>
        </div>
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>AI-Powered Interview</h3>
          <p>Simulates real interview scenarios using AI to analyze responses and provide feedback.</p>
        </div>
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3> Recommendations</h3>
          <p>Suggests personalized improvements to enhance resume quality and job prospects.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
