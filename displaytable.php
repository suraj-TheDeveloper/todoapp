<?php
    $link = mysqli_connect("localhost", "root", "", "todoapp");
    $output = array();
    $Sql = "SELECT * FROM task";
    $result = mysqli_query($link, $Sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $output[] = $row;
        }
        echo json_encode($output);
    }
?>