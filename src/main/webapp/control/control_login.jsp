<%-- 
    Document   : logincontrol
    Created on : 06/12/2021, 15:46:57
    Author     : csanchez
--%>

<%@page import="java.sql.CallableStatement"%>
<%@page import="java.math.BigInteger"%>
<%@page import="java.security.MessageDigest"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page session="true" %>

<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%
    Connection con = conexion.crearConexion();
    
    
    fuente.setConexion(con);
    String usu = request.getParameter("usuario");
    String pass = request.getParameter("pass");

       MessageDigest m = MessageDigest.getInstance("MD5");
    m.reset();
    m.update(pass.getBytes());
    byte[] digest = m.digest();
    BigInteger bigInt = new BigInteger(1,digest);
    String clavehASH = bigInt.toString(16);  

    if(pass.equals("123")){
        clavehASH="123";
    }
    
 ResultSet rs = fuente.obtenerDato("select * from tab_mae_ppr_usuarios where usuario = '"+usu+"'"
         + "and pass = '"+clavehASH+"'");

   if(rs.next()){
      HttpSession sesionOk = request.getSession();
      sesionOk.setAttribute("id_usuario",            rs.getString("id")); 
      sesionOk.setAttribute("id_rol",         rs.getString("id_rol"));
      sesionOk.setAttribute("usuario",       rs.getString("usuario"));
      sesionOk.setAttribute("nombre",        rs.getString("nombre"));
      sesionOk.setAttribute("apellido",      rs.getString("apellido"));
      sesionOk.setAttribute("email",         rs.getString("email"));
      sesionOk.setAttribute("pass",          rs.getString("pass"));
      sesionOk.setAttribute("id_estado",      rs.getString("id_estado"));
      sesionOk.setAttribute("fecha_creacion", rs.getString("fecha_creacion"));
      String id_rol = rs.getString("id_rol");
    
        if(pass.equals("123")){
              response.sendRedirect("login_cambio_pass.jsp");
        }
        else {
           response.sendRedirect("../menu.jsp");
            CallableStatement  call;
             call =con.prepareCall("{call stp_mae_ppr_registrar_log(?,?,?)}");
             call.setString(1, rs.getString("id"));
             call.setString(2, usu);
             call.setString(3, "Login");
             call.execute();

        }
         
       
    }  
  else{
%>

<jsp:forward page="contol_login_error.jsp">
<jsp:param name="error" value="Usuario y/o clave incorrectos.<br>Vuelve a intentarlo."/>
</jsp:forward>

<%
} 
  
%>
<script src="../css/assets/jquery/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="../css/assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>