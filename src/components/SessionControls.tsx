// src/components/SessionControls.tsx

import React from "react";

interface SessionControlsProps {
    sessionLength: number;
    incrementSession: () => void;
    decrementSession: () => void;
}

const SessionControls: React.FC<SessionControlsProps> = ({
    sessionLength,
    incrementSession,
    decrementSession,
}) => {
    return (
        <div id="session-controls">
            <h3 id="session-label">Session Length</h3>
            <button id="session-decrement" onClick={decrementSession}>
                -
            </button>
            <span id="session-length">{sessionLength}</span>
            <button id="session-increment" onClick={incrementSession}>
                +
            </button>
        </div>
    );
};

export default SessionControls;
