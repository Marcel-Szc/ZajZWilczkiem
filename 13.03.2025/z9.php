<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <input type="text" placeholder="haslo" name="haslo">
        <input type="submit" value="OK">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            if(strlen($_POST["haslo"]) < 8){
                echo "haslo musi miec co najmniej 8 znakow";
            } else{
                echo "gicior";
            }
        }else{
            echo "nie ma danych";
        }
    ?>
</body>
</html>