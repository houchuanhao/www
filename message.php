<?php
    header("Content-type: text/html; charset=utf-8"); 
//载入ecd类
require_once('lib/Ecd.class.php');
const url = "http://www.etuocloud.com/gateway.action";
const app_key = 'tKv1uIQisuBLcZfSbFaWfCBsVaMsvVb9';
const app_secret = 'geNSLwMTO6oYthRgkWovMKE2i709WdEZXzcLxVWR98U4cZU9S3zhSaUOcjUXvOyz';
const format = 'json';
//初始化
$ecd = new Ecd(url,app_key,app_secret,format);
/***********************上面是借口部分***************************/
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require('db_config.php');
    //echo json_encode(array('code'=>'1'));
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    $type=$_POST['type'];
        //检验手机号是否存在
        $phone_number=$_POST['phonenumber'];
        $mycode=$_POST['mycode'];  //验证码
       // $password=$_POST['password'];
        $sql="select * from user where phone_number='$phone_number'";  //查看账号是否存在
        $result=mysql_query($sql,$conn);
        $str1=" ";
        if(mysql_num_rows($result)&&$phone_number) //用户名存在
        {
             echo json_encode(array('code'=>'0'));
        }
        else{
            $ecd->send_sms_code($phone_number,'1',$mycode,'');
            echo json_encode(array('code'=>'1'));
            //发送验证码短信
         
        }
    
?>