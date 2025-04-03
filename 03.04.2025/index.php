<?php 
/*
// z2
$plik = fopen("test.txt", "r"); 
fclose($plik); 
// z3
if (file_exists("test.txt")) {
    echo "Plik istnieje.";
   } else {
    echo "Plik nie istnieje.";
   }
// z4
$plik = fopen("test.txt", "a");
fwrite($plik, "To jest nowa zawartość pliku.");
fclose($plik);
// z5
unlink("dane.txt");
// z7
$plik = fopen("liczby.txt", "r");
$numbers = [];
while (!feof($plik)) { 
    $line = fgets($plik);
    if (is_numeric(trim($line))) {
        $numbers[] = (int)trim($line);
    }
}
fclose($plik);

foreach ($numbers as $number) {
    if($number > 5){
        echo $number . "\n";
    }
   }
// z8 
file_put_contents("dziennik.log", date("Y-m-d H:i:s") . "\n", FILE_APPEND);
// z9
function zapiszDane($imie, $nazwisko) {
    $dane = "Imię: $imie, Nazwisko: $nazwisko\n";
    file_put_contents("formularz_dane.txt", $dane, FILE_APPEND);
}
// z10
if (file_exists("test.txt")) {
    echo "Rozmiar pliku test.txt: " . filesize("test.txt") . " bajtów";
}
// z11
session_start();
$_SESSION['username'] = "Admin";
// z12
if (isset($_SESSION['username'])) {
    echo "Zalogowany jako: " . $_SESSION['username'];
}
// z13
unset($_SESSION['username']);
// z14
if (!isset($_SESSION['visits'])) {
    $_SESSION['visits'] = 1;
} else {
    $_SESSION['visits']++;
}
echo "Odwiedziłeś tę stronę " . $_SESSION['visits'] . " razy.";
// z15
setcookie("preferencje", "ciemny motyw", time() + (7 * 24 * 60 * 60), "/");
// z16
if (isset($_COOKIE['preferencje'])) {
    echo "Twoje preferencje: " . $_COOKIE['preferencje'];
}
// z17
setcookie("preferencje", "", time() - 3600, "/");
// z18
if (count($_COOKIE) > 0) {
    echo "Twoja przeglądarka obsługuje ciasteczka.";
} else {
    echo "Twoja przeglądarka nie obsługuje ciasteczek.";
}
// z19
function zapiszDoSesji($klucz, $wartosc) {
    $_SESSION[$klucz] = $wartosc;
}
// z20
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $login = $_POST['login'];
    $haslo = $_POST['password'];
    
    if ($login === 'admin' && $haslo === 'admin123') {
        $_SESSION['user'] = $login;
        header("Location: welcome.php");
        exit();
    } else {
        echo "Nieprawidłowe dane logowania.";
    }
}
*/
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <label for="login">Login:</label>
        <input type="text" name="login"><br><br>
        <label for="password">Hasło:</label>
        <input type="password" name="password"><br><br>
        <input type="submit" value="Zaloguj">
    </form>
</body>
</html>