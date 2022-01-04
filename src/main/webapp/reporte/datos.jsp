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
    PreparedStatement pt=con.prepareStatement("select dl_fecha, dl_muertos from ppr_datolotes where dl_lote=287");
    ResultSet rs=pt.executeQuery();
    ArrayList arrData = new ArrayList();
            while(rs.next()) {
                Map<String, String> lv = new HashMap<String, String>();
              //  lv.put("label", rs.getString("dl_fecha"));
                lv.put("label", rs.getString("dl_fecha"));
                lv.put("value", rs.getString("dl_muertos"));
                arrData.add(lv);
                
            }
        con.close();
    obje.put("data",arrData );
    out.print(obje); %>
 