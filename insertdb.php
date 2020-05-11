<?php
$connect = mysqli_connect("localhost", "root", "", "chromeext");
$url = $_POST['url'];
$content = mysqli_real_escape_string($connect,$_POST['content']);
$query = "INSERT INTO maintable (ID,Date,Time,VALUE) VALUES ('',CURDATE(),'$url','$content')";
$data = mysqli_query ($connect, $query); 
if($data) 
{ 
    echo "Database insert complete";
}
?>
