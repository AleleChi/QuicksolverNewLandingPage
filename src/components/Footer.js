import React from 'react';
import './Footer.css';
import AppStoreIcon from '../assets/app-store-icon.png'; 
import GooglePlayIcon from '../assets/google-play-icon.png'; 
import LinkedInIcon from '../assets/linkedin-icon.png'; 
import TwitterIcon from '../assets/twitter-icon.png'; 
import FacebookIcon from '../assets/facebook-icon.png'; 
import InstagramIcon from '../assets/instagram-icon.png'; 
import TikTokIcon from '../assets/tiktok-icon.png'; 
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="logo">
                    <img src={Logo} alt="QuickSolver Logo" className="logo-image" /> 
                </div>
                <div className="app-buttons">
                    <a href="https://play.google.com/store/apps/details?id" target="_blank" rel="noopener noreferrer" className="app-buttons">
                        <img src={GooglePlayIcon} alt="Get it on Google Play" />
                    </a>
                    <a href="https://apps.apple.com/app/id" target="_blank" rel="noopener noreferrer" className="app-buttons">
                        <img src={AppStoreIcon} alt="Download on the App Store" />
                    </a>
                </div>
            </div>
            <div className="footer-middle">
                <h3>Useful Links</h3>
                <ul className="footer-links">
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Social Media</h3>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/quicksolver-app/"><img src={LinkedInIcon} alt="LinkedIn" className="social-icon" /></a>
                    <a href="https://x.com/quicksolverApp"><img src={TwitterIcon} alt="Twitter" className="social-icon" /></a>
                    <a href="https://bit.ly/Quicksolver"><img src={FacebookIcon} alt="Facebook" className="social-icon" /></a>
                    <a href="https://www.instagram.com/quicksolver_official/"><img src={InstagramIcon} alt="Instagram" className="social-icon" /></a>
                    <a href="https://www.tiktok.com/@quicksolver_?lang=en"><img src={TikTokIcon} alt="TikTok" className="social-icon" /></a>
                </div>
                <div className="footer-bottom-links">
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
