import React from 'react';
import './ContactUs.css';
import ContactSection from './ContactSection';
import DownloadSection from './DownloadSection';
import storyImage from '../assets/story-image.png';
import enquiryIcon from '../assets/inquiry.svg';
import liveChatIcon from '../assets/fluent_chat-20-regular.svg';
import callIcon from '../assets/call.svg';
import mailIcon from '../assets/mail.svg';
import learnMoreIcon from '../assets/learn.svg';
import arrowIcon from '../assets/Group-arrow.svg';

const ContactUs = ({ showDownloadSection }) => {
  return (
    <div className="contact-page">
      <div className="contact-header-cards-wrapper">
        <h1 className='blackHeading'>Talk to the <span className='greenHeading'>QuickSolver</span> Team</h1>
        <div className="contact-cards">
          <div className="contact-card">
            <img src={enquiryIcon} alt="Enquiry and Feedback Icon" className="contact-icon" />
            <h2>Enquiry and Feedback</h2>
            <p>Curious about how we can help you excel in science? We're here to discuss your challenges and provide answers to any questions you may have!</p>
            <a href="#" className="contact-button">Send us a message <img src={arrowIcon} alt="Arrow Icon" /></a>
          </div>
          <div className="contact-card green-card">
            <img src={liveChatIcon} alt="Live Chat Icon" className="contact-icon liveChat" />
            <h2>Live Chat</h2>
            <p>We’re available</p>
            <p>Mon. - Fri. 5pm to 7pm (WAT)<br />Sat. - Sun. 12pm to 5pm (WAT)</p>
            <a href="#" className="contact-button"> <span className='mobileArrow'><img src={liveChatIcon} alt="Live Chat Icon" className='liveChatMobile' /> Start Live Chat</span> <img src={arrowIcon} alt="Arrow Icon" className='arrowColour' /></a>
          </div>
          <div className="contact-card call">
            <img src={callIcon} alt="Call or Mail us Icon" className="contact-icon" />
            <h2>Call or Mail us</h2>
            <p>hello@quicksolver.com<br />(234) 832-1716-640</p>
            <div className="contact-actions">
              <a href="mailto:hello@quicksolver.com" className="contact-button black-button"> <img src={mailIcon} alt=" Mail Icon" className='emailIcon' /> Send a Mail</a>
              <a href="tel:+2348321716640" className="contact-button green-circle"><img src={callIcon} alt="Call Icon"  className='callIconn'/></a>
            </div>
          </div>
          <div className="contact-card">
            <img src={learnMoreIcon} alt="Learn More Icon" className="contact-icon" />
            <h2>Learn More</h2>
            <p>We empower students and educators with cutting-edge tools to master science effortlessly. Transforming learning and problem-solving across the globe.</p>
            <a href="#" className="contact-button">About QuickSolver <img src={arrowIcon} alt="Arrow Icon" /></a>
          </div>
        </div>
      </div>
      <div className="about-story">
        <div className="about-story-text">
          <h3 className='about-heading'>Why QuickSolver</h3>
          <h1 className='about_Heading'>Our Story_</h1>
          <p>
            QuickSolver started as a response to the problems faced by science students in high school and higher institutions. <br />
            Now it is the only solution you need to solve complex problems in chemistry, physics, and mathematics.
          </p>
          <button className="about-button">Download App</button>
        </div>
        <div className="about-story-image">
          <img src={storyImage} alt="Our Story" />
        </div>
      </div>
      <ContactSection />
      {showDownloadSection && <DownloadSection />}
    </div>
  );
};

export default ContactUs;
