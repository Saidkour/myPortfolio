import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TypingAnimation = () => {
  const lang = useSelector((state) => state.lang);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  const [phrases, setPhrases] = useState("");
  useEffect(() => {
    if (lang === "en") {
      setPhrases([
        "Front End developer",
        "Back End developer",
        "Full Stack developer",
      ]);
    } else {
      setPhrases([
        "Développeur Front End",
        "Développeur Back End",
        "Développeur Full Stack",
      ]);
    }
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isReversed) {
        // Typing forward
        if (currentIndex < phrases.length) {
          const currentPhrase = phrases[currentIndex];
          const currentText = currentPhrase.slice(0, text.length + 1);
          setText(currentText);
          if (currentText === currentPhrase) {
            clearInterval(interval);
            setTimeout(() => {
              setIsReversed(true);
            }, 1000);
          }
        }
      } else {
        // Typing in reverse
        if (text.length > 0) {
          const currentPhrase = phrases[currentIndex];
          const currentText = currentPhrase.slice(0, text.length - 1);
          setText(currentText);
          if (currentText === "") {
            clearInterval(interval);
            setTimeout(() => {
              setIsReversed(false);
              setCurrentIndex((currentIndex + 1) % phrases.length);
            }, 500);
          }
        }
      }
    }, 50); // Decreased interval to 50 milliseconds

    return () => clearInterval(interval);
  }, [currentIndex, isReversed, phrases, text]);

  return (
    <span className="mt-3">
      {lang == "en" ? "I'm a" : "Je suis"} {text}
    </span>
  );
};

export default TypingAnimation;
