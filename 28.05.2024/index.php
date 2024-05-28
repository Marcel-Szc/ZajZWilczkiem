<?php 
declare(strict_types=1);
?>
<?php 
//Zadanie 1
/* 
$liczba = 1;
if($liczba < 0) {
    echo("<p> liczba jest ujemna! </p>");
}else if($liczba > 0) {
    echo("<p> liczba jest dodatnia! </p>");
} 
*/
//Zadanie 2-------------------------------------------------------------------
/* 
$a = 4;
$b = 5;
if($b > $a) {
    echo("LIczba ".$b." jest większa od ".$a);
}else if($a > $b) {
    echo("LIczba ".$a." jest większa od ".$b);
}
*/
//Zadanie 3-------------------------------------------------------------------
/*
 function funkcja() {
    $zmienn = "";
if(empty($zmienn)) {
    return true;
}else {
    return false;
}
}
echo funkcja(); 
*/
//Zadanie 4-------------------------------------------------------------------
/* 
$a = 3;
$b = ($a % 2 == 0) ? 'Liczba jest parzysta' : 'Liczba nie jest parzysta' ;
echo $b;
*/
//Zadanie 5-------------------------------------------------------------------
/* 
$liczba = 5;
switch($liczba) 
{
    case 1:
        echo ("Poniedziałek");
        break;
    case 2:
        echo ("Wtorek");
        break;
    case 3:
        echo ("Środa");
        break;
    case 4:
        echo ("Czwartek");
        break;
    case 5:
        echo ("Piątek");
        break; 
    default:
        echo("Nie poprawne");  
}
*/
//Zadanie 6-------------------------------------------------------------------
/* 
for ($i = 0; $i <= 10; $i++) {
    echo ("<p>".$i."</p>");
}
*/
//Zadanie 7-------------------------------------------------------------------
/*
 for ($i = 1; $i <= 10; $i++) {
    $a = 5 * $i;
    echo ("<p> 5 *".$i." = ".$a."</p>");
}
 */
//Zadanie 8-------------------------------------------------------------------
/* 
$i = 10;
do {
    echo ("<p>".$i."</p>");
$i = $i - 1;
}while($i > 0)
 */
//Zadanie 9-------------------------------------------------------------------
/*
 for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        echo " * ";
    }
    echo "<br>";
} 
*/
//Zadanie 10-------------------------------------------------------------------
/* 
for ($i = 20; $i >= 1; $i--) {
    echo ("<p>".$i."</p>");
} 
*/
//Zadanie 11-------------------------------------------------------------------
/* 
function licz() {
$a = 7;
$b = 8;
$c = $a + $b;
return $c;
}
echo licz();
*/
//Zadanie 12-------------------------------------------------------------------
/* 
function dod() {
$a = 4;
$a += 10;
return $a;
}
echo dod();
*/
//Zadanie 13-------------------------------------------------------------------
/* 
$c = function (int $i){
$a = $i * $i; 
echo $a;
};
echo $c(6); 
*/
//Zadanie 14-------------------------------------------------------------------
/* 
$a = "dgd";
function inty(int $a) {
echo $a;
};
echo inty($a);
 */
//Zadanie 15-------------------------------------------------------------------
/* 
$a = ":(";
function stringi(string $a) : string {
return $a;
};
echo stringi($a);
*/
//Zadanie 16-------------------------------------------------------------------
/* 
$text = "Tekst do odwrocenia";
echo strrev($text);
 */
//Zadanie 17-------------------------------------------------------------------
/* 
$a = 7;
echo pow($a, 2);
*/
//Zadanie 18-------------------------------------------------------------------
/* 
$a = array(23,564,78,98,10,76);
echo min($a);
*/
//Zadanie 19-------------------------------------------------------------------
/* 
$a = array(32,465,87,989,87977,67);
echo max($a);
*/
//Zadanie 20-------------------------------------------------------------------
/* 
$text = "Klasa 2CT jest super";
if(str_contains($text, "super")) {
    echo ("Tak, posiada slowo super");
}
 */
//Zadanie 21-------------------------------------------------------------------
/* 
$text = "The Republic will be re-organized into the first galactic empire";
echo strlen($text);
*/
//Zadanie 22-------------------------------------------------------------------
/* 
$los = rand(1, 100);
echo $los;
*/
//Zadanie 23-------------------------------------------------------------------
/* 
$a = array(1, 2, 3, 4 ,5 ,7 ,8, 9, 10);
sort($a);
$clength = count($a);
for($x = 0; $x < $clength; $x++) {
  echo $a[$x];
  echo "<br>";
}
*/
//Zadanie 24-------------------------------------------------------------------
/* 
$file = fopen("plik.txt", "w");
if (!$file) {
  echo "Nie można otworzyć pliku.";
  exit;
}
fwrite($file, "Long live the Empire!!!");
*/

//Zadanie 25-------------------------------------------------------------------
/* 
$a ;
if(isset($a)) {
    echo("Zdefiniowana");
}else {
    echo("nie jest zdefiniowana");
} 
*/
//Zadanie 26-------------------------------------------------------------------
/* 
$a = 24;
echo gettype($a);
*/
//Zadanie 27-------------------------------------------------------------------
/* 
$array = array(1, 2, 3, 4 ,5 ,7 ,8, 9, 10);

foreach ($array as $value) {
  echo $value . '<br>';
}
*/
?>