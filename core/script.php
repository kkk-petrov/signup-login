<?php
	echo("<br><i>UPLOAD IMAGE</i>");
    echo<<<_END
        <form method="post" action="index.php" enctype="multipart/form-data">Choose file:
        <input type="file" name="filename" size="10">
        <input type="submit"></form>
        _END;

    if($_FILES){
        $name = $_FILES['filename']['name'];
        move_uploaded_file($_FILES['filename']['tmp_name'], $name);
        echo "Uploaded image: '$name'<br><img src='$name' width='250px' height='250px'>";
    }


?>
