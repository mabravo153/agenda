
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
                notificacion = document.querySelector('#notificacion')
                

            //validar que el elemento no este vacio
            if(idEmpresa === "" || nombre ==="" || empresaNombre ==="" || telefonoEmpresa === ""){
                mostrarNotificacion()
            }

            function mostrarNotificacion() {
                
                //agrega a clase visible luego de una porcion de segundo
                setTimeout(() =>{

                    notificacion.classList.add('visible');

                    setTimeout(() =>{
                        notificacion.classList.remove('visible');
                    },3000);

                },100); //esta funcion nos ayuda a decidir si ejecutamos la funcion en ese momento o no 
    
            }

        }

        
        
        
        



    });
})();
