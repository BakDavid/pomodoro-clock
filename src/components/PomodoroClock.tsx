// src/components/PomodoroClock.tsx

import React, { useState, useEffect, useRef } from "react";
import BreakControls from "./BreakControls";
import SessionControls from "./SessionControls";
import TimerDisplay from "./TimerDisplay";
import Controls from "./Controls";
import "../styles/PomodoroClock.css";

const PomodoroClock: React.FC = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("Session");

    const intervalRef = useRef<number | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const incrementBreak = () =>
        setBreakLength((prev) => Math.min(prev + 1, 60));
    const decrementBreak = () =>
        setBreakLength((prev) => Math.max(prev - 1, 1));

    const incrementSession = () => {
        const newLength = Math.min(sessionLength + 1, 60);
        setSessionLength(newLength);
        if (!isRunning) setTimeLeft(newLength * 60);
    };
    const decrementSession = () => {
        const newLength = Math.max(sessionLength - 1, 1);
        setSessionLength(newLength);
        if (!isRunning) setTimeLeft(newLength * 60);
    };

    const resetTimer = () => {
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(1500);
        setIsRunning(false);
        setMode("Session");
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const toggleStartStop = () => {
        if (isRunning) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsRunning(false);
        } else {
            intervalRef.current = window.setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        if (audioRef.current) audioRef.current.play();
                        if (mode === "Session") {
                            setMode("Break");
                            return breakLength * 60;
                        } else {
                            setMode("Session");
                            return sessionLength * 60;
                        }
                    }
                    return prev - 1;
                });
            }, 1000);
            setIsRunning(true);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
            2,
            "0"
        )}`;
    };

    return (
        <div className="pomodoro-clock">
            <BreakControls
                breakLength={breakLength}
                incrementBreak={incrementBreak}
                decrementBreak={decrementBreak}
            />
            <SessionControls
                sessionLength={sessionLength}
                incrementSession={incrementSession}
                decrementSession={decrementSession}
            />
            <TimerDisplay timeLeft={formatTime(timeLeft)} mode={mode} />
            <Controls
                toggleStartStop={toggleStartStop}
                resetTimer={resetTimer}
                isRunning={isRunning}
            />
            <audio
                id="beep"
                ref={audioRef}
                src="src\assets\audio\BeepSound.wav"
            />
        </div>
    );
};

export default PomodoroClock;
