
   
      
  function aviarioA10()
    {
        $.ajax({
        type: "POST",
        url: 'datos.jsp',
        success: function (result) 
            {
                
              var data_category = [];
              var data_mortandad =[];
         
                $.each(result.aviarios, function(i, item) {
              
                  data_mortandad  += "{value:'"+item.value+"'},";
                  data_category   += "{label:'"+ item.label+"'},";
              
              });
             
     
        const dataSource = 
        {
            chart: 
            {           
                caption: "AVARIO A10",//result.aviarios.A10[0],
                //subcaption: "China (2012-15)",
                drawcrossline: "1",
                showvalues: "0",
                showanchors: "0",
                showhovereffect: "",
                numberScaleValue: "0",
                numberScaleUnit:'0',
                plothighlighteffect: "fadeout",
                theme: "gammel"
                
       
   
    
    
   
            },
            categories: 
            [
                {
                    category: 
                    result.aviarios.A10[0].fecha
                }
            ],
            
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A10[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A10[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "area",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A10[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A10[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data:result.aviarios.A10[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A10[0].tem_max
    }

      ]
      
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA10",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }
      });
    }

function aviarioA11()
    {
        $.ajax({
        type: "POST",
        url: 'datos.jsp',
        success: function (result) 
            {
          
        const dataSource = 
        {
            chart: 
            {           
                caption: "AVARIO A11",//result.aviarios.A10[0],
                drawcrossline: "1",
                showvalues: "0",
                showanchors: "0",
                showhovereffect: "",
                numberScaleValue: "0",
                numberScaleUnit:'0',
                plothighlighteffect: "fadeout",
                theme: "gammel"
            },
            categories: 
            [
                {
                    category: 
                    result.aviarios.A11[0].fecha
                }
            ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      
       seriesname: "% Unit Share",
      renderas: "line",
      parentyaxis: "S",
      data:result.aviarios.A11[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A11[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A11[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A11[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data:result.aviarios.A11[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A11[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA11",
    drawcrossline: "1",
    
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }
      });
    }


 
  function aviarioB10()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B10",
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
        
        result.aviarios.B10[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B10[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B10[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B10[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B10[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B10[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B10[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB10",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}


  function aviarioA12()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A12",
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
        
        result.aviarios.A12[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A12[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A12[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A12[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A12[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A12[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A12[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA12",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

  function aviarioB11()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B11",
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
        
        result.aviarios.B11[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B11[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B11[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B11[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B11[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B11[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B11[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB11",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

  function aviarioH1()
    
      {  $.ajax({
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
        
        result.aviarios.H1[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.H1[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.H1[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H1[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H1[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.H1[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.H1[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioH1",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

  function aviarioH2()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO H2",
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
        
        result.aviarios.H2[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.H2[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.H2[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H2[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H2[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.H2[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.H2[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioH2",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

  function aviarioH3()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO H3",
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
        
        result.aviarios.H3[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.H3[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.H3[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H3[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.H3[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.H3[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.H3[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioH3",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

  function aviarioB2()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B2",
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
        
        result.aviarios.B2[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B2[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B2[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B2[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B2[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B2[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B2[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB2",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}








function aviarioA2()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A2",
    drawcrossline: "1",
    //yaxisname: "(Mortandad)",
    //syaxisname: "(Agua consumo)",
    showvalues: "0",
    showanchors: "0",
    showhovereffect: "",
    numberScaleValue: "0",
    numberScaleUnit:'0',
    snumbersuffix: "0",
    drawcustomlegendicon: "0",
   // numberScaleUnit: " uni.",
     rotatelabels: "1",
    numberprefix: "",
    
    //numberprefix: "k",
      //numberprefix: "Mortandad:",
   plothighlighteffect: "fadeout",
    theme: "gammel"
  },
  
  categories: [
    {
      category: 
        
        result.aviarios.A2[0].fecha

    
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
      data:result.aviarios.A2[0].mortandad
    },
      
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A2[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
      showvalues: "0",
      data:  result.aviarios.A2[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A2[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      dashed: "1",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A2[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      dashed: "1",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A2[0].tem_max
    }
     
      
      ]
      
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA2",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}



 function aviarioB3()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B3",
    drawcrossline: "0",
    //yaxisname: "(Mortandad)",
    //syaxisname: "(Agua consumo)",
    showvalues: "0",
    showanchors: "0",
    showhovereffect: "",
    numberScaleValue: "%",
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
        
        result.aviarios.B3[0].fecha

    
    }
  ],
  
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      
      
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B3[0].mortandad
    },
   
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B3[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B3[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B3[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B3[0].tem_max
    },
     {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "-100",
      data: result.aviarios.B3[0].caudalimetro
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB3",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}
 function aviarioA3()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A3",
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
    {//title: "PRODUCTO %",
      axisonleft: "1",
      titlepos: "left",
      numdivlines: "8",
      divlineisdashed: "1",
      maxvalue: "25",
      numbersuffix: "%",
      category: 
        
        result.aviarios.A3[0].fecha

    
    }
  ],
  
  
  
  
 
  
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A3[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A3[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "1",
      data:  result.aviarios.A3[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A3[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A3[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A3[0].tem_max
    }
    
      ]
      
      
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA3",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioB4()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B4",
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
        
        result.aviarios.B4[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B4[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B4[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B4[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B4[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B4[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B4[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB4",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioA4()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A4",
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
        
        result.aviarios.A4[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A4[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A4[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A4[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A4[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A4[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A4[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA4",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioB5()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B5",
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
        
        result.aviarios.B5[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B4[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B4[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B4[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B4[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B4[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B4[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB4",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioB6()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B6",
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
        
        result.aviarios.B6[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B6[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B6[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B6[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B6[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B6[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B6[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB6",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioA6()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A6",
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
        
        result.aviarios.A6[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A6[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A6[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A6[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A6[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A6[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A6[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA6",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioB7()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B7",
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
        
        result.aviarios.B7[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B7[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B7[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B7[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B7[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B7[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B7[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB7",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioA7()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A7",
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
        
        result.aviarios.A7[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A7[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A7[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A7[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A7[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A7[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A7[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA7",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioB8()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO B8",
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
        
        result.aviarios.B8[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.B8[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.B8[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B8[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.B8[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.B8[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.B8[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioB8",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioA8()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A8",
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
        
        result.aviarios.A8[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A8[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A8[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A8[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A8[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A8[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A8[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA8",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}

 function aviarioA9()
    
      {  $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
           
              
  
           
const dataSource = {
  chart: {
    caption: "AVIARIO A9",
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
        
        result.aviarios.A9[0].fecha

    
    }
  ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A9[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A9[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A9[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A9[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data: result.aviarios.A9[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A9[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA9",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }});}



  function aviarios()
    {
        $.ajax({
        type: "POST",
        url: 'datos.jsp',
        success: function (result) 
            {
                
              var data_category = [];
              var data_mortandad =[];
         
                $.each(result.aviarios, function(i, item) {
              
                  data_mortandad  += "{value:'"+item.value+"'},";
                  data_category   += "{label:'"+ item.label+"'},";
              
              });
             
     
        const dataSource = 
        {
            chart: 
            {           
                caption: "AVARIO A10",//result.aviarios.A10[0],
                drawcrossline: "1",
                showvalues: "0",
                showanchors: "0",
                showhovereffect: "",
                numberScaleValue: "0",
                numberScaleUnit:'0',
                plothighlighteffect: "fadeout",
                theme: "gammel"
            },
            categories: 
            [
                {
                    category: 
                    result.aviarios.A10[0].fecha
                }
            ],
  dataset: [
          {
      seriesname: "Mortandad",
      parentyaxis: "S",
      renderas: "bar",
      showvalues: "1",
      plottooltext: " Mortandad: $value",
      color: "CB3234",
      data:result.aviarios.A10[0].mortandad
    },
    {
      seriesname: "Consumo agua",
      plottooltext: "Consumo agua $label : <b>$dataValue</b>",
       //"showValues": "1",
        renderas: "line",
       numberScaleValue: "0",
      data: result.aviarios.A10[0].caudalimetro
    },
    {
      seriesname: "Consumo balanceados",
      plottooltext: "Consumo balanceados  $label : <b>$dataValue</b>",
      renderas: "area",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A10[0].balanceados
      
    },
    {
      seriesname: "Producto",
      plottooltext: "Producto $label : <b>$dataValue</b>",
      renderas: "line",
      numberScaleValue: "0",
     
      showvalues: "0",
      data:  result.aviarios.A10[0].product
      
    },
        {
      seriesname: "Temp. minima",
      parentyaxis: "S",
      renderas: "line",
      showvalues: "0",
      plottooltext: " Temp. minima: $value",
      color: "0CB7F2",  
      data:result.aviarios.A10[0].temp_min
    },
      {
      seriesname: "Temp. máxima",
      parentyaxis: "S",
      renderAs: "line",
      showvalues: "0",
      plottooltext: " Temp. maxima: $value",
      color: "ff0000",  
      data:result.aviarios.A10[0].tem_max
    }
    
      ]
  
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "aviarioA10",
    drawcrossline: "1",
     width: "600", 
    height: "500", 
    dataFormat: "json",
    dataSource
  }).render();
});

        }
      });
    }
    
    
    
   
    
    
    