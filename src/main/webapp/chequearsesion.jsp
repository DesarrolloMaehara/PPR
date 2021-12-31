<%-- 
    Document   : chequearsesion
    Created on : 20/12/2021, 15:35:10
    Author     : csanchez
--%>

<%@ page session="true" %>
<%
    HttpSession sesionOk = request.getSession();
    sesionOk.setMaxInactiveInterval(300*6);
    if (sesionOk.getAttribute("usuario") == null ) 
    {
        clase.controles.connectSesion.close();
        response.sendRedirect("index.jsp");
    }
%>