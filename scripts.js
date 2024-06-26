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
                $("#resultado").html("<p>El resultado es: " + data + "</p>").show();
            },
            error: function (xhr, status, error) {
                console.log("Error en la solicitud AJAX: " + error);
                console.log("Estado: " + status);
                console.log("Respuesta del servidor: " + xhr.responseText);
                $("#resultado").html("<p>Error: No se pudo realizar la operación. Por favor, inténtalo de nuevo.</p>").show();
            }
        });
    });
});
