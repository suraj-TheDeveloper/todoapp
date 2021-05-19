<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
    $data = json_decode(file_get_contents("php://input"), true);
    $link = mysqli_connect("localhost", "root", "", "todoapp");
    $Name = $data['Name'];
    $Email = $data['Email'];
    $Phone = $data['Phone'];
    $Password = $data['Password'];
    $ConfirmPassword = $data['ConfirmPassword'];
    $Sql = "INSERT INTO register (Name, Email, Phone, Password, ConfirmPassword) VALUES ('$Name', '$Email', '$Phone', '$Password', '$ConfirmPassword')";
    if(mysqli_query($link, $Sql)){
        echo "inserted successfully";
    } else {
        echo mysqli_error($link);
    }
?>