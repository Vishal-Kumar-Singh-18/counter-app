const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");

resetBtn.addEventListener("click", () => {
    displayValue.textContent = "0";
});

decrementBtn.addEventListener("click", () => {
    displayValue.textContent = Number(displayValue.textContent) - 1;
});

incrementBtn.addEventListener("click", () => {
    displayValue.textContent = Number(displayValue.textContent) + 1;
});

