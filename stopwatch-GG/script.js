const timeInput = document.getElementById("timeInput");
const timeDisplay = document.getElementById("timeDisplay");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let remainingTime = 0;
let mode = "idle"; // "stopwatch" | "countdown" | "paused"
let countdownDuration = 0;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(ms % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay(ms) {
  timeDisplay.textContent = formatTime(ms);
}

function startTimer() {
  const inputSeconds = parseInt(timeInput.value, 10);

  if (!isNaN(inputSeconds) && inputSeconds > 0) {
    mode = "countdown";
    countdownDuration = inputSeconds * 1000;
    remainingTime = countdownDuration;
  } else {
    mode = "stopwatch";
    elapsedTime = 0;
  }

  startTime = Date.now();
  timer = setInterval(runTimer, 10);
  startPauseBtn.textContent = "Pause";
}

function runTimer() {
  const now = Date.now();
  const delta = now - startTime;

  if (mode === "stopwatch") {
    updateDisplay(elapsedTime + delta);
  } else if (mode === "countdown") {
    const timeLeft = Math.max(0, remainingTime - delta);
    updateDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      startPauseBtn.textContent = "Start";
      mode = "idle";
    }
  }
}

function pauseTimer() {
  clearInterval(timer);
  const now = Date.now();
  const delta = now - startTime;

  if (mode === "stopwatch") {
    elapsedTime += delta;
  } else if (mode === "countdown") {
    remainingTime -= delta;
  }

  mode = "paused";
  startPauseBtn.textContent = "Continue";
}

function resumeTimer() {
  startTime = Date.now();
  timer = setInterval(runTimer, 10);
  startPauseBtn.textContent = "Pause";
  if (countdownDuration > 0) {
    mode = "countdown";
  } else {
    mode = "stopwatch";
  }
}

function resetTimer() {
  clearInterval(timer);
  updateDisplay(0);
  elapsedTime = 0;
  remainingTime = 0;
  countdownDuration = 0;
  mode = "idle";
  startPauseBtn.textContent = "Start";
}

startPauseBtn.addEventListener("click", () => {
  if (mode === "idle") {
    startTimer();
  } else if (mode === "paused") {
    resumeTimer();
  } else {
    pauseTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

updateDisplay(0);