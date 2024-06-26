$(document).ready(function () {
    $("#calcular-btn").click(function () {
        var formData = $("#operaciones-form").serialize();
        console.log("Datos del formulario: " + formData);
        $.ajax({
            type: "POST",
            url: "operaciones.php",
            data: formData,
            success: function (data) {
                console.log("Respuesta del servidor: " + data);
                console.log("El resultado es: " + data);
            },
            error: function (xhr, status, error) {
                console.log("Error en la solicitud AJAX: " + error);
                console.log("Estado: " + status);
                console.log("Respuesta del servidor: " + xhr.responseText);
            }
        });
    });
});
