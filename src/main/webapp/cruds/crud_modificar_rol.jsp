<%-- 
    Document   : crud_modificar_rol
    Created on : 21-dic-2021, 13:52:16
    Author     : aespinola
--%>

<%@page import="java.sql.CallableStatement"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@ page session="true" %>
<%@include  file="../control/control_chequearsesion.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%@page contentType="application/json; charset=utf-8" %>

<%    
    clase.controles.VerificarConexion();
    fuente.setConexion(clase.controles.connectSesion);
    JSONObject ob = new JSONObject();
    ob=new JSONObject();

    String id            = request.getParameter("txt_id_rol");
    String descri        = request.getParameter("txt_decri_rol");
    String estado      = request.getParameter("select_estado_rol");
  
    
    String mensaje      ="";
    String tipo_respuesta="";    
    try 
    { 
        Connection con= conexion.crearConexion();
        CallableStatement  call;   
                call = clase.controles.connectSesion.prepareCall("{call [stp_mae_ppr_update_rol](?,?,?,?,?)}");
                call .setInt(1,    Integer.parseInt(id) );
                call .setString(2, descri);
                call .setString(3, estado);
               
                call.registerOutParameter(4, java.sql.Types.VARCHAR);
                call.registerOutParameter(5, java.sql.Types.VARCHAR);
                call.execute(); 
                tipo_respuesta=call.getString(4);
                mensaje=call.getString(5);
               
                con.close();
                if (tipo_respuesta=="1")
                {
                    clase.controles.connectSesion.rollback();
                   
                }   
                else  
                {
                     //clases.controles.connectSesion.rollback(); 
                    clase.controles.connectSesion.commit();
                  
                }    
               
           
         } catch (Exception e){
    
  }
     finally{           
                ob.put("mensaje", mensaje);
                ob.put("tipo_respuesta", tipo_respuesta);
                 out.print(ob); 
            }
           %>