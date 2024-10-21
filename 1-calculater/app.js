var output = document.getElementById('calc')

function display(num){
    output.value += num
}
function Delete(){
    output.value = output.value.slice(0, -1)
}

function calc(){
    try {
        output.value = eval(output.value);
     }
     catch(err) {
         output.value = "Error";
     }
}

function Clear(){
    output.value = ""

}


// }
// let number = "12345612345";
// console.log(number.slice(0, -1));