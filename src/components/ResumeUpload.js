import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ResumeUpload.css";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
      const fileURL = URL.createObjectURL(file); // Create object URL
      navigate("/analysis", { state: { fileURL, fileName: file.name } }); // Pass fileURL and fileName via state
    } else {
      alert("Please select a file first");
    }
  };

  return (
    <div className="resume-upload">
      <h2>Upload Your Resume</h2>
      <p className="upload-instructions">
        Select your resume file to upload. Accepted formats: PDF, DOCX.
      </p>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload} className="upload-btn">
        Upload Resume
      </button>
      {file && <p className="file-name">Selected File: {file.name}</p>}
    </div>
  );
};

export default ResumeUpload;
