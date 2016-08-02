
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
    //echo $sql;
    $result=mysql_query($sql,$conn);
    $test="";
    $str1=" ";
    $str2;
    while($row = mysql_fetch_array($result))
    {
        //$test =$test . $row['phone_number'] . " " . $row['password'];
        $str1=$row['phone_number'];
        $str2=$row['password'];
    }
    if($str1==" ")   //登录失败
        $str1=0;
    else
        $str1=1;
    echo $str1;
/*
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
     header('Access-Control-Allow-Headers:x-requested-with,content-type');  
    $phone_number=$_POST["username"];
    $password=$_POST["password"];
    require("get_select.php");
    var $login_result=login($phone_number,$password);
    if($login_ressult=="filed")
        echo "登录失败";
    else 
    {
        echo $login_result;
    }
*/ 
?>
