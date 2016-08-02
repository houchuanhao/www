<?php
     header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    require("db_config.php");

     header('Content-Type:text/html; charset=gb2312');//使用gb2312编码，使中文不会变成乱码
     $backValue=$_POST['username'];
     echo json_encode($_POST);
 ?>