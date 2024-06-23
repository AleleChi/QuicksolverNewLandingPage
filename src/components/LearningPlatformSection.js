import React from 'react';
import './LearningPlatformSection.css';
import CGPAImage from '../assets/cgpa.png'; 
import CheckIcon from '../assets/check-icon.svg'; 

const LearningPlatformSection = ({ scrollToFrameSection }) => {
    return (
        <div className="learning-platform-section4">
            <div className="text-content4">
                <h1 className="section-title4">
                    QuickSolver
                    <span className="section-highlight">  isn't just a calculator; it's a complete learning platform.</span>
                </h1>
                <ul className="features-list4">
                    <li className="feature-item4">
                        <span className="feature-icon4">
                            <img src={CheckIcon} alt="Check Icon" className="check-icon4" />
                        </span>
                        <span className="feature-text4">Calculate your CGPA and track your Academic progress on the go.</span>
                    </li>
                    <li className="feature-item4">
                        <span className="feature-icon4">
                            <img src={CheckIcon} alt="Check Icon" className="check-icon4" />
                        </span>
                        <span className="feature-text4">Get live support from expert tutors and lecturers</span>
                    </li>
                    <li className="feature-item4">
                        <span className="feature-icon4">
                            <img src={CheckIcon} alt="Check Icon" className="check-icon4" />
                        </span>
                        <span className="feature-text4">Comprehensive lessons for any Science or Math topic</span>
                    </li>
                </ul>
                <button className="download-button" onClick={scrollToFrameSection}>Download App</button>
            </div>
            <div className="image-content4">
                <img src={CGPAImage} alt="CGPA Calculator" className="app-image4" />
            </div>
        </div>
    );
};

export default LearningPlatformSection;
