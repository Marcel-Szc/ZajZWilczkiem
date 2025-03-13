<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <input type="text" id="name" placeholder="imie" name="name">
        <input type="text" id="age" placeholder="wiek" name="age">
        <input type="email" id="email" placeholder="email" name="email">
        <label for="radiobox">Czy akceptujesz regulamin?</label>
        <input type="checkbox" id="radiobox" name="radiobox">
        <label for="chop">Chop</label>
        <input type="radio" id="chop" value="chop" name="gender">
        <label for="baba">Baba</label>
        <input type="radio" id="baba" value="baba" name="gender">
        <input type="submit" value="Ok">
    </form>
</body>
<script>
    document.getElementById("chop").addEventListener('change', function() {
        document.getElementById("baba").checked = false;
    });
    document.getElementById("baba").addEventListener('change', function() {
        document.getElementById("chop").checked = false;
    });
</script>
</html>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //z1
    echo "Podane imię: " . $_POST["name"] . "<br>";
    //z2
    if(is_numeric($_POST["age"])){
        echo "użytkownik podał liczbę w wiek <br>";
    } else {
        echo "użytkownik nie podał liczby w wiek <br>";
    }
    //z3
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
        echo "poprawny adres email <br>";
    }else{
        echo "nie poprawny adres email <br>";
    }
    //z4
    if(isset($_POST["radiobox"])){
        echo "użytkonik zaakceptował <br>";
    }else{
        echo "użytkownik nie zaakceptował <br>";
    }
    //z5
    if(!empty($_POST["Płcie"])){
        echo "użytkonik zaznaczył płeć:".$_POST["gender"]." <br>";
    }else{
        echo "użytkownik nie zaznaczył żadnej płci <br>";
    }
} else {
    echo "Coś żeś spierdzielił Chopie";
}
?>