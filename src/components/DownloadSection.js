import React from 'react';
import './DownloadSection.css';
import AppStoreIcon from '../assets/app-store-icon.png'; 
import GooglePlayIcon from '../assets/google-play-icon.png'; 

const DownloadSection = () => {
    return (
        <div className="download-section7">
            <div className="text-content7">
                <p>
                    Use <span className="highlight7">QuickSolver</span> <strong>to solve your next assignment!</strong> <br />
                    Download it now for free from your favorite app store.
                </p>
            </div>
            <div className="app-buttons7">
                <a href="https://apps.apple.com/us/app/quick-solver/id6474582912" target="_blank" rel="noopener noreferrer">
                    <img src={AppStoreIcon} alt="Download on the App Store" className="app-button7" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.myapp.quick_solver2" target="_blank" rel="noopener noreferrer">
                    <img src={GooglePlayIcon} alt="Get it on Google Play" className="app-button7" />
                </a>
            </div>
        </div>
    );
};

export default DownloadSection;
