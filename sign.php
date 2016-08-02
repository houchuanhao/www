<?php
    require('db_config.php');
    //$conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    $phone_number=$_POST['phonenumber'];
    $password=$_POST['password'];
    $sql="select * from user where phone_number='$phone_number'";  //查看账号是否存在
    $result=mysql_query($sql,$conn);
    $str1=" ";
    while($row = mysql_query_arry($result))
    { 
        $str1=$row['phone_number'];
        
    }
    if($str1==" ")  //账号已存在,注册失败
        $str1=0;
    else
        $str1=1;
    echo $str1;
    
?>