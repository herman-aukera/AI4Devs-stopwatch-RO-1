# Stopwatch + Countdown — AI4Devs Prompt Engineering Challenge

## Overview

A minimalist, fully functional stopwatch and countdown timer with milliseconds built using vanilla JavaScript and prompt engineering techniques.

## Features

- Countdown input (in seconds)
- Toggle button: Start → Pause → Continue
- Millisecond-accurate time display (`HH:MM:SS.mmm`)
- Reset button resets time + UI
- No frameworks or libraries used

## How to Run

1. Download or clone this repository
2. Open `index.html` in any browser
3. Enter a countdown time or leave blank to start stopwatch
4. Click “Start” to begin, then use “Pause”, “Continue”, or “Reset”

## Manual Test Cases

- [ ] Input = 10, Start → counts down to 0
- [ ] No input, Start → stopwatch mode increments with ms
- [ ] Pause freezes time (stopwatch + countdown)
- [ ] Continue resumes time accurately
- [ ] Reset clears display + brings button back to Start
- [ ] Edge case: input = 0 behaves as stopwatch
- [ ] Rapid Start/Pause/Continue transitions behave consistently

## Time Spent

- Prompt design: 20 minutes
- Code generation/testing: 45 minutes

## Tools Used

- ChatGPT-4 (May 2025)
- Vanilla JS, HTML5

## Prompt Used

Included in `prompts.md`