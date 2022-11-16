
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
        RegistrarPlan();
        event.preventDefault()

      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function RegistrarPlan() {

  let comentario = document.querySelector("#txtComentario").value;
  let nombre = document.querySelector("#txtNombre").value;
  let descripcion = document.querySelector("#txtDescripcion").value;
  let precio = document.querySelector("#txtPrecio").value;




  let url = 'http://localhost:3000/plan';
  let datos = {
    Comentario: comentario,
    Nombre: nombre,
    Descripcion: descripcion,
    Precio: precio,



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

