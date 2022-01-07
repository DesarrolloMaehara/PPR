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


<!DOCTYPE html>
<html>
<head>
    <script src="../js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/3.18.0/themes/fusioncharts.theme.fusion.js"></script>
    <link href="informes.css" rel="stylesheet" type="text/css"/>
    <script src="informes2.js" type="text/javascript"></script>
</head>

<body>

   
    <button type="button" id="selectjson" onclick="aviarioA2(),aviarioA3(),aviarioA6(),aviarioA7(),
                                     aviarioA8(),aviarioA9(),aviarioA10(),aviarioA11(),aviarioA12(),
                                     aviarioB2(),aviarioB3(),aviarioB4(),aviarioB5(),aviarioB7(),
                                     aviarioB8(),aviarioB6(),aviarioB10(),aviarioB11(),
                                     aviarioH1(),aviarioH2(),aviarioH3()">informe2</button>
    
    <div   style="width: 50%; float:left" >
     
    
    
    <div id="aviarioA2"> </div>
    <div id="aviarioA3"> </div>
    <div id="aviarioA4"> </div>
    <div id="aviarioA6" > </div>
    <div id="aviarioA7"> </div>
    <div id="aviarioA8"> </div> 
    <div id="aviarioA9"> </div>
    <div id="aviarioA10"  > </div>
    <div id="aviarioA11" > </div>
    <div id="aviarioA12"  > </div>
    <div id="aviarioB2"> </div>
   
     </div>
    <div   style="width: 50%; float:right"   >
     <div id="aviarioB3"> </div>
    <div id="aviarioB4"> </div>
    <div id="aviarioB5"> </div>
    <div id="aviarioB6"> </div>
    <div id="aviarioB7" > </div>
    <div id="aviarioB8" > </div>
    <div id="aviarioB10"> </div>
    <div id="aviarioB11"> </div>
    <div id="aviarioH1" > </div>
    <div id="aviarioH2" > </div>
    <div id="aviarioH3" > </div>
    
   
   </div>
    
    </body>
    <script type="text/javascript"></script>
 

<div class="col-xl-3 col-md-6 mb-4" id="div_informe_mortandad" >
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
  
   
                        <center><div class="text-xs font-weight-bold text-success text-uppercase mb-1"><font color="black"><b>AVIARIOS</b></font></div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800"><font color="black"><b></b></font></div>
                      <img src="img/aviario.png" width="50" height="50" alt=""/></center>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-key fa-2x text-black"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
