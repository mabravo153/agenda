<?php 


function mostrarResultados(){
   
    try{

        include_once 'bd-con.php';

        $pdo->beginTransaction();
        $consulta = $pdo->prepare(" SELECT idEmpresa, nombre, empresaNombre, telefonoEmpresa 
                                    FROM empresa ");

        $consulta->execute();

        $pdo->commit();
        
        return $consulta->fetchAll(PDO::FETCH_ASSOC);

    }catch (\Execption $e) {
        $pdo->rollBack();
        echo "Ha ocurrido un error {$e->getMessage()}"; 

        return false; //esto hara que no haga nada 

    }

}


//funcion que haremos para agregar la informacion del usuario al momento de editar 
function editarResultados($variable){
   
    try{

        include_once 'bd-con.php';

        $pdo->beginTransaction();
        $consulta = $pdo->prepare(" SELECT idEmpresa, nombre, empresaNombre, telefonoEmpresa 
                                    FROM empresa WHERE idEmpresa=:id ");

        $consulta->execute([
            ':id' => $variable
        ]);

        $pdo->commit();
        
        return $consulta->fetch(PDO::FETCH_ASSOC);

    }catch (\Execption $e) {
        $pdo->rollBack();
        echo "Ha ocurrido un error {$e->getMessage()}"; 

       return false; //esto hara que no haga nada 

    }

}




?>