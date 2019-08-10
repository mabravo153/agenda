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




?>