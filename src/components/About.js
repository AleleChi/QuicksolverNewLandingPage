import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import './About.css';
import storyImage from '../assets/story-image.png';
import People1 from '../assets/image1.png';
import People2 from '../assets/image2.png';
import People3 from '../assets/image3.png';
import DownloadSection from './DownloadSection';

const About = () => {
  const [showDownloadSection, setShowDownloadSection] = useState(true); // Set the condition here

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="about-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About <span style={{ color: '#0A7212' }}>QuickSolver</span>
      </motion.div>
      <motion.div
        className="about-subheader"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Master science subjects with ease using <span style={{ color: '#0A7212' }}>QuickSolver's</span> all-in-one app. <br /> Get instant solutions and comprehensive learning support wherever you are!
      </motion.div>
      <motion.div
        className="orange-line"
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="about-story"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="about-story-text">
          <h3 className='about-heading'>Why QuickSolver</h3>
          <h1>Our Story_</h1>
          <p>
            QuickSolver started as a response to the problems faced by science students in high school and higher institutions. <br />
            Now it is the only solution you need to solve complex problems in chemistry, physics, and mathematics.
          </p>
          <button className="about-button">Download App</button>
        </div>
        <div className="about-story-image">
          <img src={storyImage} alt="Our Story" />
        </div>
      </motion.div>
      <div className="about-images-section">
        <Slider {...settings}>
          <motion.div className="slick-slide" whileHover={{ scale: 1.05, backgroundColor: 'green' }}>
            <img src={People1} alt="People 1" />
          </motion.div>
          <motion.div className="slick-slide" whileHover={{ scale: 1.05, backgroundColor: 'green' }}>
            <img src={People2} alt="People 2" />
          </motion.div>
          <motion.div className="slick-slide" whileHover={{ scale: 1.05, backgroundColor: 'green' }}>
            <img src={People3} alt="People 3" />
          </motion.div>
        </Slider>
      </div>
      {showDownloadSection && <DownloadSection />}
    </motion.div>
  );
};

export default About;
