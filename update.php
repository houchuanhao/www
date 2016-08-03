<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require("db_config.php");
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    mysql_select_db($mysql_database,$conn);
    $user_password=$_POST['Password'];
    $phone_number=$_POST['phone_number'];
    $sql="update user set password ='$user_password' where phone_number = '$phone_number'";
    mysql_query($sql,$conn);
    echo json_encode($_POST);
?>