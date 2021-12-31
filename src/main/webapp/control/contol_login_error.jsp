<%@ page session="true" %>
<%@ page language="java" import="java.sql.*" %>
<!DOCTYPE html>
 <html >
  <head>

 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Sistema</title>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
<link href="../css/loading_efecto.css" rel="stylesheet" type="text/css"/>
<meta name="viewport" content="width=device-width, user-scalable=no">
 </head>
 <body>
   <div class="container">
        <div class="row text-center login-page">
	   <div class="col-md-12 login-form">
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
        <br>
        <br>
        <br>
      <img src="../img/yemita8.png" width="130" height="110" alt=""/><br>
    </div>
      <br>
    <!-- Login Form -->
    <form action="control_login.jsp">

        <input type="text" id="usuario" class="fadeIn second" name="usuario" autocomplete="off" placeholder="Ingrese su usuario" required="required">
        <input type="password" id="pass" class="fadeIn third" name="pass" autocomplete="off" placeholder="Ingrese su contraseña" required="required">
           <br>
      <br>
      
       
         <input type="submit" style="width: 320px" class="form-control" name="btningresar" value="INGRESAR">
        
       
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
        <div class="alert alert-primary" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign">ERROR, USUARIO O CONTRASEÑA INCORRECTA</span>
        </div>
        <footer class="footer">
  <div class="container footer--flex">
      <small> <a>&nbsp;<a data-toggle="modal"  onclick="modalinsertpendientes()"  href="#">SOLICITAR USUARIO</a>   </small> 
      <small> <a>&nbsp;<a>|</a></small> 
       <small> <a>&nbsp;<a data-toggle="modal"  onclick="modalpeticionreset()"  href="#">RECUPERAR CONTRASEÑA</a>   </small> 
    <ul class="footer-end">
     
    </ul>
  </div>
</footer>
    </div>

  </div>
</div>
      </div>
     </div>
     </div>
 
     </body>