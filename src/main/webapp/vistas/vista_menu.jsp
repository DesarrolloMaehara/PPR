<%-- 
    Document   : vista_menu
    Created on : 15/12/2021, 08:40:00
    Author     : csanchez
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include  file="../control/control_chequearsesion.jsp" %>
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%     
    String id_usuario = (String) sesionOk.getAttribute("id_usuario");
    clase.controles.VerificarConexion();
    fuente.setConexion(clase.controles.connectSesion);
    String html="";
    ResultSet rs2;
    rs2 = fuente.obtenerDato("select html from vis_mae_ppr_permisos_login where nivel=1 and id_usuario="+id_usuario+"");
    while(rs2.next())
    {
        html=html+  rs2.getString(1);
    }
    out.print(html);%>
    
