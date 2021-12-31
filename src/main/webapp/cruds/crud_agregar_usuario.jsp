<%@page import="java.math.BigInteger"%>
<%@page import="java.security.MessageDigest"%>
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
        String apellido;
        String usuario;
        String pass;
        String email;
        String rol;
        String estado;
        
        nombre= request.getParameter("nombre");
        apellido = request.getParameter("apellido");
        usuario = request.getParameter("usuario");
        pass = request.getParameter("pass");
        email = request.getParameter("correo");
        rol = request.getParameter("select_rol");
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
             
            call = con.prepareCall("{call stp_mae_ppr_insert_usuarios(?,?,?,?,?,?,?)}");
               
            call.setString(1, nombre);
            call.setString(2, apellido);
            call.setString(3, usuario);
            call.setString(4, email);
            call.setInt(5, Integer.parseInt(rol)  );
            call.registerOutParameter(6, java.sql.Types.VARCHAR);
            call.registerOutParameter(7, java.sql.Types.VARCHAR);
            call.execute();
            
             mensaje=call.getString(7);
             tipo_registro=call.getString(6);
              con.close();
          if (tipo_registro=="1")
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
