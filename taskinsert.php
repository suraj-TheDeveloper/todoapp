<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/x-www-form-urlencoded: charset-UTF=8");
    $data = json_decode(file_get_contents("php://input"), true);
    $link = mysqli_connect("localhost", "root", "", "todoapp");
    $Description = $data['Description'];
    $Stime = date('Y-m-d H:i:s', strtotime($data['Stime']));
    $Etime = date('Y-m-d H:i:s', strtotime($data['Etime']));
    $Sql = "INSERT INTO task (Description, Stime, Etime) VALUES ('$Description', '$Stime', '$Etime')";
    if(mysqli_query($link, $Sql)){
        echo "inserted successfully";
    } else {
        echo mysqli_error($link);
    }
?>