import { useState, useEffect } from 'react';

const Timer = () => {
  // Starts with a countdown
  const initialTime = 4 * 24 * 60 * 60; 
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate days, hours, minutes, and seconds from the time remaining and pad with a 0 if less than 10
  const days = String(Math.floor(time / (3600 * 24))).padStart(2, '0');
  const hours = String(Math.floor((time % (3600 * 24)) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return (
    <div className="flex justify-center">
      {/* Days */}
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-sm font-poppins">Days</span>
        <span className="text-[32px] font-[inter] font-bold text-black">{days}</span>
      </div>
      <span className="text-2xl font-bold text-primary mx-2 my-auto">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-sm font-poppins">Hours</span>
        <span className="text-[32px] font-[inter] font-bold text-black">{hours}</span>
      </div>
      <span className="text-2xl font-bold text-primary mx-2 my-auto">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-sm font-poppins">Minutes</span>
        <span className="text-[32px] font-[inter] font-bold text-black">{minutes}</span>
      </div>
      <span className="text-2xl font-bold text-primary mx-2 my-auto">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-sm font-poppins">Seconds</span>
        <span className="text-[32px] font-[inter] font-bold text-black">{seconds}</span>
      </div>

    </div>
  );
};

export default Timer;
