<%@ page import="java.net.ConnectException" %>
<%@ page import="java.sql.DriverManager" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2016/12/1
  Time: 16:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.net.*" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="javafx.print.Printer" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.jws.soap.SOAPBinding" %>
<%@ page import="" %>
<%@ page import="javax.xml.transform.Result" %>
<html>
<head>
    <title>Title</title>

</head>
<body>
<%
    HttpServletRequest servletRequest;  //用于获取请求
    Class.forName("com.mysql.jdbc.Driver"); //加载数据库驱动
    Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","");
    //上面是连接数据库
    //String str="insert into test_table(name) values('123')";
    String str="select * from test_table";
    ResultSet rs=stmt.executeQuery(str);
    while (rs.next()) {
        String name = rs.getString("name");
        System.out.println(name);
        out.print(name);
    }
    request.setCharacterEncoding("utf-8");
    response.setCharacterEncoding("utf-8");
    String UserName=request.getParameter("UserName"); //
    String Password=request.getP arameter("Password");
    Statement statement=conn.createStatement(); //向数据库发送sql语句的接口
    String sql="select * from User where UserName="+UserName+"and Password="+Password;
    ResultSet result=statement.executeQuery(sql);
    if(result!=null){
        response.addHeader("Login","sussful"); //登陆成功

    }

%>
HELLO
</body>
</html>
