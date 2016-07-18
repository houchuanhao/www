<?php
require("db_config.php");
$conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_passworld);
mysql_select_db($mysql_database);
mysql_query("drop table user",$conn);
mysql_query("create table user ( id smallint)",$conn);
?>
<a href="index.php">index</a>
<br/>
<a href="add_data.php">add</a>