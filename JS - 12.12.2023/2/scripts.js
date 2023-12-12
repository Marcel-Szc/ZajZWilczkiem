function clickResult1() { 
    document.getElementById("result").textContent = "czcionka zmieniona na 1 Rem!";
    document.getElementById("HTXT").style.fontSize = "1rem";
}
function clickResult2() { 
    document.getElementById("result").textContent = "czcionka zmieniona na 1.5 Rem!";
    document.getElementById("HTXT").style.fontSize = "1.5rem";
    console.log(textContent); 
}
function clickResult3() { 
    document.getElementById("result").textContent = "czcionka zmieniona na 2 Rem!";
    document.getElementById("HTXT").style.fontSize = "2rem";
}
function clickResult4() { 
    var inputValue = document.getElementById("text").value;
    document.getElementById("result").textContent= "czcionka zmieniona na " + inputValue + " rem";
    document.getElementById("HTXT").style.fontSize = inputValue + "rem";
    console.log(inputValue);  
}
function clickResult5() { 
    document.getElementById("result").textContent = "kolor czcionki zmieniony na żółty, a kolor tła na czarny!";
    document.getElementById("H").style.background = "black";
    document.getElementById("HTXT").style.color = "yellow";
}
function clickResult6() { 
    document.getElementById("result").textContent = "kolor czcionki zmieniony na czarny, a kolor tła na żółty!";
    document.getElementById("H").style.background = "yellow";
    document.getElementById("HTXT").style.color = "black";
}
function clickResult7() { 
    document.getElementById("result").textContent = "dodano podkreślenie!";
    document.getElementById("HTXT").style.textDecoration = "underline";
}
function clickResult8() { 
    document.getElementById("result").textContent = "zresetowano wartości!";
    document.getElementById("HTXT").style.fontSize = "1rem";
    document.getElementById("H").style.background = "white";
    document.getElementById("HTXT").style.color = "black";
    document.getElementById("HTXT").style.textDecoration = "none";
}
function clickResult9() { 
    var inputValue = document.getElementById("TXT1").value;
    document.getElementById("result").textContent= "kolor czcionki zmieniony na " + inputValue + "!";
    document.getElementById("HTXT").style.color = inputValue;
}
function clickResult10() { 
    var inputValue = document.getElementById("TXT2").value;
    document.getElementById("result").textContent= "kolor tła zmieniony na " + inputValue + "!";
    document.getElementById("H").style.background = inputValue; 
}