<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require("db_config.php");
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    mysql_select_db($mysql_database,$conn);
   // $sql="select * from user where phone_number='$phone_number' and password='$password'";
    $phone_number=$_POST['RegisterUserName'];
    $password=$_POST['RegisterPassword1'];
    $sql="insert into user(phone_number,password) values('$phone_number','$password')";
    mysql_query($sql,$conn);
    //$code=$_POST['code'];
    echo json_encode($_POST);
?>