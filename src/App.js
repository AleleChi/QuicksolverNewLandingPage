import React, { useRef } from 'react';
import Header from './components/Header';
import FrameSection from './components/FrameSection';
import NewSection from './components/NewSection';
import ScanSolveSection from './components/ScanSolveSection';
import TrustSection from './components/TrustSection';
import LearningPlatformSection from './components/LearningPlatformSection';
import ContactSection from './components/ContactSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const frameSectionRef = useRef(null);

  const scrollToFrameSection = () => {
    frameSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToFrameSection={scrollToFrameSection} />
      <FrameSection ref={frameSectionRef} />
      <NewSection scrollToFrameSection={scrollToFrameSection} />
      <ScanSolveSection scrollToFrameSection={scrollToFrameSection} />
      <TrustSection />
      <LearningPlatformSection scrollToFrameSection={scrollToFrameSection} />
      <ContactSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
