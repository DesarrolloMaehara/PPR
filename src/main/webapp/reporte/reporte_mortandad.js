var ruta_reportes="./reporte";
function contador_m() {
    $.ajax({
        type: "POST",
        url: ruta_reportes +'/reporte_datos_mortandad.jsp',
        data: {
            fecha: $('#idfecha_m').val(),
            aviario: $('#avi_m').val()
        },
        success: function (data) {

            $.each(data.filas, function (i, item)
            {
                $(item.id).html(item.cantidad);
            }
            );
        }
    });
}


