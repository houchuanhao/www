<?php
    error_reporting(0);
    $mysql_server_name="localhost";
    $mysql_user_name="root";
    $mysql_password="";
    $mysql_database="gny";
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_password);
    mysql_select_db($mysql_database,$conn);

?>