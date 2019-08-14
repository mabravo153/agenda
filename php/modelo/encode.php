<?php 


//de esta manera capturamos la accion que queremos realizar y ejecutamos el codigo segun lo queremos

if (isset($_POST['accion'])) {

    if ($_POST['accion'] == 'crear') { 

        $idEmpresa = filter_var($_POST['idEmpresa'], FILTER_SANITIZE_STRING);
        $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
        $empresaNombre = filter_var($_POST['empresaNombre'], FILTER_SANITIZE_STRING);
        $telefonoEmpresa = filter_var($_POST['telefonoEmpresa'], FILTER_SANITIZE_STRING);
        
        try {
            include_once 'bd-con.php';
            
    
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


    if ($_POST['accion'] == 'editar' ) {
        
        $idEmpresa = filter_var($_POST['idEmpresa'], FILTER_SANITIZE_STRING);
        $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
        $empresaNombre = filter_var($_POST['empresaNombre'], FILTER_SANITIZE_STRING);
        $telefonoEmpresa = filter_var($_POST['telefonoEmpresa'], FILTER_SANITIZE_STRING);

        try {
            
            include_once 'bd-con.php';

            $editarRegistro = $pdo->prepare( "UPDATE empresa SET idEmpresa=:id, nombre=:nombre, empresaNombre=:empresaNombre, telefonoEmpresa=:telefonoEmpresa 
                                            WHERE is=:idEditar" );
            
            $idEditar = $_GET['id'];

        echo $idEditar;


        } catch (\Exception $th) {
            echo "Error {$th->getMessage()}";
        }

    }

}

  
    
    





//con este metodo recibimos el id que queremos eliminar 

//agregamos las variables en isset con el fin de no generarnos problemas a futuro si no la usamos 

if (isset($_GET['accion'])) {
  
    if ($_GET['accion'] == 'borrar') {
        
       $idBorrar = filter_var($_GET['id']);

        try {
            
            include_once 'bd-con.php';
            
            $pdo->beginTransaction();
            $borrar = $pdo->prepare("DELETE FROM empresa WHERE idEmpresa=:id ");
            
            $borrar->execute([
                'id'=>$idBorrar //nos ahorramos el bindParam
            ]);

            $pdo->commit();


                $resultado = array(

                    'respuesta' => 'correcto',
                    'id' => $idBorrar

                );


        } catch (\Exception $th) {
           $pdo->rollBack();
            
            $resultado = array(
                'Error' => $th->getMessage()
            );

        }
    
        echo json_encode($resultado);

    }
    
}






?>