<?php
session_start();

include('db_connect.php');
$msg = false;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_password = $_POST['user_password'];
    $user_re_password = $_POST['user_re_password'];

    if (!empty($user_name) && !empty($user_email) && !empty($user_password) && !is_numeric($user_name)) {
        if ($user_password === $user_re_password ) {
            $query = "insert into user (user, email, password) VALUES ('$user_name', '$user_email', '$user_password')";
            mysqli_query($con, $query);
            header("Location: index.php");
        } else {
            $msg = "Mật khẩu không đúng";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Ký</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<body>
   <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Đăng Ký</h3>
                    <div class="card">
                        <label for="name">Tài Khoản</label>
                        <input type="text" name="user_name" placeholder="Nhập tài khoản..." required>
                    </div>
                    <div class="card">
                        <label for="name">Email</label>
                        <input type="text" name="user_email" placeholder="Nhập email..." required>
                    </div>
                    <div class="card">
                        <label for="password">Mật Khẩu</label>
                        <input type="password" name="user_password" placeholder="Nhập mật khẩu..." required>
                    </div>
                    <div class="card">
                        <label for="password">Nhập Lại Mật Khẩu</label>
                        <input type="password" name="user_re_password" placeholder="Nhập lại mật khẩu..." required>
                    </div>
                    <input type="submit" value="Đăng Ký" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""> <span>Nhớ Mật Khẩu</span>
                    </div>
                    <p>Bạn đã có tài khoản?<a href="index.php">Đăng Nhập</a> </p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="1.jpg" alt="" class="signup">
            <!-- <h3>Đăng Ký Thành Công!</h3> -->
            <?php
                echo('<h3>'.$msg.'<h3>');
            ?>
        
        </div>

   </header>
</body>
</html>