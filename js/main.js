
(function() {
    
    'use estrict'; 
    document.addEventListener('DOMContentLoaded', function () {
    
        //validar formulario 

        let formulario = document.querySelector('#formulario');

        formulario.addEventListener('submit', validarFormulario)

        function validarFormulario(e) {
             e.preventDefault();

            let idEmpresa = document.querySelector('#idEmpresa').value,
                nombre = document.querySelector('#nombre').value,
                empresaNombre = document.querySelector('#empresaNombre').value,
                telefonoEmpresa = document.querySelector('#telefonoEmpresa').value,
                accion = document.querySelector('#accion').value,
                notificacion = document.querySelector('#notificacion')
                

            //validar que el elemento no este vacio
            if (idEmpresa === "" || nombre === "" || empresaNombre === "" || telefonoEmpresa === "") {
                mostrarNotificacion(`<p>Ingresa todos los datos </p>`, 'error')
            } else {
               
                //leer datos
                let informacion = new FormData() //captura los elementos del formulario. esto es js avanzado
                //es recomendable no usar la palabra reservada
                informacion.append('idEmpresa', idEmpresa);
                informacion.append('nombre', nombre);
                informacion.append('empresaNombre', empresaNombre);
                informacion.append('telefonoEmpresa', telefonoEmpresa);


                if (accion === "crear") {
                      conexiondb(informacion);
                      mostrarNotificacion(`<p>Completaste el registro</p>`, 'correcto')
                }
                

            }

            //metodo de conexion asincrono similar a AJAX 
            async function conexiondb(params) {
                let enviar = await fetch('php/modelo/encode.php', { method: 'POST', body: params }) // inicializo la conexion 

                if (enviar.ok) {
                    let respuesta = await enviar.json() //await espera a que la promesa se cumpla e imprime el resultado 
                    console.log(respuesta);

                } else {
                    alert(`Error HTTP ${enviar.statusText}`)
                }

            }


            //muestra la notificacion 
            function mostrarNotificacion(texto,clase) {
                
                //agrega a clase visible luego de una porcion de segundo
                setTimeout(() =>{
                    notificacion.innerHTML = texto //parametro de la funcion que nos indica el texto a imprimir
                    notificacion.classList.add('visible');
                    notificacion.classList.add(clase); //parametro de la funcion que nos indica la clase

                    setTimeout(() =>{
                        notificacion.classList.remove('visible');
                        notificacion.classList.remove(clase);
                    },3000);

                },100); //esta funcion nos ayuda a decidir si ejecutamos la funcion en ese momento o no 
    
            }

        }

        
        
        


  

    });
})();
