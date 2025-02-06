<?php 
# Zadanie 1
/*
$nazwa = "PHP";
echo $nazwa;
*/
# Zadanie 2
/*
$liczba1 = 15;
$liczba2 = 5;
echo $liczba1 + $liczba2, "<br>";
echo $liczba1 - $liczba2, "<br>";
echo $liczba1 * $liczba2, "<br>";
echo $liczba1 / $liczba2, "<br>";
echo $liczba1 % $liczba2, "<br>";
*/
# Zadanie 3
/*
if (10 > 5){
    echo "10 jest większe od 5";
} else {
    echo "10 nie jest większe od 5";
}
*/
# Zadanie 4
/*
$kolory = ['czerwony', 'zielony', 'niebieski'];
foreach($kolory as $kolor){
    echo $kolor, "<br>";
}
*/
# Zadanie 5
/*
$zmienna = true;
var_dump($zmienna);
*/
# Zadanie 6
/*
for ($i = 1; $i <= 10; $i++){
    echo $i, "<br>";
}
*/
# Zadanie 7
/*
$wiek = 120;
if ($wiek < 18){
    echo "Zmienna wiek: ", $wiek, " jest mniejsza od 18";
} else if($wiek > 18){
    echo "Zmienna wiek: ", $wiek, " jest większa od 18";
} else {
    echo "Zmienna wiek jest równa ", $wiek;
}
*/
# Zadanie 8
/*
$dzien = date("l");
if ($dzien == "sunday" || $dzien == "saturday") {
    echo $dzien, " to Weekend";
} else {
    echo $dzien, " to Dzień roboczy";
}
*/
# Zadanie 9
/*
$i = 2;
while($i <= 20) {
    if ($i % 2 == 0){
        echo $i, "<br>";
    }
    $i++;
}
*/
# Zadanie 10
function funkcja($zmiennaF1, $zmiennaF2){ 
    return $zmiennaF1 + $zmiennaF2;
}
echo funkcja(3,5);
?>