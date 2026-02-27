let modal = document.querySelector("#search_modal")
let button = document.querySelector("#search_button")
let button2 = document.querySelector("#search_button_close")
button.addEventListener("click", () => {
    if (modal.classList.contains("closed")) {
        modal.classList.add("open")
        modal.classList.remove("closed")
    }
})
button2.addEventListener("click", () => {
    if (modal.classList.contains("open")) {
        modal.classList.remove("open")
        modal.classList.add("closed")
    }
})