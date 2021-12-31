<!DOCTYPE html>
<html lang="en">
 <%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
 <%@page import="java.sql.Connection"%>
<%@ page session="true" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page"/> 
<%@page contentType="text/html" pageEncoding="UTF-8"%>

   <%   //conexion
   Connection con=conexion.crearConexion();
   //listar datos de tabla rol para registro de usuario
   PreparedStatement ps,ps2,ps3,ps4,ps5,ps6,ps7,ps8,ps9,ps10,ps11,ps12;
   ResultSet rs,rs2,rs3,rs4,rs5,rs6,rs7,rs8,rs9,rs10,rs11,rs12;
   ps=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs=ps.executeQuery(); 
   //listar datos de tabla rol para registro de permisos
    ps2=con.prepareStatement("select * from tab_mae_ppr_det_modulos where nivel = 2");
   rs2=ps2.executeQuery(); 
  //listar datos de tabla rol para registro de usuario
   ps3=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs3=ps3.executeQuery(); 
   ps4=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs4=ps4.executeQuery();
   ps5=con.prepareCall("select a.id as id_usuario,a.usuario,a.email, upper(concat(a.nombre,' ',a.apellido)) as nombre,a.id_rol,b.descripcion as desc_rol,a.id_estado,c.descripcion as desc_estado from tab_mae_ppr_usuarios a   inner join tab_mae_ppr_roles b on a.id_rol=b.id inner join tab_mae_ppr_estados c on a.id_estado=c.id");
   rs5=ps5.executeQuery();
   ps6=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs6=ps6.executeQuery(); 
   ps7=con.prepareStatement("select * from tab_mae_ppr_estados");
   rs7=ps7.executeQuery(); 
   ps8=con.prepareStatement("select * from tab_mae_ppr_estados");
   rs8=ps8.executeQuery(); 
   ps9=con.prepareStatement("select * from tab_mae_ppr_estados");
   rs9=ps9.executeQuery();
     ps10=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs10=ps10.executeQuery();
      ps11=con.prepareStatement("select * from tab_mae_ppr_det_modulos");
   rs11=ps11.executeQuery(); 
    ps12=con.prepareStatement("select * from tab_mae_ppr_estados");
   rs12=ps12.executeQuery();
   %>
   
   <form id="form_add_user" action="POST">
       

            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE NUEVO USUARIO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
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


        </form>
