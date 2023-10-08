const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "¡Se esperaba una dirección de correo electrónico!, intenta de nuevo....",
    );
  } else {
    email.setCustomValidity("");
  }
});


  function validarContrasena() {
            const contrasena = document.getElementById('contrasena');
            const contrasenaError = document.getElementById('contrasenaError');
            
            // Validar la longitud de la contraseña
            if (contrasena.value.length < 8) {
                contrasenaError.style.display = 'block';
            } else {
                contrasenaError.style.display = 'none';
            }
        }