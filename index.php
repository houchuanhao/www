<!DOCTYPE html>
<head>
    <meta http-equiv="content-type" content="text/html"; charset="utf-8">
    <style>
        a{
            height: 50px;
        }
    </style>
</head>
<html>
    <head>
        <style>
            .php{
                height:40px;
                text-align: center;
                background-color:dimgray;
            }
        </style>
    </head>
    <body>
        <a href="Location.html">定位 </a> 
        <a href="AJAX.html"> AJAX</a>
        <a href="Sign_up.html">Sign up</a>
        <div class="php">test1</div>
        <?php
            require("db_config.php");
            echo $mysql_server_name;
            $conn=mysql_connect($mysql_server_name,$mysql_user_name,$mysql_passworld);
            mysql_query("set names 'utf8'");
            mysql_select_db($mysql_database);
            $sql="insert into user values (20)";
            mysql_query($sql);
            echo "helloworld";
            echo "</br>";
            $result=mysql_query("select * from user",$conn);
            $i=0;
            while($row=mysql_fetch_array($result))
            {
                global $i;
                echo "<div class='php' >";
                echo $row[0] . "<br/>";
                echo "</div>";
            }
        ?>
        <a href="add_data.php" >添加数据</a> <br>
        <a href="del_data.php"> 删除数据</a> <br>
        <a href="form.html">表单</a>
    </body>
</html>