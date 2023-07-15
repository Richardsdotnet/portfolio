import React, { useState, useEffect } from 'react';
import "..//components/words.css"

const WordAnimation = () => {
  const [words, setWords] = useState(['Java', 'Python', 'Javascript']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[currentWordIndex]);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [words, currentWordIndex]); 

  return (
    <div className="word-animation">
      <h1>{currentWord}</h1>
    </div>
  );
};

export default WordAnimation;
