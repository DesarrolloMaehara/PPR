<%-- 
    Document   : cerrarsesion
    Created on : 04-nov-2021, 15:45:26
    Author     : aespinola
--%>
<%@ page session="true" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<%
HttpSession sesionOk = request.getSession();
sesionOk.invalidate();request.getSession().invalidate();
response.sendRedirect("..//index.jsp");

%>