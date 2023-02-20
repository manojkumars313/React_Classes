import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = React.useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= 30) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 30;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const restartTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const seconds = `0${time % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60)}`;

  return (
    <div>
      <h2>
        {minutes}:{seconds}
      </h2>
      {isRunning ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={restartTimer}>Restart</button>
    </div>
  );
};

export default Timer;

// import React, { useEffect, useState } from "react";

// function Timer() {
//   const [time, setTimer] = useState(0);
//   const [timeRunning, setTimeRunning] = useState(false);

//   useEffect(() => {
//     let Timer;

//     if (timeRunning) {
//       Timer = setInterval(() => {
//         setTimer((prevTimer) => prevTimer + 1);
//       }, 1000);
//     }

//     return () => clearInterval(Timer);
//   }, [timeRunning]);

//   const handlePlayPauseClick = () => {
//     setTimeRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const handleRestartClick = () => {
//     setTimer(0);
//     setTimeRunning(false);
//   };

//   useEffect(() => {
//     if (time === 30) {
//       setTimeRunning(true);
//     }
//   }, [time]);

//   return (
//     <div>
//       <h1>Timer:{time}</h1>
//       <button onClick={handlePlayPauseClick}>
//         {timeRunning ? "Pause" : "Play"}
//       </button>
//       <button onClick={handleRestartClick}>Restart</button>
//     </div>
//   );
// }

// export default Timer;
