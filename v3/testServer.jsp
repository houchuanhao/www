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
<html>
<head>
    <title>Title</title>

</head>
<body>
<%
    HttpServletRequest servletRequest;
    out.print("helloworld");
    Class.forName("com.mysql.jdbc.Driver");
    ConnectException conn2;
    Connection conn1;
    Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","");
    Statement stmt = conn.createStatement();
    //String str="insert into test_table(name) values('123')";
    String str="select * from test_table";
    ResultSet rs=stmt.executeQuery(str);
    while (rs.next()) {
        String name = rs.getString("name");
        System.out.println(name);
        out.print(name);
    }
    request.setCharacterEncoding("utf-8");
    String name1=request.getParameter("name");
    out.print(name1);
%>
HELLO
</body>
</html>
