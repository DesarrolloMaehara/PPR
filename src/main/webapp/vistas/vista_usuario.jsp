<%@page import="java.sql.Connection"%>
<jsp:useBean id="fuente" class="clase.fuentedato" scope="page" />
<html>
<head>
    <jsp:useBean id="conexion" class="clase.bdconexion1" scope="page" />
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="../css/estilos.css" rel="stylesheet" type="text/css"/>
    
    <link href="../css/sb-admin.css" rel="stylesheet" type="text/css"/>
    
    <title>Registro</title>
</head>

<body>
    <section>
        <div id="formulario_registro">
             <center>
            <h2>Formulario registro</h2>
            <form action="#" method=POST>
                <div class="campoFormulario">
                    <label for="usuario">Usuario: <span class="obligatorio">*</span></label>
                    <input type='text' id="usuario" name="usuario" maxlength="15" value="" autocomplete="off"/>
                </div>
                <div class="campoFormulario">
                    <label for="password">Contraseña: <span class="obligatorio">*</span></label>
                    <input type='password' id="password" name="password" maxlength="20" value="" autocomplete="off"/>
                </div>
                <div class="campoFormulario">
                    <label for="email">Email: <span class="obligatorio">*</span></label>
                    <input type='email' id="email" name="email" maxlength="30" value="" />
                </div>
                <div class="campoFormulario">
                    <label for="nombre">Nombre:</label>
                    <input type='text' id="nombre" name="nombre" maxlength="50" value="" />
                </div>
                <div class="campoFormulario">
                    <label for="edad">Fecha Registro:</label>
                    <input type="date" id="date" name="date" />
                </div>
                <div class="campoFormulario">
                    <label id="estado" for="estado">Estado: <span class="obligatorio">*</span></label>
                    <select>
                       <%
                         Connection con = conexion.crearConexion();
                            fuente.setConexion(con);  
                           %>
                           <option value="Activo">Activo</option>
                            <option value="No Activo" selected>No Activo</option>
                    </select>
                </div>
                <div class="campoFormulario">
                    <label for="rol">Rol: <span class="obligatorio">*</span></label>
                    <input type='text' id="rol" name="rol" maxlength="9" value="" />
                </div>
                <div class="botonFormulario">
                    <input id="boton" onclick="guardausuario()" type="button" class="btn btn-primary btn-toolbar" value="Registrar">
                </div>  
            </form> 
                </center>
        </div>
    </section>
         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
         <script src="../ajax/crud_usuario.js" type="text/javascript"></script>
</body>
</html>