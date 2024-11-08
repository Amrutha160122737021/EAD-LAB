import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to manage the timer interval
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
}

export default TimerComponent;
