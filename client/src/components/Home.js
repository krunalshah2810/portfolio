import React from 'react';
import { useState, useEffect } from 'react';
// import logo from '..../public/assets/images/logo.png';
// import git from '..../public/assets/images/git.png';
// import x from '..../public/assets/images/x.png';
// import Krunal_Shah from '..../public/assets/pdf/Krunal_Shah.pdf'

function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const titles = ['Fullstack Developer', 'Software Developer', 'Backend Developer', 'Python Developer'];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentTitle = titles[currentTitleIndex];
      
      if (charIndex < currentTitle.length) {
        setTypedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval); // Stop typing the current title
        setTimeout(() => {
          // Prepare to type the next title
          setCharIndex(0);
          setTypedText('');
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length); // Loop through titles
        }, 1000); // Pause before deleting the text
      }
    }, 100); // Typing speed (100ms per character)

    return () => clearInterval(typingInterval);
  }, [charIndex, currentTitleIndex, titles]);

  return (
    
    <div className="leftside" style={{position:'absolute'}}>
      <div className="names">
        <h1>Hi, I am</h1>
        <h1 className="highlight" style={{marginLeft: '90px'}}>Krunal Shah</h1>
      </div>
      <div className="links" style={{position:'relative', marginLeft:'200px'}}>
        <button id="resume" onClick={() => window.open('/assets/pdf/Krunal_Shah.pdf', '_blank')}>
          My Resume
        </button>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/git.png' alt="GitHub" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/logo.png 'alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/x.png' alt="Twitter" />
        </a>
      </div>
      <p className="dynamic-text" style={{marginLeft: '200px'}}>
        I am a <span className="dynamic-text">{typedText}</span>
      </p>
    </div>
  );
}

export default Home;
