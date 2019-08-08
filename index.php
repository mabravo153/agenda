<?php include_once 'php/template/header.php'?>

<div class="contenedor-barra">
    <div class="contenedor-encabezado contenedor">
        <h1>Agenda de Contactos</h1>
    </div>

    <div class="notificacion contenedor" id="notificacion">
        <p>Ingresa todos los datos</p>
    </div>

</div>

<section class="seccion">

<div class="amarillo contenedor">
    <h2 class="centrar-texto ">Añada un contacto</h2>
    <p class="centrar-texto ">Todos los campos son obligatorios</p>

   <?php include_once 'php/template/formulario.php' ?>
    
</div>
</section>


<section class=" seccion">

<div class="blanco contenedor">


    <div class="contenedor-blanco">

        <h2 class="centrar-texto texto-contenedor">Contactos</h2>

        <input type="text" name="buscar" id="buscar" class="buscador sombra" placeholder="Buscador de contactos">

        <h3 class="centrar-texto texto-contenedor"><span>1</span> Contactos</h3>

       <div class="scroll">

        <div class="contenedor-indicadores">

            <p class="indicador" id="accioneesResultado">acciones</p>
            <p class="indicador" id="nombreResultado">Id</p>
            <p class="indicador" id="nombreResultado">Nombre</p>
            <p class="indicador" id="empresaResultado">Empresa</p>
            <p class="indicador" id="telefonoResultado">Telefono</p>
            
        </div>
        <div class="contenedor-resultado">

            <p class="resultado"> <a href="editar.php" class="editar"><i class="fas fa-edit"></i></a>  <a href="#" class="borrar"><i class="fas fa-trash-alt"></i></a> </p>
            <p class="resultado">1142851476</p>
            <p class="resultado"> miguel angel </p>
            <p class="resultado"> compuhi </p>
            <p class="resultado"> 3163070334 </p>
            
        </div>
        </div> 
    </div>
</div>
</section>


<?php include_once 'php/template/footer.php'?>