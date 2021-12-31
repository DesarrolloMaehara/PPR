<%-- 
    Document   : crud_restablecer_pass
    Created on : 20-dic-2021, 9:39:38
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

    String id_usuario       = request.getParameter("txt_id_reset");

    String mensaje="";
       try 
    {
        Connection con = conexion.crearConexion();
        CallableStatement  call;   
                call = clase.controles.connectSesion.prepareCall("{call  stp_mae_ppr_restablecer_pass (?,?,? )}");
                call .setInt(1,  Integer.parseInt(id_usuario) );
                call.setString(2, "123");
                call.registerOutParameter(3, java.sql.Types.VARCHAR);
                call.execute(); 
              
                mensaje= call.getString(3);
                con.close();
           
         } catch (Exception ex) {
    
           }
           finally {  ob.put("mensaje", mensaje);
                       out.print(ob);
                   }
            %>