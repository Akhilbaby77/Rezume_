
import React from "react";
import { motion } from "framer-motion";
import "./../css/ContactSection.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Us</h2>
        <p>
          We are dedicated to transforming career growth with cutting-edge AI technology.
          Our platform helps individuals enhance their resumes, prepare for interviews,
          and secure better job opportunities.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-brain"></i>
            <h3>AI-Driven Insights</h3>
            <p>Our platform leverages artificial intelligence to provide in-depth resume analysis.</p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-users"></i>
            <h3>Industry Experts</h3>
            <p>Our team consists of HR professionals and AI specialists to ensure top-notch guidance.</p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-bullseye"></i>
            <h3>Career Success</h3>
            <p>We aim to help job seekers achieve their career goals with precision and confidence.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

