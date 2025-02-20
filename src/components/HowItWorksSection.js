import React from "react";
import "./../css/HowItWorksSection.css";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Upload Your Resume</h3>
            <p>Upload your resume to start the analysis process.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Evaluation and Scoring</h3>
            <p>The system reviews your resume, scores it based on key criteria, and highlights strengths and weaknesses.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>AI-Powered Interview</h3>
            <p>Get an interactive AI-driven interview experience with feedback to improve your responses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
