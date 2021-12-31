var ruta_cruds="./cruds/";

//function insert permisos
    function registrar_permisos(){
    Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO PERMISO?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, CREAR!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
            $.ajax({
          type: "post",
          url: ruta_cruds+'crud_agregar_permisos.jsp',
          data:{select_rol_per:$('#select_rol_per').val(),
                select_modulos:$('#select_modulos').val()},

          success : function(data){

          if(res.tipo_registro=="2"){
                  swal.fire({
                          type: 'success',
                          text:res.mensaje,
                          confirmButtonText: "CERRAR"
                          });
                      $('#modal_add_permisos').modal('toggle');
                                  grilla_modulos();
                       }
                      else {
                     swal.fire({
                          type: 'error',
                          html:res.mensaje,
                          confirmButtonText: "CERRAR"
                          });    
                           }      
          }
          }); 
          }
           });
          };