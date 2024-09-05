function funkcja(){
    var num1 = document.getElementById("liczba1").value;

    var num2 = document.getElementById("liczba2").value;

    var imie = document.getElementById("imie").value;

    var nazwisko = document.getElementById("nazwisko").value;

    var content = document.getElementById("txt").value;


    num3 = parseInt(num1) + parseInt(num2);

    if (num3 % 2 == 0) {
        alert("Suma dodawania liczby 1 i liczby 2 jest parzysta, a oto informacje które podałeś: " + imie + ", " + nazwisko + ", " + content);
    } else if (num3 % 2 > 0) {
        alert("Suma dodawania liczby 1 i liczby 2 nie jest parzysta");
    } else {
        alert ("Błąd");
    }
}