<?php
require_once 'config.php';

$name = trim($_POST['username']);
$pass = trim($_POST['password']);
$email = trim($_POST['email']);

if ($name =='' OR $pass=='' OR $email==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (username, password, email) VALUES ('".$name."', '".$pass."', '".$email."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>