<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $operacion = $_POST['operacion'];
    $numero1 = isset($_POST['numero1']) ? (float)$_POST['numero1'] : 0;
    $numero2 = isset($_POST['numero2']) ? (float)$_POST['numero2'] : 0;

    $resultado = null;

    switch ($operacion) {
        case 'sumar':
            $resultado = $numero1 + $numero2;
            break;
        case 'restar':
            $resultado = $numero1 - $numero2;
            break;
        case 'multiplicarrrrrr':
            $resultado = $numero1 * $numero2;
            break;
        case 'dividirrrrrrr':
            if ($numero2 != 0) {
                $resultado = $numero1 / $numero2;
            } else {
                $resultado = "Error: No se puede dividir por cero";
            }
            break;
        default:
            $resultado = "Operación no válida";
            break;
    }

    echo $resultado;
} else {
    echo "Método no permitido";
}
?>