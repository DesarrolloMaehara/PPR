  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  function datosjson2()
    {
        $.ajax({
                type: "POST",
                url: 'datos.jsp',
                      
            success: function (result) 
            {
              var data_category = "";
              var data_mortandad = "";
              
              
               $.each(result.data, function(i, item) {
                data_category += "{label: '"+item.label+"'}, ";
                data_mortandad += "{value: '"+item.value+"'}, ";
            }) 
             var myChart = new FusionCharts({
                 
                 
    type: "mscombidy2d",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource:{
  chart: {
    caption: "Revenue, Profits & Number of employees",
    drawcrossline: "1",
    yaxisname: "Revenue / Profit (in $)",
    syaxisname: "Number of employees",
    showvalues: "0",
    showanchors: "0",
    numberprefix: "$",
    plothighlighteffect: "fadeout",
    theme: "fusion"
  },
  categories: [
    {
      category: 
        [
   
         
          data_category                  
   //{label: '2021-11-09'}, {label: '2021-11-10'}, {label: '2021-11-11'}, {label: '2021-11-12'}, {label: '2021-11-13'}, {label: '2021-11-14'}, {label: '2021-11-15'}, {label: '2021-11-16'}, {label: '2021-11-17'}, {label: '2021-11-18'}, {label: '2021-11-19'}, {label: '2021-11-20'}, {label: '2021-11-21'}, {label: '2021-11-22'}, {label: '2021-11-23'}, {label: '2021-11-24'}, {label: '2021-11-25'}, {label: '2021-11-26'}, {label: '2021-11-27'}, {label: '2021-11-28'}, {label: '2021-11-29'}, {label: '2021-11-30'}, {label: '2021-12-01'}, {label: '2021-12-02'}, {label: '2021-12-03'}, {label: '2021-12-04'}, {label: '2021-12-05'}, {label: '2021-12-06'}, {label: '2021-12-07'}, {label: '2021-12-08'}, {label: '2021-12-09'}, {label: '2021-12-10'}, {label: '2021-12-11'}, {label: '2021-12-12'}, {label: '2021-12-13'}, {label: '2021-12-14'}, {label: '2021-12-15'}, {label: '2021-12-16'}, {label: '2021-12-17'}, {label: '2021-12-18'}, {label: '2021-12-19'}, {label: '2021-12-20'}, {label: '2021-12-21'}, {label: '2021-12-22'}, {label: '2021-12-23'}, {label: '2021-12-24'}, {label: '2021-12-25'}, {label: '2021-12-26'}, {label: '2021-12-27'}, {label: '2021-12-28'}, {label: '2021-12-29'}, {label: '2021-12-30'}             
         
        ]
    }
  ],
  dataset: [
    {
      data: [
          data_mortandad
         //  {value: '6'}, {value: '6'}, {value: '14'}, {value: '10'}, {value: '11'}, {value: '0'}, {value: '12'}, {value: '7'}, {value: '8'}, {value: '3'}, {value: '9'}, {value: '7'}, {value: '0'}, {value: '9'}, {value: '8'}, {value: '5'}, {value: '3'}, {value: '8'}, {value: '10'}, {value: '0'}, {value: '16'}, {value: '5'}, {value: '4'}, {value: '6'}, {value: '4'}, {value: '3'}, {value: '0'}, {value: '33'}, {value: '9'}, {value: '0'}, {value: '14'}, {value: '6'}, {value: '4'}, {value: '0'}, {value: '12'}, {value: '4'}, {value: '5'}, {value: '7'}, {value: '4'}, {value: '5'}, {value: '0'}, {value: '21'}, {value: '6'}, {value: '10'}, {value: '7'}, {value: '3'}, {value: '0'}, {value: '11'}, {value: '5'}, {value: '3'}, {value: '7'}, {value: '4'}
         ]
    }
   

  ]
}
  }).render();
                
             }
             });
    }
