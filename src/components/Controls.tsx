// src/components/Controls.tsx

import React from "react";

interface ControlsProps {
    toggleStartStop: () => void;
    resetTimer: () => void;
    isRunning: boolean;
}

const Controls: React.FC<ControlsProps> = ({
    toggleStartStop,
    resetTimer,
    isRunning,
}) => {
    return (
        <div id="controls">
            <button id="start_stop" onClick={toggleStartStop}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button id="reset" onClick={resetTimer}>
                Reset
            </button>
        </div>
    );
};

export default Controls;
