<form action="#" method="post" id="formulario" class="formulario-contacto">

<div class="campo-contacto">
    <label for="idEmpresa">Id</label>
    <input type="text" name="idEmpresa" id="idEmpresa" placeholder="Tu Documento" value="<?php echo ($respuesta['idEmpresa']) ? $respuesta['idEmpresa'] : '';  ?>" >            
</div>
<div class="campo-contacto">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" placeholder="Tu Nombre" value="<?php echo  ($respuesta['nombre']) ? $respuesta['nombre'] : '';  ?>">
</div>
<div class="campo-contacto" id="empresa">
    <label for="empresa">Empresa</label>
    <input type="text" name="empresa" id="empresaNombre" placeholder="Tu Empresa" value="<?php echo  ($respuesta['empresaNombre']) ? $respuesta['empresaNombre'] : '';  ?>">
</div>
<div class="campo-contacto" id="telefono">
    <label for="telefono">Telefono</label>
    <input type="tel" name="telefono" id="telefonoEmpresa" placeholder="Tu Telefono" value="<?php echo  ($respuesta['telefonoEmpresa']) ? $respuesta['telefonoEmpresa'] : '';  ?>">
</div>
<div class="btn-enviar" id="enviar">
    <input type="submit" value="Enviar" id="enviarBoton" class="btn btn-contacto">
    <input type="hidden" value="<?php echo ($respuesta['idEmpresa'])? 'editar' : 'crear'?>" id="accion">
</div>
</form>