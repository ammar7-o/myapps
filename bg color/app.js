var ul = document.getElementById("colors");
var result = document.getElementById("resulte");
var arr = [];
// // Load color from localStorage if it exists
if (localStorage.getItem("color") || []) {
    arr.push(localStorage.getItem("color"))
    result.style.backgroundColor = arr;
}

for (var i = 0; i < ul.children.length; i++) {
    ul.children[i].addEventListener("mousemove", function () {
        let color = this.getAttribute("color")
        arr.push(color)
        result.style.backgroundColor = color;
        localStorage.setItem("color", color)
    })
}





// // Load color from localStorage if it exists
// if (localStorage.getItem("color")) {
//     let savedColor = localStorage.getItem("color");
//     arr.push(savedColor);
//     result.style.backgroundColor = savedColor;
// }

// for (var i = 0; i < ul.children.length; i++) {
//     ul.children[i].addEventListener('click', function () {
//         arr = [];
//         let color = this.getAttribute("color");
//         arr.push(color);
//         result.style.backgroundColor = color;
//         localStorage.setItem("color", color);
//     });
// }
