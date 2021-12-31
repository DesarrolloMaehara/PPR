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
  
     <input type="button" style="font-weight: bold;color:black;" value="CREAR USUARIO" class="form-control btn btn-success" data-toggle="modal" id="btn_agregar_usuario" data-target="#modal_add_usuarios"  onclick=" $('.dataTables_filter').hide();limpiar_modal_add_usuarios();cargar_usuario_combo();">
    <br>
    <br><!-- <br> -->
   <br>
    <input type="button" onclick="grilla_usuarios()" style="font-weight: bold;color:black;" value="LISTA USUARIOS" class="form-control btn btn-primary"   >
   
   
            
    
            
   
                
         <!-- Modal Insertar Roles -->
           <div class="modal fade" id="modal_add_roles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE NUEVO ROL</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
                    <form  id="form_add_rol"  class="form-control" style="width: 470px; height: 300px" action="POST">

              <div class="modal-body">
              <a>DESCRIPCION</a>
                <input type="text" placeholder="INGRESE ROL DE USUARIO"  autocomplete="off" name="descripcion" id="descripcion">            
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="modal-footer">
                    
                    <input type="submit"   class="form-controubmitl btn btn-success"  id="btn_add_ROL" value="REGISTRAR" >
                <br>
                <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                 </div>
               </div>
                    </form>
            </div>
          </div>
        </div>
    
         
        <div class="modal fade" id="modal_upd_rol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">EDITAR ROL</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
                <form id="form_upd_rol" action="post"  style="width: 300px; height: 300px">

                <div class="modal-body">                
                    
                    <strong><a>ID</a><br></strong> 
                    <input type="text"   id="txt_id_rol"    name="txt_id_rol" class="form-control">
                    <strong><a>DECRIPCION</a><br></strong> 
                    <input type="text"   id="txt_decri_rol"    name="txt_decri_rol"            required class="form-control">
                    <strong><a>ESTADO</a></strong>
                       <select class="form-controlm" id="select_estado_rol" name="select_estado_rol" required >
                            <%
                            while(rs8.next()){
                            %>
                            <option  value="<%=rs8.getString("id")%>"><%=rs8.getString("descripcion")%></option>
                            <%}%>
                        </select>
                </div>

                <div class="modal-footer">
                    <input type="submit"   class="btn btn-primary "  id="btn_apd_rol" value="REGISTRAR" >
                    <br>
                    <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                </div>
                    </form> 

             </div>
          </div>
        </div>
                
                <!-- Modal Insertar Modulos -->
          <div class="modal fade" id="modal_add_modulos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE NUEVO MODULO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
         <form  id="form_add_modulos"  class="form-control" style="width: 300px; height: 300px" action="POST">
              <div class="modal-body">
                
                <a>DESCRIPCION</a>
                <input type="text" placeholder="ej.: Recuento, mortandades"  autocomplete="off" name="descripcionmodulos" id="descripcionmodulos" required>            
                  <br>
                  <br>
                  <br>
                   <br>
                <div class="modal-footer">
                    <input type="submit"  class="form-controubmitl btn btn-success"  id="btn_add_modulos" value="REGISTRAR" >
                <br>
                <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                 </div>
                
              </div>
                       </form>       

            </div>
          </div>
        </div>
               
             <!-- Modal Actualizar Permisos -->   
        <div class="modal fade" id="modal_upd_permisos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">EDITAR ROL</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            <form id="form_upd_modulos" action="post"  style="width: 300px; height: 300px">

                <div class="modal-body">                
                    
            <strong><a>ID</a><br></strong> 
                <input type="text"   id="txt_id_permisos"    name="txt_id_permisos" class="form-control">
                
            <strong><a>ROL</a></strong>
            <input type="text"   id="select_rol_permisos"    name="select_rol_permisos" class="form-control">
                    <strong><a>MODULO</a></strong>
                <select required class="form-controlm" id="select_modulo_permisos" name="select_estado_modulo_permisos">
                    <%
                    while(rs11.next()){
                    %>
                    <option  value="<%=rs11.getString("id")%>"><%=rs11.getString("descripcion")%></option>
                    <%} %>
                </select>
                    <strong><a>ESTADO</a></strong>
                <select required class="form-controlm" id="select_estado_modulo_permisos" name="select_estado_modulo_permisos">
                    <%
                    while(rs12.next()){
                    %>
                    <option  value="<%=rs12.getString("id")%>"><%=rs12.getString("descripcion")%></option>
                    <%} %>
                </select>
                </div>

                <div class="modal-footer">
                    <input type="submit"   class="btn btn-primary "  id="btn_apd_permisos" value="REGISTRAR" >
                    <br>
                    <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                </div>
            </form> 
             </div>
          </div>
        </div>
                            <!-- Modal Insertar Permisos -->
          <div class="modal fade" id="modal_add_permisos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ASIGNAR PERMISOS POR ROL DE USUARIO</h5>
                <button class="close" type="button" style="font-weight: bold;color:black;" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            <form  id="form_add_permisos"  class="form-control" style="width: 470px; height: 400px" action="POST">

              <div class="modal-body">
                
                <a>SELECCIONAR ROL</a>
                <select class="form-control" id="select_rol_per" name="select_rol_per" required>
                    <%
                    while(rs3.next()){
                    %>
                         <option value="<%=rs3.getString("id")%>"><%=rs3.getString("descripcion")%></option>
                    <% } %>
                </select>
                <br>
                <div class="container">
                    <div class="form-group">
                        <a>SELECCIONAR LOS PERMISOS PARA ESTE ROL</a>
                        <div class="multi_select_box">
                            <select class="multi_select w-100" multiple="multiple" id="select_modulos" name="select_modulos" required>
                                <%
                                while(rs2.next()){
                                %>
                                <option value="<%=rs2.getString("id")%>"><%=rs2.getString("descripcion")%></option>
                                <% } %>
                            </select>
                        </div>
                    </div>
                <script>
                    // Initialize multiple select on your regular select
                    $("#select_modulos").multipleSelect({
                    filter: true
                    });
                </script>
                
                </div>
                  <br>
                <div class="modal-footer">
                    <input type="button" onclick="modificarpemisos()" class="form-controubmitl btn btn-success"  id="btn_add_usuario" value="REGISTRAR" >
                <br>
                <button class="form-control btn btn-secondary" type="button" style="font-weight: bold;color:black;" data-dismiss="modal">CANCELAR</button> 
                 </div>
              </div>
                     </form>     
            </div>
          </div>
        </div>   
                
                
                
                
           
  </html>  
