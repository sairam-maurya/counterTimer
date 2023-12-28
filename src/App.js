import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setCountdown(60);
    setIsRunning(false);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setCountdown(newValue);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md mt-8">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Set Countdown Time (seconds):
          <input
            type="number"
            value={countdown}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">
          Current Countdown: {countdown} seconds
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={startCountdown}
          disabled={isRunning}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Start Countdown
        </button>
        <button
          onClick={stopCountdown}
          disabled={!isRunning}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Stop Countdown
        </button>
        <button
          onClick={resetCountdown}
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md"
        >
          Reset Countdown
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
