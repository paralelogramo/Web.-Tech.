<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
$jsonUser = json_decode(file_get_contents("php://input"));

$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT * FROM usuario WHERE email = ? AND pass = ?");
$sentencia->execute([$jsonUser->email, $jsonUser->pass]);
$usuario = $sentencia->fetchObject();

// Aqui falta una query para saber el tipo de usuario

echo json_encode($usuario);