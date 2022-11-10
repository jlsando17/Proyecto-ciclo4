
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.preventDefault()
        event.stopPropagation()
      } else {
        RegistrarUsuario();
        event.preventDefault()

      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function RegistrarUsuario() {

  let documento = document.querySelector("#txtDocumento").value;
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let ciudad = document.querySelector("#txtCiudad").value;
  let correo = document.querySelector("#txtCorreo").value;
  let celular = document.querySelector("#txtCelular").value;
  let rol = document.querySelector("#txtRol").value;


  let url = 'http://localhost:3000/usuarios';
  let datos = {
    Documento: documento,
    Nombre: nombre,
    Apellido: apellido,
    Ciudad: ciudad,
    Correo: correo,
    Celular: celular,
    Rol: rol,


  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)

    })
}

