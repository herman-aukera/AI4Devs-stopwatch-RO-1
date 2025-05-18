# Prompt Iteration History

## v1
Act as a senior frontend AI code assistant.

🎯 Task: Help me generate a small, modular stopwatch + countdown app using prompt engineering. The app should match the UI of https://www.online-stopwatch.com. Assume the user is not an expert developer, so include clear comments, modular structure, and no frameworks.

🧠 Constraints:
- Use only vanilla JavaScript (ES6+)
- HTML/CSS should be minimal and readable
- No build tools or frameworks
- Named functions only
- Use modern JS DOM APIs (e.g. textContent, not execCommand)

📁 Required files:
1. index.html:
   - Input for time (countdown)
   - Buttons for start after pushed it turns into pause after pushed it turn into continue and other one for reset that turns the pause/continue button back to start
   - Display area for time
2. script.js:
   - Logic for stopwatch and countdown
   - Toggle visibility of controls
   - Named functions and clear separation
3. README.md:
   - Explain what the app does
   - How to run it locally
   - Time spent, tools used, prompt(s) used
4. prompts.md:
   - All iterations of prompt(s) used
   - Which chatbot generated the code

🛠️ Additional:
- Explain what each file does step-by-step in the output
- All code should be copy-paste ready and executable locally
- Focus on maintainability

Finally you turn now  a test automation expert. Help me write test cases in plain English (not automated) for a vanilla JS stopwatch/countdown app. Cover UI interactions, edge cases, and timing logic. Output in markdown list format. and wrap all in the read me.

Start reasoning step-by-step before generating any code. Only output valid markdown.

## v2 — Final Version Used

Act as a senior frontend AI code assistant.

🎯 Task: Help me generate a small, modular stopwatch + countdown app using prompt engineering. The app should match the UI of https://www.online-stopwatch.com. Assume the user is not an expert developer, so include clear comments, modular structure, and no frameworks.

🧠 Constraints:
- Use only **vanilla JavaScript (ES6+)**
- HTML/CSS should be **minimal and readable**
- Show **milliseconds** in display (e.g. `00:00:00.000`)
- Use **named functions only**
- Use **modern JS DOM APIs** (e.g. `textContent`, not deprecated APIs)
- No frameworks, build tools, or third-party libraries
- Buttons:
  - “Start” becomes “Pause”
  - “Pause” becomes “Continue”
  - “Reset” always resets and brings back “Start”

📁 Required files:
1. `index.html`:
   - Input for time (countdown in seconds)
   - Display area that shows hours:minutes:seconds:milliseconds
   - Two buttons: toggle (`Start` ↔ `Pause` ↔ `Continue`) and `Reset`
2. `script.js`:
   - Logic for both stopwatch and countdown
   - Handles display updates with milliseconds
   - Clearly separated, named functions
3. `README.md`:
   - Explain what the app does
   - How to run it locally
   - Tools used, time spent, chatbot + final prompt used
   - Include manual test cases in markdown
4. `prompts.md`:
   - Include this exact prompt
   - Track how many versions were iterated and what was used

🛠️ Additional:
- Output all code and markdown files clearly separated and ready to copy-paste.
- All explanations should be clear for **non-experts**.
- Start with **step-by-step reasoning**, then generate the code and docs.