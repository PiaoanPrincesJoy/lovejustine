const correctPasscode = "1214";
let enteredPasscode = "";

function enterDigit(digit) {
    if (enteredPasscode.length < 4) {
        enteredPasscode += digit;
        updateDots();
    }

    if (enteredPasscode.length === 4) {
        checkPasscode();
    }
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("filled", index < enteredPasscode.length);
    });
}

function checkPasscode() {
    if (enteredPasscode === correctPasscode) {
        window.location.href = "search.html";
    } else {
        document.getElementById("error-message").textContent = "Incorrect passcode, hint: our anniversary date!";
        setTimeout(() => {
            enteredPasscode = "";
            updateDots();
            document.getElementById("error-message").textContent = "";
        }, 1000);
    }
}

function clearPasscode() {
    enteredPasscode = "";
    updateDots();
    document.getElementById("error-message").textContent = "";
}