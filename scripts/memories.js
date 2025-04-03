function openPopup(imageSrc, description) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-desc").textContent = description;
    document.getElementById("popup").style.display = "flex";

    // Stop background scrolling
    document.body.classList.add("no-scroll");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";

    // Re-enable scrolling
    document.body.classList.remove("no-scroll");
}
