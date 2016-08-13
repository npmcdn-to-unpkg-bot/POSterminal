<%--
  Created by IntelliJ IDEA.
  User: Nikola
  Date: 8/12/2016
  Time: 13:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Example</title>
</head>
<body>
<form [ngFormModel]="loginForm" (submit)="doLogin($event)">
    <input ngControl="email" type="email" placeholder="Your email">
    <input ngControl="password" type="password" placeholder="Your password">
    <button type="submit">Log in</button>
</form>
</body>
</html>


