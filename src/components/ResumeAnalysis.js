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
import { Bar, Doughnut } from "react-chartjs-2";
import { Document, Page } from "react-pdf";
import "../css/ResumeAnalysis.css";
import { pdfjs } from "react-pdf";

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ResumeAnalysis = () => {
  const location = useLocation();
  const { fileURL, fileName } = location.state || {}; // Use fileURL

  const [score, setScore] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const overallScore = 85;

  const barChartData = {
    labels: ["Technical Skills", "Soft Skills", "Experience"],
    datasets: [
      {
        label: "Score",
        data: [80, 75, 90],
        backgroundColor: ["#F3E1AE", "#E4A833", "#DCBCB1"],
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Education", "Certifications", "Projects"],
    datasets: [
      {
        label: "Score",
        data: [85, 70, 95],
        backgroundColor: ["#F3E1AE", "#E4A833", "#DCBCB1"],
        hoverBackgroundColor: ["#F7D36F", "#F2C14E", "#E7A49B"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeOutQuad",
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (score < overallScore) {
        setScore((prevScore) => Math.min(prevScore + 1, overallScore));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [score, overallScore]);

  const getScoreBarColor = (score) => {
    if (score >= 80) return "#4CAF50";
    if (score >= 50) return "#FFEB3B";
    return "#F44336";
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
            <p>Page {pageNumber} of {numPages}</p>
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
              <div className="score-fill" style={{ width: `${score}%`, backgroundColor: getScoreBarColor(score) }} />
            </div>
            <p className="score-text">{score}/100</p>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart">
            <h3>Skill & Experience Breakdown</h3>
            <Bar data={barChartData} options={chartOptions} />
          </div>
          <div className="chart">
            <h3>Education & Certifications</h3>
            <Doughnut data={doughnutChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
