const shareButton = document.getElementById("share-button")
const shareOptions = document.getElementById("share-options")

shareButton.addEventListener('click', () => {
    shareOptions.classList.toggle("display")
    shareButton.classList.toggle("active")
})