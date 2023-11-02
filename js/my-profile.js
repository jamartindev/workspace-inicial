// Obtiene el usuario almacenado en el Local Storage
let user = localStorage.getItem("User");

// Verifica si el usuario existe en el Local Storage
if (user) {
  let userEmail = document.getElementById('emailUser');
  userEmail.value = user;
}


//Funcion al darle click al boton "guardar cambios" se actualice el nombre y apellido
document.getElementById("guardarCambios").addEventListener("click", function() {
    const nuevoNombre = document.getElementById("nombreNuevoUser").value;
    const nuevoApellido = document.getElementById("apellidoNuevoUser").value;

    // Guardar los nuevos datos en el localStorage
    localStorage.setItem("nombreUsuario", nuevoNombre);
    localStorage.setItem("apellidoUsuario", nuevoApellido);

    // Actualizar el nombre y apellido ingresado en los inputs
    document.getElementById("nombreUser").textContent = nuevoNombre;
    document.getElementById("apellidoUser").textContent = nuevoApellido;
});

// Comprobar si hay datos en el localStorage al cargar la página
window.addEventListener("load", function() {
    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const apellidoGuardado = localStorage.getItem("apellidoUsuario");

    if (nombreGuardado) {
        document.getElementById("nombreUser").textContent = nombreGuardado;
    }
    if (apellidoGuardado) {
        document.getElementById("apellidoUser").textContent = apellidoGuardado;
    }
});




// Función para verificar si el usuario está autenticado
//function isUserAuthenticated() {
 // return ;
//}

// Función para cargar el perfil del usuario
//function loadUserProfile() {
  // Obtener elementos HTML
  //const nombreNuevoUser = document.getElementById('nombreNuevoUser');
  //const apellidoNuevoUser = document.getElementById('apellidoNuevoUser');
  //const emailUser = document.getElementById('emailUser');

  // Verificar si el usuario está autenticado
  //if (isUserAuthenticated()) {
    
  //} else {
    // El usuario no está autenticado, redirigir al inicio de sesión
  //  window.location.href = 'login.html';
  //}
//}

// Función para guardar los cambios en el perfil
//function guardarCambios() {
  //}
// Llama a la función para cargar el perfil cuando la página se carga
//window.addEventListener('load', loadUserProfile);






  function validarPerfil(){
    let userPrimerNombre = document.getElementById("nombreNuevoUser").value;
    let userSegundoNombre = document.getElementById("segundoNombreUser").value;
    let userPrimerApellido = document.getElementById("apellidoNuevoUser").value;
    let userSegundoApellido = document.getElementById("segundoApellidoUser").value;
    let userEmail = document.getElementById("emailUser").value;
    let userTelefono = document.getElementById("telefonoUser").value;
    
    
    if(
        userPrimerNombre.trim() === "" ||
        userPrimerApellido.trim() === "" ||
        userEmail.trim() === ""
        ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se permiten campos vacios!',
            });
            return false;
        }
        if (!validarEmail(userEmail)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El Email debe de ser valido',
            });
            return false;
        }
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Tu registro ha sido exitoso!',
        });
        
        let datosUsuario = {
            userPrimerNombre,
            userPrimerApellido,
            userEmail
        };
        localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
        console.log("enviado!");
        console.log(datosUsuario)
        return true;
      }
      function validarEmail(email) {
        // Expresión regular para validar el formato del email
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    