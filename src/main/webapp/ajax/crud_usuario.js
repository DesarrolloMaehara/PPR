function guardausuario() {
    $.ajax({
        url: "../crud/crud_insertar_cabecera.jsp",
        type: "post",
        data: ({
            usuario: $('#usuario').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            nombre: $('#nombre').val(),
            date: $('#date').val(),
            estado: $('#estado').val(),
            rol:$('#rol')}),
         success: function (data) {
            if (data.valor=="2"){
                //updateClass();
                //ocultar();
                //limpiar();
                swal.fire({
                    icon:'success',
                    text:data.mensaje,
                    timer:10000
                });
                //tabla();
            }
            else
                {
                    Swal.fire({
                      icon:'error',
                        text: data.mensaje,
                        timer:10000
                    });
                };             
    }
    });
}

