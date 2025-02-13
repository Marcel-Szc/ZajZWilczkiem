<?php 
    // Zadanie 1
    /* 
        if(30 > 20){
            echo "30 jest większe od 20";
        }
    */
    // Zadanie 2
    /*
        $dzien = 2;

        switch ($dzien) {
            case 1:
                echo "poniedziałek";
                break;
            case 2:
                echo "wtorek";
                break;
            case 3:
                echo "środa";
                break;
            case 4:
                echo "czwartek";
                break;
            case 5:
                echo "piątek";
                break;
            case 6:
                echo "sobota";
                break;
            case 7:
                echo "niedziela";
                break;
            default:
                echo "błąd";
                break;
        }
    */
    // Zadanie 3
    /*
        for($i = 1; $i <=20; $i++){
            echo $i;
        }
    */
    // Zadanie 4
    /*
        for($i = 10; $i >=0; $i--){
            echo $i;
        }
    */
    // Zadanie 5
    /*
        $tablica =  ["pies", "kot", "ryba"];
        foreach($tablica as $el){
            echo $el;
        }
    */
    // Zadanie 6
    /*
        for($i = 1; $i <= 10; $i++){
            echo ($i."<br>");
            if($i==7){
                break;
            }
        }
    */
    // Zadanie 7
    /*
        for($i = 1; $i <= 10; $i++){
            if($i==4){
                continue;
            }
            echo ($i."<br>");
        }
    */
    // Zadanie 8
    /*
        function poleProstokata($a, $b){
            return $a * $b;
        }
        echo poleProstokata(4,8);
    */
    // Zadanie 9
    /*
        function srednia($tablica){
            $wynik = 0;
            foreach($tablica as $el){
                $wynik += $el;
            }
            return $wynik;
        }
        $tabliczka = [1,2,3,4,5,6,7,8,9,9,9,9,9,9];

        echo srednia($tabliczka);
    */
    // Zadanie 10
    /*
        function czyParzysta($liczba) {
            if($liczba % 2 == 0){
                return true;
            } else {
                return false;
            }
        }
        echo czyParzysta(6);
    */
    // Zadanie 11
    /*
        function potega($a, $b){
            return pow($a,$b);
        }
        echo potega(8,3);
    */
    // Zadanie 12
    /*
        function czyPelnoletni($wiek) {
            if ($wiek >= 18){
                return true;
            } else {
                return false;
            }
        }
        echo czyPelnoletni(19);
    */
    // Zadanie 13
    /*
        function wieksza($a, $b){
            if ($a > $b) {
                return $a;
            } else if($a < $b){
                return $b;
            } else {
                return "liczby są równe";
            }
        }
        echo wieksza(1,5);
    */
    // Zadanie 14
    /*
        function silnia($n){
            $wynik = 1;
            for ($i = 1; $i <= $n; $i++){
                $wynik *= $n;
            }
            return $wynik;
        }
        echo silnia(2);
    */
    // Zadanie 15
    /*
        function dlugosc($text){
            return strlen($text);
        }
        echo dlugosc("tekst");
    */
?>