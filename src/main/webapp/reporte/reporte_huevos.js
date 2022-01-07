var ruta_reportes="./reporte";
function contador_h(cant) {
    var step=0
    $.ajax({
        type: "POST",
        url: ruta_reportes + '/reporte_datos_huevos.jsp',
        data: {
            fecha: $('#idfecha').val(),
            aviario: $('#avi').val()
        },
        success: function (data) {
            
               $.each(data.filas,function(i, item)
           {     
                $(item.id).html(item.cantidad);           
            }
           );
                     // 
  
        }
    });
}



