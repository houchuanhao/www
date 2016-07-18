<?php
require("db_config.php");
$conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_passworld);
for($row=0;$row<20;$row=$row+1)
{
    $sql="insert into user values(" . "". $row .")";
    echo $sql ."<br/>";
    mysql_select_db($mysql_database);
    mysql_query($sql,$conn);
}
?>
<a href="index.php">
    index
</a>
<br/>
<a href="del_data.php">del</a>