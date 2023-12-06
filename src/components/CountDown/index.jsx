import React, { useState,useEffect } from "react";

const CountDown = () => {
    const [ days, setDays ]= useState(0);
    const [ hours, setHours ] = useState(0);
    const[ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds] = useState(0)

    const deadline = "October,20,2024";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
        
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, [])

    return(
        <ul className="timer">
            <li >
                <span className="value">{days}</span>
                <span className="caption">Day</span>
            </li>
            <li>
                <span className="value">{hours}</span>
                <span className="caption">Hours</span>
            </li>
            <li>
                <span className="value">{minutes}</span>
                <span className="caption">Minutes</span>
            </li>
            <li>
                <span className="value">{seconds}</span>
                <span className="caption">Second</span>
            </li>
        </ul>
    );   
};

export default CountDown