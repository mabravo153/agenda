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


<section class=" seccion">

<div class="blanco contenedor">

        <h2 class="centrar-texto texto-contenedor">Contactos</h2>

        <input type="text" name="buscar" id="buscar" class="buscador centrar-texto" placeholder="Buscador de contactos">

        <h2 class="centrar-texto "><span>1</span> Contactos</h2>

        <div class="contenedor-indicadores contenedor">

            <p class="indicador" id="nombreResultado">Nombre</p>
            <p class="indicador" id="empresaResultado">Empresa</p>
            <p class="indicador" id="telefonoResultado">Telefono</p>
            <p class="indicador" id="accioneesResultado">acciones</p>

        </div>
        <div class="contenedor-resultado contenedor">

            <p class="resultado" > miguel angel </p>
            <p class="resultado"> compuhipermegared </p>
            <p class="resultado"> 3163070334 </p>
            <p class="resultado"> <i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i> </p>
            
        </div>
        
    </div>
</section>


<?php include_once 'php/template/footer.php'?>