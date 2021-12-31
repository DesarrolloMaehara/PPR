<%-- 
    Document   : vista_registrar_usuario
    Created on : 29-dic-2021, 12:05:34
    Author     : aespinola
--%>

<%@page import="java.sql.Connection"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page"/> 
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
 <%   //conexion
  Connection con=conexion.crearConexion();
   //listar datos de tabla rol para registro de usuario
   PreparedStatement ps;
   ResultSet rs;
   ps=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs=ps.executeQuery(); 
 
  
   %>
<html>
     
    <body>
      
     
         <div    class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
      </ul>
    </div>
    
       <div id="response">
            </div>
           
            <form id="form_add_user" method="post" class="form-control alert-dark" style=" height: 550px">
                 <strong ><a>NUEVO USUARIO</a></strong> 
                 <br>
                 <br>
                 <br>
                <strong ><a>NOMBRE</a></strong>
                
                <input class="form-control" style="width: 100%"  "type="text" placeholder="INGRESE NOMBRE"  autocomplete="off"  required    name="nombre" id="nombre">            
                 
                  <strong ><a>APELLIDO</a></strong>
               
                <input class="form-control" style="width: 100%"  "type="text" placeholder="INGRESE APELLIDO"  autocomplete="off"  required   name="apellido" id="apellido">            
               
                 <strong ><a>USUARIO</a></strong>
               
                <input class="form-control" style="width: 100%"  "type="text" placeholder="INGRESE NOMBRE"  autocomplete="off"  required    id="usuario" name="usuario" >            
                
                 <strong ><a>CONTRASEÑA</a></strong>
                
                <input class="form-control" style="width: 100%"  "type="text" value="123  " disabled="true" autocomplete="off"  required    id="pass" name="pass" >            
                 
              
                <strong ><a>CORREO ELECTRONICO</a></strong>
               
                <input class="form-control" style="width: 100%" type="email" placeholder="INGRESE CORREO " id="correo" name="correo" autocomplete="off">
             
                <strong ><a>TIPO DE ACCESO AL SISTEMA(ROL)</a></strong>
                <select class="form-control" id="select_rol" name="select_rol" >
                    <%
                    while(rs.next()){
                    %>
                <option value="<%=rs.getString("id")%>"><%=rs.getString("descripcion")%></option>
                 <%} %>
                </select>
                   
                 
                <div class="modal-footer align-right" style="width: 30%;" >
                    <input type="submit"    id="btn_add_usuario" value="REGISTRAR" >
                 
                    <input type="button" onclick="cancelar_usuarios()"    value="CANCELAR" >


                </div>
            </form>
        
    </body>
</html>
