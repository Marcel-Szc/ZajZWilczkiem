<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="text" name="name" placeholder="podaj imię">  
        <input type="text" name="surname" placeholder="podaj nazwisko">
        <input type="submit" value="OK">
    </form>
    <?php 
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $name = htmlspecialchars($_POST["name"]);
            $surname = htmlspecialchars($_POST["surname"]);
            echo "Twoje imię to: ".$name.", a twoje nazwisko to: ".$surname;
            sleep(2);
            header("Location: przesylanie.php");
        }
    ?>
</body>
</html>