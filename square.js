function calculateSquare() {
    const input = document.getElementById("userInput").value;
    const resultScreen = document.getElementById("resultScreen");

    if (!input || isNaN(input)) {
        resultScreen.textContent = "Please enter a valid number.";
    } else {
        const number = parseFloat(input);
        const square = number * number;
        resultScreen.textContent = `${number} squared is ${square}`;
    }
}

// Dark/Light mode toggle
const darkButton = document.querySelector('[data-bs-theme-value="dark"]');
const lightButton = document.querySelector('[data-bs-theme-value="light"]');

darkButton.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
});

lightButton.addEventListener("click", () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
});
