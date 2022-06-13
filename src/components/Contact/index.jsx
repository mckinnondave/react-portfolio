import './index.scss';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
     }, 3000);
    return () => clearTimeout(timeout);
   }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in a Junior Developer role with a company that I can
            further develop my skills with and provide value for.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
  