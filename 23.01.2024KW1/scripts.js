function kliku() {
    var C = Math.PI;

    var AT = document.getElementById("AT").value;
    var BT = document.getElementById("BT").value;
    var CT = document.getElementById("CT").value;
    var HT = document.getElementById("HT").value;

    var RK = document.getElementById("RK").value;

    var AKw = document.getElementById("AKw").value;

    var AP = document.getElementById("AP").value;
    var BP = document.getElementById("BP").value;

    var ARom = document.getElementById("ARom").value;
    var HRom = document.getElementById("HRom").value;

    var ARow = document.getElementById("ARow").value;
    var HRow = document.getElementById("HRow").value;
    
    var ATra = document.getElementById("ATra").value;
    var BTra = document.getElementById("BTra").value;
    var HTra = document.getElementById("HTra").value;


    if(document.getElementById("trojkat").checked & AT != 0 & HT != 0) {
        var wynik = (parseInt(AT) * parseInt(HT)) / 2 ;
        document.getElementById("wynik").textContent = wynik;
        if (AT == BT && AT != CT && BT != CT || CT == AT && CT != BT && AT != BT|| BT == CT && BT != AT && CT != AT) {
            document.getElementById("wtr").textContent = "trójkąt jest Równoramienny";
            }
        else if (AT == BT && CT == BT && AT == CT) {
            document.getElementById("wtr").textContent = "trójkąt jest Równoboczny";
        }
        else if (AT != BT != CT) {
            document.getElementById("wtr").textContent = "trójkąt jest Różnoboczny";
        } 
        else {
            document.getElementById("wtr").textContent = "nie można stworzyć trójkąta";
            console.log("dzial");
            }
        }     

     else if(document.getElementById("kolo").checked & RK != 0) {
        var D = parseInt(RK) * C;
        var wynik = Math.pow(D, 2)  ;
        document.getElementById("wynik").textContent = wynik;
    }
    else if(document.getElementById("kwadrat").checked & AKw != 0) {
        var wynik = parseInt(AKw) * parseInt(AKw);
        document.getElementById("wynik").textContent = wynik;
    }
    else if(document.getElementById("prostokat").checked & AP != 0 & BP != 0) {
        var wynik = parseInt(AP) * parseInt(BP);
        document.getElementById("wynik").textContent = wynik;
    }
    else if(document.getElementById("romb").checked & ARom != 0 & HRom != 0) {
        var wynik = parseInt(ARom) * parseInt(HRom);
        document.getElementById("wynik").textContent = wynik;
    }
    else if(document.getElementById("rownoleglobok").checked & ARow != 0 & HRow != 0) {
        var wynik = parseInt(ARow) * parseInt(HRow);
        document.getElementById("wynik").textContent = wynik;
    }
    else if(document.getElementById("trapez").checked & ATra != 0 & BTra != 0 & HTra != 0) {
        var C = parseInt(ATra) + parseInt(BTra);
        var D = C * parseInt(HTra);
        var wynik = D / 2;
        document.getElementById("wynik").textContent = wynik;
    }
    else {
        document.getElementById("wynik").textContent = "Nie dziel przez zero bambiku!";
       }
}   