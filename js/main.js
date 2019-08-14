
(function () {

    'use estrict';
    document.addEventListener('DOMContentLoaded', function () {


        //variables globales 

        let accion = document.querySelector('#accion').value,
            notificacion = document.querySelector('#notificacion')

        //validar formulario 

        let formulario = document.querySelector('#formulario');

        formulario.addEventListener('submit', validarFormulario)


        function validarFormulario(e) {
            e.preventDefault();

            let idEmpresa = document.querySelector('#idEmpresa').value,
                nombre = document.querySelector('#nombre').value,
                empresaNombre = document.querySelector('#empresaNombre').value,
                telefonoEmpresa = document.querySelector('#telefonoEmpresa').value

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
                informacion.append('accion', accion)


                //en este punto creamos el usuario  
                if (accion === "crear") {
                    conexiondb(informacion);
                    mostrarNotificacion(`<p>Completaste el registro</p>`, 'correcto')//funcion para mostrar una notificacion 
                }

                //con esto lo editamos
                if (accion === "editar") {
                    editarBD(informacion);
                    mostrarNotificacion(`<p>Se edito el contacto correctamente</p>`,'correcto');
                }

            }

            //metodo de conexion asincrono similar a AJAX 
            async function conexiondb(params) {
                let enviar = await fetch('php/modelo/encode.php', { method: 'POST', body: params }) // inicializo la conexion 

                if (enviar.ok) {
                    let respuesta = await enviar.json() //await espera a que la promesa se cumpla e imprime el resultado 

                    let contenedorScroll = document.querySelector('.scroll');

                    let contenedorEliminar = document.createElement('div');
                    contenedorEliminar.setAttribute('data-id', `${respuesta.info.idEmpresa}`);
                    contenedorEliminar.classList.add('contenedor-eliminar');

                    contenedorEliminar.innerHTML = `
                        <div class="campo-result">
                            <p class="resultado"> <a href="editar.php?id=${respuesta.info.idEmpresa}" class="editar"><i class="fas fa-edit"></i></a> <a href="#" class="borrar" data-id="${respuesta.info.idEmpresa}"><i class="fas fa-trash-alt"></i></a> </p>
                        </div>
                        <div class="campo-result">
                            <p>${respuesta.info.idEmpresa}</p>
                        </div>
                        <div class="campo-result">
                            <p>${respuesta.info.nombre}</p>
                        </div>
                        <div class="campo-result">
                            <p>${respuesta.info.empresaNombre}</p>
                        </div>
                        <div class="campo-result">
                            <p>${respuesta.info.telefonoEmpresa}</p>
                        </div>
                    `

                    contenedorScroll.append(contenedorEliminar)


                    //de esta manera reseteamos el formulario, debemos hacerlo de esta manera o no funcionara 
                    document.querySelector('form').reset()

                } else {
                    alert(`Error HTTP ${enviar.statusText}`)
                }

            }

            
            async function editarBD(params) {

                let editarValores = await fetch(`php/modelo/encode.php?id=${respuesta.info.idEmpresa}`, { method: 'POST', body: params })

                if(editarValores.ok){

                    

                }else{
                    alert(`${editarValores.status}: ${editarValores.statusText}`)
                }

            }

        }


        //muestra la notificacion 
        function mostrarNotificacion(texto, clase) {

            //agrega a clase visible luego de una porcion de segundo
            setTimeout(() => {
                notificacion.innerHTML = texto //parametro de la funcion que nos indica el texto a imprimir
                notificacion.classList.add('visible');
                notificacion.classList.add(clase); //parametro de la funcion que nos indica la clase

                setTimeout(() => {
                    notificacion.classList.remove('visible');
                    notificacion.classList.remove(clase);
                }, 3000);

            }, 100); //esta funcion nos ayuda a decidir si ejecutamos la funcion en ese momento o no 

        }


        //eliminar registro 

        if (document.querySelector('.borrar')) {
            let eliminar = document.querySelectorAll('.borrar'); //seleccionamos todos los botones eliminar que hayan en el momento 

            eliminar.forEach(element => {

                element.addEventListener('click', borrarElement);

            })


            async function borrarElement(e) {
                e.preventDefault();

                let eliminarElement = this//luego de recorrer el arreglo, con esto seleccionamos el elemento exacto 

                let idData = this.getAttribute('data-id');

                let confirmar = confirm('Estas seguro?');

                if (confirmar == true) {

                    let xhr = new XMLHttpRequest();

                    xhr.open('GET', `php/modelo/encode.php?id=${idData}&accion=borrar`, true);

                    xhr.onload = function () {
                        if (xhr.status == 200) {

                            console.log(xhr.responseText);

                            let json = JSON.parse(xhr.response);

                            if (json.respuesta == 'correcto') {

                                setTimeout(() => {

                                    eliminarElement.parentElement.parentElement.parentElement.remove()


                                }, 1000);

                                mostrarNotificacion(`<p>Eliminaste el registro</p>`, 'correcto');

                            } else {
                                //mostramos una notificacion si algo sale mal

                                mostrarNotificacion(`<p>Ocurrio un error eliminar</p>`, 'error');

                            }

                        } else {
                            alert(`${xhr.status} ${xhr.statusText}`)
                        }
                    }

                    xhr.send();

                }

            }


        }//final if eliminar 


    });
})();
