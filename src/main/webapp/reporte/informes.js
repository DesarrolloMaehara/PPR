   
  function datosjson()
    {
        $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
         obj = JSON.stringify(result);
         
              var data_category = "";
              var data_mortandad ="";
              
          
         
                $.each(result.data, function(i, item) {
              
               data_mortandad  += "{value:'"+item.value+"'},";
               data_category   += "{label:'"+ item.label+"'},";
              
              });
               $.each(result.data2, function(i, item) {
              
            
              
              });
            
            
            
        
           
FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "column2d",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
     
     dataSource : {
  chart: {
    caption: "AVIARIO 2",
    drawcrossline: "1",
  //  yaxisname: "MORTANDAD",
    syaxisname: "Number of employees",
    showvalues: "0",
    showanchors: "0",
    numberprefix: "Mortandad:",
    plothighlighteffect: "fadeout",
    theme: "gammel"
   
  },
    "data": result.data
   
   
   
   
}

  });
  myChart.render("chart-container");
});
        }
      });
    }

