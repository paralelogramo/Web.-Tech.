<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
$jsonUser = json_decode(file_get_contents("php://input"));
if (!$jsonUser) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into usuario(nombre, apellido, nick, email, pass) values (?,?,?,?,?);");
$resultado = $sentencia->execute([$jsonUser->mainName, $jsonUser->surName, $jsonUser->nick, $jsonUser->email, $jsonUser->pass]);
echo json_encode([    
    "resultado" => $resultado,
]);