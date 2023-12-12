
const a = 4;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
b=8;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

function getValue() {
    var inputValue = document.getElementById("text").value;
    document.getElementById("result").innerText = inputValue;
    console.log(inputValue);  
}

function changeColor(){
    document.getElementById("result").style.color = "red";
}

function changeBg(){
    document.getElementById("result").style.background = "yellow";
}

function change(color){
    document.getElementById("result").style.color = color;
}