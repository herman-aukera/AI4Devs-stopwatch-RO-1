
// Grab elements
const timeInput = document.getElementById("timeInput");
const timeDisplay = document.getElementById("timeDisplay");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Timer variables
let timer = null;
let elapsed = 0;
let countdown = 0;
let isRunning = false;
let isPaused = false;
let mode = "stopwatch"; // or "countdown"

// Format seconds into HH:MM:SS
function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// Update time display
function updateDisplay() {
  const time = (mode === "stopwatch") ? elapsed : countdown;
  timeDisplay.textContent = formatTime(time);
}

// Start or resume timer
function startTimer() {
  isRunning = true;
  isPaused = false;
  startPauseBtn.textContent = "Pause";

  timer = setInterval(() => {
    if (mode === "stopwatch") {
      elapsed++;
    } else {
      if (countdown > 0) {
        countdown--;
      } else {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        isRunning = false;
      }
    }
    updateDisplay();
  }, 1000);
}

// Pause logic
function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
  isRunning = false;
  startPauseBtn.textContent = "Continue";
}

// Reset everything
function resetTimer() {
  clearInterval(timer);
  elapsed = 0;
  countdown = parseInt(timeInput.value, 10) || 0;
  mode = countdown > 0 ? "countdown" : "stopwatch";
  isRunning = false;
  isPaused = false;
  startPauseBtn.textContent = "Start";
  updateDisplay();
}

// Event listeners
startPauseBtn.addEventListener("click", () => {
  if (!isRunning && !isPaused) {
    const input = parseInt(timeInput.value, 10);
    if (input > 0) {
      mode = "countdown";
      countdown = input;
    } else {
      mode = "stopwatch";
    }
    startTimer();
  } else if (isRunning) {
    pauseTimer();
  } else if (isPaused) {
    startTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

// Initial display
updateDisplay();