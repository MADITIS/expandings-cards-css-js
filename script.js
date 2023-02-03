const card = document.querySelectorAll(".card")
const cards = document.querySelector('.cards')

cards.addEventListener("mousedown", mousedownHanlder)

function mousedownHanlder(event) {
    let target = event.target
    if (target.parentElement == cards) {
        target.classList.add("active")
        card.forEach((value) => {
            if (value != target) {
                value.classList.remove("active")
            }
        })
    }
}