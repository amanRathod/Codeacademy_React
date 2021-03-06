import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // Specify how to clean up after this effect: to avoid memory leaks
    return () => {
      
      clearInterval(intervalId);
    };
  }, []); //depedency array: his tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}