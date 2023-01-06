<?php
session_start();
include('db_connect.php');
$msg = false;
if (isset($_POST['user_name'])) {
    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];

    $query = "select * from user where user = '" .$user_name."' AND password = '".$user_password."' limit 1";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result)==1) {
        header('Location: welcome.php');
    }else {
        $msg = "Đăng nhập thành công!";
    }
    
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Nhập</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<body>
   <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Đăng Nhập</h3>
                    <div class="card">
                        <label for="name">Tài Khoản</label>
                        <input type="text" name="user_name" placeholder="Nhập tài khoản..." required>
                    </div>
                    <div class="card">
                        <label for="password">Mật Khẩu</label>
                        <input type="password" name="user_password" placeholder="Nhập mật khẩu..." required>
                    </div>
                    <input type="submit" value="Đăng Nhập" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""> <span>Lưu Mật Khẩu</span>
                    </div>
                    <p>Bạn chưa có tài khoản? <a href="signup.php">Đăng Ký</a> </p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="signup.png" alt="" style="object-fit: cover; width: 831px; height = 576px;">
            <!-- <h3>Đăng Nhập Thất Bại!</h3> -->
            <?php
                  echo('<h3>'.$msg.'<h3>');
            
            ?>

        </div>

   </header>
</body>
</html>