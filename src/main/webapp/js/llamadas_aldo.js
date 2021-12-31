/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

  var ruta_vistas="./vistas/";
  var ruta_controles="./controles/";
  var ruta_grillas="./grillas/";
  var ruta_consultas="./consultas/";
  var ruta_cruds="./cruds/";
///AJAX REGISTROS

   
//function insert usuario

function registrar_usuario(){
   Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO USUARIO?",
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
                type: "POST",
                url: ruta_cruds+'crud_agregar_usuario.jsp',
                data: {nombre:$('#nombre').val(),
                       apellido:$('#apellido').val(),
                       usuario:$('#usuario').val(), 
                       correo:$('#correo').val(),
                       select_rol:$('#select_rol').val()},
                  
            success: function (res) 
            {
                 if(res.tipo_registro=="2"){
        swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
                
            $('#modal_add_usuarios').modal('toggle');
            
                        traer_vista_usuario();
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
   }
  function menu2()
    {
        $.ajax({
                type: "POST",
                url: ruta_vistas+"/vista_menu.jsp",
             beforeSend: function() 
             {
            $('#contenido_row').html("");       
            $('#contenedor_principal').html("");
                },           
            success: function (data) 
            {
                $("#contenido_row").html(data);

                onclickMenu();
             }
             });
    }

$(document).ready(function() {
    $(document).on('submit', '#form_add_rol',     function() {
        registrar_roles();
      return false;
     });
    $(document).on('submit', '#form_upd_rol',     function() {
        modificar_rol();
      return false;
     });
   $(document).on('submit', '#form_add_modulos',  function() {
        registrar_modulos();
      return false;
     });
    $(document).on('submit', '#form_upd_modulos',function() {
        modificar_modulos();
      return false;
     });
   $(document).on('submit', '#form_add_user',    function() {
        registrar_usuario();
      return false;
     });
   $(document).on('submit', '#form_upd_user',    function() {
        modificar_usuario();
      return false;
     });
    $(document).on('submit', '#form_add_pendiente',    function() {
        registrar_usuario_pendiente();
      return false;
     });
       $(document).on('submit', '#form_add_reset',    function() {
        registrar_peticion_reset();
      return false;
     });
});

//function insert permisos
function registrar_permisos(){
       Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA CREAR EL NUEVO USUARIO?",
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
url: ruta_cruds+"/crud_agregar_permisos.jsp",
type: "post",
data:{
select_rol_per:$('#select_rol_per').val(),
select_modulos:$('#select_modulos').val()
},
success : function(res){
       
        swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_add_permisos').modal('toggle');
                     
              
                 
}
}); 
}
 });
};
function registrar_usuario_pendiente(){
   Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA ENVIAR SOLICITUD USUARIO?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, ENVIAR!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
      $.ajax({
                type: "POST",
                url: ruta_cruds+'crud_agregar_usuario_pendientes.jsp',
                data: {nombrepend:$('#nombrepend').val(),
                       apellidopend:$('#apellidopend').val(),
                       select_area:$('#select_area').val()
                      },
                  
            success: function (res) 
            {
                 if(res.tipo_registro=="2"){
        swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_add_pendiente').modal('toggle');
                      
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
   }
   function registrar_peticion_reset(){
   Swal.fire({
        title: 'CONFIRMACION',
        text: "ENVIAR PETICION?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, ENVIAR!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
      $.ajax({
                type: "POST",
                url: ruta_cruds+'crud_agregar_peticion_reset.jsp',
                data: {peticion:$('#peticion').val()
                       
                      },
                  
            success: function (res) 
            {
                 if(res.tipo_registro=="2"){
        swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_add_recuperar_contraseña').modal('toggle');
                      
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
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
$.ajax({
type: "POST",    
url: ruta_cruds+"/crud_agregar_rol.jsp",
data:{
descripcion:$('#descripcion').val()

},
success : function(res){
               if(res.tipo_registro=="2"){
          swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_add_roles').modal('toggle');
                        grilla_roles();
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
   }
 //fncion mensaje
 function aviso_registro_user(tipo,mensaje){
       if(tipo=="2"){
        swal.fire({
                icon: 'success',
                text:mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_add_usuarios').modal('hide');
            
                 
       }
       else {
           swal.fire({
                 icon: 'error',
                text:mensaje,
                confirmButtonText: "CERRAR"
                });    
               
       }
       
   }

function edit_usuario(id,nombre,apellido,usuario,email,id_estado,id_rol){
    $("#txt_id").val(id);
    $("#txt_nombre").val(nombre);
    $("#txt_apellido").val(apellido);
    $("#txt_usuario").val(usuario);
    $("#txt_email").val(email);
    $("#select_rolm").val(id_rol);
     $("#select_estado").val(id_estado);
  
  
    
    $(".modal-header").css("background-color", "#0157a0");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("MODIFICAR USUARIO");    
  
   
    $("#modal_upd_user").modal("show");
   
}

function edit_rol(id,descripcion,desc_estado){
    $("#txt_id_rol").val(id);
    $("#txt_decri_rol").val(descripcion);
    $("#select_estado_rol").val(desc_estado);
  
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("MODIFICAR ROL");    
  
   
    $("#modal_upd_rol").modal("show");
    

}

 function edit_modulos(id,descripcion,desc_estado){
    $("#txt_id_modulo").val(id);
    $("#txt_decri_modulo").val(descripcion);
    $("#select_estado_modulo").val(desc_estado);
  
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("MODIFICAR MODULO");    
  
   
    $("#modal_upd_modulos").modal("show");
}

 function modificar_usuario(){
     
    id = $.trim($("#txt_id").val());
    nombre = $.trim($("#txt_nombre").val());
    apellido = $.trim($("#txt_apellido").val());
    usuario = $.trim($("#txt_usuario").val());
    email = $.trim($("#txt_email").val()); 
    desc_estado = $.trim($("#select_estado").val()); 
    desc_rolm = $.trim($("#select_rolm").val()); 
     Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA GUARDAR LOS CAMBIOS?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
    
    $.ajax({
        type: "POST",
        url: ruta_cruds+'crud_modificar_usuario.jsp',
         data:{txt_id:id, txt_nombre:nombre,txt_apellido:apellido, txt_usuario:usuario, txt_email:email, select_estado:desc_estado, select_rolm:desc_rolm},
         success: function(res)  
         {
        if(res.tipo_respuesta=="2"){
        swal.fire({
                type: 'success',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_upd_user').modal('toggle');
                        grilla_usuarios();
                       
             }
            else {
           swal.fire({
                type: 'error',
                text:res.mensaje,
                confirmButtonText: "CERRAR"
                });    
                 }
          }
   
              
    });
            }
            }); 
};


 function modificar_rol(){
     
    id = $.trim($("#txt_id_rol").val());
    descripcion = $.trim($("#txt_decri_rol").val());
    desc_estadoo = $.trim($("#select_estado_rol").val());  
     Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA GUARDAR LOS CAMBIOS?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
    
    $.ajax({
        type: "POST",    
        url: ruta_cruds+'crud_modificar_rol.jsp',
         data:{txt_id_rol:id, txt_decri_rol:descripcion, select_estado_rol:desc_estadoo},
         success: function(ress)  
         {
        if(ress.tipo_respuesta=="2"){
        swal.fire({
                type: 'success',
                text:ress.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_upd_rol').modal('toggle');
                        grilla_roles()
             }
            else {
           swal.fire({
                type: 'error',
                text:ress.mensaje,
                confirmButtonText: "CERRAR"
                });    
                 }
          }
   
              
    });
            }
            }); 
};
 function modificar_modulos(){
     
    id = $.trim($("#txt_id_modulo").val());
    descripcion = $.trim($("#txt_decri_modulo").val());
    desc_estadoo = $.trim($("#select_estado_modulo").val());  
     Swal.fire({
        title: 'CONFIRMACION',
        text: "DESEA GUARDAR LOS CAMBIOS?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO, CANCELAR!' }).then((result) => 
        {
            if (result.value) 
            {
    
    $.ajax({
        type: "POST",    
        url: ruta_cruds+'crud_modificar_modulo.jsp',
         data:{txt_id_modulo:id, txt_decri_modulo:descripcion, select_estado_modulo:desc_estadoo},
         success: function(ress)  
         {
        if(ress.tipo_respuesta=="2"){
        swal.fire({
                type: 'success',
                text:ress.mensaje,
                confirmButtonText: "CERRAR"
                });
            $('#modal_upd_modulos').modal('toggle');
                        grilla_modulos();
             }
            else {
           swal.fire({
                type: 'error',
                text:ress.mensaje,
                confirmButtonText: "CERRAR"
                });    
                 }
          }
   
              
    });
            }
            }); 
};

    function restablecer_pass_usuario(){
       id = $.trim($("#txt_id_reset").val());
       $.ajax({
                type: "POST",
                url: ruta_cruds+'crud_restablecer_pass.jsp',
                data: {txt_id_reset:id},
                       
            success: function (res) 
           {  
      
       Swal.fire({
        type: 'success',
        //title: 'Oops...',
        text: res.mensaje ,
        timer: '2000'
        });
        grilla_usuarios();
        
  $("#modal_restablecer_pass").modal("hide");  
       }
      });
}

    function cancelar_usuarios()
    {
        $('#nombre').val("");
        $('#apellido').val("");
        $('#usuario').val("");
        $('#pass').val("");
        $('#correo').val("");
        $('#select_rol').selectpicker('val', '');
    }



///cargar vistas

function grilla_usuarios() {
  
    $.ajax({
    url: ruta_grillas+'/grilla_usuarios.jsp',
    type: "post",
    success : function(data){
        $('#contenedor_principal').html(data);
        $('#contenido_row').html("");
         
}});
};
function grilla_modulos() {
  
    $.ajax({
    url: ruta_grillas+'/grilla_modulos.jsp',
    type: "post",
    success : function(data){
          $('#contenedor_principal').html(data);
        $('#contenido_row').html("");
         
}});
};

function grilla_permisos() {
  
    $.ajax({
    url: ruta_grillas+'/grilla_permisos.jsp',
    type: "post",
    success : function(data){
          $('#contenedor_principal').html(data);
        $('#contenido_row').html("");
      //  $('#select_modulos').selectpicker();  
         
}});
};


///cargar vistar, traer grilas
function traer_vista_usuario() {
  
    $.ajax({
    url: ruta_vistas+"/vista_registrar_usuario.jsp",
    type: "post",
    success : function(data){
   
        $('#contenedor_principal').html(data);
        $('#contenido_row').html("");
            
}});
};
 
 function traer_vista_usuario2() {
  
    $.ajax({
    url: ruta_vistas+"/vista_nuevo_usuario.jsp",
    type: "post",
    
    success : function(data){
         $('#cargar').html("");
        $('#cargar').html(data);
            
}});
};

function modalinsertusuario(){
    $("#form_add_user").trigger("reset");
   
    
    $("#modal_add_usuarios").modal("show");

};
function modalinsertmodulos(){
    $("#form_add_rol").trigger("reset");
    $(".modal-header").css("background-color","#28a745");
    $(".modal-header").css("color","white");
    $(".modal-title").text("REGISTAR MODULOS");
    
    $("#modal_add_modulos").modal("show");

};

function modalupdateusuario(){
    $("#form_upd_user").trigger("reset");
    $(".modal-header").css("background-color","#28a745");
    $(".modal-header").css("color","white");
    $(".modal-title").text("Modificar Usuario");
    
    $("#modal_upd_user").modal("show");

};

function modalresetearpass(id,usuario){
    $("#txt_id_reset").val(id);
    $("#txt_usuario_p").val(usuario);
    
    $(".modal-header").css("background-color", "#0157a0");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("RESETEAR PASSWORD");    
  
   
    $("#modal_restablecer_pass").modal("show");
}

 
 

function modalinsertpendientes(){
    $("#form_add_pendiente").trigger("reset");
    $(".modal-header").css("background-color","#00008B");
    $(".modal-header").css("color","white");
    $(".modal-title").text("REGISTAR MODULOS");
    
    $("#modal_add_pendiente").modal("show");

};
function modalpeticionreset(){
    $("#form_add_reset").trigger("reset");
    $(".modal-header").css("background-color","#0025");
    $(".modal-header").css("color","white");
    $(".modal-title").text("SOLICITUD RESET USUARIO");
    
    $("#modal_add_recuperar_contraseña").modal("show");

};
