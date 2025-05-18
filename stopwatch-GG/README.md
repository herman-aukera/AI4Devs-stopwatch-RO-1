# Stopwatch + Countdown – AI4Devs Project

## Overview

This app is a dual-mode stopwatch and countdown timer that runs entirely in the browser using vanilla JavaScript. It mimics the core functionality and interface of [Online Stopwatch](https://www.online-stopwatch.com).

## Features

- Input seconds to run countdown
- If no input, acts as a stopwatch
- Start button toggles to Pause and Continue
- Reset resets both timer and UI state
- Pure HTML + JS, no frameworks or build tools

## Technologies

- HTML5
- JavaScript (ES6+)
- No libraries or CSS frameworks

## How to Run

1. Clone or download this repo
2. Open `index.html` in any browser
3. Type a number (seconds) for countdown or leave empty for stopwatch
4. Press **Start** to begin
5. Use **Pause**, **Continue**, or **Reset** accordingly

---

## Time Spent

- Prompt iteration: 25 mins
- Coding via ChatGPT: 40 mins
- Testing and formatting: 15 mins

## Chatbot Used

- ChatGPT-4 (Prompt engineering assisted)
- Full prompt history in `prompts.md`

---

## Test Cases (Manual)

### 🎯 Core UI

- [ ] App loads and displays `00:00:00`
- [ ] Countdown input accepts numbers only
- [ ] Start button is visible and labeled properly
- [ ] Time updates every second on start

### 🛠 Stopwatch Logic

- [ ] Without input, pressing Start begins stopwatch
- [ ] Timer increases every second
- [ ] Pause freezes time
- [ ] Continue resumes exactly from paused state
- [ ] Reset brings everything to `00:00:00` and resets UI

### ⏲ Countdown Logic

- [ ] Input `10` → Start → counts down from 10 to 0
- [ ] At `0`, timer stops and button resets to “Start”
- [ ] Reset cancels the countdown

### 📉 Edge Cases

- [ ] Input non-number → treated as stopwatch
- [ ] Start → Pause → Reset = all correct UI updates
- [ ] Start → Reset mid-countdown = resets all
- [ ] Input = 0 → treated as stopwatch

---