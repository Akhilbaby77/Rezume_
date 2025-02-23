import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { Document, Page } from "react-pdf";
import "../css/ResumeAnalysis.css";
import { pdfjs } from "react-pdf";

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Register required Chart.js elements
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ResumeAnalysis = () => {
  const location = useLocation();
  const { fileURL } = location.state || {};

  const [score, setScore] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [animatedPieData, setAnimatedPieData] = useState(null);
  const overallScore = 85;

  const barChartData = {
    labels: ["Technical Skills", "Soft Skills", "Experience"],
    datasets: [
      {
        label: "Score",
        data: [80, 75, 90],
        backgroundColor: ["#1B4F72", "#117864", "#2C3E50"], // Darker blues & teal
      },
    ],
  };

  const pieChartData = {
    labels: ["Education", "Certifications", "Projects"],
    datasets: [
      {
        label: "Score",
        data: [85, 70, 95],
        backgroundColor: ["#283747", "#6C3483", "#1C2833"], // Darker navy, deep purple, dark gray
        hoverBackgroundColor: ["#1A5276", "#5B2C6F", "#17202A"], // Slightly darker on hover
        hoverOffset: 10,
      },
    ],
  };

  // Updated Bar Chart Options
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    scales: {
      y: { display: false },
      x: {
        grid: { display: false },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1800,
      easing: "easeInOutCubic",
    },
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1800,
      easing: "easeInOutCubic",
    },
  };

  // Score Animation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (score < overallScore) {
        setScore((prevScore) => Math.min(prevScore + 1, overallScore));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [score, overallScore]);

  // Animate Pie Chart on Mount
  useEffect(() => {
    setTimeout(() => {
      setAnimatedPieData(pieChartData);
    }, 300);
  }, []);

  const getScoreBarColor = (score) => {
    if (score >= 80) return "#2ECC71";
    if (score >= 50) return "#F1C40F";
    return "#E74C3C";
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="analysis-container">
      <div className="resume-view">
        <h2>Resume Preview</h2>
        {fileURL ? (
          <div className="pdf-viewer-container">
            <Document file={fileURL} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        ) : (
          <p>Please upload a resume file first.</p>
        )}
        <button className="interview-button">Start Interview</button>
      </div>

      <div className="right-half">
        <h2>Analysis Results</h2>
        <div className="overall-score">
          <h3>Overall Score</h3>
          <div className="score-container">
            <div className="score-bar">
              <div
                className="score-fill"
                style={{ width: `${score}%`, backgroundColor: getScoreBarColor(score) }}
              />
            </div>
            <p className="score-text">{score}/100</p>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart">
            <h3>Skill & Experience Breakdown</h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="chart">
            <h3>Education & Certifications</h3>
            {animatedPieData && <Pie data={animatedPieData} options={chartOptions} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
