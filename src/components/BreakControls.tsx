// src/components/BreakControls.tsx

import React from "react";

interface BreakControlsProps {
    breakLength: number;
    incrementBreak: () => void;
    decrementBreak: () => void;
}

const BreakControls: React.FC<BreakControlsProps> = ({
    breakLength,
    incrementBreak,
    decrementBreak,
}) => {
    return (
        <div id="break-controls">
            <h3 id="break-label">Break Length</h3>
            <button id="break-decrement" onClick={decrementBreak}>
                -
            </button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={incrementBreak}>
                +
            </button>
        </div>
    );
};

export default BreakControls;
