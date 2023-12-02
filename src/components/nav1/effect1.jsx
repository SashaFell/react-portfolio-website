import React, { useState, useEffect } from 'react';

const RandomTextAnimation = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("");
  let interval = null;

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setText((prevText) => {
        return prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return prevText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const h1Element = document.querySelector("a");
    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(interval);
      h1Element.removeEventListener("mouseover", handleMouseOver);
    };
  }, [interval]);

  return <a>{text}</a>;
};

export default RandomTextAnimation;