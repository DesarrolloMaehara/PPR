<%-- 
    Document   : datos
    Created on : 02-ene-2022, 19:57:59
    Author     : aespinola
--%>
<%@page import="org.json.JSONArray"%>
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
    JSONObject obarr = new JSONObject();
    JSONObject obarr1 = new JSONObject();
    obje = new JSONObject();
    PreparedStatement pt=con.prepareStatement(" select  distinct(aviario) as aviario,  convert(int,right(aviario,len(aviario)-1) ) as numeros, "
            + " left(aviario,1) as letra  from vis_mae_ppr_grafico where  month(fecha)='12' order by 3,2 asc");
    
    
     ResultSet rs=pt.executeQuery();
 
    ArrayList arrFecha = new ArrayList();
    ArrayList balanceados = new ArrayList();
    ArrayList mortandad = new ArrayList();
    ArrayList caudalimetro = new ArrayList();
    ArrayList temp_min = new ArrayList();
    ArrayList tem_max = new ArrayList();
    ArrayList product = new ArrayList();
        JSONArray jarray_det = new JSONArray();         

            while(rs.next()) // va a recorrer 22 veces
            {
                String aviarios=rs.getString("aviario");
                
                PreparedStatement pts=con.prepareStatement("select  aviario,fecha, muertes,caudalimetro,"
                + "temp_min,temp_max,product,consumo_bal,product from vis_mae_ppr_grafico where aviario='"+aviarios+"' "
                        + "AND month(fecha)='12'");
    
    
             ResultSet rss=pts.executeQuery();
                while(rss.next()) { // este recorre la cantidad de registros que hay en ese mes y en ese aviario
                              
                Map<String, String> fecha = new HashMap<String, String>();
                Map<String, String> bal = new HashMap<String, String>();
                Map<String, String> mor= new HashMap<String, String>();
                Map<String, String> cau = new HashMap<String, String>();
                Map<String, String> tem_mini = new HashMap<String, String>();
                Map<String, String> tem_maxi= new HashMap<String, String>();
                 Map<String, String> pro= new HashMap<String, String>();
              
                fecha.put("label", rss.getString("fecha"));
                mor.put("value", rss.getString("muertes"));
                bal.put("value", rss.getString("consumo_bal"));
                cau.put("value", rss.getString("caudalimetro"));
                tem_mini.put("value", rss.getString("temp_min"));
                tem_maxi.put("value", rss.getString("temp_max"));
                pro.put("value", rss.getString("product"));
                 
                arrFecha.add(fecha);
                mortandad.add(mor);
                balanceados.add(bal);
                caudalimetro.add(cau);
                temp_min.add(tem_mini);
                tem_max.add(tem_maxi);
                product.add(pro);
                          }
                 
                
               
                obje.put("fecha",arrFecha  );
                obje.put("balanceados",balanceados );
                obje.put("mortandad",mortandad );
                obje.put("caudalimetro",caudalimetro );
                obje.put("temp_min",temp_min );
                obje.put("tem_max",tem_max );
                obje.put("product",product );
                jarray_det.put(obje);
                obarr.put(aviarios, jarray_det); 
                
               
              }
            
    con.close();
  
    obarr1.put("aviarios", obarr); 
    
    out.print(obarr1); 
 %>
 