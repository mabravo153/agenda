<?php 


//de esta manera capturamos la accion que queremos realizar y ejecutamos el codigo segun lo queremos
if ($_POST['accion'] == 'crear') { 

    $idEmpresa = filter_var($_POST['idEmpresa'], FILTER_SANITIZE_STRING);
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $empresaNombre = filter_var($_POST['empresaNombre'], FILTER_SANITIZE_STRING);
    $telefonoEmpresa = filter_var($_POST['telefonoEmpresa'], FILTER_SANITIZE_STRING);
    
    try {
        include_once 'bd-con.php';
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //validar los datos antes de insertarloa a la base de datos 

        $pdo->beginTransaction();//inicia la transaccion 

        $insertar = $pdo->prepare(" INSERT INTO empresa (idEmpresa, nombre, empresaNombre,telefonoEmpresa)
                                    VALUES (:idEmpresa, :nombre, :empresaNombre, :telefonoEmpresa) ");

        $insertar->bindParam(':idEmpresa', $idEmpresa);
        $insertar->bindParam(':nombre', $nombre);
        $insertar->bindParam(':empresaNombre', $empresaNombre);
        $insertar->bindParam(':telefonoEmpresa', $telefonoEmpresa);

        $insertar->execute();

        $pdo->commit(); // finaliza la transaccion 

        $respuesta = array(
            'estado' => 'completado',
            'info' => array(
                'idEmpresa' => $idEmpresa,
                'nombre' => $nombre,
                'empresaNombre' => $empresaNombre,
                'telefonoEmpresa' => $telefonoEmpresa
            )
        ); //creamos un array asociativo, para luego convertirlo a json y asi retornarlo  

    } catch (\Exception $th) {
        $pdo->rollBack();
        
        $respuesta = array(
            'error' => $th->getMessage()
        ); // lo hacemos de esta manera para convertirlo en un json luego y enviarlo por fetch a js 
    }

    echo json_encode($respuesta);
}



var_dump($_GET);


if($_GET['accion'] == "borrar"){
    echo json_encode($_GET);
}




?>