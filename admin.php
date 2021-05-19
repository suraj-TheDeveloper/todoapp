<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
    $data = json_decode(file_get_contents("php://input"), true);
    $link = mysqli_connect("localhost", "root", "", "todoapp");
    $Name = $data['Name'];
    $Email = $data['Email'];
    $Password = $data['Password'];
    $Sql = "SELECT Name, Email, Password FROM admin WHERE Email = '$Email'";
    $result = mysqli_query($link, $Sql);
    while($row = mysqli_fetch_assoc($result)){
        $Names = $row['Name'];
        $Emails = $row['Email'];
        $Passwords = $row['Passwords'];
        if($Names == $Name && $Emails == $Email && $Password == $Passwords){
            $_SESSION['Name'] = $Name;
            echo "inserted successfully";
        } else {
            echo "not inserted";
        }
    }
?>