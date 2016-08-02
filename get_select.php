<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
    require("db_config.php");
    
    function Login($phone_number,$password)
    {
        $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
        mysql_select_db($mysql_database,$conn);
        if(phone_number=="")  //账号密码登录
        {
            $sql="select *from ".$mysql_database."where phone_number ='".phone_number."' and password='".password."'";
            $result=mysql_query($sql,$conn);
            if(mysql_num_rows($result)==0)   //0条查询结果
                return "filed";   //登录失败
            else {
                 if($row = mysql_fetch_array($result))
                 {  $username=row['username'];
                    return $username;
                 }
            }  //查询成功，存在此账户
            
        }
    }
?>