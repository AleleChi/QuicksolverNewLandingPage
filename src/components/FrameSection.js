import React, { useEffect, useState, forwardRef } from 'react';
import './FrameSection.css';
import GooglePlayIcon from '../assets/google-play-icon.png';
import AppStoreIcon from '../assets/app-store-icon.png';
import PhoneMockup1 from '../assets/phone-mockup1.png';
import PhoneMockup2 from '../assets/phone-mockup2.png';
import CircleBackground from '../assets/Content.png';
import Icon from '../assets/icon.svg'; // Import your icon

const textOptions = [
  "Chemistry Problems",
  "Physics Problems",
  "Math Problems",
  "Science Subjects",
  "Complex Equations",
  "Statistical Problems"
];

const FrameSection = forwardRef((props, ref) => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % textOptions.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const phoneMockup1 = document.querySelector('.phone-mockup');
      const phoneMockup2 = document.querySelector('.phone-mockup2');

      const windowHeight = window.innerHeight;
      const phoneMockup1Top = phoneMockup1.getBoundingClientRect().top;
      const phoneMockup2Top = phoneMockup2.getBoundingClientRect().top;

      if (phoneMockup1Top < windowHeight - 50) {
        phoneMockup1.classList.add('scrolled-in');
      }

      if (phoneMockup2Top < windowHeight - 50) {
        phoneMockup2.classList.add('scrolled-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="frame-section" ref={ref}>
      <div className="circle-container">
        <img src={CircleBackground} alt="Circle Background" className="circle-background" />
        <img src={Icon} alt="Icon" className="rotating-icon" /> {/* Add the rotating icon */}
      </div>
      <div className="circle-container small-circle">
        <img src={CircleBackground} alt="Circle Background" className="circle-background smaller" />
        <img src={Icon} alt="Icon" className="rotating-icon small-rotating-icon" /> {/* Add the rotating icon */}
      </div>
      <div className="content fade-in-slide-up">
        <div className="text-content">
          <h2 className="highlight">Need help with complex solutions?</h2>
          <h1>
            Solve <span className='changing-text'>{textOptions[currentText]}</span> with QuickSolver
          </h1>
          <p>
            Master science subjects with ease using <span className='p-highlight'>QuickSolver's</span> all-in-one app.
            Get instant solutions and comprehensive learning support wherever you are!
          </p>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <img src={GooglePlayIcon} alt="Get it on Google Play" />
            </a>
            <a href="#" className="app-button">
              <img src={AppStoreIcon} alt="Download on the App Store" />
            </a>
          </div>
        </div>
        <div className="image-content fade-in-slide-up">
          <img src={PhoneMockup1} alt="QuickSolver App 1" className="phone-mockup" />
          <img src={PhoneMockup2} alt="QuickSolver App 2" className="phone-mockup phone-mockup2" />
        </div>
      </div>
    </div>
  );
});

export default FrameSection;
