<%-- 
    Document   : reporte_datos_huevos
    Created on : 06/01/2022, 09:32:51
    Author     : csanchez
--%>

<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.CallableStatement"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<%@page contentType="application/json; charset=utf-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
  <% 
        String aviario= request.getParameter("aviario") ;
        String fecha= request.getParameter("fecha") ;

    Connection con=conexion.crearConexion();
    JSONObject obje = new JSONObject();
    obje = new JSONObject();
    PreparedStatement pt=con.prepareStatement("select fila, cant from ppr_contador where fecha='"+fecha+"' "
            + "and aviario='"+aviario+"'");
     //PreparedStatement pt=con.prepareStatement("select idusuario,nombreusuario from tab_mae_ppr_log");
    ResultSet rs=pt.executeQuery();
 
    ArrayList Fila = new ArrayList();
    ArrayList Cant = new ArrayList();
            while(rs.next()) {

                Map<String, String> fila_f = new HashMap<String, String>();
                Map<String, String> cant_c = new HashMap<String, String>();
              
                fila_f.put("id", "#celda"+rs.getString("fila"));
                fila_f.put("cantidad", rs.getString("cant"));

                Fila.add(fila_f);
               // Cant.add(cant_c);
               
              }
            con.close();
    obje.put("filas",Fila );
   // obje.put("cant",Cant );
    out.print(obje); 
 %>
