let shareButton = document.getElementById("share-button")
let shareOptions = document.getElementById("share-options")

shareButton.addEventListener('click', () => {
    shareOptions.classList.toggle("display")
    shareButton.classList.toggle("active")
})