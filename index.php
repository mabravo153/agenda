<?php include_once 'php/vista/header.php' ?>

<div class="contenedor-barra">
    <div class="contenedor-encabezado contenedor">
        <h1>Agenda de Contactos</h1>
    </div>

    <div class="notificacion contenedor" id="notificacion">

    </div>

</div>

<section class="seccion">

    <div class="amarillo contenedor">
        <h2 class="centrar-texto ">Añada un contacto</h2>
        <p class="centrar-texto ">Todos los campos son obligatorios</p>

        <?php include_once 'php/vista/formulario.php' ?>

    </div>
</section>


<section class=" seccion">

    <div class="blanco contenedor">


        <div class="contenedor-blanco">

            <h2 class="centrar-texto texto-contenedor">Contactos</h2>

            <input type="text" name="buscar" id="buscar" class="buscador sombra" placeholder="Buscador de contactos">

            <h3 class="centrar-texto texto-contenedor"><span id="insertarNumero"></span> Contactos</h3>

            <div class="scroll">

                <div class="contenedor-indicadores">

                    <p class="indicador" id="accioneesResultado">acciones</p>
                    <p class="indicador" id="idResultado">Id</p>
                    <p class="indicador" id="nombreResultado">Nombre</p>
                    <p class="indicador" id="empresaResultado">Empresa</p>
                    <p class="indicador" id="telefonoResultado">Telefono</p>

                </div>

                    <?php

                    include_once 'php/modelo/consulta.php';

                    $imprimir = mostrarResultados();

                    foreach ($imprimir as $key => $value) { ?>

                        <div class="contenedor-eliminar" data-id="<?php echo $value['idEmpresa']  ?>">

                        <div class="campo-result">
                            <p class="resultado"> <a href="editar.php?id=<?php echo $value['idEmpresa'] ?>" class="editar"><i class="fas fa-edit"></i></a> <a href="#" class="borrar" data-id="<?php echo $value['idEmpresa'] ?>"><i class="fas fa-trash-alt"></i></a> </p>
                        </div>
                        <div class="campo-result">
                            <p><?php echo $value['idEmpresa'] ?></p>
                        </div>
                        <div class="campo-result">
                            <p><?php echo $value['nombre'] ?></p>
                        </div>
                        <div class="campo-result">
                            <p><?php echo $value['empresaNombre'] ?></p>
                        </div>
                        <div class="campo-result">
                            <p><?php echo $value['telefonoEmpresa'] ?></p>
                        </div>

                        </div>

                    <?php  } ?>
                    
            </div>
        </div>
    </div>
</section>


<?php include_once 'php/vista/footer.php' ?>