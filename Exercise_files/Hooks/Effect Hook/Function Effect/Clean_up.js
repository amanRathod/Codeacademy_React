import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    alert("component rendered for the first time");
    document.addEventListener('mousedown', increment);
    return () => {
      alert("component is being removed from the DOM");
      document.removeEventListener('mousedown', increment); // Specify how to clean up after this effect:
    };
  });

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}
