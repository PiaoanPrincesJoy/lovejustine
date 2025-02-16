function openPopup(imageSrc, description) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-desc").textContent = description;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}