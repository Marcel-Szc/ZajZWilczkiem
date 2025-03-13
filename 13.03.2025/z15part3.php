<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Page 3</title>
</head>
<body>
    <h1>Submission Confirmation</h1>
    <p>Name: <?php echo htmlspecialchars($_POST['name']); ?></p>
    <p>Email: <?php echo htmlspecialchars($_POST['email']); ?></p>
    <p>Additional Information: <?php echo htmlspecialchars($_POST['additionalInfo']); ?></p>

    <p>Thank you for your submission!</p>
</body>
</html>
