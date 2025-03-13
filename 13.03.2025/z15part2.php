<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Page 2</title>
</head>
<body>
    <h1>Confirm Your Information</h1>
    <p>Name: <?php echo htmlspecialchars($_POST['name']); ?></p>
    <p>Email: <?php echo htmlspecialchars($_POST['email']); ?></p>

    <form action="z15part3.php" method="POST">
        <input type="hidden" name="name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
        <input type="hidden" name="email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
        
        <label for="additionalInfo">Additional Information:</label>
        <textarea id="additionalInfo" name="additionalInfo" required></textarea>
        <br>
        <input type="submit" value="Next">
    </form>
</body>
</html>
