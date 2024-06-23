import React, { useEffect } from 'react';
import './Header.css';
import Logo from '../assets/Logo.png';

const Header = ({ scrollToFrameSection }) => {
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = '-80px'; 
      } else {
        header.style.top = '0'; 
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-image" />
      </div>
      <button className="download-button" onClick={scrollToFrameSection}>Download App</button>
    </header>
  );
};

export default Header;
