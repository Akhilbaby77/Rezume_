import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ContactSection from './components/ContactSection';
import ResumeUpload from './components/ResumeUpload';
import ResumeAnalysis from './components/ResumeAnalysis';
import './css/App.css';

function App() {
  const featuresRef = useRef(null); // Reference for FeaturesSection

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="page-content">
                <div id="hero" className="section">
                  <HeroSection featuresRef={featuresRef} />
                </div>

                <div id="features" className="section" ref={featuresRef}>
                  <FeaturesSection />
                </div>

                <div id="howitworks" className="section">
                  <HowItWorksSection />
                </div>

                <div id="contact" className="section">
                  <ContactSection />
                </div>

                <div id="upload" className="section">
                  <ResumeUpload />
                </div>
              </div>
            }
          />
          <Route path="/analysis" element={<ResumeAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
