

<%@ page language="java" import="java.sql.*" errorPage="error.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page"/>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

   <html>
     
   
      
        <title>JSP Page</title>
    </head>
     <%   //conexion
   Connection con=conexion.crearConexion();
   //listar datos de tabla
   PreparedStatement ps;
   ResultSet rs;
   ps=con.prepareCall(" select a.id as id_permiso,a.fecha_registro,a.id_estado,b.descripcion "
           + "as desc_estado,a.id_rol,c.descripcion "
           + "as desc_rol,a.id_modulos,d.descripcion "
           + "as desc_det_modulo from tab_mae_ppr_permisos a "
           + "inner join tab_mae_ppr_estados b on a.id_estado=b.id "
           + "inner join  tab_mae_ppr_roles c on a.id_rol=c.id "
           + "inner join  tab_mae_ppr_det_modulos d on a.id_modulos=d.id");
   rs=ps.executeQuery();
   
   %>
<div class="container">
       
    <input  type="button" onclick="modalinsertpermisos()" id="crearpermiso" style="font-weight: bold;color:black;" class="btn btn-success" data-toggle="modal"   value="CREAR NUEVO PERMISO" > 

         <div style="float: right;" class="collapse navbar-collapse" id="navbarResponsive">
     
     
      <ul class="navbar-nav ml-auto">

      </ul>
    </div>
       <div id="response">
            </div>
       <table  id="tabla_permisos" class="table table-bordered table-light" style="width:50%"  >
           <thead class="text-center">
           <tr >
            <th>ID</th>
            <th>ROL</th>
            <th>MODULO</th>
            <th>FECHA</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
           
           </tr>
            </thead>
            <tbody id="tbodys">
           <%
            while(rs.next()){
          %>
              <tr>
              <td ><%=rs.getInt("id_permiso")%></td>
              <td ><%=rs.getString("desc_rol")%></td>
              <td ><%=rs.getString("desc_det_modulo")%></td>
              <td ><%=rs.getString("fecha_registro")%></td>
              <td ><%=rs.getString("desc_estado")%> </td>
               <td > 
                    <div class="text-center"  >
                        <div  class="input-group">
                           
                            <input  type="button"   class="btn btn-primary btnEditar" 
                                    value="Modificar" onclick="edit_permisos('<%=rs.getInt("id_permiso")%>',
                                                                        '<%=rs.getString("desc_rol")%>',
                                                                        '<%=rs.getString("desc_det_modulo")%>',
                                                                        '<%=rs.getString("desc_estado")%>')" >
                            <hr>
                            <!--  <input  type="button" id="btnEditar"  class="btn btn-primary btnEditar" value="Editar" > --> 
                         </div>
                    </div></td>
                </tr>
                <%} %>
             </tbody>
       </table>
</div>
</body>
</html>
     