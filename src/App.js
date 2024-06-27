import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FrameSection from './components/FrameSection';
import NewSection from './components/NewSection';
import ScanSolveSection from './components/ScanSolveSection';
import TrustSection from './components/TrustSection';
import LearningPlatformSection from './components/LearningPlatformSection';
import ContactSection from './components/ContactSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import About from './components/About'; // import your new About component
import './App.css';

function AppContent() {
  const frameSectionRef = useRef(null);
  const location = useLocation();

  const scrollToFrameSection = () => {
    frameSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const showHeaderFooterDownload = location.pathname === '/' || location.pathname === '/about-us';

  return (
    <>
      {showHeaderFooterDownload && <Header scrollToFrameSection={scrollToFrameSection} />}
      <Routes>
        <Route path="/" element={
          <>
            <FrameSection ref={frameSectionRef} />
            <NewSection scrollToFrameSection={scrollToFrameSection} />
            <ScanSolveSection scrollToFrameSection={scrollToFrameSection} />
            <TrustSection />
            <LearningPlatformSection scrollToFrameSection={scrollToFrameSection} />
            <ContactSection />
            <DownloadSection />
          </>
        } />
        <Route path="/about-us" element={<About />} />
        {/* Add other routes here */}
      </Routes>
      {showHeaderFooterDownload && <DownloadSection />}
      {showHeaderFooterDownload && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
