<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1>Solar System</h1>

    <?php
        $get_content = $bdd->query('SELECT * FROM planets');
        while($display_content = $get_content->fetch()){
            echo $display_content['title'] . " ";
        }
    ?>
</body>
</html>