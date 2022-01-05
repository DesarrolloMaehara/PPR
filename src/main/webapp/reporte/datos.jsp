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
 
    ArrayList arrFecha = new ArrayList();
    ArrayList balanceados = new ArrayList();
    ArrayList mortandad = new ArrayList();
    ArrayList caudalimetro = new ArrayList();
    ArrayList temp_min = new ArrayList();
    ArrayList tem_max = new ArrayList();
    ArrayList product = new ArrayList();
            while(rs.next()) {
                Map<String, String> fecha = new HashMap<String, String>();
                Map<String, String> bal = new HashMap<String, String>();
                Map<String, String> mor= new HashMap<String, String>();
                Map<String, String> cau = new HashMap<String, String>();
                Map<String, String> tem_mini = new HashMap<String, String>();
                Map<String, String> tem_maxi= new HashMap<String, String>();
                 Map<String, String> pro= new HashMap<String, String>();
              
                fecha.put("label", rs.getString("fecha"));
                mor.put("value", rs.getString("muertes"));
                bal.put("value", rs.getString("consumo_bal"));
                cau.put("value", rs.getString("caudalimetro"));
                tem_mini.put("value", rs.getString("temp_min"));
                tem_maxi.put("value", rs.getString("temp_max"));
                pro.put("value", rs.getString("product"));
                
                arrFecha.add(fecha);
                mortandad.add(mor);
                balanceados.add(bal);
                caudalimetro.add(cau);
                temp_min.add(tem_mini);
                tem_max.add(tem_maxi);
                product.add(pro);
               
              }
            
    con.close();
    obje.put("data",arrFecha  );
    obje.put("balanceados",balanceados );
    obje.put("mortandad",mortandad );
    obje.put("caudalimetro",caudalimetro );
    obje.put("temp_min",temp_min );
    obje.put("tem_max",tem_max );
    obje.put("product",product );
    out.print(obje); %>
 