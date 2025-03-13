<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <label>Brainrot quiz</label>
        <br>
        <label>massive</label>
        <input type="checkbox" name="check[]" value="low taper fade"> 

        <br>
        <label>saturn</label>
        <input type="checkbox" name="check[]" value="burger"> 

        <br>
        <label>idk</label>
        <input type="checkbox" name="check[]" value="sterling"> 

        <br>
        <input type="submit" value="OK">
    </form>
    <?php 
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            if(!empty($_POST["check"])){
                echo "wybrane opcje: ".implode(", ", $_POST["check"]);
            } else {
                echo "kys";
            }

        }
    ?>
</body>
</html>
