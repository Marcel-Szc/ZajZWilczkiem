<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="dziekujemy.php">
        <select name="miasto">
            <option>Kraków</option>
            <option>Jędrzejów</option>
            <option>Radom</option>
        </select>
        <input type="submit" value="OK">
    </form>
    <?php 
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(!empty($_POST["miasto"])){
            header("Location: dziekujemy.php");
        } else {
            echo "nie ma miasta";
        }
    }
    ?>
</body>
</html>