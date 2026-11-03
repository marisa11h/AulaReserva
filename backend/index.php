<?php

//Indica que la respuesta es JSON

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost:8081');

//contiene los datos de las aulas.
$aulas = [
    [
        'id' => 1,
        'nombre' => 'Aula de Informática 1',
        'capacidad' => 30
    ],
    [
        'id' => 2,
        'nombre' => 'Aula de Informática 2',
        'capacidad' => 25
    ],
    [
        'id' => 3,
        'nombre' => 'Aula de Desarrollo Web',
        'capacidad' => 20
    ]
];
//transforma el array PHP en JSON.
echo json_encode($aulas, JSON_UNESCAPED_UNICODE); //permite conservar correctamente las tildes y caracteres especiales.
