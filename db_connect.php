<?php
$server_name = "localhost";
$user_name = 'root';
$user_pass ='';
$database_name = "db_music";


$con = mysqli_connect($server_name,$user_name,$user_pass,$database_name);

if (!$con) {
    die ('Kết nối thất bại' . mysql_error());
}

// else {
//     echo('Kết nối thành công');
// }

?>