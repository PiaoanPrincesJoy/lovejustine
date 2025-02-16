// Open the popup
function openPopup(title, description, imageSrc) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").src = imageSrc;
    document.getElementById("popup").style.display = "flex";

let text = `This is an example of a template literal with closing backtick`;
console.log(text);

}
// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}