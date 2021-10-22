<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
$jsonUser = json_decode(file_get_contents("php://input"));
if (!$jsonUser) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into usuario(mainName, surName, nick, email, pass, type, isAproved) values (?,?,?,?,?,?,?);");
$resultado = $sentencia->execute([$jsonUser->mainName, $jsonUser->surName, $jsonUser->nick, $jsonUser->email, $jsonUser->pass, $jsonUser->type, $jsonUser->isAproved]);
echo json_encode([    
    "resultado" => $resultado,
]);