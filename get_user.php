
<?php
 
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require("db_config.php");
    $phone_number=$_POST['username'];
    $password=$_POST['password'];
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    mysql_select_db($mysql_database,$conn);
    $sql="select * from user where phone_number='$phone_number' and password='$password'";
    $result=mysql_query($sql,$conn);
    $test="";
    $str1=" ";
    $str2;
    if(mysql_num_rows($result))  //登录成功
        $str1=1;
    else
        $str1=0;
    echo $str1;
?>
