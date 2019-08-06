<?php include_once 'php/template/header.php'?>

<div class="contenedor-barra">
    <div class="contenedor">
        <h1>Agenda de Contactos</h1>
    </div>
</div>

<section class="seccion">

<div class="amarillo contenedor">
    <h2 class="centrar-texto texto-contenedor">Añada un contacto</h2>
    <p class="centrar-texto texto-contenedor">Todos los campos son obligatorios</p>

    <form action="#" method="post" id="formulario" class="formulario-contacto">

            <div class="campo-contacto">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder=" Tu Nombre">
            </div>
            <div class="campo-contacto">
                <label for="empresa">Empresa</label>
                <input type="text" name="empresa" id="empresa" placeholder=" Tu Empresa">
            </div>
            <div class="campo-contacto">
                <label for="telefono">Telefono</label>
                <input type="tel" name="telefono" id="telefono" placeholder=" Tu Telefono">
            </div>
    
            <div class="btn-enviar">
                <input type="submit" value="Enviar" id="enviar" class="btn btn-contacto">
            </div>
    </form>
    
</div>
</section>



<?php include_once 'php/template/footer.php'?>