<?php include_once 'php/vista/header.php'; ?>

<?php 

include_once 'php/modelo/consulta.php';
//si en la funcion llamamos a la base de datos, no es necesario llamarla nuevamente. para evitar problemas 

$id = filter_var($_GET['id'], FILTER_SANITIZE_STRING);

if (!$id) {
    die('sales');
}else {
    $respuesta = editarResultados($id); // traer informacion de la base de datos segun el id clicleado
}

?>

<div class="contenedor-barra">  

       <div class="btn-volver">
            <a href="index.php" class="btn-editar btn">Volver</a>
       </div>

       <div class="encabezado-editar">
            <h1>Agenda de Contactos</h1>
       </div>

       <div class="notificacion contenedor" id="notificacion"> </div>
</div>

<section class="contenedor seccion">
    <div class="amarillo">

    <h2 class="centrar-texto">Edite el contacto</h2>

     <?php  include_once 'php/vista/formulario.php'; ?>

    </div>
</section>


<?php include_once 'php/vista/footer.php';?>