import React from 'react';
import './TrustSection.css';
import Icon1 from '../assets/icon1.png'; 
import Icon2 from '../assets/icon2.png'; 
import Icon3 from '../assets/icon3.png'; 

const TrustSection = () => {
    return (
        <div className="trust-section0">
            <h1 className="section-title0">Why you should <span className="highlight0">trust QuickSolver!</span></h1>
            <div className="features0">
                <div className="feature0">
                    <img src={Icon1} alt="Global Curriculum Aligned" className="feature-icon0" />
                    <h3>Global Curriculum Aligned</h3>
                    <p>Updated with the latest international curriculum standards, including WAEC, GCSE, and SAT.</p>
                </div>
                <div className="feature0">
                    <img src={Icon2} alt="Designed by Leading Educators" className="feature-icon0" />
                    <h3>Designed by Leading Educators</h3>
                    <p>QuickSolver is built by top educators and students to meet the needs of science students globally.</p>
                </div>
                <div className="feature0">
                    <img src={Icon3} alt="Join the Learning Revolution" className="feature-icon0" />
                    <h3>Join the Learning Revolution</h3>
                    <p>Be part of the growing community of students using QuickSolver to excel in science.</p>
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
