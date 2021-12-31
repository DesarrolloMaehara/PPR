<%@page import="consultas_java.modelos"%>
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
 <!------ 
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="css/assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<link href="css/assets/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css"/>

---------->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="css/estilos.css" rel="stylesheet" type="text/css"/>
        <link href="css/loading_efecto.css" rel="stylesheet" type="text/css"/>
        <link href="css/assets/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css"/>
      
<!------ Include the above in your HEAD tag ---------->
    
<!------ Include the above in your HEAD tag ---------->
<link href="css/loading_efecto.css" rel="stylesheet" type="text/css"/>
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
        <img src="img/yemita8.png" width="130" height="110" alt=""/><br>
        <br>
    <form action="control/control_login.jsp">
       <input type="text" id="usuario" class="fadeIn second" name="usuario" placeholder="Ingrese su usuario" autocomplete="off"  required="required">
      <input type="password" id="pass" class="fadeIn fourth" name="pass" placeholder="Ingrese su contrase&ntilde;a"  autocomplete="off"  required="required">
      <br>        <br> 

      <input type="submit" style="width: 320px" class="form-control" name="btningresar" value="INGRESAR">
        
        <br><br><br>
        
     <%   //conexion
   Connection con=modelos.conexion.crearConexion();
   //listar datos de tabla rol para registro de usuario
   PreparedStatement ps;
   ResultSet rs;
   ps=con.prepareStatement("select * from tab_mae_ppr_area");
   rs=ps.executeQuery(); 
   //listar datos de tabla rol para registro de permisos
 
   %>
    </form>
              
    <!-- Remind Passowrd -->
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
       
 
 
 
 
 
       <!-- Modal Insertar Roles -->
          
        <div class="modal fade" id="modal_add_pendiente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class222qq="modal-title" id="exampleModalLabel">REGISTRO SOLICITUD USUARIO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div> 
                <form   id="form_add_pendiente" class="form-control" action="POST"  style="width: 500px; height: 350px">
                 <div class="modal-body"   style="text-align: left"  >
  
                     <a style=""> NOMBRE</a>
                <input   class="form-control right"  style="width:250px;height:15px" type="text"  placeholder="INGRESE NOMBRE"    autocomplete="off"  required    name="nombrepend" id="nombrepend">            
                <br>
                APELLIDO
                <input class="form-control text-right" type="text"  style="width:250px;height:15px;text-align: left"  placeholder="INGRESE APELLIDO"  autocomplete="off"  required name="apellidopend" id="apellidopend">            
                <br>
               
                <strong><a>AREA</a></strong>
                       <select style="width:250px;height:30px;text-align: right"  id="select_area" name="select_area" required >
                            <%
                            while(rs.next()){
                            %>
                            <option  value="<%=rs.getString("id")%>"><%=rs.getString("descripcion")%></option>
                            <%}%>
                        </select>
                <br><!-- <br> -->
                <br>
                 <br>
            
                     <div class="modal-footer"  style="width:450px">
                        <input type="submit" class="fadeIn fourth" id="btn_add_pendiente" value="INGRESAR">
                       
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                     </div>
                     
              </div>
                       </form>
            </div>
          </div>
        </div>
     
     
        <div class="modal fade" id="modal_add_recuperar_contraseña" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">SOLICITUD RESET USUARIO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
                <form id="form_add_reset" action="POST">
              <div class="modal-body">
                <a>INGRESE SU USUARIO</a>
                <input type="text" placeholder="INGRESE USUARIO"  autocomplete="off"  required    name="peticion" id="peticion">            
                <br>
                
               
                     <div class="modal-footer"  style="width:450px">
                    
                        <button type="submit" class="btn btn-success" id="btn_add_peticion">ENVIAR PETICIÓN</button>
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                     </div>
              </div>
                    </form> 
            </div>
          </div>
        </div>
        
 
 </body>
 
 <script src="js/llamadas_aldo.js" type="text/javascript"></script>
 <script src="css/assets/css,js, otros/sweetalert/sweetAlert2/sweetalert2.all.min.js" type="text/javascript"></script>
 <script src="css/assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
