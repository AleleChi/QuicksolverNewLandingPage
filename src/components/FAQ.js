import React from 'react';
import FAQItem from './FAQItem';
import './FAQ.css'; 

const faqData = [
  {
    question: 'How does QuickSolver Calculate?',
    answer: 'QuickSolver uses advanced algorithms to provide instant solutions and comprehensive learning support.',
  },
  {
    question: 'What subjects does QuickSolver cover?',
    answer: 'QuickSolver covers subjects like Chemistry, Physics, and Mathematics.',
  },
  {
    question: 'How can I download QuickSolver?',
    answer: 'You can download QuickSolver from the Google Play Store and the Apple App Store.',
  },
];

const FAQ = () => {
  return (
    <div className="faq-page">
      <h1 className='faq-page-h1'>Frequently Asked Questions</h1>
      <p className="faq-intro">Got a question? We’re here to answer! 
      If you don’t see your question here, drop us a message below and we will reach out to you!</p>
      <div className="faq-section">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
