import { useState, useEffect } from "react";

function TimerWidget() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      clearInterval(timer);
      setIsRunning(false);
      alert("Time's Up!");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      return;
    }

    const total =
      Number(hours) * 3600 +
      Number(minutes) * 60 +
      Number(seconds);

    if (total === 0) {
      alert("Please enter a valid time");
      return;
    }

    setTimeLeft(total);
    setIsRunning(true);
  };

  const pauseTimer = () => setIsRunning(false);

  const resumeTimer = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="card timer-card">

      <div className="timer-circle">

        <h1>
          {String(h).padStart(2, "0")}:
          {String(m).padStart(2, "0")}:
          {String(s).padStart(2, "0")}
        </h1>

      </div>

      <div className="timer-inputs">

        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />

        <input
          type="number"
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />

      </div>

      <div className="timer-buttons">

        <button onClick={startTimer}>Start</button>

        <button onClick={pauseTimer}>Pause</button>

        <button onClick={resumeTimer}>Resume</button>

        <button onClick={resetTimer}>Reset</button>

      </div>

    </div>
  );
}

export default TimerWidget;