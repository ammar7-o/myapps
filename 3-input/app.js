const inp = document.getElementById("inp")
const ok = document.getElementById("ok")
const result = document.getElementById("result")

ok.onclick = function(){
    if (inp.value !== ""){
        result.innerHTML = "Entre the password please"

        inp.value = ""
    }else {
        alert("please enter the password")
    }

    if (inp.value.length < 3) {
        result.innerHTML = "entre a value > 3"

    }
}