<%-- 
    Document   : crud_agregar_usuario_pendientes
    Created on : 28-dic-2021, 7:35:53
    Author     : aespinola
--%>

<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.CallableStatement"%>
<%@page contentType="application/json; charset=utf-8"%>
<%@page import="java.sql.Statement"%>
<%@page import ="java.sql.Connection"%>
<%@page import ="java.sql.SQLException"%>
<%@page import ="java.sql.DriverManager"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.PreparedStatement"%>
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />

<%
    JSONObject obje = new JSONObject();
        obje = new JSONObject();
        
        String nombre;
        
        
        
        nombre= request.getParameter("peticion");
        
     
        String mensaje="";
        String tipo_registro="";
        
        
       //   MessageDigest m = MessageDigest.getInstance("MD5");
   // m.reset();
  //  m.update(pass.getBytes());
   // byte[] digest = m.digest();
   // BigInteger bigInt = new BigInteger(1,digest);
    //String hashtext = bigInt.toString(16);
      
    try{
        Connection con = conexion.crearConexion();
        Statement st = con.createStatement();
        CallableStatement call;
             
            call = con.prepareCall("{call stp_mae_ppr_insert_usuario_reset(?,?,?)}");
               
            call.setString(1, nombre);
            call.registerOutParameter(2, java.sql.Types.VARCHAR);
            call.registerOutParameter(3, java.sql.Types.VARCHAR);
            call.execute();
            
             mensaje=call.getString(3);
             tipo_registro=call.getString(2);
              con.close();
          if (tipo_registro=="0")
                {
                    clase.controles.connectSesion.rollback();
                   
                }   
                else  
                {
                     //clases.controles.connectSesion.rollback(); 
                    clase.controles.connectSesion.commit();
                  
                } 
 } catch (Exception ex) {
    
  }
 finally {
     obje.put("mensaje",mensaje );
     obje.put("tipo_registro",tipo_registro );
        out.print(obje);
 }
%>
