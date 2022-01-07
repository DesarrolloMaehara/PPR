var ruta_vistas = "./vistas/";
var ruta_controles = "./controles/";
var ruta_grillas = "./grillas/";
var ruta_consultas = "./consultas/";
var ruta_cruds = "./cruds/";
var ruta_reportes="./reporte";
///AJAX REGISTROS

function onclickMenu()
{
    $('#panel_control').click(function () {
        ir_panel_control();
    });
     $('#div_informe').click(function () {
        ir_informes();
    });
}

//function insert roles
function registrar_roles() {
    Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO ROL?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, CREAR!',
        cancelButtonText: 'NO, CANCELAR!'}).then((result) =>
    {
        if (result.value)
        {
            $.ajax({
                type: "POST",
                url: ruta_cruds + "/crud_agregar_rol.jsp",
                data: {
                    descripcion: $('#descripcion').val()
                },
                success: function (res) {
                    if (res.tipo_registro == "2") {
                        swal.fire({
                            type: 'success',
                            text: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                        $('#modal_add_roles').modal('toggle');
                        grilla_roles();
                    } else {
                        swal.fire({
                            type: 'error',
                            html: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                    }
                }
            });
        }
    });
}

//function insert permisos
function registrar_permisos() {
    Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO PERMISO?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, CREAR!',
        cancelButtonText: 'NO, CANCELAR!'}).then((result) =>
    {
        if (result.value)
        {
            $.ajax({
                type: "post",
                url: ruta_cruds + 'crud_agregar_permisos.jsp',
                data: {select_rol_per: $('#select_rol_per').val(),
                    select_modulos: $('#select_modulos').val()},
                success: function (data) {
                    if (res.tipo_registro == "2") {
                        swal.fire({
                            type: 'success',
                            text: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                        $('#modal_add_permisos').modal('toggle');
                        grilla_modulos();
                    } else {
                        swal.fire({
                            type: 'error',
                            html: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                    }
                }
            });
        }
    });
}
;


function grilla_roles() {
    $.ajax({
        url: ruta_grillas + '/grilla_rol.jsp',
        type: "post",
        success: function (data) {
            $('#contenedor_principal').html(data);
            $('#contenido_row').html("");
        }});
}
;

//function insert modulos
function registrar_modulos() {
    Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO USUARIO?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, CREAR!',
        cancelButtonText: 'NO, CANCELAR!'}).then((result) =>
    {
        if (result.value)
        {
            $.ajax({
                url: ruta_cruds + "/crud_agregar_modulos.jsp",
                type: "post",
                data: {
                    descripcion: $('#descripcionmodulos').val()
                },
                success: function (res) {
                    if (res.tipo_registro == "2") {
                        swal.fire({
                            type: 'success',
                            text: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                        $('#modal_add_modulos').modal('toggle');
                        grilla_modulos();
                    } else {
                        swal.fire({
                            type: 'error',
                            html: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                    }
                }
            });
        }
    });
}
;

///cargar vistar, traer grilas


function modalinsertroles() {
    $("#form_add_rol").trigger("reset");
    $(".modal-header").css("background-color", "#28a745");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Registrar rol de usuario");

    $("#modal_add_roles").modal("show");

}
;

function modalinsertmodulos() {
    $("#form_add_modulos").trigger("reset");
    $(".modal-header").css("background-color", "#28a745");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Registrar modulosss");

    $("#modal_add_modulos").modal("show");

}
;

function modalinsertpermisos() {
    $("#form_add_permisos").trigger("reset");
    $(".modal-header").css("background-color", "#28a745");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Registrar Permisos por Rol");

    $("#modal_add_permisos").modal("show");

}
;

function traer_menu()
{
    $.ajax({
        type: "POST",
        url: ruta_vistas + "/vista_menu.jsp",
        beforeSend: function ()
        {
            $('#contenido_row').html("");
        },
        success: function (data)
        {
            $("#contenido_row").html(data);

            onclickMenu();
        }
    });
}

function ir_panel_control() {
    direccion = "1";
    $.ajax({
        type: "POST",
        url: ruta_vistas + '/vista_menu_panel.jsp',
        beforeSend: function ()
        {
            $('#div_cargar_menu').show();
            $('#contenido_row').html('');
            $('#contenedor_principal').html('');
            $('#contenido').html('');

        },
        success: function (res)
        {
            $('#contenido_row').html(res);

            $('#div_registro_usuario').click(function () {
                traer_vista_usuario();
            });
            $('#div_registro_roles').click(function () {
                grilla_usuarios();
            });
            $('#div_registro_modulos').click(function () {
                grilla_modulos();
            });
            $('#div_registro_permisos').click(function () {
                grilla_permisos();
            });
           
        }
    });

}
function ir_informes() {
    direccion = "1";
    $.ajax({
        type: "POST",
        url: ruta_vistas + '/vista_informes.jsp',
        beforeSend: function ()
        {
            $('#div_cargar_menu').show();
            $('#contenido_row').html('');
            $('#contenedor_principal').html('');
            $('#contenido').html('');

        },
        success: function (res)
        {
            $('#contenido_row').html(res);

             $('#div_informe_mortandad').click(function () {
                grafico_mortandad();
            });
            $('#div_informe_huevos').click(function () {
                grilla_huevos();
            });
            $('#div_informe_muerte').click(function () {
                grilla_muertes();
            });
           
        }
    });

}
  function grilla_permisos() {
        $.ajax({
            url: ruta_vistas + '/vista_permisos.jsp',
            type: "post",
            success: function (data) {
                $('#contenedor_principal').html(data);
                $('#contenido_row').html("");
                //  $('#select_modulos').selectpicker();  
            }});
    }
      function grafico_mortandad() {
        $.ajax({
            url: ruta_reportes + '/informes.jsp',
            type: "post",
            success: function (data) {
                $('#contenedor_principal').html(data);
                $('#contenido_row').html("");
                //  $('#select_modulos').selectpicker();  
            }});
    }
     function grilla_huevos() {
        $.ajax({
            url: ruta_reportes + '/reporte_grilla_huevos.jsp',
            type: "post",
            success: function (data) {
                $('#contenedor_principal').html(data);
                $('#contenido_row').html("");
                //  $('#select_modulos').selectpicker();  
            }});
    }
         function grilla_muertes() {
        $.ajax({
            url: ruta_reportes +'/reporte_grilla_mortandad.jsp',
            type: "post",
            success: function (data) {
                $('#contenedor_principal').html(data);
                $('#contenido_row').html("");
                //  $('#select_modulos').selectpicker();  
            }});
    }
function edit_permisos(id_permiso, desc_rol, desc_det_modulo, desc_estado) {
    $("#txt_id_permisos").val(id_permiso);
    $("#select_rol_permisos").val(desc_rol);
    $("#select_modulo_permisos").val(desc_det_modulo);
    $("#select_estado_modulo_permisos").val(desc_estado);

    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("MODIFICAR PERMISOS");


    $("#modal_upd_permisos").modal("show");
}
function modificarpemisos() {

    txt_id_permisos = $.trim($("#txt_id_permisos").val());
    select_rol_permisos = $.trim($("#select_rol_permisos").val());
    select_modulo_permisos = $.trim($("#select_modulo_permisos").val());
    select_estado_modulo_permisos = $.trim($("#select_estado_modulo_permisos").val());
    Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA GUARDAR LOS CAMBIOS?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO, CANCELAR!'}).then((result) =>
    {
        if (result.value)
        {
            $.ajax({
                type: "POST",
                url: ruta_cruds + 'crud_modificar_permisos.jsp',
                data: {txt_id_permisos: txt_id_permisos, select_rol_permisos: select_rol_permisos, select_modulo_permisos: select_modulo_permisos, select_estado_modulo_permisos: select_estado_modulo_permisos},
                success: function (res)
                {
                    if (res.tipo_respuesta == "2") {
                        swal.fire({
                            type: 'success',
                            text: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                        $('#modal_upd_permisos').modal('toggle');
                        grilla_permisos();
                    } else {
                        swal.fire({
                            type: 'error',
                            text: res.mensaje,
                            confirmButtonText: "CERRAR"
                        });
                    }
                }
            });
        }
    });
}
;
function obtenerFecha(e)
{
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
}