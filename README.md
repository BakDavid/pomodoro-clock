# Pomodoro Clock ⏳

A **Pomodoro Clock** application built with React and TypeScript, featuring a responsive dark-themed interface. This app allows users to set work (session) and break intervals, tracking time for focused work periods and short breaks. It adheres to all the user stories outlined in the project requirements and passes all functional tests.

## Live Demo

[Visit the live demo](https://bakdavid.github.io/pomodoro-clock)

## Table of Contents

-   [Features](#features)
-   [User Stories](#user-stories)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **Timer Control**: Set custom session and break durations.
-   **Dark Theme**: Modern, sleek, and centered interface with dark mode.
-   **Countdown Display**: Displays time remaining in `mm:ss` format.
-   **Audio Alerts**: Plays a beep sound when each interval ends.
-   **Pause and Resume**: Start, stop, and resume the timer with ease.
-   **Session and Break Switching**: Automatically switches between work and break intervals.

## User Stories

This project satisfies the following user stories:

1. **Session and Break Labels**: Display labels for session and break durations.
2. **Increment/Decrement Controls**: Adjust session and break lengths with increment and decrement buttons.
3. **Default Values**: Session length defaults to 25 minutes, and break length defaults to 5 minutes.
4. **Timer Display**: Shows time remaining in `mm:ss` format, counting down each second.
5. **Start/Stop and Reset**: Controls to start, pause, and reset the timer.
6. **Audio Notification**: Beep sound plays at the end of each interval.
7. **Interval Switching**: Automatically alternates between session and break intervals when the timer reaches zero.
8. **Value Limits**: Prevents session or break lengths from being set below 1 or above 60.

## Project Structure

```
pomodoro-clock/
├── src/
│ ├── components/
│ │ ├── PomodoroClock.tsx # Main Pomodoro clock component
│ │ ├── BreakControls.tsx # Controls for break interval
│ │ ├── SessionControls.tsx # Controls for session interval
│ │ ├── TimerDisplay.tsx # Displays the timer and current mode
│ │ ├── Controls.tsx # Start, stop, and reset buttons
│ ├── styles/
│ │ └── PomodoroClock.css # Styling for the Pomodoro clock
│ ├── App.tsx # Root app component
│ └── main.tsx # App entry point
└── README.md
```

### Component Breakdown

-   **PomodoroClock.tsx**: Main component that manages the timer state, intervals, and mode switching.
-   **BreakControls.tsx & SessionControls.tsx**: Components for adjusting break and session durations with increment and decrement buttons.
-   **TimerDisplay.tsx**: Displays the countdown time and current mode (Session/Break).
-   **Controls.tsx**: Buttons for starting, stopping, and resetting the timer.
-   **PomodoroClock.css**: CSS for dark-themed styling, centered layout, and responsive design.

## Installation

1. **Clone the repository**:

```
git clone https://github.com/bakdavid/pomodoro-clock.git
cd pomodoro-clock
```

2. **Install dependencies**:

```
npm install
```

3. **Start the development server**:

```
npm start
```

The app will be available at `http://localhost:3000` by default.

## Usage

1. Adjust Break and Session Durations: Use the increment and decrement buttons to set custom lengths for breaks and sessions.
2. Start the Timer: Press the `Start/Stop` button to begin the countdown.
3. Pause/Resume: Press `Start/Stop` again to pause or resume.
4. Reset the Timer: Press `Reset` to stop the countdown, reset times to default values (5 minutes for break and 25 minutes for session), and clear the display.
5. Audio Alert: A beep sound will play when the timer switches between work and break modes.

## Key Features and Behavior

-   Timer Behavior: The timer switches between session and break intervals automatically when each countdown reaches zero.
-   Audio Alert: A sound plays when the timer reaches zero to signal the start of the next interval.
-   Formatting: Countdown is shown in `mm:ss` format, e.g., `25:00` for a 25-minute session.
-   Bounds: Users cannot set the break or session lengths below 1 or above 60 minutes.

## Technologies Used

-   React with TypeScript for component-based architecture and type safety.
-   CSS for responsive dark-theme styling.
-   HTML5 Audio for alert sounds.
-   React Hooks: `useState`, `useEffect`, and `useRef` for managing the timer logic and component state.

## Contributing

Contributions are welcome! Feel free to fork this project, open issues, and submit pull requests.

1. Fork the repository.
2. Create a new branch for your feature or bugfix.

```
git checkout -b feature-name
```

3. Make your changes and commit them.

```
git commit -m "Add new feature"
```

4. Push to your fork

```
git push origin feature-name
```

5. Submit a pull request to the `master` branch.

## License

This project is licensed under the MIT License.
