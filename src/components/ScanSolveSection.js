import React from 'react';
import './ScanSolveSection.css';
import ScanSolveImage from '../assets/snap-and-solve.png'; 

const ScanSolveSection = ({ scrollToFrameSection }) => {
    return (
        <div className="scan-solve-section2">
            <div className="desktop-content">
                <div className="image-content2">
                    <img src={ScanSolveImage} alt="Scan and Solve" className="app-image2" />
                </div>
                <div className="text-content2">
                    <h1 className="section-title2">Scan and Solve_</h1>
                    <h2 className="section-subtitle2">Instantly</h2>
                    <p className="section-description2">
                        <span className="highlight2">Stuck on a tough problem?</span><br />
                        Simply scan it with QuickSolver and get step-by- <br />step solutions instantly.<br />
                        Our app allows you to scan even the most <br /> complex word problems and equations from <br />Maths, Chemistry, and more.
                    </p>
                    <button className="download-button" onClick={scrollToFrameSection}>Download App</button>
                </div>
            </div>
            <div className="mobile-content">
                <div className="text-content2">
                    <h1 className="section-title2">Scan and Solve_</h1>
                    <h2 className="section-subtitle2">Instantly</h2>
                    <p className="section-description2 mobile-description">
                        <span className="highlight2">Stuck on a tough problem?</span>
                        Simply scan it with QuickSolver and get step-by-step solutions instantly.
                        Our app allows you to scan even the most complex word problems and equations from Maths, Chemistry, and more.
                    </p>
                    <div className="mobile-columns">
                        <div className="column">
                            <p>Complex Mathematics</p>
                            <p>Trigonometry</p>
                            <p>Algebra</p>
                        </div>
                        <div className="column">
                            <p>Statistics</p>
                            <p>Geometry</p>
                            <p>Calculus</p>
                        </div>
                    </div>
                    <button className="download-button" onClick={scrollToFrameSection}>Download App</button>
                </div>
                <div className="image-content2">
                    <img src={ScanSolveImage} alt="Scan and Solve" className="app-image2" />
                </div>
            </div>
        </div>
    );
};

export default ScanSolveSection;
