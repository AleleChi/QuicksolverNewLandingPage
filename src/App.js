import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FrameSection from './components/FrameSection';
import NewSection from './components/NewSection';
import ScanSolveSection from './components/ScanSolveSection';
import TrustSection from './components/TrustSection';
import LearningPlatformSection from './components/LearningPlatformSection';
import ContactSection from './components/ContactSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import PrivacyPolicyPage from './components/PrivacyPolicy'; // Import the Privacy Policy Page
import './App.css';

function AppContent() {
  const scrollToFrameSection = () => {
    const frameSection = document.getElementById('frame-section');
    if (frameSection) {
      frameSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header scrollToFrameSection={scrollToFrameSection} />
      <Routes>
        <Route path="/" element={
          <>
            <div id="frame-section">
              <FrameSection />
            </div>
            <NewSection scrollToFrameSection={scrollToFrameSection} />
            <ScanSolveSection scrollToFrameSection={scrollToFrameSection} />
            <TrustSection />
            <LearningPlatformSection scrollToFrameSection={scrollToFrameSection} />
            <ContactSection />
            <DownloadSection />
          </>
        } />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs showDownloadSection={true} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
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
