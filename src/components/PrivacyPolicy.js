import React from 'react';
import './PrivacyPolicy.css';
import DownloadSection from './DownloadSection';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container">
      <div className="div1Wrapper">
        <h1 className="title">Privacy Policy Page</h1>
        <div className="line"></div>
        <p className="effective-date">Effective 31st June, 2024</p>
      </div>
      
      <div className="content-section">
        <h2 className="section-title">1. Introduction</h2>
        <p className="paragraph">
          Our Services consist of the Quick Solver application that helps users to solve math problems (the “Application”), and the related website located at quicksolver.com (the “Site”), including all content provided through the Application and/or the Site. When we speak of “Quick Solver”, “we”, “us” and “our” we mean Quick Solver LLC and its affiliates.
        </p>
        <p className="paragraph">
          These Terms of Service (collectively, the “Terms”) govern your use of the Services. These Terms help define the relationship between you and Quick Solver. It is important that you read and understand the Terms because to use the Services you must accept these Terms. If you do not accept or understand the Terms, please do not use, download, access or register with the Services. Besides these Terms, we also publish a privacy policy at quicksolver.com/privacy. We encourage you to read it to better understand how you can update, manage and delete your information.
        </p>
        <p className="paragraph">
          As used in these Terms, “you” and “user” means the individual or entity using the Service. To use our Service on behalf of an entity, you must be authorized to accept these Terms on behalf of that entity. If you have any questions about these Terms or our Privacy Policy, please see our contact information in Section 19 (Contact).
        </p>
        <p className="paragraph">
          We wish to remind you that the Quick Solver Application is an educational tool and should be used as an aid and learning tool. Using it for cheating on exams or homework will primarily hurt you, as you will not properly learn math and math thinking. Be smart and use it only for your advancements in math learning. Not cheating.
        </p>
      </div>

      <div className="content-section">
        <h2 className="section-title">2. Privacy Policy</h2>
        <p className="paragraph">
          Our Services consist of the Quick Solver application that helps users to solve math problems (the “Application”), and the related website located at quicksolver.app (the “Site”), including all content provided through the Application and/or the Site. When we speak of “Quick Solver”, “we”, “us” and “our” we mean Quick Solver LLC and its affiliates.
        </p>
        <p className="paragraph">
          These Terms of Service (collectively, the “Terms”) govern your use of the Services. These Terms help define the relationship between you and Quick Solver. It is important that you read and understand the Terms because to use the Services you must accept these Terms. If you do not accept or understand the Terms, please do not use, download, access or register with the Services. Besides these Terms, we also publish a privacy policy at quicksolver.com/privacy. We encourage you to read it to better understand how you can update, manage and delete your information.
        </p>
        <p className="paragraph">
          As used in these Terms, “you” and “user” means the individual or entity using the Service. To use our Service on behalf of an entity, you must be authorized to accept these Terms on behalf of that entity. If you have any questions about these Terms or our Privacy Policy, please see our contact information in Section 19 (Contact).
        </p>
        <p className="paragraph">
          We wish to remind you that the Quick Solver Application is an educational tool and should be used as an aid and learning tool. Using it for cheating on exams or homework will primarily hurt you, as you will not properly learn math and math thinking. Be smart and use it only for your advancements in math learning. Not cheating.
        </p>
      </div>

      <DownloadSection />
    </div>
  );
};

export default PrivacyPolicyPage;
