<?php 

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico">
    <title>Signup & Login</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/normalize.css">

</head>
<body>

    <main>
        <div class="wrapper">
            <form id="register" method="post">
                <!--<div><h2 class='form__title'> Регистрация </h2></div>-->
                <div>Имя пользователя:
                    <input placeholder="Введите ваше имя" type="text" name="username" id="signup-username">

                </div>
                <div>Почта:
                    <input placeholder="example@mail.com" type="email" name="email" id="signup-email">

                </div>
                <div>Пароль:
                    <input placeholder="Введите пароль" type="password" name="password" id="signup-password">

                </div>



                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <input type="submit" value="Sign up!" id="signup-submit" class="submit">


            </form>

            <form action="" id="login">
                <!--<div><h2 class='form__title'> Войти </h2></div>-->
                <div>Почта:
                    <input placeholder="example@mail.com" type="email" name="email" id="login-email">

                </div>
                <div>Пароль:
                    <input placeholder="Введите пароль" type="password" name="pass" id="login-pass">

                </div>

                <input type="submit" value="Log in!" id="login-submit" class="submit">

            </form>

            <div class="alerts">
                
            </div>
        </div>


    </main>
    


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script type="module" src="assets/js/script.js"></script>
</body>
</html>