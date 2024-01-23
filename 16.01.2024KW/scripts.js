function kliku() {
    var A = document.getElementById("A").value;
    var B = document.getElementById("B").value;
    var C = document.getElementById("C").value;


    if(document.getElementById("doda").checked) {
        var wynik = parseInt(A) + parseInt(B) + parseInt(C);
        document.getElementById("wynik").textContent = wynik;
    }

     else if(document.getElementById("odej").checked) {
        var wynik = parseInt(A) - parseInt(B) - parseInt(C);
        document.getElementById("wynik").textContent = wynik;
    }

    else if(document.getElementById("Mnoż").checked) {
        var wynik = parseInt(A) * parseInt(B) * parseInt(C);
        document.getElementById("wynik").textContent = wynik;
    }

    else if(document.getElementById("Dziel").checked & B != 0 & A != 0) {  
            var wynik = parseInt(A) / parseInt(B) / parseInt(C);
           document.getElementById("wynik").textContent = wynik;
           console.log("działa");
          }
          else {
            document.getElementById("wynik").textContent = "Nie dziel przez zero!!!!!";
           }
    if(A % 2 == 0) {
        document.getElementById("parzystoscA").textContent = "Liczba A(" + A +") jest parzysta";
        document.getElementById("parzystoscA").style.color = "green";
    }
    else if (A % 2 > 0) {
        document.getElementById("parzystoscA").textContent = "Liczba A(" + A +") nie jest parzysta";
        document.getElementById("parzystoscA").style.color = "red";
    }

    if(B % 2 == 0) {
        document.getElementById("parzystoscB").textContent = "Liczba B(" + B +") jest parzysta";
        document.getElementById("parzystoscB").style.color = "green";
    }
    else if (B % 2 > 0) {
        document.getElementById("parzystoscB").textContent = "Liczba B(" + B +") nie jest parzysta";
        document.getElementById("parzystoscB").style.color = "red";
    }
    
    if(C % 2 == 0) {
        document.getElementById("parzystoscC").textContent = "Liczba C(" + C +") jest parzysta";
        document.getElementById("parzystoscC").style.color = "green";
    }
    else if (C  % 2 > 0) {
        document.getElementById("parzystoscC").textContent = "Liczba C(" + C +") nie jest parzysta";
        document.getElementById("parzystoscC").style.color = "red";
    }
    

    if (wynik > 100 & wynik < 200 & wynik % 2 == 0 & wynik % 3 == 0 & wynik % 5 == 0) {
        alert("Wygrałeś🤫🧏‍♀️🤫🧏‍♀️🤫🧏‍♀️🤫🧏‍♀️🤫🧏‍♀️");
    }
    else {
        alert("Beka z ciebie bambiku")
    }
}