import { useEffect, useState } from "react";
;

const UseTime=()=>{
    const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date and time here
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

useEffect(() => {
    const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
        clearInterval(interval);
    };
}, [targetDate]);

function calculateTimeLeft(target) {
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
}
  return[timeLeft]
}
export default UseTime;