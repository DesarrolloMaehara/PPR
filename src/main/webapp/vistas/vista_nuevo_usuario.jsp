<%-- 
    Document   : vista_nuevo_usuario
    Created on : 28-dic-2021, 15:36:24
    Author     : aespinola
--%>
   <%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="consultas_java.modelos"%>
<%@page import="java.sql.Connection"%>
<%   //conexion
   Connection con=modelos.conexion.crearConexion();
   //listar datos de tabla rol para registro de usuario
   PreparedStatement ps;
   ResultSet rs;
   ps=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs=ps.executeQuery(); 
   //listar datos de tabla rol para registro de permisos
  
   %>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
         <form id="form_add_user" action="POST">
        
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE NUEVO USUARIO</h5>
                
              </div>
            
                <a>NOMBRE</a>
                <input type="text" placeholder="INGRESE NOMBRE"  autocomplete="off"  required    name="nombre" id="nombre">            
                <br>
                <a>APELLIDO</a>
                <input type="text" placeholder="INGRESE APELLIDO"  autocomplete="off"  required name="apellido" id="apellido">            
                <br>
                <a>USUARIO</a>
                <input type="text" placeholder="PARA INICIO DE SESION"    name="usuario" required id="usuario"  autocomplete="off">
                <br>
                <a>CONTRASEÑA</a>
                <input type="text" value=" POR DEFECTO 123  " id="pass" name="pass" autocomplete="off" >
                <br>
                <a>CORREO ELECTRONICO</a>
                <input type="email" placeholder="INGRESE CORREO " id="correo" name="correo" autocomplete="off">
                <br>
                <a>TIPO DE ACCESO AL SISTEMA(ROL)</a>
                <select class="form-control" id="select_rol" name="select_rol" >
                    <%
                    while(rs.next()){
                    %>
                <option value="<%=rs.getString("id")%>"><%=rs.getString("descripcion")%></option>
                 <%} %>
                </select>
                    <br>
                    <br>
                <div class="modal-footer">
                    <input type="submit"   class="form-controubmitl btn btn-success"  id="btn_add_usuario" value="REGISTRAR" >
                    <br>
                    <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 

                </div>
            
            </div>
          </div>
        </div>
        </form>  
    </body>
</html>
