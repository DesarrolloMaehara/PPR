<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SISTEMA</title>
  <!-- Favicon -->
    <link rel="shortcut icon" href="img/yemita7.png" type="image/x-icon">
    <link href="css/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="cssmenu/stilo.css" rel="stylesheet" type="text/css"/>
    <link href="css/loading_efecto.css" rel="stylesheet" type="text/css"/>
    <link href="css/estilos.css" rel="stylesheet" type="text/css"/>
    
     
  </head>

<body onload="traer_menu()">
  <div class="layer"></div>
<!-- ! Body -->
<div class="page-flex">
  <!-- ! Sidebar -->
  <aside class="sidebar">
    <div class="sidebar-start">
        <div class="sidebar-head">
            <a href="menu.jsp" class="logo-wrapper" title="Home">
                <img src="img/yemita9.png" width="130" height="100" alt=""/>
                <span class="sr-only">Home</span>
                <span class="icon logo" aria-hidden="true"></span>
                <div class="logo-text">
                    <span class="logo-title"></span>
                    <span class="logo-subtitle"></span>
                </div>

            </a>
            <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                <span class="sr-only">Toggle menu</span>
                <span class="icon menu-toggle" aria-hidden="true"></span>
            </button>
        </div>
        <div class="sidebar-body">
            <ul class="sidebar-body-menu">
                <li>
                    <a class="active" href="menu.jsp"><span class="icon home" aria-hidden="true"></span>Principal</a>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                    </a>
                    <ul class="cat-sub-menu">
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</aside>
  <div class="main-wrapper">
    <!-- ! Main nav -->
    <nav class="main-nav--bg">
  <div class="container main-nav">
    <div class="main-nav-start">
         <!--
      <div class="search-wrapper">
        <i data-feather="search" aria-hidden="true"></i>
        <input type="text" placeholder="Enter keywords ..." required>
      </div>
      -->   
    </div>
    <div class="main-nav-end">
      <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
        <span class="sr-only">Toggle menu</span>
        <span class="icon menu-toggle--gray" aria-hidden="true"></span>
      </button>
      <button class="theme-switcher gray-circle-btn" type="button" title="Switch theme">
        <span class="sr-only">Switch theme</span>
        <i class="sun-icon" data-feather="sun" aria-hidden="true"></i>
        <i class="moon-icon" data-feather="moon" aria-hidden="true"></i>
      </button>
      <div class="nav-user-wrapper">
        <button href="#" class="nav-user-btn dropdown-btn" title="My profile" type="button">
          <span class="sr-only">My profile</span>
          <span class="nav-user-img">
              <picture><source srcset="./img/avatar/avatar-illustrated-03.webp" type="image/webp"><img src="./img/avatar/avatar-illustrated-01.png" alt="User name"></picture>
          </span>
        </button>
        <ul class="users-item-dropdown nav-user-dropdown dropdown">
          <li><a class="danger" href="control/control_cerrarsesion.jsp">
              <i data-feather="log-out" aria-hidden="true"></i>
              <span>Cerrar Sesion</span>
            </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    <!-- ! Main -->
    
       <div  class="col-lg-12 mb-4">
          
        <div   id="contenido_row" class="row">
    
       </div>
        <div   id="contenedor_principal">
    
       </div>
        <div class="container33 " id="loading_cubo" style="display: none">
            <br><br><br><br><br><br><br><br><br><br>
            <div class="cube">
                <div class="side side1"></div>
                <div class="side side2"></div>
                <div class="side side3"></div>
                <div class="side side4"></div>
                <div class="side side5"></div>
                <div class="side side6"></div>
            </div>
        </div>
    </div>
    
   
    <main class="main users chart-page" id="skip-target">
        <div id="cargar" class="container">

      </div>
    </main>
  
    <!-- ! Footer -->
    <footer class="footer">
  <div class="container footer--flex">
    <div class="footer-start">
      <p>2021 © Maeharasys - <a href="elegant-dashboard.com" target="_blank"
          rel="noopener noreferrer">grupomaehara.com</a></p>
    </div>
    <ul class="footer-end">
      <li><a href="##">Acerca de</a></li>
      <li><a href="##">Soporte</a></li>
    </ul>
  </div>
</footer>
  </div>
</div>
<!-- Chart library -->
<script src="js/chart.min.js" type="text/javascript"></script>
<!-- Icons library -->
<script src="js/feather.min.js" type="text/javascript"></script>
<!-- Custom scripts -->
<script src="js/script.js" type="text/javascript"></script>


</body>
<script src="css/assets/jquery/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="js/llamadas_aldo.js" type="text/javascript"></script>
<script src="js/llamadas_claudio.js" type="text/javascript"></script>
<script src="css/assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="css/assets/datatables/datatables.min.js" type="text/javascript"></script>
<script src="css/assets/css,js, otros/sweetalert/sweetAlert2/sweetalert2.all.min.js" type="text/javascript"></script>
 
        
       
</html>

