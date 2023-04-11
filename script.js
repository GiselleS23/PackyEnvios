/* API PARA PRUEBA DE USUARIOS */
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
            </div>

             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
             </div> 
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})
// formulario
const formularioUsuarios = document.getElementById('cotizacion');

const usuarios = []

formularioUsuarios.addEventListener('submit', (event) => {
  event.preventDefault()

  usuarios.push({
    nombre: formularioUsuarios.nombre.value,
    apellido: formularioUsuarios.apellido.value,
    email: formularioUsuarios.email.value,
    tamaño: formularioUsuarios.tamaño.value,
    peso: formularioUsuarios.peso.value,
    provincia: formularioUsuarios.provincia.value,

  })
  nombre = document.getElementById('nombre').value;
  apellido = document.getElementById('apellido').value;
  email = document.getElementById('email').value;
  tamaño = document.getElementById('tamaño').value;
  peso = document.getElementById('peso').value;
  provincia = document.getElementById('provincia').value;
  costoEnvio = peso * 730; // Cálculo del costo de envío

  document.getElementById('usuariosRespuesta');

    usuariosRespuesta.textContent = ` Hola ${nombre} ${apellido}, Muchas gracias por tu consulta, el costo de envío de un paquete ${tamaño} que pesa ${peso} Kilogramos y se enviará a ${provincia} es de $${costoEnvio}.`;

  console.log(usuarios)

});