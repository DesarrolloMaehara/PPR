<%-- 
    Document   : select
    Created on : 31-dic-2021, 20:43:46
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
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@page import="com.google.gson.*" %>>


<!DOCTYPE html>
<html>
    <head>
        <script src="../css/assets/jquery/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/3.18.0/themes/fusioncharts.theme.fusion.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Creating Charts with Data from a Database - fusioncharts.com</title>
<!--     Step 1: Include the `fusioncharts.js` file. This file is needed to
        render the chart. Ensure that the path to this JS file is correct.
        Otherwise, it may lead to JavaScript errors.
-->
      
    </head>
    <body>
         <div id="chart"></div>
<!--    Step 2: Include the `FusionCharts.java` file as a package in your
        project.

        Step 3:Include the package in the file where you want to show
        FusionCharts.

-->

        
    
<!--

        Step 4: Create a chart object using the FusionCharts JAVA class
        constructor. Syntax for the constructor:
        `FusionCharts("type of chart", "unique chart id", "width of chart",
                        "height of chart", "div id to render the chart",
                        "data format", "data source")`
-->

 <%
         /*
            google-gson

            Gson is a Java library facilitating conversion of Java objects
            into their JSON representation and
            JSON strings into their equivalant Java objects.
            Gson can also work with arbitrary Java objects
            including the pre-existing ones that
            you may not have the source-code for.
            Read the note below this code for more details on the google-gson library.
         */

            Connection con=conexion.crearConexion();
          
               Gson gson = new Gson();


            // Form the SQL query that returns the top 10 most populous countries
            String sql="select  dl_muertos from ppr_datolotes where dl_lote=287";

            // Execute the query
            PreparedStatement pt=con.prepareStatement(sql);
            ResultSet rs=pt.executeQuery();

            // The 'chartobj' map object holds the chart attributes and data.
            Map<String, String> chartobj = new HashMap<String, String>();

            chartobj.put("caption", "Top 10 most populous countries");
            chartobj.put("showValues", "0");
            chartobj.put("theme", "fusion");

            // Push the data into the array using map object.
            ArrayList arrData = new ArrayList();
            while(rs.next()) {
                Map<String, String> lv = new HashMap<String, String>();
               // lv.put("label", rs.getString("dl_fecha"));
                lv.put("value", rs.getString("dl_muertos"));
                arrData.add(lv);
            }

            //close the connection.
            rs.close();

            //create 'dataMap' map object to make a complete FC datasource.
             Map<String, String> dataMap = new LinkedHashMap<String, String>();
        /*
            gson.toJson() the data to retrieve the string containing the
            JSON representation of the data in the array.
              
        */ 
         dataMap.put("chart", gson.toJson(chartobj));
             dataMap.put("data", gson.toJson(arrData));
           
            FusionCharts columnChart= new FusionCharts(
                        //type of chart
                        "column2d",
                        //unique chart ID
                        "chart1",
                        //width and height of the chart
                        "700","400",
                        //div ID of the chart container
                        "chart",
                        //data format
                        "json",
                        //data source
                        gson.toJson(dataMap)
                    );
         
     //obje.put("chart",chartobj );
     //obje.put("data",arrData );
       //  out.print(obje);
          
            %>
      
<!--    Step 5: Render the chart    -->
            <%=columnChart.render()%>
   </body>
</html>

