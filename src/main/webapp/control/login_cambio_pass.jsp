 <%@ page session="true" %>
<%@ page language="java" import="java.sql.*" %>
<!DOCTYPE html>
 <html >  
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="../css/loading_efecto.css" rel="stylesheet" type="text/css"/>
<meta name="viewport" content="width=device-width, user-scalable=no">
 </head>
<%

  String id = request.getParameter("id");

%>
 <body>
   <div class="container">
    <div class="row text-center login-page">
        <div class="col-md-12 login-form">
        <div class="wrapper fadeInDown">
        <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
        <img src="../img/yemita5.png" width="130" height="130" alt=""/>
   
    </div>

    <!-- Login Form -->
    
    <form id="formCheckPassword" action="../cruds/crud_cambio_pass.jsp"
     oninput='pass2.setCustomValidity(pass2.value != pass.value ? "CONTRASEÑAS NO COINCIDEN" : "")'>
        <input minlength="4" type="password" id="pass"  class="fadeIn second" name="pass"  autocomplete="off" placeholder="NUEVA CLAVE" required="required">
        <input minlength="4" type="password" id="pass2" class="fadeIn second" name="pass2" autocomplete="off" placeholder="REPETIR CLAVE" required="required">
        <input type="submit" id="cambio_pass" class="fadeIn fourth" value="INGRESAR">
   
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
                <div class="alert alert-primary" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign">INGRESE NUEVA CLAVE</span>
             </div>
    </div>

  </div>
</div>
 </div>
  </div>
     </div>
   </body>