<%-- 
    Document   : vista_informes
    Created on : 06/01/2022, 15:22:16
    Author     : csanchez
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include  file="../control/control_chequearsesion.jsp" %>
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%     
    String usu = request.getParameter("usuario");
    String contra = request.getParameter("pass");
    String id_rol = (String) sesionOk.getAttribute("id_rol");
    String id_usuario = (String) sesionOk.getAttribute("id_usuario");
    clase.controles.VerificarConexion();
    fuente.setConexion(clase.controles.connectSesion);
    String html="";
    ResultSet rs2;
    rs2 = fuente.obtenerDato("select html from vis_mae_ppr_permisos_login where nivel=3 and id_usuario="+id_usuario+"");
    while(rs2.next())
    {
        html=html+  rs2.getString(1);
    }
    out.print(html);  %>
