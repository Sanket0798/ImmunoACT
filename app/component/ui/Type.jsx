// import React from "react";
// import Typewriter from "react-typewriter-effect";

// function Type() {
//   return (
//     <Typewriter
//       options={{
//         strings: ["your brand", "your growth", "your success"],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default Type;

import React, { useEffect, useState } from "react";

const phrases = ["Brand", "Growth", "Success"];
const Type = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % phrases.length);
        setDisplayText(""); // Clear text for the next phrase
      }, 2000); // Pause before starting the next phrase
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return <span>{displayText}</span>;
};

export default Type;
