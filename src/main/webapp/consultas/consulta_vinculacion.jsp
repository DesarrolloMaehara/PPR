<%-- 
    Document   : consulta_maquinas
    Created on : 06/04/2021, 04:59:22 PM
    Author     : hvelazquez
--%>

 <%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@ page session="true" %>
<%@include  file="../chequearsesion.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%@page contentType="application/json; charset=utf-8" %>

<%     
    String id_rol = request.getParameter("cbox_rol");
    clase.controles.VerificarConexion();
    fuente.setConexion(clase.controles.connectSesion);
    String html="";
    JSONObject ob = new JSONObject();
    ob=new JSONObject();
    
    ResultSet rs,rs2;
     rs2 = fuente.obtenerDato(" SELECT   stuff(( select ','+  CONVERT(VARCHAR,id_opcion)   from mae_ot_det_roles with (nolock) where id_rol = "+id_rol+" for XML path('') ),1,1,'')as roles");
       if(rs2.next())
        {
            html=rs2.getString("roles");
        }
        ob.put("selected",html);
        out.print(ob);  %>
 