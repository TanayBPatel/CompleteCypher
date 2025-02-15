import React, { createContext, useState, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [minutesSpent, setMinutesSpent] = useState(0);

  useEffect(() => {
    const savedTime = parseInt(localStorage.getItem("minutesSpent")) || 0;
    setMinutesSpent(savedTime);

    const interval = setInterval(() => {
      setMinutesSpent((prev) => {
        const updatedTime = prev + 1;
        localStorage.setItem("minutesSpent", updatedTime);
        return updatedTime;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContext.Provider value={{ minutesSpent }}>
      {children}
    </TimerContext.Provider>
  );
};
