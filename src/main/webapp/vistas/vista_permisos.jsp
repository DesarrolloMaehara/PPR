<%-- 
    Document   : vista_permisos
    Created on : 28/12/2021, 09:34:53
    Author     : csanchez
--%>

<%@ page language="java" import="java.sql.*" errorPage="error.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page"/>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <%   //conexion
   Connection con=conexion.crearConexion();
   //listar datos de tabla
   PreparedStatement ps,ps2,ps3,ps4,ps5,ps6,ps7,ps8,ps9,ps10,ps11,ps12;
   ResultSet rs,rs2,rs3,rs4,rs5,rs6,rs7,rs8,rs9,rs10,rs11,rs12;
   ps3=con.prepareCall(" select a.id as id_permiso,a.fecha_registro,a.id_estado,b.descripcion "
           + "as desc_estado,a.id_rol,c.descripcion "
           + "as desc_modulo,a.id_rol,c.descripcion "
           + "as desc_rol,a.id_modulos,d.descripcion "
           + "as desc_det_modulo from tab_mae_ppr_permisos a "
           + "inner join tab_mae_ppr_estados b on a.id_estado=b.id "
           + "inner join  tab_mae_ppr_roles c on a.id_rol=c.id "
           + "inner join  tab_mae_ppr_det_modulos d on a.id_modulos=d.id");
   rs3=ps3.executeQuery();
   
   %>
    <%   //conexion
   ps=con.prepareStatement("select * from tab_mae_ppr_roles");
   rs=ps.executeQuery();
   ps2=con.prepareStatement("select * from tab_mae_ppr_det_modulos where nivel = 2");
   rs2=ps2.executeQuery(); 
    %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%-- 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        --%>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="card m-4">
                        <div class="card-header">
                            <span style="">Asignar Permisos a Roles</span>
                            <span style="float: right;"><input  type="button" class="btn btn-success btn-sm" onclick="registrar_permisos();" id="btnmostrar" value="Guardar Cambios"></span>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-8 col-sm-7 col-12">
                                    <label for="txtprol">Rol</label>
                                    <select class="form-control" id="txtprol" name="txtprol" >
                                            <%
                                            while(rs.next()){
                                            %>
                                            <option value="<%=rs.getString("id")%>"><%=rs.getString("descripcion")%></option>
                                            <%} %>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-12">
                                    <%-- 
                                    <label for="txtpermiso">Permiso</label>
                                    <select class="form-control" id="txtpermiso" name="txtpermiso" required>
                                            <%
                                            while(rs2.next()){
                                            %>
                                            <option value="<%=rs2.getString("id")%>"><%=rs2.getString("descripcion")%></option>
                                            <% } %>
                                    </select>
                                    --%>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Habilitar/Deshabilitar</th>
                                                    <th>Permiso</th>
                                                </tr>
                                            </thead>
                                            <tbody id="listaprecio">
                                                    <%
                                                    while(rs3.next()){
                                                    %>
                                                      <tr>
                                                            <td><div class='form-check form-switch'><input type='checkbox' class='form-check-input' id='txtindice'></div></td>
                                                            <td ><%=rs3.getInt("id_permiso")%></td>
                                                      </tr>
                                                                    <%} %>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            <%--
                        <div class="card-footer">
                             <div class="row">
                                 <div class="col-12">
                                     <button class="btn btn-primary">Listar Permisos</button>
                                 </div>
                                 
                                 <div class="col-12 mt-2">
                                     <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Rol</th>
                                                    <th>Permiso</th>
                                                    <th>FECHA</th>
                                                    <th>ESTADO</th>
                                                </tr>
                                            </thead>
                                            <tbody id="listadetalles">
                                     
                                            </tbody>
                                        </table>
                                 --%>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
<script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script type="text/javascript">
    var Rol; var Permiso;
    $(document).ready(main());
    function main(){
        oyentesControls();
    }
    function oyentesControls(){
        $('#btnmostrar').click(function(){
            Rol=$('#txtprol').val();
            Permisos=$('#txtpermiso').val();
            if(!validar(Permiso,1)){
            addper(Rol,Permisos);
            }else{
                alert("Prducto Existe");
            }
        });
    }
    function addper(Rol,Permiso){
        var fila="<tr><td>"+Rol+"</td><td>"+Permiso+"</td></tr>";
        $('#listaprecio').append(fila);
    }
    function validar(dato,pos){var bandera=false;
        var table=document.getElementById('listaprecio');
        for (var i = 0; i < table.rows.length; i++ ){
            if(table.rows[i].cells[pos].innerHTML==dato){
                bandera=true;
            }
        }
        return bandera
    }
</script>  
<script src="css/assets/css,js, otros/sweetalert/sweetAlert2/sweetalert2.all.min.js" type="text/javascript"></script>
<script src="ajax/crud_permisos.js" type="text/javascript"></script>
