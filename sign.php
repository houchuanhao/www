<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require('db_config.php');
    //echo json_encode(array('code'=>'1'));

    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    $type=$_POST['type'];
    if($type==1) //检验手机号是否存在
    {
        $phone_number=$_POST['phonenumber'];
       // $password=$_POST['password'];
        $sql="select * from user where phone_number='$phone_number'";  //查看账号是否存在
        $result=mysql_query($sql,$conn);
        $str1=" ";
        if(mysql_num_rows($result)) //用户名存在
        {
             echo json_encode(array('code'=>'0'));
        }
        else
            echo json_encode(array('code'=>'1'));
    }
    
?>