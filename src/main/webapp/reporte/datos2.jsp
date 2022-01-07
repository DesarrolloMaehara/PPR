<%-- 
    Document   : datos
    Created on : 02-ene-2022, 19:57:59
    Author     : aespinola
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
<%@page import="com.google.gson.*" %>
 <% 
    Connection con=conexion.crearConexion();
    JSONObject obje = new JSONObject();
    obje = new JSONObject();
    PreparedStatement pt=con.prepareStatement("select  aviario,fecha, muertes,caudalimetro,"
            + "temp_min,temp_max,product,consumo_bal,product from vis_mae_ppr_grafico where aviario='H1' AND month(fecha)='12'");
     //PreparedStatement pt=con.prepareStatement("select idusuario,nombreusuario from tab_mae_ppr_log");
    ResultSet rs=pt.executeQuery();
 
    ArrayList H1=new ArrayList();
   
            while(rs.next()) {
                Map<String, String> data = new HashMap<String, String>();
            
              
                data.put("fechs", rs.getString("fecha"));
                data.put("muertes", rs.getString("muertes"));
                data.put("consumo_bal", rs.getString("consumo_bal"));
                data.put("caudalimetro", rs.getString("caudalimetro"));
                data.put("temp_min", rs.getString("temp_min"));
                data.put("temp_max", rs.getString("temp_max"));
                data.put("product", rs.getString("product"));
                
               
                H1.add(data);
               
              }
            
    con.close();
    obje.put("data",H1);
  
    out.print(obje); 
 %>
 