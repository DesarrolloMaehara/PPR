
 
  function datosjson2()
    {
        $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO H1",
    drawcrossline: "1",
    //yaxisname: "(Mortandad)",
    //syaxisname: "(Agua consumo)",
    showvalues: "0",
    showanchors: "0",
    showhovereffect: "",
    numberScaleValue: "0",
    numberScaleUnit:'0',
   // numberScaleUnit: " uni.",
    
    //"numberprefix": "",
    
    //numberprefix: "k",
      //numberprefix: "Mortandad:",
   plothighlighteffect: "fadeout",
    theme: "gammel"
  },
  categories: [
    {
      category: 
        
        result.data

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "0",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data:result.temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "chart-container",
    drawcrossline: "1",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});

        }
      });
    }

