import React from 'react';
import './NewSection.css';
import Image1 from '../assets/overlapping-image1.png'; 
import Image2 from '../assets/overlapping-image2.png'; 

const NewSection = ({ scrollToFrameSection }) => {
    return (
        <div className="new-section1">
            <div className="text-content1">
                <h1 className="section-title1">QuickSolver_</h1>
                <h2 className="section-subtitle1">Your Ultimate Science <br /> Companion</h2>
                <p className="section-description1">
                    <strong>QuickSolver</strong> simplifies science for high school and <br className="desktop-only" /> undergrad students. 
                    Solve complex problems in <br className="desktop-only" /> chemistry, physics, and math with our all-in-one app.
                </p>
                <button className="download-button" onClick={scrollToFrameSection}>Download App</button>
            </div>
            <div className="image-content1">
                <img src={Image1} alt="QuickSolver App 1" className="app-image1 image1" />
                <img src={Image2} alt="QuickSolver App 2" className="app-image1 image2" />
            </div>
        </div>
    );
};

export default NewSection;
