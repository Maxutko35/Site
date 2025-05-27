let timerDisplay = document.getElementById("timer-display");
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let timer;
let milliseconds = 0;

function updateDisplay() {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    let ms = Math.floor((milliseconds % 1000) / 10);
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

startBtn.addEventListener("click", () => {
    if (startBtn.textContent === "Start") {
        startBtn.textContent = "Pause";
        timer = setInterval(() => {
            milliseconds += 10;
            updateDisplay();
        }, 10);
    } else {
        startBtn.textContent = "Start";
        clearInterval(timer);
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    milliseconds = 0;
    updateDisplay();
    startBtn.textContent = "Start";
});

updateDisplay();
