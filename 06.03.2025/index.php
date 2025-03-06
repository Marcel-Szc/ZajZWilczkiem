<?php
// Z1, Z2 
/*
$owoce = ["banan","japko","grucha","awokato"];
foreach($owoce as $kupa){
    echo $kupa . "<br>";
} 
array_push($owoce, "tuskawka");
foreach($owoce as $ow){
    echo $ow . "<br>";
} */
// Z3, Z4, Z15
/*
$samochody = array(
    "marka" => "Toyota",
    "model" => "Corolla",
    "rok" => 2015
); 
asort($samochody);
foreach($samochody as $sam){
    echo $sam . "<br>";
}
array_push($samochody, "kolor", "biały");
foreach($samochody as $sam){
    echo $sam . "<br>";
} */
// Z5
/*
$liczby = [1,2,3,4,5,6,7,8,9,11,22,33,44,55];
if(in_array(10,$liczby)){
    echo "10 jest w tablicy";
} else {
    echo "10 nie jest w tablicy";
} */
// Z6
/*
$tab1 = [1,2,3];
$tab2 = [4,5,6];
$tab3 = array_merge($tab1, $tab2); */
// Z7
/*
$liczby = [9,76,57,353,637,0];
rsort($liczby);
foreach($liczby as $licz){
    echo $licz . "<br>";
} */
// Z8 
/* 
$uczniowie = array(
    array("Jan", 18, "3A"),
    array("Anna", 17, "3B"),
    array("Piotr", 19, "3C")
);
echo $uczniowie[0][0];  */
// Z9, Z10, Z11
/*
$tablic = [4,5,6,7,8];
function sredniaTablicy($tablica){
    return array_sum($tablica);
}
function znajdzNajwieksza($tablica){
    return max($tablica);
}
function iloscElementow($tablica){
    return count($tablica);
}
echo sredniaTablicy($tablic),'<br>', znajdzNajwieksza($tablic), '<br>',iloscElementow($tablic); 
*/
// Z12 
/*
$uczestnicy = ["jan","tan","ban"];
array_pop($uczestnicy); */
// Z13
/*
$produkty = ["mleko", "chleb", "woda"];
array_unshift($produkty,"woda"); */
// Z14 
function znajdzNajwieksza($tablica){
    array_unique($tablica);
} 
?>