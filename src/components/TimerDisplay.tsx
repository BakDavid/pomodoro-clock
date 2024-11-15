// src/components/TimerDisplay.tsx

import React from "react";

interface TimerDisplayProps {
    timeLeft: string;
    mode: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, mode }) => {
    return (
        <div id="timer-display">
            <h3 id="timer-label">{mode}</h3>
            <span id="time-left">{timeLeft}</span>
        </div>
    );
};

export default TimerDisplay;
