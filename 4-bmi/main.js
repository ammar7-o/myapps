
var btn = document.getElementById("ok")
var num = document.getElementById("num")
var result = document.getElementById("result")


btn.addEventListener("click", function(){
  var wi = document.getElementById("wi").value
var li = document.getElementById("li").value
var bmi = wi/(li*li)
num.innerHTML = bmi

switch (true) {
  case (bmi < 18):
    result.innerHTML = "نحيف"
    break;
  case (bmi >= 18 && bmi < 25):
result.innerHTML = "وزن مثالي"
break;
case (bmi > 25 && bmi < 30):
    result.innerHTML = "وزن زائد"
    break;
    case (bmi > 30 && bmi < 35):
result.innerHTML = "سمنة درجة اولى"
break;

case (bmi > 35 && bmi < 40):
result.innerHTML = "سمنة درجة ثانية"
break;

case (bmi > 40):
result.innerHTML = "سمنة خطيرة"
break;
  default:
    // Tab to edit
}
})