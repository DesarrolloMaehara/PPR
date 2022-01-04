<%-- 
    Document   : informes
    Created on : 31-dic-2021, 17:40:59
    Author     : aespinola
--%>
<%@page import="java.io.Console"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.CallableStatement"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>


<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@page import="com.google.gson.*" %>

<!DOCTYPE html>
<html>
<head>
    <script src="../js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/3.18.0/themes/fusioncharts.theme.fusion.js"></script>
    <link href="informes.css" rel="stylesheet" type="text/css"/>
    <script src="informes.js" type="text/javascript"></script>
    
</head>
<body>
    <button  onclick="datosjson()">informe</button>
    <div id="chart-container"></div>
    
   
   
    
    </body>
    <script type="text/javascript"></script>
 


