

<%@ page language="java" import="java.sql.*" errorPage="error.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page"/>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

   <html>
       <head>
        <title>JSP Page</title>
    </head>
     <%   //conexion
   Connection con=conexion.crearConexion();
   //listar datos de tabla
   PreparedStatement ps,ps2,ps3;
   ResultSet rs,rs2,rs3,rs7,rs6;
   ps=con.prepareCall("select a.id as id_usuario,a.usuario,a.email,nombre,apellido ,a.id_rol,b.descripcion as desc_rol,"
           + "a.id_estado,c.descripcion as desc_estado from tab_mae_ppr_usuarios a   inner join tab_mae_ppr_roles b on a.id_rol=b.id inner join tab_mae_ppr_estados c on a.id_estado=c.id");
   rs=ps.executeQuery();
   ps2=con.prepareStatement("select * from tab_mae_ppr_estados");
   rs2=ps2.executeQuery(); 
  ps3=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs3=ps3.executeQuery(); 
   %>

    
   <body>
    <div    class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
      </ul>
    </div>
    
       <div id="response">
            </div>
       <table   id="tabla_usuarios" class="table table-responsive" style="width:100% "  >
           
           <a>USUARIOS REGISTRADOS</a>
             <br> <br> 
           <thead class="text-center">
              
           <tr>
                
            <th>ID</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>USUARIO</th>
            <th>EMAIL</th>
            <th>ESTADO</th>
            <th>ROL</th>
            <th>ACCION</th>
            <th>ACCION</th>
           </tr>
            </thead>
            <tbody id="tbodys">
           <%
            while(rs.next()){
           %>
        
              <tr >
                    
              <td ><%=rs.getInt("id_usuario")%></td>
              <td ><%=rs.getString("nombre")%></td>
              <td ><%=rs.getString("apellido")%> </td>
              <td ><%=rs.getString("usuario")%></td>
              <td ><%=rs.getString("email")%></td>
              <td ><%=rs.getString("desc_estado")%></td>
              <td ><%=rs.getString("desc_rol")%></td>
               <td> 
                    <div class="text-center">
                        
                        
                        <div class="input-group">
                            <input  type="button" style="width: 200%;"  
                                    value="EDITAR" onclick="edit_usuario('<%=rs.getInt("id_usuario")%>',
                                                                    '<%=rs.getString("nombre")%>',
                                                                    '<%=rs.getString("apellido")%>',
                                                                    '<%=rs.getString("usuario")%>',
                                                                    '<%=rs.getString("email")%>',
                                                                    '<%=rs.getString("id_estado")%>',
                                                                    '<%=rs.getString("id_rol")%>')">
                            <!--  <input  type="button" id="btnEditar"  class="btn btn-primary btnEditar" value="Editar" > --> 
                       
                    </div>
                        
                    </div></td>
                     <td> 
                    <div class="text-center">
                        <div class="input-group">
                       
                          
                            <!--  <input  type="button" id="btnEditar"  class="btn btn-primary btnEditar" value="Editar" > --> 
                            <input style="width: 400%;" type="button" id="resetear" onclick="modalresetearpass('<%=rs.getInt("id_usuario")%>','<%=rs.getString("usuario")%>')"  value="Resetear contraseña" > 
                            
                        
                    </div>
                        
                    </div></td>
           
              
          </tr>
           <%} %>
             </tbody>
       </table>
       


        
   

             
    </body>

    
        <div class="modal fade" id="modal_upd_user" tabindex="-1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">EDITAR USUARIO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
                <form id="form_upd_user" action="POST"  class="form-control alert-dark " style=" height: 620px">
                <div class="modal-body" >                
                   
                     <input hidden="true" class="form-control text-left " type="text" style="width: 100%" disabled="true" id="txt_id"    name="txt_id">
                     <br>
                    <strong><a>NOMBRE</a></strong> 
                    
                    <input class="form-control text-left " style="width: 100%" type="text"   id="txt_nombre"    name="txt_nombre"      required >
                   
                    <strong><a>APELLIDO</a></strong> 
                 
                    <input class="form-control text-left " type="text"  style="width: 100%" id="txt_apellido"    name="txt_apellido" required >
                
                    <strong><a>USUARIO</a></strong>
                   
                    <input class="form-control text-left " type="text"  style="width: 100%" id="txt_usuario"    name="txt_apellido"  required >
                    
                    <strong><a>EMAIL</a></strong>
                    
                    <input class="form-control text-left " type="text" style="width: 100%"  id="txt_email"     name="txt_email"   required >

                    <strong><a>ESTADO</a></strong>
                       <select class="form-control text-left " id="select_estado" name="select_estado" required>
                            <%
                            while(rs2.next()){
                            %>
                            <option  value="<%=rs2.getString("id")%>"><%=rs2.getString("descripcion")%></option>
                            <%}%>
                       </select>
                    
                    
                        <strong><a>ROL</a></strong>
                        <select class="form-control text-left " id="select_rolm" name="select_rolm" required >
                            <%
                            while(rs3.next()){
                            %>
                            <option  value="<%=rs3.getString("id")%>"><%=rs3.getString("descripcion")%></option>
                            <%}%>
                        </select>
                </div>
                        <div class="modal-footer">
                    <input style="width: 30%;" type="submit"    id="btn_apd_usuario" value="MODIFICAR" >
                    <br>
                    <input style="width: 30%;" type="button"   data-dismiss="modal"   value="CANCELAR" >
                    
                </div>
                         </form>
                
             </div>
          </div>
        </div>
                        
          
        <div class="modal fade" id="modal_restablecer_pass" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                    <div class="modal-content">
                            <div class="modal-header" >
                                
                                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                         <div class="modal-header" id="div_contenido_nivel"></div> 
                           <form id="form_restablecer_pass" action="POST" class="form-control alert-dark " style=" height: 400px">
                           <div class="modal-body">  
                            <strong><a>ID</a><br></strong> 
                            <input style="width: 100%" type="text" disabled="true"  id="txt_id_reset" name="txt_id_reset" required class="form-control text-left">
                            <br>
                            <strong><a>USUARIO</a><br></strong> 
                            <input style="width: 100%" type="text" disabled="true"  id="txt_usuario_p" name="txt_usuario_p" class="form-control text-left">
                            <br>
                            <a>CONTRASEÑA</a>
                            <br>
                            <input style="width: 100%" type="text" class="form-control text-left" disabled="true" value=" POR DEFECTO 123" id="passr" name="passr"  >
                             </div>
                                <div class="modal-footer">
                            <input type="button" disabled="true" class="form-control btn btn-secondary" onclick="restablecer_pass_usuario()" id="btn_reset_pass" value="RESETEAR" >
                            <br>
                            <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                        </div>
                             </form>
                            
                    </div>
                 </div>
               </div>
       
     
    
   </body>
</html>
