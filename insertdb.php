<?php
if (isSet($_POST['url'])) {
    $con = mysqli_connect('localhost', 'root', '', 'chromeext');
    ...
    $stmt = mysqli_prepare($con, 'INSERT INTO maintable (ID,Date,Time,VALUE) VALUES('1','07052020',$_POST['url'],'0.6241')');
    //mysqli_stmt_bind_param($stmt, 's', $_POST['url']);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    mysqli_close($con);
}
?>