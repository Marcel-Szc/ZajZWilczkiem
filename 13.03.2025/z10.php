<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <input type="text" placeholder="nr telefonu(000 000 000)" name="tele">
        <input type="submit" value="OK">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            if(strlen($_POST["tele"]) < 11){
                echo "numer telefonu musi miec co najmniej 9 cyfr";
            } else{
                echo "gicior";
            }
        }else{
            echo "nie ma danych";
        }
    ?>
</body>
</html>