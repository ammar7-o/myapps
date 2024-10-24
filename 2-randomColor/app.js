const bg = document.getElementById("bg")
const ok = document.getElementById("ok")

function randomNumber() {
    return Math.random() * 255
}
function randomRGB() {
    var red = randomNumber()
    var green = randomNumber()
    var blue = randomNumber()
    return `rgb(${red}, ${green}, ${blue})`
}

ok.addEventListener("click", function () {
    this.style.backgroundColor = randomRGB()

    setInterval(function () {
        bg.style.backgroundColor = randomRGB()

    }, 2000)


})