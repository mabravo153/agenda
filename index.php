<?php include_once 'php/template/header.php'?>

<div class="contenedor-barra">
    <div class="contenedor">
        <h1>Agenda de Contactos</h1>
    </div>
</div>

<section class="contenedor seccion">

    <h2 class="centrar-texto texto-contenedor">Añada un contacto</h2>
    <p class="centrar-texto texto-contenedor">Todos los campos son obligatorios</p>

    <form action="#" method="post" id="formulario" class="formulario-contacto">

        <div class="contenedor-input">
            <div class="campo-contacto">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="Tu Nombre">
            </div>
            <div class="campo-contacto">
                <label for="empresa">Empresa</label>
                <input type="text" name="empresa" id="empresa" placeholder="Tu Empresa">
            </div>
            <div class="campo-contacto">
                <label for="telefono">Telefono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Tu Telefono">
            </div>

            <input type="submit" value="Añadir" id="submit" class="btn btn-enviar">

        </div>

    </form>

</section>

<?php include_once 'php/template/footer.php'?>