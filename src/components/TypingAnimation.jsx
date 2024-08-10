import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phrases, setPhrases] = useState(['Front End developer', 'Back End developer', 'Full Stack developer']);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < phrases.length) {
        const currentPhrase = phrases[currentIndex];
        const currentText = currentPhrase.slice(0, text.length + 1);
        setText(currentText);
        if (currentText === currentPhrase) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % phrases.length); // Use modulo operator to loop back to the first phrase
            setText('');
          }, 1000);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex, phrases, text]);
  return (
      <span className='mt-3'>I'm {text}</span>
  );
};

export default TypingAnimation;