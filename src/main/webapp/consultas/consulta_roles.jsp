<%-- 
    Document   : consulta_roles
    Created on : 15-dic-2021, 7:49:43
    Author     : aespinola
--%>


<%@page contentType="application/json; charset=utf-8" %>
 <%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@ page session="true" %>
<%@include  file="../control/control_chequearsesion.jsp" %>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />


<%     
    clase.controles.VerificarConexion();
    fuente.setConexion(clase.controles.connectSesion);
    String html="";
    JSONObject ob = new JSONObject();
    ob=new JSONObject();
    
    ResultSet rs,rs2;
     rs2 = fuente.obtenerDato("select * from tab_mae_ppr_roles");
       while(rs2.next())
        {
            html=html+"<OPTION  VALUE='"+ rs2.getString(1)+"'>"+ rs2.getString(2)+"</OPTION>";
        }
        ob.put("cbox_roles","<OPTION value='' selected='selected'>SELECCIONE ROL</OPTION>"+html);
        out.print(ob);  %>