
<?php /*
        // z1
            echo "skibidi";
        // z2
            $imie = "Krzykacz";
            $nazwisko = "Korneliuszowski";
            echo "<br>",$imie,"<br>", $nazwisko;
        // z3 
            $owoce = ["Jabłko", "banan", "pomarańcz"];
            foreach ($owoce as $owoc) {
                echo "<br>", $owoc;
            }
            echo "<br>";
        // z4
            $wiek = 17;
            if ($wiek <= 14) {
                echo "Wypad z baru", $wiek, "lat";
            } else if ($wiek < 18 || $wiek > 14){
                echo "Wbijaj, ale nie ma piwa, bo masz: ", $wiek, "lat";
            } else {
                echo "Wbijaj śmiało", $wiek, "lat";
            }
            echo "<br>";
        // z5
            $miasta = ["Skibice", "Stary Jork", "Chicago", "Goonville"];
            print_r($miasta);
            echo "<br>";
        // z6 
            $liczba = 20;
            var_dump($liczba);
            echo "<br>";
        // z7
            define ("PI", 3.14);
            echo PI;
            echo "<br>";
        // z8
            $liczba = 24;
            echo $liczba,"<br>";
            $liczba += 5;
            echo $liczba,"<br>";
            $liczba -= 12;
            echo $liczba,"<br>";
            $liczba *= 9;
            echo $liczba,"<br>";
            $liczba /= 0.004;
            echo $liczba,"<br>";
            echo "<br>";
        // z9
            $strona = fopen("strona.html", "w");
            fwrite($strona, <<<text
                    <!DOCTYPE html>
                <html lang='en'>
                    <head>
                        <meta charset='UTF-8>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                        <title>Dokument</title>
                    </head>
                    <body>
                        <header> NAGŁÓWEK </header
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </body>
                </html> 
            text);
            fclose($strona);
        */
    // z10
        $x = "Siemano";
        if(isset($x)){
            print_r($x);
        } else {
            echo ("ni mo");
        }
?>