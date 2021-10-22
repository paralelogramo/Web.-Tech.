<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

$contraseña = "tecweb";
$usuario = "feryx";
$nombre_base_de_datos = "meanoto";
try {
    return new PDO('mysql:host=meanoto.ddns.net;port=5432;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}