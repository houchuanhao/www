<HTML>
    <HEAD>
        <meta http-equiv="content-type" content="text/html"; charset="utf-8">
    </HEAD>
    <?php
    require("db_config.php");
    $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_passworld) ;
    mysql_query("set names 'utf8'");
    mysql_select_db("GNY"); //选择数据库供你游
    $sql="insert into Userinfo(user_name,email,passworld) values('".$_GET["user_name"]."','".$_GET["email"]."','".$_GET["passworld"]."')";
    mysql_query($sql,$conn);
    echo $sql;
    ?>
</HTML>