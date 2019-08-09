
<?php 

try {
    $pdo = new PDO("Mysql:host=127.0.0.1;dbname=agenda","mabravo153","Zsgm1994+-",array(PDO::ATTR_PERSISTENT => true))
} catch (\Exception $th) {
   echo 'No se a podido establecer conexion a la base de datos' . ' ' . $th->getMessage();
}

?>