let isOpen = false;

function toggleLetter() {
    const letter = document.querySelector('.letter');
    const flap = document.querySelector('.flap');

    if (isOpen) {
        letter.style.transform = "translateY(100%) scale(0.9)";
        letter.style.opacity = "0"; 
        letter.style.zIndex = "-1"; // Moves letter behind the envelope
        flap.style.transform = "rotate(0deg)";
    } else {
        letter.style.transform = "translateY(-120%) scale(1)";
        letter.style.opacity = "1"; 
        letter.style.zIndex = "2"; // Moves letter on top of envelope
        flap.style.transform = "rotateX(180deg)";
    }

    isOpen = !isOpen;
}