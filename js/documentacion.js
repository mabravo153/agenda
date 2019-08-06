//con console imprimimos en la consola, usamos log para imprimir los valores
//con table imprimimos una tabla

/*esto es un comentario de varias lineas, asi evitamos escribir tanto
es recommendable antes de iniciar el codigo poenr la directiva 
'use strict' esot hara saber al navegador que se usa js moderno 


en js hacemos pruebas automatizadas con mocha

usaremos mocha chai y sinon8



diferencias entre un primitivo y un objeto 

un primitivo es un valor de un tipo primitivo 

hay 6 tipos de primitivos: string, number, boolean, symbol, null y undefined 


un objeto es capa de almacenar multiples valores como propiedades 

 */


// en javacript realizar un comentario se hace con barras inclinadas 
//existen tres formas de hacer variables 

//var nombre_variable; 
//de esta forma la variable no tiene ningun valor
// para agregarle datos solo debes escribir un igual =
//los strings se escriben con '' comillas simples 
//la variable se puede sobre escribir de una manera sencilla

//var nombre_variable = 125; 

//el nombre de la variable puede llevar numeros pero solo si empuieza con una letra




//VARIABLES CON LET
//cuandp usas let y declaras una variable. al momento de cambiar el valor de la variable. no se debe escribir let nuevamente
//a diferncia de var que si es necesario hacerlo 

//let nombreLet = 'miguel';
//nombreLet = 'carlos';
//console.log(nombreLet);




//VARIABLES CON CONST
//esto es una constante, no se puede dejar sin valor al declararla y no se puede modificar luego 

//const cliente = 'juan';

//este tipo de variables es recomendables usarlas cuando seleccionamos elementos del html 






//STRING

//debe ser comillas sencillas o dobles, no se pueden combinar 
// para evitar problemas en el ingles al momento de poner una comilla sencilla
//es necesario poner una \

//let nombre_variable;
//nombre_ variable = 'don\'t'



//FUNCIONES PARA STRINGS 
// tenemos varias funciones para los string 

// let nombre_variable = 'nombre',
//    nombre_variable2 = 'nombre2';

//    let sumaVariable;

//sumaVariable = nombre_variable + ' '+ nombre_variable2;

//console.log(sumaVariable);

//console.log(sumaVariable.length);

//con la funcion concat concatenas texto adicional

//let nombre = 'esto es un nombre';


//nombre = nombre.concat(' ' + 'esto es genial');

//console.log(nombre);

//reemplazar texto en un string 

//let nombre;

//let actividad = 'Estoy aprendiendo javascript y me gusta';

//nombre = actividad.replace('javascript', 'js')


//console.log(nombre);







//  CONCATENAR VARIABLES 
//para concatenar variables se debe agregar el signo + 
// esto ocacionara que las varioables se sumen 


//let variableUno = 'aprendiendo',
//    variableDos = 'javascript';

//console.log(variableUno + '' + variableDos);




//NUMEROS EN JS 
//pasa declarar una variable que solo tenga numeros. no es necesario ponerlos entre comillas

//let numeros = 12; 

//js tiene una clase para realizar calculos, con Math 

//let numeros = 12;

//resultado =Math.abs(numeros);

//con Math.round redondea el valor flotante.. si es .5 hacia abajo lo redondera al numero menor 
//si es hacia arriba. lo redondea hacia arria

//con Math.floor redondea hacia abajo sin importar que sea .99 
//con Math.ceil
//Math.pow es para potencias 
// con min tenemos el minimo de unos numeros y con max el maximo 


//console.log(resultado);

// en este caso retornamos valores absolutos

//INTERACCION,ALERTA Y CONFIRMACION  

/*estas son funciones del navegador. alert, propt y confirm

Alert: esta muestra un mensaje el cual no permite que el usuario haga algo adicional a menos 
que le de ok 
alert('mensaje');  esta se puede al almacenar en una variable podemos combinarlos con otras funciones 
como 

Prompt: esta muestra una ventana con un mensaje y un campo para ingresr un valor 
es recomendable crearla en una variable para que esta almacene los datos que esta reciba 

el resultado de prompt siempre es un string y no un numero 

debugger. detiene la ejeccion del script 

let resultado = prompt('ingresa tu nombre: ' ); en este caso, el valor que se recibe se almacena en la variable resultado 
el prompt requiere un titulo que se mostrara al visitante  y el segundo parametro es opcional   
    alert(`Hola ${resultado}`);

Confirm: esta es una funcion la cual muestra una ventana modal. con una pregunta y dos posibles respuestas 
si le das aceptar, este tomara el valor como un true, en caso contrano como un false 

una ventana modal, pausa la ejecucion del script y no permite que el usuario ejecute alguna otra accion 

en el confirm y el prompt al seleccionar esc o cancelar el valor se retornara nulo.

*/

//para incrementar es como en la mayoria de los lenguajes, usas ++
// para incvrementar antes que se muestre pones los ++  antes de la varaible 
// ++variable. 

//para incrementar tomando el valor actual de la vaaible usamos  +=
// puntaje += 5;  esto tomara el valor actual de puntaje y le suma 5


//para disminuir es inverso -- 





//CONVERTIR UN STRING A UN NUMERO

/*estos son metodos de los valores primitivos*/ 

//para convertir un string a numero debemos usar Number este es un poco mas general


//let numeros = 12,
 //   numero2 = '50',


 /*en javascript, acordtamos un numero agregando la letra 'e'  
 si queremos escribir 1billon, escribimos 1e9 
 si queremos escribir un numero mas pequeño un microsegundo. 
 usaos 1e-6*/

//resultado = Number(numero2) + numeros;

// console.log(resultado);

//con parseInt convertimos el string a numeros enteros 

//resultado = parseInt(numero2) + numeros;

//console.log(resultado);



//toFixed corta los decimales, solo debe ser usado en numeros.

//let numero1 = 2050562.56456498;

//console.log(numero1.toFixed(2));

/*esto es muy util, en la situacion en que se este desarrollando un carrito de compras, 
sobre todo si acepta valores en centavos, ya que si el usuario ingresa $.10 + $.20 este no sera exactamernte $0.30
la manera de solucionar esto es usando 
nombre variable.toFixed(2)
esto siempre devuelve una cadena para que nos regrese los numeros, debemos agregar un + al inicio */

/*para comprobar si un valor de cadena es un numero regular usamos isFInite
una cadena vacia siempre sera 0

//CONVERTIR UN NUMERO A STRING 
//esto seria util ya que length solo funciona con strings, lo podemos usar para 
//validar un año, numero de tarjeta de credito o codigo postal entre otrojs ejemolos 

//let numero = 563214569877;

//let convertir;

//convertir = String(numero);

//console.log(convertir);



//TIPO DE DATOS
//los tipos de datos en js son como la mayoria 
// int = entero, string = cadena de texto, booblean = si no 
//float = decimales
//tipo de dato null es un object 
//tipo de dato indefinido
//fecha, objeto y los arrays en js son objetos 

//para saber el tipo de dato usamos un operador llamado typeof
//los numeros   








//ARRAYS 
//los arreglos son conjuntos de datos en una sola variable 
//en js los arreglos los agregas usando corchetes
// un arreglo puede contener un objeto 

//let numeros = [1,2,3,4,5,6];

//tambien lo podemos hacer de esta manera
//const meses = new Array['enero','febrero', 'marzo'];

//como en muchos lenguajes quwe has visto pero no te acuerdas 
//podemos imprimir el indice del arreglo que queramos seleccionandolo 
//console.log(meses[0]);  esto nos mostrara el primer indice
//un arreglo puede tener todo tipo de datos 
//los arreglos por lo regular van siempre en [] pero js te da otro metodo 
//con Array.isArray(el nombre del arreglo);



//para insertar datos en un arreglo. lo podemos hacer de muchas formas 
// meses[posicion donde quieres que este] = el valor que quieres ingresar;
// o podemos usar meses.push();. esto lo agregara al final 

//arrays[3] = 'nombre';

//arrays.push('final arreglo');

//arrays.unshift('primer elemento'); este lo usamos para agregar datos al inicio del arreglo 

// arrays.pop(); borra el ultimo elemento del arreglo 

//arrays.shift(); borra el primer elemento del arreglo 

/*arrays.splice(0, 2); de esta manera borramos un rango de elementos en este caso desde el primer elemento hasta el 3ro, aparte podemos agregar 
otros elemento. array.splice(0, 1 , 'estamos', 'agregando', 'otro', 'elemento');  en este ejemplo estamos agregando unos strings, al momento de agregarlos
se agregan en el indice eliminado

El método de splice también puede insertar los elementos sin remoción alguna. Para eso necesitamos establecer deleteCount en 0

arrays.concat() concatenamos elementos en el array 


arrays.indexOf('array', 0)
con  este metodo, podemos buscar un elemento en el array. debemos agregarle el string y el indice desde donde querems buscar. este nos arrojara el indice donde esta. y si no esta nos arrojar -1

arr.lastIndexOf(item, from) este es el mismo solo que nos busca al contraripo 

arr.includes(item, from) el metodo de buscqueda es similar en este, solo que si lo encuentra nos regresara true 

arrays.split()  est6e metodo lo usamos cuando en un indice de un array, hay varios elementos, por ejemplo nombres y debemos separarlos. debemos ver
el delimitador para asi poder usarlo. esto nos regresara los nombres individualizados 
La llamada arr.join (separador) hace lo contrario para split . Crea una cadena de elementos arr pegados por separator entre ellos.



    push(...items) : agrega elementos al final,
    pop() - extrae un elemento del final,
    shift() - extrae un elemento desde el principio,
    unshift(...items) : agrega elementos al principio.
    splice(pos, deleteCount, ...items) - en el índice pos eliminar elementos deleteCount e insertar items .
    slice(start, end) : crea una nueva matriz, copia los elementos desde la posición start hasta el end (no incluido) en ella.
    concat(...items) : devuelve una nueva matriz: copia todos los miembros de la actual y le agrega items . Si alguno de los items es una matriz, se toman sus elementos. 

Para buscar entre los elementos:

    indexOf/lastIndexOf(item, pos) : busque el item comienza desde la posición pos , devuelva el índice o -1 si no lo encuentra.
    includes(value) : devuelve true si la matriz tiene value , de lo contrario es false .
    find/filter(func) : filtra elementos a través de la función, devuelve primero / todos los valores que hacen que se devuelva true .
    findIndex es como find , pero devuelve el índice en lugar de un valor. 

Para iterar sobre los elementos:

    forEach(func) : llama a func para cada elemento, no devuelve nada. 

Para transformar la matriz:

    map(func) : crea una nueva matriz a partir de los resultados de la func de llamada para cada elemento.
    sort(func) - ordena la matriz en el lugar, luego la devuelve.
    reverse() : invierte la matriz en el lugar y luego la devuelve.
    split/join - convierte una cadena a matriz y viceversa.
    reduce(func, initial) : calcule un valor único sobre la matriz llamando a func para cada elemento y pasando un resultado intermedio entre las llamadas. 

Adicionalmente:

    Array.isArray(arr) comprueba arr para ser una matriz. 





//arrays.reverse();  ordena los elementos de atras hacia adelante
//con arrays.sort(); los organiza alfabeticamente 

/*El for..of no da acceso al número del elemento actual, solo su valor, pero en la mayoría de los casos es suficiente. Y es más corto.

Técnicamente, como los arreglos son objetos, también es posible usar para for..in : 










//OBJETOS EN JS 
//objert literal. son extrictos
//para crear un objeto en js, crear una variable o una constante luego se abre {} llaves
//utilizas una llave y un valor. estos van separados por comas  
//el indice no existe en los objetos de js. 
//se accede al mismo por medio de las llaves, un objeto puede tambien tener arrays dentro de el 
// un objeto puede tener otro objeto, pero al crear un objeto dentro del mismo, no es necesario poner = 
//si el objeto se crea dentro de otro se puede unar : 

//const usuario = {
//    nombre: 'miguel angel',
//    apellido: 'bravo martinez',
//    edad: 25,
//    año: 1994,
//    gustos: {
//        musica: 'trance',
//        comida: ['carne asada', 'jugo de maracuya']

//    }

//}

/*La propiedad length se actualiza automáticamente cuando modificamos la matriz. Para ser precisos, en realidad no es el recuento de valores en la matriz, sino el mayor índice numérico más uno.
 Entonces, la forma más sencilla de borrar la matriz es: arr.length = 0; . D*/

/*para crear una funcion dentro de un objeto, es necesario asignarle una llave, cuando se generar una funcion y se le asgina un valorque esta dentro de la funcion, como por ejemplo un 
template string, al porner ${this.nombre de la llave dentro del objeto}


 let usuario = {
      Nombre: 'miguel angel',
      Edad: 25,
      Profesion: 'estudiante de javascript desempleado ',
      saludo: function(){
        alert(`Hola soy ${this.Nombre}`)
      }
    }

    usuario.saludo();
    


*/


//console.log(usuario.gustos.comida[1]);

//aun asi hay otra forma de acceder a los datos de un objeto

//console.log(usuario['gustos']['comida']);







//TEMPLATE STRINGS   con atl 96 sacamos las `
//una nueva mejora de js 
// esto lo usamos para mezclar string con variables 
//

//let nombre = 'miguel bravo',
//    trabajo = 'desarrollador web en progreso';


//    console.log(`Nombre: ${nombre}  Trabajo: ${trabajo}`);
    





// FUNCIONES EN JS
//hay dos formas de hacer funciones en js, tiene nmuchas diferencia
//las fuciones tienen un nombre y un parentecis, el nombre es el nombre de la funcion 
//y el parentesis es lo que ejecuta la misma
//creas una funcion en js agregando la palabra funtion luego agregas el nombre 
//seguido de eso, se abren parentesis, dentro del parentesis van los parametros


//funtion declaration

//function nombre(params) {
        
//}

//para llamar una funcion, debes llamarla, su no. no se ejecutara, 
//una funcion se llama escribiendo su nombre nombre();
//este permite ejecutar la funcion antes que se declare

//funtion exprecion 
//en este caso creamos una variable = luego agregamos funtion u abrimos parentecis




//pasar parametros es tomar codigo que esta fuera de la funcion y pasarlo dentro de la  funcion 
//es recomendable indicarle valores por defecto a tus paramettros 
//asi evitamos que la funcion haga algo que no queramos


//const suma2 = function(nombre = 'no lo se aun', apellido = 'no lo se') {
  //  console.log(`Hola:  ${nombre}, Apellido: ${apellido}`);
        
//}

//suma2('miguel', 'bravo');
//  suma2();


//es necesario saber en que orden se ponen los parametros. ya que de esa manera se imprimiran


//iife 

//son funciones que se invocan automaticamente, su sintaxis es la siguiente

//(function(tecnologia) {
//    console.log(`Estoy aprendiendo: ${tecnologia}`);
    
//})('js');

//la funcion es encerrada por un parentesis. no se pone nombre
//los parametros se ingresan en un parentesis al lado


/* */



//METODOS DE PROPIEDAD
//cuando una funcion se mete dentro de un objeto, se denomina metodo 
//pueden hacer varias funciones dentro de un objeto pero de igual forma se puedenm cvrear fuera del mismo 


//cuando se crean funciones dentro de un objeto no es necesario agregarle nombre a la funcion 
//se llama desde la llave

//en este ejemplo estamos creando un objeto, de igual forma estamos agregando un metodo (funcion)
//dentro del objeto

//const reproductor = {
//    Reproduciendo: function(cancion){
//        console.log(`Reproduciendo: ${cancion}`);
      
//    }

//};

//reproductor.Reproduciendo('no importa ya');





//de esta manera creamos un metodo fuera del objeto y lo llamamos 

//reproductor.borrar = function(id) {
//    console.log(`Borrando la cancion con el ID ${id}`);
    
//}

//reproductor.borrar(123);



//FUNCIONES QUE RETORNEN VALORES y arrow funtions
//usualmente una funcion debe retornar un valor cuando haras algo extra con la misma funcion o los datos retornados
//quieres que la funcion procese algo 

//function suma(a, b) {
 //   return a + b;
  //}
  
  
 // const multiplica = function(a){
//      return a * 10;
//  }
  
 // let resultadoSuma = suma(55,20);
  
 // let total = multiplica(resultadoSuma);
  
 // console.log(total);

//en este ejemplo creamos dos funciones una suma dos numeros 
//el resultado lo almacenamos en una variable luego creampos 
//una variable que multiplica la variable * 10


//arrow function
//es una forma corta de expersar las funciones
//cuando esta tiene un solo parametro no se le agregan parentesis
//pero al tener dos, si se le agregan 

//const suma= (a = 0, b = 0) =>  a + b;
    

//let multiplica = ( a= 0, b=0) => a * b; 

//let totalsuma =  suma(1,10);

//let total = multiplica(totalsuma , 5);

//console.log(total);
 









//OBJECTS CONSTRUCTOR Y THIS 
//esta forma es muy similar al momento de crear objetos como en otros lenguajes 
//el objeto se crea de una manera similar a una funcion, aunque debe tener la primera letra en mayuscula 
//siempre debemos usar la palabra this para hacer referencia a ese objeto 

/*para saber si una propiedad existe en un objeto. podemos usar la sintaxis in 

por ejemplo 'llave' in casa siempre debe estar en comillas 

//function Tarea(nombre = 'visitante', urgencia = 'rapido') {
//    this.nombre = nombre;
//    this.urgencia = urgencia;
//}

//const tarea1 = new Tarea('aprender js');

//console.log(tarea1);

//este metodo es mas dinamico, a diferencia del literal,este te permite agregar parametros diferenetes en los obejtos 
//ya que se crean instancias (copia unica del objeto);


//en las nuevas versiones de js se han incluido las clases
//lo cual cambia un poco la forma de hacer los objetos 

//class Tarea{
//    constructor(nombre = 'visitante', urgencia = 'rapido'){
//        this.nombre = nombre;
//        this.urgencia = urgencia;
//    }
//}

//const tarea1 = new Tarea('aprender js');

//console.log(tarea1);



//ESTRUCTURS DE CONTROL 
//son if else y ifelse
//if se utiliza para validad una situacion, si el if es verdadero 
//se ejecuta una parte de la funcion 
//si no. entraria else 

//const diaHoy = new Date(2018); 
//const diaPrueba = new Date();

//let prueba = diaPrueba.getFullYear();

//if (prueba == diaHoy) {
//    console.log('es el año 2019');
    
//} else {
//    console.log('no es el año');
    
//}

//else if 

//const tarjeta = true;
//const efectivo = 600;
//const carrito = 500;


//if (carrito > efectivo) {
  //  console.log('pagas con efectivo');
    
//} else if (tarjeta) {
    //console.log('pagas con tarjeta');
    
//} 

//else {
  //  console.log('no se realizo la compra');
    
//}

//en este ejemplo, podemos ver que al no cumplirse la primera condicional, se ejecuta 
//el else if al ser true se ejecuta la segunda condicional 
// en caso que ninguna fuera cierta. se ejecutaria el else  


//OPERADOR && and  || or  
//la con condicional or || habla que una de las dos condiciones se de 

//const tarjeta = true;
//const efectivo = 600;
//const carrito = 500;


//if (carrito > efectivo || tarjeta) {
  //  console.log('pagas con efectivo');
    
//} else if (tarjeta) {
  //  console.log('pagas con tarjeta');
    
//} 

//else {
  //  console.log('no se realizo la compra');
    
//}

//cuando se usa un or o un y, en ocaciones no es necesario usar un else if 
// si alguna de las dos puede hacer lo mismo



//en este caso usando el operador or, cualquiera de las dos condiconales de arribcierta , se ejecutaria la primera linea 



//const tarjeta = true;
//const efectivo = 600;
//const carrito = 500;


//if (carrito > efectivo && tarjeta) {
//    console.log('pagas con efectivo');
    
//}  

//else {
//    console.log('no se realizo la compra');
    
//}




// SWITCH
//este metodo es recomendado cuando es necesario validar muchas 
//variables
//en el ejemplo vemos que tentemos una variable llamada metodo de pago 
//en el switch seria la "llave"
//seguido a eso debemos agregar las situaciones que se presneten y lo 
//queremos que se realice en la misma 
//ademas tenemos un defail es mas recomendsable usalro para asignar cuando es un valor no valido 

//const metodoPago = 'cheque'

//switch (metodoPago) {
//  case 'efectivo':
//    console.log(`Pagaste con ${metodoPago}`);
//      break;
// case 'cheque':
//        console.log(`Pagaste con ${metodoPago}`);
//        break;
//   case 'tarjeta': 
//        console.log(`Pagaste con ${metodoPago}`);
//        break;

//    default:
//        console.log('metodo de pago no valido');
        
//        break;
//}


//BARRA DIAGONAL INVERSA 

/*Tenga en cuenta que la barra diagonal inversa \ sirve para la lectura correcta de la cadena por JavaScript, luego desaparece. La cadena en memoria no tiene \ . Se puede ver claramente en alert de los ejemplos anteriores.

Pero, ¿qué pasa si necesitamos mostrar una barra invertida real dentro de la cadena?

Eso es posible, pero necesitamos duplicarlo como \\ : */

//LOOPS FOR, WILE Y DO WHILE 
//estos son los llamados bucles o iteradores, corren hasta que una condicion se de 
//for se usa para recorrer arrays


//let carritoCompra = ['producto 1', 'producto 2', 'producto 3' ];

//carritoCompra.push('producto 4');


//for ( let index = 0; index < carritoCompra.length; index++){
//   console.log(`Tienes en tu carrito: ${carritoCompra[index]}`);
   
//}


//for (carrito of carritoCompra){
//  console.log(carrito);
  
//}
/*
for (let index = 0; index < 10; index++) {

  if (index < 5) {
    alert(index);
  }else if (index == 5){
    continue
  }
   else {
    alert('llego a 5');
    break;
  } 
  
  
}

es posible que los iteradores se rompan si asi lo requiere la situacion 
esto lo logramos con continue y break. 
en este ejemplo, for debe recorrer un arreglo hasra llegar a 10, pero en medio hacemos qye se cumpla una condicion. la cual hacemos saltar 
al sr igual que 5 este cumple la condicion y continua , al llegar al else. ejecuta la liena y el break detiene toda la operacion 

tambien es posible recorrer un objeto con  el bucle for usando in

for (variable in objeto ){
  alert('variable)
}

*/



//en este ejemplo tenemos un array el cual recorremos con el loop for 
 
//while es muy similar al for 
//elñ while corre igual hasta que una condicionb se cumpla 
//este evalua la condicion antes igual 

//let i = 0;

//while (i < 10) {
//   console.log('menor o igual a 20');
//   i++
   
//}

// si se usa while, es necesario al final de la logica, agregar el incremental, si no se realiza se ejecutara int
//interminablemente ya que no se cumpliria la condicion 


//do while 
// en este caso, se ejecutara al menos una vez. a diferencia de los otros 

//do {
//  console.log('imprime');
  
//} while (i < 10);

/*

do {
  let input = prompt('ingresa un valor');
  
  arrayinput.push(input);

  alert(arrayinput);
  
} while (!isFinite(input));

siempre se declara primero lo que quereremos que el bucle haga si la condicion es verdadera, 
al momento de usar do while. no se puede crear la variable dentro del do. ya que esto gnera errores en el bucle

*/


// OTROS ITERADORES EN JS
//otra forma de hacer el for 

//for (carrito of carritoCompra){
//  console.log(carrito);
  
//}

//en este ejemplo podemos ver que creamos una variable para cada unpo de los elementos del 
//array 
//de igual manera se pueden convinar con template string 




//para recorrer un object literal podemos usar esta forma de for 
//

//for (automoviles of Object.values(automovil)){
//  console.log(automoviles);
   
//}
//en este caso no podemos poner el nombre del objeto de buenas a primeras 
//ya que no haria nada 



//foreach
//este es un iterador que se declara diferente a el for, con este iterador, se escribe primero el array, luego .foreach
//es compatible con arrow funtions


//carritoCompra.forEach(elemento => {
//  console.log(`for ${elemento}`);
  
//});




//tambien existe el map, la sintaxsises similart, la diferenccia crea una copia del arreglo o de lo que esta iterando

//para iterar objects literals tambien podemos hacerlo, la sintaxis es la siguiente


//Object.values(personas).forEach(persona => {
 // console.log(`Mi nombre es ${persona.Nombre}, mi apellido es ${personas.Apellido}, y mi profecion es ${personas.Ocupacion}`);
  
//});
//para acceder a los valores del obejto usamos values, para acceder a las llaves, usamos keys 





//SCOPE
//es la visibilidad de una variable, existen dos. uno local y otro global 
//varian dependiendo de la decalracion de la variable. con var o let 
//cuando se usa la declaracion de variable var si esta es global y se cambia de manera local en alguna funcion
//la variable local igual cmbia 
//en cambio con let, eso no sucede 







//OBJECT DESTRUCTURING
//la forma en la que extraes valores de un objeto


//const cliente = {
//Nombre: 'Miguel',
//Membresia: 'premium'
//}


//let {Membresia} = cliente;

//console.log(Membresia);

//de esta manera accedemos si, el objeto es simple. pero en el siguiente ejemplo 
//mostrare como acceder a un objeto con varios objetos dentro de el 

//const cliente = {
//  Nombre: 'Miguel',
//  Ubicacion: {
//   ciudad: 'Barranquilla',
//   pais: 'Colombia' 
//  },
//  InfoMembresia:{
//    tipo: 'Premium',
//    inicio: '04-02-2019'
//  }
//}

//console.log(cliente.Nombre); 

//let {InfoMembresia:{tipo}} = cliente;
//console.log(tipo);

//en este ejemplo podemos observar un objeto dentro de otro, 
// si queremos visualidar algun dato de un objeto de segundo nivel 
//debemos al momento de crear la variable seleccionarlo de esta manera 
//let {dato_obejto1: {dato_objeto2}} = nombre objeto 

//y al momento de imprimierlo en la consola. debemos especificar el dato_objeto2 en este ejemplo 
//si hay mas objetos dentro de los objetos ya indicadmos 
//debemos continuar especificandolos {dato_obejto1: {dato_objeto2: {dato_objeto3}}}
//y lo que mandariamos a imprimir seria dato_objeto3







//OBJECT LITERAL ENHACENMENT
// sirve para unir los datos en un objeto, de esta manera se pueden agregar objetos y variables creadas fuera del objeto pincipal 
//es una mejora en la nueva version de js 

//let empanada = 'trifasica',
//  arroz= 'camaron';



//const cliente = {
//Nombre: 'Miguel',
//Ubicacion: {
// ciudad: 'Barranquilla',
// pais: 'Colombia' 
//},
//InfoMembresia:{
//  tipo: 'Premium',
//  inicio: '04-02-2019'
//},


//empanada,
//arroz
//}


//de esta manera estamos agregando las funciones que se encuentran fuera de l 
//objeto principal 






//FILTER FIND AND REDUCE 
//son nuevas funcionalidades que nos trae js, filter 
//como su nombre nos indica nos sirve para filtar datos , find para buscar 
//de esta manera usamos el filter 

//let grupoPersonas = [
  //{Nombre: 'Miguel Bravo', Ocupacion: 'estudiante', Edad: 25},
  //{Nombre: 'estefania ortiz', Ocupacion: 'medico', Edad: 35},
  //{Nombre: 'gloria martinez', Ocupacion: 'pensionada', Edad: 65},
  //{Nombre: 'karen Bravo', Ocupacion: 'comerciante', Edad: 34}
  //];



//optener personas mayor de 25 años

//let prueba = grupoPersonas.filter(persona => persona.Edad <= 25);

//console.log(prueba);


//filter itera en el arreglo de personas. necesitamos un valor, en este caso persona
//queremos filtar por edad mayor o igual de 25 años



//creamos una variable para almacenar lo que recibimos
//let nombre = grupoPersonas.find(persona => persona.Nombre == 'Miguel Bravo');
//este lo podemos usar si queremos encontrar algun dato especifico
//console.log(nombre);

//let menor = grupoPersonas.filter(valor => valor.Edad > 25);
//lo hacemos de esta manera ya que el filtro se agrega directamente en este caso 
//console.log(menor);
//  de esta manera podemos filtar a las personas mayor de 25 años 



//let promedio = grupoPersonas.reduce((edadTotal, promedi) => { return edadTotal + promedi.Edad;},0 );
//console.log(promedio);

//en este ejemplo estamos sacando la cantidad total de años de las personas


/*
function printSi() {
  alert('la respuesta es si')
}

function printNo(params) {
  alert('la respuesta es no o cancelaste')
}

function preguntas(pregunta, printSi,printNo) {
if (confirm(pregunta)) 
  printSi();
 else 
  printNo();

}

preguntas('estas de acuerdo?', printSi, printNo)

este es un ejemplo de lo que podemos encotrar en la vida real
acerca de conformar o no, por ejemplo. si el usuario quiere enviar un formulario 
o no 
*/



/* 

MAP en javasecript 

en js podemos hacer otro tipo de estructura de datos, diferente a array u objetos. esta estructura se llama map. la principal diferencia entre los otros es que se puede 
crear llaves de cualquier valor, no como en el caso de los objetos, que son strings 


para hacer un map lo hacemos usando la palabra reservada new y Map 

let nuevoMap = new Map(); de esta manera se crea un map, para insertarle datos tenemos dos manera de hacxerlo 
al momento de crearlos podemos abrir llaves, e inserta rlos datos de esta manera 

let nuevoMap = new Map([

  ['llave', valor]

])
o lo podemos hacer usando el metodo de set. nuevoMap.set('llave', valor);
tambien tenemos otros metodos que podemos usar 

map.get(key) : devuelve el valor de la clave, undefined si la key no existe en el mapa.
map.has(key) : devuelve true si la key existe, false contrario.
map.delete(key) : elimina el valor mediante la clave.
map.clear() : elimina todo del mapa.
map.size : devuelve el recuento de elementos actual. 

con map podemos hacer que una llave sea un objeto, de igual manera podemos crear a partir de un objeto simple, un mao, usando un metodo incorporado llamado 
Object.retries(objeto);

let objeto = {
    Nombre: 'miguel',
    Apellido: 'bravo'
}


let variable = new Map(Object.entries(objeto));    esto nos retorna un map, el cual podemos recorrer con un for of o un forEach 

si queremos volver un map a un objeto simple. tenemos el metodo Object.fromEntries(map)

let objetoNuevo = Object.fromEntries(variable);


un map podemos recorrerlo con un for off o con un foreach 

con un for of tenemos tres metodos.... map.values() lo cual nos retorna el valor, map.keys() esto nos retorna la llave del mismo 
o el entries que nos debuelve todo. pero este es el que se usa por defecto en for of 

let arrayMap = new Map([
      ['nombre', 'miguel'],
      ['apellido', 'bravo'],
      ['documento', 1143144126]
    ])
    
    for (let variable of arrayMap) {
      console.log(variable);
    
    usando el for, si no especificamos que queremos retirnar. este nos retornara el valor como un array, con su llave y el valo en un array.
     a simple vista no hay ninguna diferencia entre usar un for o foreach para recorrer un map. pero el foreach te permite savar la llave y el valor al tiempo 
     podiendo usarlas sin restricion 


con map tambien tenemos un foreach, 

  let map = new Map([
      ['Nombre', 'armando'],
      ['Apellido', 'paredes']
    ])

    let map2 = new Map();
    map2.set('Nombre', 'armando')
        .set('Apellido', 'casas');


    for (let valor1 of map.values()) {
      console.log(valor1);
    }

    map.forEach((key, value, map) => console.log(`${key}: ${value}`)
    )



en js tenemos tambien otro metodo de almacenar valores. este metodo se llama Set
este es un conjunto sin claves. estos son sus principales metodos 

new Set(iterable) : crea el conjunto y, si se proporciona un objeto iterable (generalmente una matriz), copia los valores del mismo en el conjunto.
set.add(value) : agrega un valor, devuelve el conjunto en sí.
set.delete(value) : elimina el valor, devuelve true si el value existía en el momento de la llamada, de lo contrario es false .
set.has(value) : devuelve true si el valor existe en el conjunto; de lo contrario, es false .
set.clear() : elimina todo del conjunto.
set.size : es el recuento de elementos. 

La alternativa a Set podría ser una matriz de usuarios y el código para verificar si hay duplicados en cada inserción usando arr.find . Pero el rendimiento sería mucho peor, porque este método recorre la matriz completa comprobando cada elemento. Set está mucho mejor optimizado internamente para verificaciones de unicidad.

una caracteristica de este metodo para agrupar valores es que no permite valores repetidos y al no usar claves como en el caso de map. se pueden agregar con 
add 

para iterar en set. podemos usar el mismo for of. o el forEach 

al abrirlos en llaves nos permite agregar los valores de una vez
let set = new Set(['naranja', 'mandarina', 'curuba']);

for(let sets of set){
  alert(sets)
}

set.forEach((values,revalue, set) => alert(values));


WeakMap y WeakSet


basicament son lo mismo que map y set. con la diferencia que estos permiten que el recolector de basura del motod de js. elimine los elemento que estan en el 

otra de las diferencias por ejemplo de map y weakmap. es que este ultimo, solo recibe objetos como llaves 

WeakMap no admite la iteración y las keys() métodos keys() , values() , entries() , por lo que no hay forma de obtener todas las claves o valores de él.

WeakMap solo tiene los siguientes métodos:

    weakMap.get(key)
    weakMap.set(key, value)
    weakMap.delete(key)
    weakMap.has(key)


OBJECT.KEY, VALUES, ENTRIES

Para objetos simples, están disponibles los siguientes métodos:

    Object.keys (obj) : devuelve una matriz de claves.
    Object.values ​​(obj) : devuelve una matriz de valores.
    Object.entries (obj) : devuelve una matriz de pares [key, value] . 

Tenga en cuenta las distinciones (en comparación con el mapa, por ejemplo):
	Mapa 	Objeto
Sintaxis de llamada 	map.keys() 	Object.keys(obj) , pero no obj.keys()
Devoluciones 	iterable 	Matriz "real"

La primera diferencia es que tenemos que llamar a Object.keys(obj) y no a obj.keys() .

¿Porque? La razón principal es la flexibilidad. Recuerde, los objetos son una base de todas las estructuras complejas en JavaScript. Por lo tanto, podemos tener un objeto de data propios que implemente su propio método data.values() . Y todavía podemos llamar a Object.values(data) en él.

La segunda diferencia es que los métodos Object.* Devuelven objetos de matriz "reales", no solo un iterable. Eso es principalmente por razones históricas. 


TRANFORMANDO OBJETOS

en js podemos tranformar objetos en un array con un metodo que nos brinda el lenguaje 

si queremos solo las valores del objeto, debemos usar Object.values() esto nos retorna una matriz con estos. 
si queremos solo las llaves podemos usar Object.keys() esto nos retornara las llaves

para poder convertirlos en una matriz de par/valor se usa Object.entries(objeto)

y para retornarlo a un objeto nuevamente. debemos usar Object.fromEntries(); 




ASIGNACION DE DESESTRUCTURACION 

esto lo hacemos con el fin de añadir los valores a una variable. debemos investigarlo mas 


FECHA Y HORA 

js tiene un nuevo objeto incorporado. este se llama fecha 
almacena la fecha y la hora. ademas nos proporciona metodos para la gestion de la misma, lo podemos suar para almacenar la fecha de creacion, modificacion o 
mostrar la fecha actual 

para crearlo usarmos la palabra reservada Date 

let fecha = new Date();

eso nos retorna: Sun Aug 04 2019 20:50:43 GMT-0500 (hora estándar de Colombia)

new Date(datestring)

si lo hacemos de esta manera, agregando un atring como parametro  

let fechaActual = new Date("2019-01-14")
esto nos retorna:  sun Jan 13 2019 19:00:00 GMT-0500 (hora estándar de Colombia)



tambien podemos crear la fecha y hora que nosotros estemos dispuesto lo podemos hacer de la siguiente manera 

let fechaPropia = new Date(year, month, date, hora, minutos, segundos, ms)

el año debe tener 4 digitos
el mes. empieza desde 0(enero) 
date es la fecha, el dia de mes. por defecto es 1
si las horas, minutos, segundos, y ms. si no hay algun valor por defecto seran 0

valor = diaHoy.getFullYear();   me da el año actual con 4 digitos 
valor = diaHoy.getMonth(); me da el mes empezando desde enero como 0 
valor = diaHoy.getDay();  me da el dia de la semana en numero tomando el domingo como 0
let dia =  pruebaFecha.getDate(); esto nos retorna el dia del mes. 
getHours() retornar a hora
getMinutes() retornar los minutos
getSeconds() retornar los segundos 
getms() retornar milisegundos 

estos metodos nos retornan la zona horaria local. so queremos acceder a la zona horaria podemos usar 
UTC +0

getUTCFullYear()

tambien puedes usar set para sobreescribir un valor 

getTimezoneOffset()
esto nos devuelve la difetencia entre la zona horaria local y la UTC en minutos 



SOBREESCRIBIR LA FECHA Y HORA 
podemos usar el metodo set, este funciona para cada uno de los metodos anteriormente vistos 
FullYear, este nos permite modificar el año, el mes y la fech..... pruebaFecha.setFullYear(1994,1,14);  
month: si queremos cambiar el mes y el dia. lo podemos hacer con este metodo
date 
podemos hacer lo mismo con las horas, minutos y segundos 
setHours() estos reciben como parametro, solo numeros 



AUTOCORRECCION
js tiene una caracteristica muy buena con el objeto Date(), los componentes fuera de rango se corrigen automaticamente 

podemos tambien poner los valores en 0. si ponemos por ejemplo.

let pruebaFecha = new Date(); esto nos retorna la fecha actual
 
pruebaFecha.setFullYear(1994,0,1); con esto modificamos la fecha. la volvemos el 1 de febrero de 1994

console.log(pruebaFecha);

pruebaFecha.setDate(0); el 0 no existe en los dias, esto hara que la fecha sea inmediatamente anterior, ya no es 01/01/1994, si no 12/31/1993

console.log(pruebaFecha);



esto nos sirve para tener el valor de la diferencia que hay entre UTC 0 y la zona horaria local 
 alert( new Date().getTimezoneOffset())


 
FECHA A NUMERO 

Cuando un objeto Date se convierte en número, se convierte en la marca de tiempo igual que date.getTime()

El efecto secundario importante: las fechas se pueden restar, el resultado es su diferencia en ms.

Eso se puede usar para mediciones de tiempo



Date.now ()

Si solo queremos medir el tiempo, no necesitamos el objeto Date .

Hay un método especial Date.now() que devuelve la marca de tiempo actual.

Es semánticamente equivalente a new Date().getTime() , pero no crea un objeto Date intermedio. Por lo tanto, es más rápido y no ejerce presión sobre la recolección de basura.

Se usa principalmente por conveniencia o cuando el rendimiento es importante, como en juegos en JavaScript u otras aplicaciones especializadas. 


let varaible = Date.now(). esto lo podemos usar si queremos ver el tiempo que tarda cierta determinada parte del codigo sin crear un objeto 



El método Date.parse (str) puede leer una fecha de una cadena.

El formato de cadena debe ser: YYYY-MM-DDTHH:mm:ss.sssZ , donde:

    YYYY-MM-DD : es la fecha: año-mes-día.
    El carácter "T" se utiliza como delimitador.
    HH:mm:ss.sss : es el tiempo: horas, minutos, segundos y milisegundos.
    La parte opcional 'Z' denota la zona horaria en el formato +-hh:mm . Una sola letra Z que significaría UTC + 0. 

También son posibles variantes más cortas, como YYYY-MM-DD o YYYY-MM o incluso YYYY .

La llamada a Date.parse(str) analiza la cadena en el formato dado y devuelve la marca de tiempo (número de milisegundos desde el 1 de enero de 1970 UTC + 0). Si el formato no es válido, devuelve NaN

ejemlo de ua funcion que retorna los dias 

function diaAntes(arg, days) {
    
    arg.setDate(arg.getDate() - days);


    return arg.getDate();
}
 
console.log(
 diaAntes(new Date(), 5));





METODOS PARA TRABAJAR CON JSON EN JS 

JSON.stringify para convertir objetos en JSON.
JSON.parse para convertir JSON nuevamente en un objeto. 

JSON.stringify se puede aplicar a primitivas.

JSON admite los siguientes tipos de datos:

    Objetos { ... }
    Arreglos [ ... ]
    Primitivas:
        instrumentos de cuerda,
        números,
        valores booleanos true/false ,
        null 


JSON es una especificación de lenguaje independiente de datos, por lo que JSON.stringify omite algunas propiedades de objeto específicas de JSON.stringify .

A saber:

    Propiedades de la función (métodos).
    Propiedades simbólicas.
    Propiedades que almacenan undefined . 

*/ 










//DOM EN JS (DOCUMENT OBJECT MODEL)
//en js los contenedores pare se les conoce como nodos 
//el contenedor principal es el padre de los hijos incluidos 

//ejemplos de la consola en js
//para acceder al documentos, debes escribir document 
//para seleccionar un elemento desde la consola, debemos usar el documento 
//pero el que esta en minusculas, document.head o document.body

//de esta manera solo pdemos acceder a las etiquetas padre 
//si queremos seleccionar algo mas especifico como el header debemos escribir 
//document.queryselector('ecribimos la etiqueta que queremos seleccionar')
//si es un id, lo hacemos de la misma manera. solo que usamos un #
//para seleccionar una clase debemos ponerle el .
//pero, esta no es muy soportada ya que es nueva
//podemos usar getelementbyid, la sintaxis es la misma 
//solo que al usar este selector, no es necesario poner #


///revisar que el contenido esta listo 

//(function() {
//  'use strict';
//  document.addEventListener('DOMContentLoaded', function() {
    //todo el codigo de js lo pondremos aqui
  
    
    
//  });
//})();


//SELECCIONANDO ELEMENTOS CON GETELEMENTBYID 
//con esta funcion, corroboramos que todo este funcionando de una manera adecuada

//con logo.hasAttribute('class'), podemos ver si esta variable tiene alguna clase 
//en eset caso si
//con logo.getAttribute('class') podemos saber el nombre de la clase que tienre
//logo.setAttribute('class', 'logo1') con este selector, podemos cambiar el nombre de la clase
//este recibe dos parametros. el elemeto que quierres cambiar y el valor que este recibe
//elem.removeAttribute(name) – removes the attribute. 





//SELECCIONANDO ELEMENTOS CON GETELEMENTBYCLAS
//let navegacion = document.getElementsByClassName('navegacion');
//console.log(navegacion[0]); en este caso hay dos etiquetas que tiene la clase navegacion
//la consola lo devuelve como un array, para sleccionarl, seleccionamos el indice





//GETELEMENTBYTAG
//de esta formna seleccionamos la etiqueta 


//let enlaces = document.getElementsByTagName('a');

//console.log(enlaces);


//for (let index = 0; index < enlaces.length; index++) {
//  enlaces[index].setAttribute('target', 'blank')      
//}




//let  enlaceSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    

//for (let i = 0; i < enlaceSidebar.length; i++) {
    
 // enlaceSidebar[i].setAttribute('href','https://www.google.com');
   
//}



//QUERYSELECTOR
//este selector es similar a los otros, la diferencia es obvio la sintaxis
//con querySelector, usamos una sintaxis similar a la de css, para seleccionar un id debemos uusar #
//y para seleccionar una clase, debemos seleccionar .
//para seleccionar una etiqueta indicamos el nombre de la etiqueta 

//si teneos varias etiquetas por ejemplo a. al usar queryslector solo selecciona una, 
//si queremos sleccionarlas todas debemos selccionar querySelectorAll


/* 
MODIFICANDO EL DOCUMENTO...

con js podemos crear etiquetas, usando la sintaxis elemento.createElement  o podemos crear texto con createTextNode(texto)

tambien tenemos una madera adicional de insertar en js usando innerHtml

a este tambien podemos agregarle clases. usando. elemento.className = 'nombre clase';
 



de esta forma creamos contenido html pero no lo insertamos. para insertar el contenido. podemos usar varias maneras 
document.body.appendChild o parentElement.appendChild

de igual forma tenemos maneras mas flexibles como 

nodo.append(nodo o string) añade los nodos o string al  final 
nodo.Prepend(nodo o string) añade los nodos o string al inicio
nodo.before(nodo o string) añade los nodos o string al  antes del nodo  
nodo.after(nodo o string) añade los nodos o string al  depues del nodo


insertAdjacentHTML inserta una linea de codigo html, consta de dos partes 

elemento.insertADjacentHTML('donde se montara, 'el elemento a montar')
beforebegin: indemiatamente antes del elemento (normalmente es un id)
afterbegin inserta el html al principio
beforeend inserta el html al final del elemento 
afterend inserta el html despues del elemento
se segundo parametro se inserta como una linea de html 



TAMAÑO DEL ELEMENTO Y DESPLASAMIENTO

en js tenemos muchas herramienbtas para calcular el ancho, el alto y alguna otra caracteristica de gemometria 

con element.offsetParent. podemos ver quien es el eloemento que contiene la etiqueta
con elment.offsetLetf la distancia hacia el borde desde la parte izquierda 
element.offsetTop, muestra la distancia que hay desde el elemtno hasta su esquina superior 
con element.offsetWidth, podemos calcular el ancho del elemento.eso varia dependiendo del dispositivo donde se vea
lanzara un numero, esa es la cantidad de pixeles

con element.offsetHeight podemos calcular el alto del elemento incluyendo los bordes que podria tener 


clientHeight este metodo arroja el valor del tamaño interno del elemento si tuviera bordes

con scrollWidth podemos ver el ancho total del elemento, asi tenga partes ocultas 

scrollHeight lo usamos para medir el alto total del elemento incluida las plartes ocultas

scrollLeft es lo que usamos para medir eñl amcho oculto del elemento

scrollTop, es el alto de la perte oculta del elemento
estos pueden ser modificables 8 


para medir el ancho y el alto de la pantalla utilizable debemops usar document.documentElement.clientHeight
para saber el ancho de la pagina usaos document.documentElement.clientWidth

pdemos mover el scroll con document.documentElement.scrollTop pero algunos navegadores como 
como safari pueden arrojar un error

para evitar eso debemos usar window.pageXOffset O window.pageYOffset


DESPLAZAMIENTO DE LA PAGINA 

como vimos anteriormente, en algunpos casos no podemos usar document.documentElement.scrolltopp
ya que algunos navegadores no funciuonan de una manera adecuada con el 
sin embargo javascript tiene una olucion universal. con window.scrollBy(x,y) o 
window.scrollTo(page x,page y)


 el metodo scrollBy(x,y) desplaza la pagina en relacion con su posicion a
 actual , por ejemplo scrollBy(0,10) desplaza la pagina 10px para abajo 


el metodo scrollTo(pagex , page y) desplaza la pagina a las cordenadas absolutas 
de modo que la esquina superoor izquierda de la parte visible tiene  cordenadas
relativas a la esquina superior izquierda del documento 

Para completar, vamos a cubrir un método más: elem.scrollIntoView (arriba) .

La llamada a elem.scrollIntoView(top) desplaza la página para hacer que elem visible. Tiene un argumento:

    si top=true (ese es el valor predeterminado), la página se desplazará para que aparezca elem en la parte superior de la ventana. El borde superior del elemento está alineado con la parte superior de la ventana.
    si top=false , la página se desplaza para que aparezca elem en la parte inferior. El borde inferior del elemento está alineado con la parte inferior de la ventana. 

    let footer = document.querySelector('footer')

   footer.scrollIntoView(false);

   de esta manera nos mostrara la parte final del footer 



   COORDENADAS

   con javascript tenemos dos sistemas para medir las cordenadas, 

   1. relativo a la ventana. superior izquierdo. 
   2. relativo al documento, superiro izquierdo 
   es muy importante aber la diferencia 



   coordenadas de la ventana getBoundingClientRect 

   las coordenadas de la ventana empiezan desde la parte superior izquierda 
   de la misma 

   el metodo element.getBoundingClientRect() devulve las cordenadas 
   de la ventana para element como un obejeto con propiedades

   element.getBoundingClientRect().top: coordenadas Y para el borde superior del elemento 
   element.getBoundingClientRect().left: coordenada X para el borde izquierdo del elemento 
   element.getBoundingClientRect().rigth: cordenada X para el borde derecho del elemento
   element.getBoundingClientRect().botton: cordenada Y para el borde inferior



   elementFromPoint(x,y)

   la llamada a document.elemetFromPoint(x, y) se devuelve el elemento mas anidado 
   en las cordenadas de la ventana 

  la sintaxis es let element = document.elementFromPoint(X, Y)
   
  let centerX = document.documentElement.clientWidth / 2; let centerY = document.documentElement.clientHeight / 2; let elem = document.elementFromPoint(centerX, centerY); elem.style.background = "red"; alert(elem.tagName); 


  Cualquier punto en la página tiene coordenadas:

    Relativo a la ventana - elem.getBoundingClientRect() .
    En relación con el documento - elem.getBoundingClientRect() más el desplazamiento de la página actual. 

    Las coordenadas de la ventana son excelentes para usar con la position:fixed , y las coordenadas del documento funcionan bien con la position:absolute .

Ambos sistemas de coordenadas tienen su "pro" y "contra", hay veces que necesitamos uno u otro, al igual que la position CSS absolute y fixed . 



Introducción a los eventos del navegador.

Un evento es una señal de que algo ha sucedido. Todos los nodos DOM generan tales señales (pero los eventos no están limitados a DOM).

Aquí hay una lista de los eventos DOM más útiles, solo para echar un vistazo a:

Eventos del ratón:
 
    click : cuando el mouse hace clic en un elemento (los dispositivos de pantalla táctil lo generan con un toque).
    contextmenu : cuando el mouse hace clic con el botón derecho en un elemento.
    mouseover / mouseout - cuando el cursor del mouse se acerca / deja un elemento.
    mousedown / mouseup : cuando se presiona / suelta el botón del mouse sobre un elemento.
    mousemove - cuando se mueve el ratón. 

Eventos de elemento de formulario

    submit - cuando el visitante envía un <form> .
    focus : cuando el visitante se enfoca en un elemento, por ejemplo, en un <input> . 

Eventos del teclado:

    keydown y keyup - cuando el visitante presiona y luego suelta el botón. 

Documentar eventos:

    DOMContentLoaded : cuando el HTML se carga y procesa, DOM se DOMContentLoaded completamente. 

Eventos CSS:

    transitionend - cuando una animación CSS termina. 



    Manejadores de eventos

Para reaccionar ante eventos, podemos asignar un controlador , una función que se ejecuta en caso de un evento.

Los manejadores son una forma de ejecutar el código JavaScript en caso de acciones del usuario.

Hay varias formas de asignar un controlador. Vamos a verlos, empezando por el más sencillo

uno de los manejadores de ewventos puede ser un atributo de html 

se puede configurar de la siguiente manera 

on<evento> 

onCLick para un input 

<input value="Click me" onclick="alert('Click!')" type="button"> 

esto hara que el boton alk hacer click, lance un mensaje 
 debemos tener en cuenta que como usamos un atributo con comillas dobles exteriores
 el interior debe ser con comillas sencillas. pero de igual forma no es recoentable hacerlo de esta manera

 podemos hacer que el atributo con click


Propiedad DOM

Podemos asignar un controlador utilizando una propiedad DOM on<event> .

Por ejemplo, elem.onclick : 
 <input id="elem" type="button" value="Click me"> <script> elem.onclick = function() { alert('Thank you'); }; </script> 


 Como solo hay una propiedad onclick , no podemos asignar más de un controlador de eventos.

En el siguiente ejemplo, al agregar un controlador con JavaScript se sobrescribe el controlador existente:  

si asignamos mas de una poropiedad a un enveno, este ejecutara el que se encuentra en el html 

tambien podemos asignar una funcion y6a  creada al evento 


Para eliminar un controlador, asigne elem.onclick = null .


el valor de this dentro del controlador es el elemento. el que tiene el controlador en ekl 
en el siguiente codigo el button muestra su contenido utilizando 
this.innerHTML  
<button onclick="alert(this.innerHTML)">Click me</button> 
 
este ejemplo mostrata el valor que esta dentro de la etiqueta 



ERRORES POSIBLES 

cuando queremos asignar una uncion a un evento de un elemto DOM
debemos escribirla sin los () 

elemento.onclick = sayHy;




cuando lo asginamos en una etiqueta de html en ese caso si debemos agregar los parentecis 
<input type="button" id="button" onclick="sayThanks()"> 



usamos funviones no cadenas.
la asignacion element.onclick = "alert(1)": tambien funcionaria, Funciona por razones de 
compatibilidad pero no es recomendable 

no use setAttribute para los manejadores 




addEventListener

el problema fundamental de las formas antes mencionadas de asignar manejadores, no podemos asignar varios manejadores a u
evento 

por ejemplo una parte de nuestro codigo quiere resaltar un boton al hacer clic 
y otra quiere mostrar un mensaje 
nos gutsaria asignar dos controladores de eventos para eso, pero una nueva
propiedad de DOM sobreescribira la existente 

Los desarrolladores de estándares web entendieron eso hace mucho tiempo y sugirieron una forma alternativa de administrar los manejadores usando métodos especiales addEventListener y removeEventListener . Están libres de tal problema.

La sintaxis para agregar un manejador: 

 element.addEventListener(event, handler[, options]); 


  event
    Nombre del evento, por ejemplo, "click" . 
handler
    La función manejadora. 
options
    Un objeto opcional adicional con propiedades:

        once : si es true , entonces el oyente se elimina automáticamente después de que se dispare.
        capture : la fase en la que se debe manejar el evento, que se tratará más adelante en el capítulo Burbujas y captura . Por razones históricas, las options también pueden ser false/true , que es lo mismo que {capture: false/true} .
        passive : si es true , entonces el controlador no evitará el preventDefault() , lo cubriremos más adelante en las acciones predeterminadas del navegador . 


Para eliminar el controlador, use removeEventListener :

element.removeEventListener(event, handler[, options]); 


function handler() { alert( 'Thanks!' ); } input.addEventListener("click", handler); // .... input.removeEventListener("click", handler); 

Tenga en cuenta que si no almacenamos la función en una variable, no podemos eliminarla. No hay manera de "leer" los controladores asignados por addEventListener .

 let footer = document.querySelector('footer');

 si queremos agregarle un EventListener a una variable que hayamos seleccionado con querySelector, febemos agregarla en un if () esto hara que 
 que retorne un objeto, el if hara que regrese true, si no existe retornara un objeto vacio 

    let rosa = () => footer.style.backgroundColor = '#db008d';


    footer.onmouseover = () => footer.style.backgroundColor = 'red';


    footer.addEventListener('mouseout', rosa); 


    objeto de evento 

  cuando ocurre unb evento el navegador crea un objeto de evento 
  coloca detalles en el y lo pasa como un argumento al controlador 

  algunas propiedades del objero de event 

  event.type : el tipo de evento 
  event.currentTarget: elemento que manejo el evento, es exactamente lo mismo que this
  a menos que el controlador sea una funcion de flecha 


   event.clientX / event.clientY
    Coordenadas relativas a la ventana del cursor, para eventos del mouse. 


    BURBUJEANDO Y CAPTURANDO 

    el principio burbujeante es simple, basicamente indica que  cuando 
    ocurre un evento en un eleme3nto, el primero ejecuta los manejkadores en el 
    lugo en su padre y asi sucesivamente 

    quiere decir que si un evento se ejecuta en un div que se encuentra dentro de un form o cualquier otra etiqeuta 
    primero se ejecutara el deldiv, luego se ejecutara el del form 

    el proceso se llama burbujeo porque los eventos burbujean desde el elemtno interno hasta los padres como una burbuja en el agua 

    hay evnetos que no hacen burbuja, como por ejemplo focus. 


    EVENT.TARGET

    un controlado en un elemento padre siempre puede obtener los detalles sobre donde ocurrio realmente. 

    esto quiere decir que si se activa el evento en un elemento hijo el padre, podra saber donde ocurrio

    el elemento mas profundamente anidado que causo el evento se llama un elemento de destino, accesible como event.target 

    tenga en cuenta las diferencias de this (= envetn.target)

    event.target es el elemento objetivo que inicio el evento, no cambia a traves del proceso de propagacion.

    this. es el elemento actual, el que tiene un controlador actualmente en ejecucion en el 

PARANDO DE BURBUJEAR

un evento burbujeante va desde el objetivo hacia arriba, normalmente 
va hacia arriba hasta html y luego a document y algunos eventos llea la ventada, llamando tosos los controladores en la ruta 


pero cualquier manejador puede decidir que el evento se ha procesado completamente y detener el burbujeo 

el metodo para ellos es event.stopPopagation(). 

en un ejemplo aqui estamos haciendo que el body, cuando el usuario de click lance un mensaje, pero activamos un punto que no lo realice 

document.body.onclick = () => alert('hola');

<button id="boton" onclick="event.stopPropagation()" >Enviar</button>

en este caso asignamos el metodo del evento en la etiqueta de html, en ese caso ers necesario agregar ()


o lo podemos hacer de esta forma 


  let boton = document.querySelector('#boton')

    boton.onclick = () => event.stopPropagation()


    aunque este metodo solo detiene un manejador del elemento 
    en caso de tener mas, los otros se seguiran ejecutando 
    para detener la propagacion y evitar que otros controladores se ejecuten en el elemento actual, hay un metodo llamado 
    event.stopImmediatePropagation()




    CAPTURANDO 


  hay otra







  QUE ES JQUERY

  una coleccion de funciones, se pueden hgacer muchas cosas
  es una libreria de js, puedes usar codigo nativo y funciona totalmente 
  funciona sobre el DOM 


  el selector universal de jquery es el signo de dolar $ 

  con jquery no hacemos el comun document.addEventListener('DOMContentLoaded', funcion)

  tenemos otra manera de hacerlo, usamos el selector universal $(document).ready(funcion(){

  });

  o tambien podemos ver jQuery en vez del signo de dolar $ 

  o podememos usar $(funtion(){

  });  como una funcion iife



  si querenmos seleccionar um elemento en jquery lo podemos hacer de la siguiente manera 
  $('#id'); lo usamos de la manera similar a querySelectro p
  pero sin crear una variable, si queremos seleccionar un 
  elemento hijo de un contenedor, lo hacemos de la misma manera que en css3


  clonar contenido con jquery 

  si queremos asignar un metodo en jquery, debemos darle . siguido escribimos el metodo y le abrimos parentesis
  $('#id').clone(); de esta manera se hace 

  para insertarlo en el documento, lo hacemos de la siguiste manera


  let copia = $('#idcopia).clone();

  esta variable contiene la copia de ese selector

  $('#idLugar').append(copia) de esta manera lo enviamos al final de idlugar
  con preppend lo enviamos al principio 
  
  tambien podemos hacerlo de esta manera 
  $(copia).appendTo('#idLugar'); eso enviara la variable al final del lugar  


  EVENTOS EN JQUERY
  para hacer un evento en jquery no es necesario crear una variable para asignarle un evento 

  $('.logo').on('click', function() {
        console.log('hiciste click');
        
    })
  borrar y mostrar contenido con jquery  

  para usar this no se necesita usar comillas

  $('.logo').on('mouseover', function() {
        $(this).hide();
    })


    agregar o quitar clases con jquery 

    para agregar clases se debe hacer de la siguite manera 

    $('#id').addCLass(nombreclase);

    para quitarlas es necesario usar la misma sentencia y en vez de agregar addCLass 
    usamos removeClass

    al usar jquery no podemos hacer esto $(this).style.backgroundColor ="red"

    navegando atravez del DOM con jQuery 

    si estamos en el elemento padre. podemos seleccionar el metodo 

    .Children()  

    podemos seleccionar un elemento $('nav:first') esto los selecciona el primero. 
    al agregarle la funcion next(), nos podemos mover al siguiente elemento 


    obteniendo texto u actualizandolo con jquery 

    podemos modificar el texto de un elemento de la siguiente manera 

    $('.sidebar ul li:first').text();
      
   esto es lo que retorna "Entrada 1"

   si agregamos texto dentro del parentesis de text();

   tambien poidemos agregarle codigo html con html()

   $('.sidebar ul li:first').html('<h2>hola</h2>'); aca estamos seleccionando 
   el primer elemento del ul y si elemento interno. y lo estamos insertando texto html


   seleccionando y cambiando atributos en jquery 

   en ja para ver si una etiqueta tiene un atributo podemos usar 
   getAttribute o hasAttribute, 
   con jquery podemos hacerlo de la siguiente manera 

   $('#id').attr('href'); lo hariamos de esta manera. estariamos llamando un metoido 
   llamado attr en el cual dentro ingresaremos el atributo que queremos ver 
   en caso que quiera modificar este atributo, le agrego una coma
    $('#id').attr('href', 'https://www.google.com');


    cambiar el css de un elemento  se debe hacer de la siguente manera 

    $('.logo').css({'width': '100px'}) es muy importante que el nombre de el atributo y el valor
     esten entre comillas simples. si no, esto nos arroja un error. si queremos agregar un nuevo valor debemos hacer lo mismo 
     debemos  agregar una coma
     hay un evento llamado mouseenter, esto ocasiona que al entrar el mouse se ejecute el evento 



     EVENTOS CON JQUERY

     con jquery podemos crear animaciones uy facilmente 

     la sintaxis es la siguiente 

      $('.logo img').on('click', function() {
        $(this).animate({'left': '+=50px'}, 1000)
    })

    podemos agregar lo que queremos que haga en forma de css, ademas de eso. tambien podemos agregarle la duracion que queramos que tenga, 
    el suavizado, que es una cadena que indica la funcion de aceleracion 
    aparte podemos llamar una funcion aparte 

    function agrandarImagem() {
    $(this).animate({'width':'+=5px'},1000, function() {
        $('main article img').animate({'width':'-=5px'})
    })
  }

  de esta manera hacemos que al hacer hover sobre la imagen, esta crezca 5px mas de su tamaño, tambien agregamos a la animacion, una funcion que haga que esta 
  retorne a su tamaño normal  

 AGREGAR UNA CLASE A UN BOTON DE NAVEGACION EN UNA PAGINA SELECCIONADA 

  $('body.conferencia .barra-navegacion a:contains("Conferencia")').addClass('menu-seleccionado');

  de esta manera le agregamos una clase a un boton del menu que haya sido seleccionado en la pagina 


  DETECTANDO CUANDO UN ELEMENTO ES VISIBLE PARA AGREGAR FUNCIONALIDAD 
  
  esto lo hacemos con el fin de identificiar cuando un elemento esta a la vista y asi poder presentarlo y que se realice la animacion 
  podemos usar plugin de jquery llamado waypoints


   let numero4 = new Waypoint({

        element: $('#numeroCuatro'),
        handler: function (){
            $('#numeroCuatro').animateNumber({
                number: 9
            },
                {
                    easing: 'swing',
                    duration: 1200
                });
        },
        offset: '80%'

      })

este es un ejemplo de lo que podemos hacer con este plugin. en este caso activamos la animacion de los numeros al 80% de la pantalla 


  slideup y slidedown

   $('main article img').on('mouseover', agrandarImagem);

  function agrandarImagem() {
    $(this).slideUp(1000)
  }

  slideup hace que tenga un efecto en el cual se desaparece la imagen con un slide hacia arriba 
  slidedown hace lo contrario, este retorna la iamgen 

  tenemos otra forma de llamar eventos en jquery, podemos hacerlos con $('#id').click(aqui va la funcion)
  o de esta manera $('main article img').mouseout() en este caso capturamos el evento de mouseout 

  $('main article img').on('mouseover', agrandarImagem);

  function agrandarImagem() {
    $(this).slideUp(1000)
  }

  $('.logo img').click(salir)

  function salir() {
      $('main article img').slideDown(1000)
  }




  l afuncion load() me permitira cargar varios archivos html con jquery 



  recorrer un arreglo con jquery 


  jquery provee una forma de recorrer un arreglo 

  let array = [1,2,3,4,5,6,78,9];

  $.each(array, function(i, v) {
      console.log(v);
      
  })

  cuando se va a decalarar un each, debe hacerse con $.each() dentro del parentesis
  debe ir el nombre del arreglo u objeto 


function objeto(nombre = 'no definido', edad = "no definida") {
      this.name = nombre;
      this.age = edad; 
  }

  let objeto1 = new objeto('miguel angel')


  $.each(objeto1, function(i, v) {
      console.log(i);
      
  })


  en este caso estamos recorriendo el arreglo. el index es name y el valor miguel angel 
  podemos llamar el each solo con el indice o el valor, podemos usar cualquiera 


$('.nuestros-servicios div:first').show();

$('#bViajes').addClass('clase-seleccion');

//cuando queramos darle interactividad a un menu de navegacion. es necesario 
//seleccionar todos los elementos del mismo ya que no sabremos cual sera el que el usuario estara 
//presionando

$('.contenedor-servicios nav a').on('click', mostrarContenido);

function mostrarContenido() {
    let enlaces = $(this).attr('href');
    $('.nuestros-servicios div').hide();
    $('.contenedor-servicios nav a').removeClass('clase-seleccion');
    $(this).addClass('clase-seleccion')
    $(enlaces).show();
//ya que habiamos tomado el href en esta variable. nos mostrara el elemento que queremos ver
//aqui el href lo que me retorna es el div que contiene el id 
//para quitarle el color debemos quitarselo a cualquiera que lo tenga. por eso seleccionamos
//todas.luego le agregamos la clase a la etiqueta especifica que el usuario haya tomado

return false;

}



 $('#talleres').show();

    $('.menu-progama a').on('click', mostrarEventos);


    function mostrarEventos() {
    let enlaces = $(this).attr('href');
       $('.ocultar').hide();
       //siempre es recomendable usar una clase individual que tengan 
       //los elementos
       $(enlaces).show();

        return false;
    }

  en este ejemplo que esta arriba, podemos notar algo. si dentro de lo que queremos ocultar hay otros divs, y hacemos esto $('.clase div').hide();
  esto nos ocultara todos los divs que hayan dentro de este. por lo cual es recomendable usar una clase individual que tenga el dvi que queremos ocultar sin importar 
  que hayan otros dentro 


  PLUGINS EN JQUERY 

  jquery tiene una gran cantidad de plugins, para todo, se consiguen en el sitio oficial de jquery 
  o en github


  para usar alguno debemos incluirlo en el proyecto ahora usaremos uno llamado animateNumber()
  este revice varios parametros animateNumber({number: 6, time: 1200 })

  para seleccionar un grupo de elementos podemos hacerlo con la sintaxis de css .
  La pseudo-clase :nth-child() de CSS coincide con uno o más elementos en función de su posición entre un grupo de hermanos.
  $('#numeroUno').animateNumber({
        number: 6
    },
        {
            easing: 'swing',
            duration: 1200
        });
        este es un ejemplo de dicho plugin


  ahora estaremos usando uno llamado final contdown, este plugin nos ayudara con la cuenta regresiva que necesitamos
  debemos seleccionar el contenedor principal, seguido a eso, debemos seleccionar la menra en la que queremos que se muestre el contenido
  
  $('.contenido-regresivo').countdown('2019/10/10 10:00:00', function (event) {
        $('#dias').html(event.strftime('%D')),
        $('#horas').html(event.strftime('%H')),
        $('#minutos').html(event.strftime('%M')),
        $('#segundos').html(event.strftime('%S'));
    })

  por efectos del ejercicio, se muestra individualment 



  para usar puglins en letras podemos usar lettering js, esto inicia un metodo. lo que hace el metodo es dividir las letras con span. con css

  la ventaja de colorbox es que nos permite agregar codigo html , de esta manera podemos agregarle una descripcion a la foto 


  plugins para galerias de fotos  lightbox, colorbox o fancybox. light no necesita inicializar un metodo. pero si debemos descargar unos archivos
  para inicializar el plugin, debemos tener dos imagenes, una que seria la miniatura y otra, la imagen real., debemos agregarle un atributo a 
  la etiqueta a que debemos usar 
  
  <div class="contenedor-imagen">
            <a href="img/galeria/06.jpg" data-lightbox="galeria-conferencia" ><img src="img/thumbs/06.jpg" alt="imagen1"></a>
        </div>

        de este modo

  tambien podemos cambiar las opciones por defecto, de esta manera 

  lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'resizeDuration' : 200 , 
        'wrapAround' : true,
        'disableScrolling': true 

    })



    detectar el scroll de un sitio con jquery.

    para optener el scroll de una ventana podemos usar windows.pageYOffset, el de un elemento podemos usarlo con  element.

     let barra = document.querySelector('.barra');

    let scrollBarra = barra.getBoundingClientRect().top;

    console.log(scrollBarra);


    de esta manera me arroja el scroll pero no es constante porque no usamos el evento de scroll 
    podemos usar el evento de scroll 

    podemos usar jquery y conbinarlo con js 

     $(window).scroll(function () {

        let scrollD = window.pageYOffset;
        let altoVentana = document.documentElement.clientHeight;
        let altoBarra = $('.barra').innerHeight();
        
        if (scrollD > altoVentana) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': altoBarra + 'px'})
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'})
        }

        //de esta manera le agregamos la clase fixed a la barra de navegacion, pero tenemos un problema, cuando se pone fixed la barra
        //el tamaño de la misma, se quita del documento, por eso es necesario agregar margen al documento cuando esto ocurre

    })

    como en este ejemolo. de esta manera hacmos que la barra de navegacion se quede estatica al hacer scroll


    para ocultar y aparecer el menu de hamburquesa podemos uar slideToogle(); 
    este hara que si tiene un estado de up. el siguiente sera down 

     $('.menu-movil').click(function() {
       let barraNavegacion = document.querySelector('.barra-navegacion');
        
      if ($('.barra-navegacion').is(":hidden")) {
          $('.barra-navegacion').slideDown(1200)
      } else {
        $('.barra-navegacion').slideUp(1200)
      } 
   })
     
   con is(':hidden) podemos validar si el elemento esta oculto o no. en este caso. al estar el menu oculto, desplegamos el menu, luego si no esta oculto
   lo recogemos

   podemos agregarle mas funcionalidad a nuestro sitio en la parte de las reservas, obligando al usuario a que solo puede pagar si ha dado previamente calcular 

   botonRegistro.disabled = false; de esta manera hacemos que se habilite 

*/















































































/*PHP 

php es un lenguaaje de programacion mayormente usado para el backend, necesita tener un interprete del lado del servidor 
si no este no se ejecutara. php se puede crear en un documento aparte del html. o se puede crear ahi mismo con el documento 
para que se ejecute debe crearse con la extension php 

para ejecutar el progrma mas sencillo. podemos escribir echo 'hola mundo ', al parecer se puede en comillas simples e igual en comillas dobles 




VARIABLES EN PHP
las variables en php empiezan con un signo de dolar $.  $nombreVariable = 'hola';
$nombreVariable2 = 20;

las variables no pueden empezar con con numero, pero si pueden empezar con _ o un numero 
no puedes usar el - medio ya que esto arrojara un error. estas tambien puede tener html en su interior, debe estar dentro de ''


echo 'hola mundo ';

$holaMundo = '<h1> hola mundo <h1>';

echo $holaMundo;



las variables en php como en js pueden almacenar cualquier dato, podemos tener una mezcla de string y operaciones matematicas 

$variableUno = '10';
$variableDos  = '30';

$resultado = 'Resultado: ' . ($variableDos + $variableUno);  
              
echo $resultado;

el lenguaje es debilmente tipado por eoso puede pasar esto. php difiere entrer mayusculas y minisculas. 

si queremos asignarle una variable a otra en php debemos ateponer el simbolo &, si hacemos esto. las dos variables comparte el espacio en memoria

lo que ocsiona, si asignamos la variable $A a la variable $B

$A = &%B; 
si modificamos a, tambien se modifica b. aunque esta practica no es muy comun 


FORZADO DE UNA VARIABLE

cambio de una variable o dato
cambiar el valor de una variable no siempre es aconsejable ya que posiblemente lleguemos a un punto 
en el que no sabremos que dato tiene y podra ocasionar un error al momento de ejecutarse 
para evitar eso, eb php podemos forzar una variable a un tipo en contreto 

esto lo hacemos con la funcion setType(),  la sintaxis es la siguiente 

setType($nombreVariable, 'nuevo tipo de dato');


o podemos usar el casteo de variables como ocurre en java 

$variable = '12';

$variable = (int) $variable; 


en php tenemos igual quwe en cualquier otro lenguaje de programacion tiene variables globales y locales. pero a diferencia de js 
que podemos acceder a las variables locales desde cualquier funcion en php no se puede hacer ya que nos arrojaria que no tiene acceso a su valor 

para poder acceder al valor debemos especificar que esta es una variable global 

$GLOBALS es un array asociativo que guarda una referencia a una varable crada de manera global
cuya llave es el nombre de la variable y el valor es lo que contiene esta se pueden crear las variables 

$variable1 = 1;
$variable2 = 2; 

acceder a las variables usando $GLOBALS lo hacemos de esta manera  

funtion (){
  $GLOBALS["variable1"]; 
  $GLOBALS["variable2"];
}


tambien podemos usar la declaracion de uso de variable 

funtion(){
  global $varaible1, $variable2; 
};

cualquier alteracion que realicemos dentro de la funcion, quedara guardada en la variable

VARIABLES DE SISTEMA 

php al ser un lenguaje que se ejecuta en el servidor, nos suministra una serie de variables que pueden 
llegar a ser muy utiles en produccion estas son denominadas variavbles del sistema

la mayoria de variables del sistema las podemos acceder con el array $_SERVER

$_SERVER["HTTP_USER_AGENT"] Nos informa principalmente sobre el sistema
operativo y tipo y versión de navegador utilizado por el internauta. Su principal utilidad
radica en que, a partir de esta información, podemos redireccionar nuestros usuarios
hacia páginas optimizadas para su navegador o realizar cualquier otro tipo de acción en
el contexto de un navegador determinado.

$idioma=substr($HTTP_ACCEPT_LANGUAGE,0,2); 

con este metodo substr() hacemos que nos traiga solo las dos primeras letras 

$_SERVER["HTTP_ACCEPT_LANGUAGE"] Nos devuelve la o las abreviaciones de la
lengua considerada como principal por el navegador. Esta lengua o lenguas principales
pueden ser elegidas en el menú de opciones del navegador. Esta variable resulta
también extremadamente útil para enviar al internauta a las páginas escritas en su
lengua, si es que existen.

$_SERVER["HTTP_REFERER"] Nos indica la URL desde la cual el internauta ha
tenido acceso a la página. Muy interesante para generar botones de "Atrás" dinámicos o
para crear nuestros propios sistemas de estadísticas de visitas.

$_SERVER["PHP_SELF"] Nos devuelve una cadena con la URL del script que está
siendo ejecutado. Muy interesante para crear botones para recargar la página.
$_SERVER["HTTP_GET_VARS"] Se trata de un array que almacena los nombres y
contenidos de las variables enviadas al script por URL o por formularios GET.

$_SERVER["HTTP_POST_VARS"] Se trata de un array que almacena los nombres y
contenidos de las variables enviadas al script por medio de un formulario POST.

$_SERVER["HTTP_COOKIE_VARS"] Se trata de un array que almacena los nombres y
contenidos de las cookies. Veremos qué son más adelante.

$_SERVER["PHP_AUTH_USER"] Almacena la variable usuario cuando se efectúa la
entrada a páginas de acceso restringido. Combinado con
$_SERVER["PHP_AUTH_PW"] resulta ideal para controlar el acceso a las páginas
internas del sitio.

$_SERVER["PHP_AUTH_PW"] Almacena la variable password cuando se efectúa la
entrada a páginas de acceso restringido. Combinado con
$_SERVER["PHP_AUTH_USER"] resulta ideal para controlar el acceso a las páginas
internas del sitio.

$_SERVER["REMOTE_ADDR"] Muestra la dirección IP del visitante.
$_SERVER["DOCUMENT_ROOT"] Nos devuelve el path físico en el que se encuentra
alojada la página en el servidor.

$_SERVER["PHPSESSID"] Guarda el identificador de sesión del usuario. Veremos más
adelante en qué consisten las sesiones.


CONCATENAR UNAS CADENAS EN PHP 

para concatenar en js lo hacemos con +, con php lo hacemos con un punto . , de la siguiente manera 
$variableuno . $variableDos; si queremos tener espacio entre estas. dembemos agregarle un espacio literal 

$variableUno . ' ' . $variableDos; 




HTML EN PHP O PHP EN HTML
podemos escribir html en php. 

lo haemos de la siguiente manera 

<?php 

   echo "<h1> {$nombreVariable} {$segundaVariable} </h1>"

  
?> 
 en php debemos tener en cuenta que si queremos usar una variable al publicarla com en el ejemplo anterior, es necesario ponerlos entre comilla 
 dobles, ya que al usar comillas simples. este tomara todo el codigo como un string y lo mostrara literal 


  <?php

              $nombreUsuario = 'miguel angel';
              
              $apellidoUsuario = 'bravo martinez';

              echo "<h1> {$nombreUsuario} {$apellidoUsuario} </h1>" 
              
 ?> 

 tambien podemos hacerlo insertandolo directamente en el html 

 <h2><?php echo "{$nombreUsuario} {$apellidoUsuario} "?></h2>




COMENTRATIOS EN PHP 
hay dos formas de hacer comentarios comentarios de una sola linea. o comentarios de varias lineas 

los comentarios de una sola linea se hacen con //

los comentarios con muhas lineas se realizar de la siguiente manera 
/*
*
*
*
* /

SIEMPRE SE DEBE CERRAR LAS VARIABLES O FUNCIONES QUE SE REALICEN CON PHP




OPERACIONES MATEMATICAS 

para mezclar numeros con string en php debes poner los numeros en parentesis 

 echo 'resultado: ' . (10 + 30); 

si no lo agregamos entre parentesis esto nos arrojara un error, si las variables contienen numeros en string '12', php los sumara, no los concatenara 
como lo hace js 

  $variableUno = '10';
  $variableDos  = '20';

  echo "Resultado: {$variableUno} + {$variableDos} ";  

si lo hacemos de esta manera, imprimira el valor de las variables, pero no realizara la operacion

      $variableUno = '10';
      $variableDos  = '20';

      echo 'Resultado: ' . ($variableDos + $variableUno);  

de esta manera se realizara la suma y el resultado de la misma..

podemos usar operadores arigmeticos + - * / con php de la manera convencional, similar a js. pero tenemos diferencias al momento de usar 
los operadores incrementales 

ya que si lo usamos como en js 
let variable = 1;
varaible++;
esto nos imprime la variable y luego nos incrementa, php funciona de la misma manera 

en php tambien podemos redeclarar la variable como sucede en js, si tenemos una varaible que es un numero o una combinacion de numero con string 
podemos redeclarar la variable asignandole un numero o algo diferente 

$resultado = 20 % 2; 
echo $resultado;

esta operacion retorna el resultado de la division 

OPERADORES LOGICOS EN PHP

and Operación lógica "y", será verdadero si ambos son verdaderos.
or Operación lógica "o", será verdadero si uno de ellos es verdadero
xor Operación lógica "xor", será verdadero si uno de ellos es verdadero, pero no ambos.
! Operación de negación, si era verdadero pasa a falso y viceversa.


OPERADORES DE INCREMENTO 
estos operadores son similares a los de js o algun otro lenguaje que haya tratado de aprender 

Sirven para aumentar o disminuir en una unidad el valor de una variable. Son atajos para
hacer una operación típica en los recorridos de bucles, de aumentar o disminuir un valor que
usamos para llevar la cuenta de las iteraciones realizadas.
++$a Pre-incremento
$a++ Post-incremento
--$a Pre-decremento
$a-- Post-decremento






ESTRUCTURAS DE CONTROL 

IF
el if en php es muy similar al de js 

if ($variableDos < $variableUno) {
 echo 'menor';
} else {
  echo 'mayor';
}





SWICTH EN PHP 
esta estructura de control funciona de manera similar en js, es recomendada cuando se tiene varias 
validaciones que hacer 

$variable = 'javascript';
              
              switch ($variable) {
                case 'php':
                  echo 'el codigo es php';
                  break;
                  case 'javascript':
                  echo 'el codigo es js';
                  break;
                
                default:
                  echo 'el codigo no es correcto';
                  break;
              }





ARREGLOS INDEXADOS EN PHP

ARRAYS 
coleccion de datos relacionados o no relacionados

los arrays en php son muy utiles, cuando se consulte algo del servidor. se hacen de manera similar a js 
con la diferencia que en php no se imprimen directamente mostrando todo el contenido del mismo, en php debemos agregar el indice 

$array = ['array', 'php'];
  echo $array;

esto no nos imprime nada 
la otra manera de hacer un array en php es muy diferente a lo que estamos acostumbrados.
se realiza de la siguente manera $array = array('esto', 'es un array');

no debe incluir llaves, esto podra imprimirlo pero no permite que se ejecuten algunas funciones 


FUNCIONES EN PHP, VAR_DUMP AND PRINT_R

en php es muy util la funcion var_dump y print_r, de cierta forma nos ayudan a imprimir los valores de un array 
para uar estas funciones normalmente se usa una etiqueta de html llamada pre, con el nos ayudamos a visualizar 
mejor los indices y valores del array 

cuando no se usa pre, nos arroja este resultado usando var_dump()

array(5) { [0]=> string(5) "array" [1]=> string(3) "php" [2]=> string(2) "12" [3]=> int(12) [4]=> bool(false) } 

usando pre 

array(5) {
  [0]=>
  string(5) "array"
  [1]=>
  string(3) "php"
  [2]=>
  string(2) "12"
  [3]=>
  int(12)
  [4]=>
  bool(false)
}


usando print_r nos retorna eso 

Array ( [0] => array [1] => php [2] => 12 [3] => 12 [4] => )

Array
(
    [0] => array
    [1] => php
    [2] => 12
    [3] => 12
    [4] => 
)
        

AGREGANDO NUEVOS VALORES A UN ARRAY

con js se podian hacer usando push que lo agrega al final, unshift que lo agrega al inicio 

paa agregar un dato adicional a un array en php. lo que podemos hacer de la siguiente forma  $array2[] = 12;
tambien tenemos funciones en php que nos permiten agregar elementos al final o inicio, nos permite borrarlos del final o inicio  

probando he notado que php tiene metodos muy similares a los de js en cuanto a los arreglos. pero con algunas diferecnais de sintaxis 

para usar un unshift en js solo debemos escribir elemento.unshift(valor a agregar)

en php array_unshift($array2,['hola']);

hay un metodo llamado unset($array[i]); de esta manera podemos eliminar cualquier elemento del array. 

podemos usar usar splice de la misma manera que hacemos en js. es indispensable que el arrasi si lo hacemos $array = array{}; no tenga 
llaves dentro ya que esto ocaciona que no funcione los metodos del mismo 

 array_splice($array, 0, 2, 'prueba' );

            var_dump($array);

  array_shift($array);  este metodo como en js borra el primer elemento 
  

  array_slice();
  es como splice() pero con la diferencia de que este no puede añadir mas elementos, recibe tres parametros 

array_slice($arreglo, indice inicial, el numero de elementos a tomar); el ultimo es opcional, imagino que por defecto es 1 
este metodo elimina el elemento y lo devuelve, por lo cual puede ser almacenado en una variable

array_shift(); este metodo igual que en js elimina el primer elemento del array y reasigna el indice a los demas 
no regresa nada 

array_push(); esta es una funcion que agrega elementos al final del array, la sintaxis es la siguiente 

array_push($array, [usamos llaves si queremos que todo quede en un indice]), en caso que no queramos eso. los agregamos individualmente 
separandolos por comas 

php usa la mayoria de los mismos metodos que js pero para concatenar arreglos usa la funcion merge()

se implementa de la siguiente manera 

$array = array(111,12,13,14,15,16);
$array2 = array(21,22,23,24,25,26);

$array3 = array_merge($array, $array2);

foreach ($array3 as $key => $value) {
  echo "<p> {$value} </p>";
}

ese foreach, nos imprime todos los valores de los dos arreglo, con merge no solo podemos imprimir arrays indexados, tambien podemos combinar arreglos
asociativos

$arrayA1= array(
  'nombre' => 'username',
   'profecion' => 'web developer'
);

$arrayA2= array(
  'status' => 'activo',
  'debe' => 'no'
);

$arrayA3 = array_merge($arrayA1, $arrayA2);

foreach ($arrayA3 as $key => $value) {
  echo "<p> {$value} </p> ";
};




STRING EN PHP 

podemos usar comillas "" o '' esto dependera de lo querramos hacer. ya que al usar comillas "" nos permitira usar variables
dentro de la cadena de texto y nos regresara el valor de la variable. si usamos '' nos arrojara el nombre de la variable tal cual 

si quereemos usar por ejemplo un signo de dolar $ literal en la cadena podemos usar \ barra invertida, esto le dira al codigo que eso es un signo que queremos 
mostrar, tambien existe otros ejemlos como saltos dfe linea y comillas esto es en el caso de usar comillas dobles 
en el caaso de usar comillas '' solo tenemos \'

sintaxis compleja de llaves 

si queremos imprimir un valor desde un array indexado lo podemos hacer de esta manera 
 echo "la posicion 0 del array es {$array3[0]}"

 pero si lo intentamos hacer desde un array asociativo esto nos arrojaria un error
 ahi es donde entra la sintaxis compñleja de llaves 

 echo "el nombre es {$arrayA3['nombre']} <br>";

podemos saber el numero de caracteres que se encuentran en un string. por medio de una funcion llamada strlen();

        


ARRAYS ASOCIATIVOS 

estos se crean igual que el anterior, indexado, pero se agrega datos de una manera diferente 
se llama asociativo porque tiene una relacion entre llave y valor. imagino que es similar a un objeto en js, 
el valor que se le asigna a la llave usando una expresion lambda. => 

LOS ARRAYS SIEMPRE SE DEBEN HACER CON () O CON [] Y SI SON ARRAYS ASOCIATIVOS SE DEBEN USAR EXPRESIONES LAMBDA 


 $arrayA = array(
              'nombre' => 'miguel',
              'apellido' => 'bravo'
            );

            var_dump($arrayA['nombre']);

se hacen de la siguiente manera 


ARRAY MULTIDIMENSIONALES 

arrays con muchos arrays dentro, como si fuera un objeto en js 



REVISANDO SI UN VALOR EXISTE EN UN ARREGLO

para saber si un elemento existe en un arreglo. podemos usar in_array(); debemos tener dos valores, el valor que estamos buscando y el array 
donde creemos que esta. si se encuentra nos arrojara 1, si no. nos arrojara 0  si usamos print_r 

si usamos var_dump nos arrojara un booleano 

con array_values podemos acceder a los valores de los arrays. con array_keys retorna las llaves de las mismas 


si buscamos en un arreglo multidimensional. debemos agregar la llave para buscar 



ITERAR UN ARREGLO CON FOREACH 

funciona de la misma manera que en js pero la sintaxsis es muy diferente 

en js la sintaxis es element.Foreach(element => lo que queremos que haga);

en php es asi,  foreach($arrays as $keys => $value){
 codigo a ejecutar 
};

el $arrays es el nombre del array, keys es el indice o la llave de este si es uno asociativo, y el valor es 
el valor del mismo 



RECORRER ARREGLO MULTIDIMENSIONAL 

recorrer arreglos multidimensionales es de la misma manera que un arreglo, si lo corremos como un arreglo indexado o un arreglo asocitivo
en el primer nivel o el nivel mas externo del arreglo. para acceder a un nivel más profundo, debemos acceder con las llaves a la que queramos ingresar

 $arrays = array(
              'usuario' => array(
                'nombre' => 'miguel', 
                'apellido' => 'bravo'), 
              'gustos' => array(
                'musicales' => 'electronica, salsa',
                'comida' => 'asados'
                )
              );

             foreach ($arrays['usuario'] as $key =>  $value) {
               echo $key;
             };

como en este caso. 

si intento imprimir una llave y un valor que sea un array, este me retornara un error 
Notice: Array to string conversion in D:\xampp\htdocs\php\base\index.php on line 45

usuario: Array 

diciendo que un se esta intentando convertir un array en un string, para evitar ese error. debemos evitar regresar el valor de un arreglo, 
si no el valor de la llave.

si queremos ingresar a los niveles del arreglo, debemos especificarlos de esta manera 

 foreach ($arrays['gustos']['musicales'] as $key =>  $value) {
  echo "<p> {$key}: {$value} </p> ";
};

esto nos arrojara la llave y el valor de la misma, lo imprimimos en el parrafo que tenemos abajo. 

en php podemos usar una condicional para evitar escribir ['musicales'] podemos usar una fncion llamada 
array_key_exists. lo que hace esta funcion es 



FOR EN PHP 

este iterador no es muy comun como lo es en js, en php se usa mas foreach, desde mi punto de vista me parece mucho mas sencillo que 
for, es muy similar a js 




WHILE EN PHP 

la mas usada cuando tengo registros en la base de datos 

la sintaxis es muy similñlar a js 



FUNCIONES EN PHP 

la sntaxis es muy similar a la de js en este sentido 

funtion (){

};

podemos hacer las funciones en un archivo aparte y luego llamarlas a donde estemos trabajando 
con require o include 

la diferencia fundamental entre las dos es que si llamamos un archivo con requere y este archivo no se encuentra
nos arrojara un error fatal, en cambio con include esto no sucedera, solo nos arrojara una advertencia 
usan de la siguiente manera 


include("nombre_php.php");

ya con esto, se puede llamar los metodos que esten en esta libreria, podemos hacer nuestras porpias librerias. es recomendable ir organizandolas en 
base a su funcion, conexion a la base de datos, funcion de cokies 


ejemplo de una funcion que recibe los parametros de nombre y telefono, para imprimirlos
 function agenda($nombre = 'invalido', $telefono = 'invalido'){

  echo "<h2> Agenda Telefonica </h2> </br>";

  echo "<p> {$nombre} N° telefonico: {$telefono} </p>";

}

agenda('miguel angel');

como podemos ver, se asigna un valor por defecto al parametro, si no se le asigna un valor, este se mostrara 




PARAMETROS EN LAS FUNCIONES 

a una funcion en php se le pueden pasar parametros por valor, por referencia o valores predeterminados

Los parámetros se pasan por valor

El paso de parámetros en PHP se realiza por valor. "Por valor" es una manera típica de pasar
parámetros en funciones, quiere decir que el cambio de un dato de un parámetro no actualiza
el dato de la variable que se pasó a la función. Por ejemplo, cuando invocamos una función
pasando una variable como parámetro, a pesar de que cambiemos el valor del parámetro
dentro de la función, la variable original no se ve afectada por ese cambio





Paso de parámetros por referencia

En contraposición al paso de parámetros por valor, está el paso de parámetros por referencia.
En este último caso, el cambio del valor de un parámetro dentro de una función sí afecta al
valor de la variable original.
Podemos pasar los parámetros por referencia si, en la declaración de la función, colocamos un
"&" antes del parámetro.






RETORNO DE VALORES EN FUNCIONES DE PHP 

en php como en cualquier lenguaje que hemos visto, se puede retornar un valor de una funcion 
usando la palabra return como ya hemos visto o usando la exprecion lambda => eso hace referecnai a retunr 
podemos almacenar lo que retorna en una variable 

algo que debemos tener claro, lo mas seguro es que lo hayas olvidado, es que al poner 

return, no se ejecutara mas codigo luego de eso 



GUARDAR BORRAR Y MODIFICAR DATOS DE UN ARRAY EN UNA FUNCION 

esto lo hacemos de una manera sencilla. 

debemos crear un array el cual lo iniciamos en 0 

creamos la variable y le ponemos parametros para 

PASAR VARIABLES POR LA URL CON PHP 

Es posible que ya os hayáis percatado de que las variables de un script tienen una validez
exclusiva para el script y que nos resulta imposible conservar su valor cuando ejecutamos otro
archivo distinto aunque ambos estén enlazados. Existen varias formas de enviar las variables
de una página a otra de manera a que la página destino reconozca el valor asignado por el
script de origen

podemos pasar una variable de una pagina a otra, introduciendola en la url que conecta a la pagina de destino 

esta es la sintaxis
<a href="destino.php?variable1=valor1&variable2=valor2&...">Mi enlace</a>
Podéis 
debemos agregar ? luego de escribir la direccion de destino seguido a eso, podemos escribir ewl
el nombre de la variable no es necesario agregar el signo de dolar $ y deben estar separadas por & 

en la otra pagina, es necesario usar algun metodo como los que veremos a continuacion, usando $_GET podemos retomar 
ese valor en la otra pagina que estemos usando 

 <a href="otro.php?hola=esto&id=20">otro</a>
 echo $_GET['id'];

 esto nos imprime 20


 si no especificamos nada, esto nos arrojara un array asociativo con todas las variables y podremos acceder a el 

 cuando estemos llamando estas variables con el get es recomendable usar una variable llamada htmlspecialchars($_GET['id']) se usa de esta manera 
 y esto es para comprobar que no venga codigo infectado
 


$HTTP_GET_VARS
Recordamos que es posible recopilar en una variable tipo array el conjunto de variables que
han sido enviadas al script por este método a partir de la variable de sistema
$HTTP_GET_VARS, que es un array asociativo. Utilizándolo quedaría así:
<?
echo "Variable $saludo: $HTTP_GET_VARS["saludo"] <br>n";
echo "Variable $texto: $HTTP_GET_VARS["texto"] <br>n"
?>

$_GET
A partir de la versión 4.1.0 de PHP se ha introducido el array asociativo $_GET, que es
idéntico a $HTTP_GET_VARS, aunque un poco más corto de escribir.


Caracteres especiales en URL y su codificación con PHP
Hay algunos caracteres raros que no se pueden pasar, tal cual, por la URL. Por ejemplo, una
URL no puede contener espacios en blanco, por lo que si intentas enviar una variable por URL
con un valor que tiene un espacio en blanco, te dará problemas. Por ejemplo, el signo "*" no
puede figurar tampoco en una URL. Así pues, tenemos que hacer algo para convetir esos
caracteres, de modo que no den problemas en la URL.
La solución en PHP es sencilla, simplemente debemos codificar la variable que tiene caracteres
conflictivos a formato URL. Para ello utilizamos la función urlenconde(), que viene en la
librería de funciones de PHP.






FORMULARIOS CON PHP 

cuando trabajamos con formularios en html podemos enviarlos por metodos de POST y GET, 

desde mi punto de vusta es mas recomendable usar post, ya que este los envia en el cuerpo del formularios y asi son 
enviados al servidor 
en cambio get, los añade directamente a la url 


VALIDAR QUE UNO DE LOS CAMPOS NO LLEGUE VACIO 

para validar que una variable tenga datos lo podemos hacer de una manera 
extricta con filter_has_var comprueba que una variable de cierto topo existe. 
esta recibe dos parametros:

el tipo INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER o INPUT_ENV.

y el nombre de la variable. en este punto debemos tener el cuenta que se añada es el nombre de 
la llave que retorna el array, por ejemplo

 if (filter_has_var(INPUT_POST,'nombre')) {
        # code...
      }

y tambien usamos 

strlen()  para comprobar que el elemento sea diferente a 0

tambien usamos el metodo FILTER_INPUT()
este recibe varios parametros, los dos primeros son similares a los del metodo filter_has_var adicional a eso podemos agregarle unos filtros
que podemos encontrar en 
https://www.php.net/manual/es/filter.filters.php dependiendo al filtro que queramos, pero echando un ojo, encuentro filtros muy utiles 

esto es un filtrado muy extricto. 


aunque podemos usar un metodo de validacion menos extricto. este metodo es isset()
recibe un unico parametro que es el nombre de la variable isset($variable);
esta variable retornara true en caso que la variable este definida y el valor sea diferente a 0


o podemos usar strlen(); para validar que el dato no este vacio 

if (strlen($nombre) > 0 ) {
        echo "<p> {$nombre}</p>";
      } else {
        echo "<p>valor no valido </p>";
      }

o podemos usar un mwetodo llamado empty()



RECOGER VALORES DE UN CHECKBOX

cuando habilitas un checkbox este se pone como on y la variable se envia, cuando no se habilita la variable no es creada por lo cual no se 
puede validar de la manera convencional, luego de que se haya confirmado que el valor es enviado en post. podemos crear la variable y leer los datos


if (isset($_POST['notificaciones'])) {
        $notificaciones = $_POST['notificaciones'];

        if ($notificaciones == "on") {
          echo "hacemos el codigo para enviar las notificaciones";
        }
      }




CHECKBOXES RELACIONADOS

es recomendable que cuando son asi, en el name le ponemos un nombre en comun y le abrimos llaves [] el value si debe ser diferente, como si fuera un array 
ya que el metido post nos retorna un array es necesario primero validar si el array existe. si existe. creamos una variable asigndole el arry 
luego debemos verificar si ese array tiene o no algun indice, e caso de tenerlo ejecutamos el codigo, recorremos el arry e imprimimos su contenido 


if (isset($_POST['curso'])) {
        $cursos = $_POST['curso'];
        if (count($cursos) > 0 ) {
          foreach ($cursos as $key => $value) {
            echo "<p> {$value} </p>";
          }
        }
      }

podemos tener mas verificacion con is_string, ya que los valores retornados son unos string 


VALIDAR SELECT 

para validar un select lo hacemos el mismo metodo que para un checkbox, pero con la diferencia que es mas recomedable en vez de usar un foreach 
es mejor usar un switch ya que este nos permite segun el caso, ejecutar el codigo 




VALIDAR UN RADIO BUTTON 

tenemos la opcion de crearlo directamente con php.  podemos crear un array con cada uno de los elementos que queremos imprimir, luego lo 
mandamos a una etiqueta html 

<div class="tipo_curso">
<h2>Tipo de Curso</h2>
<?php  $opciones = array(
   'pres' => 'Presencial',
    'online' => 'En Línea'
);?>


<?php foreach($opciones as $key => $opcion) {
  echo "<div class='campo'>";
  echo "<input type='radio' name='opciones' value='$key' > $opcion";
  echo "</div>";
} ?>
</div>



VALIDAR UN TEXTAREA 
para validar un textarea lo hacemos de la misma manera que con un input de datos, el textarea nos retorna una variable vacia, para evitar eso 
podemos usar un strlen para verificar que no sea una variable vacia, y tambien invalidamos los espacios en blanco 

     if (empty($_POST['mensaje']) || trim($_POST['mensaje']) ) {
        $mensaje = $_POST['mensaje'];
        echo "<p> {$mensaje} </p>";
      }else {
        echo '<p> mensaje vacio </p>';
 }



AÑADIRLE SEGURIDAD AL FORMULARIO. 
poemos agergarle filtros adicnales como habiamos escrito anteriormente, los podemos encontrsar en este link  
https://www.php.net/manual/es/filter.filters.php  es recomendable usar filtros de sanidad para evitar que codigo infeccioso se ejecute en nuestro formulario






BASE DE DATOS Y MYSQL

como debes recordar, una base de datos es un sitio donde se almacena datos para luego poder accesar a 
ellos de una manera rapida 

para crear una base de datos recuerda que puedes hacerlo desde la consola con sql 

create database nombre_base_datos;

al momento de crear las tablas es necesario agregar el motor de almacenamiento 

esto lo hacemos con engine=innodb; esto nos ayuda a agregar datos mas adelante en php 

TIPOS DE DATOS EN MQSL

ENTEROS Y NUMEROS 

para tener en cuenta, usamos ciertos tipos de datos para almanecar numeros 
los que mas usaremos segun mi criterio son 

int = que es un numero entero el cual nos permite almancenar 2 billones de digitos
tinyint = que abarca 127 numeros 
smallint = ms de 32000 digitos

si usamos unsigned acepta puros numeros positivos y crece el rango 



NUMEROS FLOTANTES O DECIMALES 

podemos usar float para valores decimales 
double para valores decimales muy grandes 
o podemos usar decimal para  sistemas de pagos ya que este no aproxima un valor no se redondea 



TEXTOS Y DATOS BINARIOS 

varchar = texto corto o que varia de tamaño 
char = extension fija, como una contraseña
text = texto largo puede ser como una entrada de blog 
enum= valor de una lista numerada 
blog = me permite guardar imagenes, sonidos y archivos comprimidos, esto es una mala practica 
es mejor guardar la ruta de la imagen 


FECHA Y HORA 

DATE = año-mes-dia
time = hora-minutos-segundos
datetime = es la convinacion de los dos , primero el año luego las horas 
timestamp es lo mismo que datetime 
year solo guarda el año 


AGREGAR LLAVES FORANEAS

segun recuerdas, las llaves se definen dependiendo la relacion que haya entre las tablas, de uno a muchos
de muchos a muchos, de uno a uno. estas se deben crear para conectar una llave primaria con otra tabla 
recuerda que debe ser del mismo tipo de dato que la otra tabla 

ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID); 

CREAR LAS TABLAS 

para crear las tablas como recuerdas, es con create table debes asignar el nombre de la tabla 
luego de eso agregar los campos que esta tendra 

create table prueba (
  nombrecampo int , 
);

debe tener una coma al final del campo para poder agregar mas 
y al final de todo debes agregar un punto y coma 


MODICIAR TABLAS

recuerda que para modificar tablas, aggregar alguna llave foreanea, modificar un campo o algo por el estilo, 
se debe usar 
alter table nombre_tabla add nombre_fila 

en este link podras encontrar lo necesario para 

podemos cmbiarle el nombre a una tabla con change column

https://dev.mysql.com/doc/refman/8.0/en/alter-table.html


INSERTAR DATOS EN UNA TABLA 
para insertar datos en una tabla lo podemos hacer con insert into 
para saber que columnas y el tipo de dato que recibe podemos usar describe 
y ya sabes como insertar los datos, cuando el valor es autoincremental. debes poner como valor null, mqsl se encargara
de rellenar ese dato, si queremos dejar el dato vacio debemos especificarlo dejando el espcio vacio 
si es un string "" y si es un entero dejarlo entre las comillas 

insert into inventario values (null, "camaro ss", "chevrolet"," ",27000,350000,"un excelente auto de coleccion");


OPTENIENDO DATOS EN SQL 

para optener datos podemos usar select (aqui ponemos las columnas que queremos mostrar)
from = las tablas de donde sacaremos la informacion 
where son condicioanales de la busqueda por ejemplo el id de algun campo especifico 

en este ejemplo se puede hacer idAuto = 3; de esa manera solo aparece el tres 

SELECT nombreAuto from inventario WHERE marcaAuto = "ford" 


ACTUALIZAR DATOS 
podemos actualizar datos si un usuario desea hacerlos o el programa lo requiere 
la sintaxis que podemos usar es la siguiente 

update es el llamado al codigo
set es donde se escribe las tablas a modificar y se les asigna el valor  
y el where es la condicional que queramoa agrgar 

UPDATE table_name SET column1 = value1, column2 = value2 WHERE id=100; 

este es en el caso que queramos actualizar dos valores en este caso del id100

update inventario set anoModelo = 2005 WHERE idAuto =2 

o en nuestro ejemplo 

siempre que se vaya a realizar un update es que siempre que se haga este tipo de cambio es poner un where



ELIMINAR UN REGISTRO DE LA BASE DE DATOS

https://mariadb.com/kb/en/library/delete/ aqui encontraremos la informacion sobre lo que deseamos hacer 


en nuestro mundo laboral tendremos que encontrarnos con sitios a los que debamos borrar los registros 
por lo cual es importante saber eliminarlos de la base de datos, esto se hace con delete, con el podemos eliminar 

esta es la sintaxis 
DELETE FROM t1 WHERE c1 IN (SELECT b.c1 FROM t1 b WHERE b.c2=0);

o podemos agregar este ejemplo mas sencillo 
DELETE FROM inventario WHERE nombreAuto = "fortunet";


ORDENAR LA INFORMACION QUE NOS RETORNA 
orderby es una herramienta que nos sirve para ordenara la informacion que nos retorna 

la sintaxis es similar a la de select 

select * (nos retorna todo) from inventario order by (escribimos como queremos ordenarlo) asc 

de esta manera nos retorna como queremos presentarlo 
SELECT * FROM inventario ORDER by nombreAuto ASC 

en este caso queremos mostrarlo de una manera acendente 

SELECT * FROM inventario ORDER by precioAuto DESC LIMIT 3 
con esta consulta podemos ver los 3 autos mas costosos 


CONTRAR REGISTROS EN SQL

The COUNT() function returns the number of rows that matches a specified criteria.

The AVG() function returns the average value of a numeric column. esta es una funcion para verificar el promedio 

The SUM() function returns the total sum of a numeric column.

esto nos sirve para verificar exactamente en el inventario y asi tener un stock 
la sintaxis es la siguiente 

SELECT marcaAuto ,COUNT(*) FROM inventario GROUP by marcaAuto

aqui estamos contando lo s autos para por su marca. aqui el select es para que nos muerte la marca del mismo 




OPERADORES EN SQL

esto nos ayuda a filtrar son los mismo soperadores arigmeticos que usamos en los demas lenguajes de programacion 

uno de los operadores que podemos usar tambien son between




FUNCIONES PARA CADENAS 

concatenar valores en sql  lo podemos hacer con concat 

se escribe luego del select 

select concat('marcaAuto','nombreAuto'),anoModelo, precioAuto FROM inventario WHERE anoModelo > 2006  and precioAuto <= 25000 ORDER by anoModelo ASC



AGREGANDO PHP AL PROYECTO 

para trabajar con php es recomendable poner el nombre de la pagina con extencion php al menos en las que usaremos ya que esto nos permite agregar el include 

para crear un template en php lo podemos hacer de la siguiente manera creamos el archivo como lo queremos llamar (header.php) 
copiamos el codigo html que queremos que sea el template.. 
ahora crearemos un templete del header. debemos cortar desde la barra hasta el doctype, para agregarlo en el documento. debemos agregar la palabra 
reservada include_once luego pongo entre comillas la ruta al archivo 



CREAANDO UN ARCHIVO DE CONEXON A LA BASE DE DATOS 
antes que nada debemos tener en cuenta la seguridad, para esto es necesario que nuestro php myadmin tenga usario y contraseña 
y que nos la solicite al momento de ingresar 


para crear una conexion a la base de datos podemos usar dos metodos. PDO y MySqli la diferencia entre las dos primordialemte es 
las dos ofrecen una api orientada a objetos. pero mysqli ofrece una api procesal por lo cual se les hace mas facil a las personas iniciar en el lenguaje 
pero PDO ofece soporte a una variedad de bases de datos, cosa que msqli solo funciona para mysql 
independentemente del metodo que usemos, necesitamos cierta informacion para poder conectarla sin problemas 

necesitamos el nombre de la base de datos
el host donde esta. la direccion ip del mismo 
el nombre de usuario 
la contraseña de la base de datos 
tambien podemos agregar el puerto de conexion a la base de datos


aqui tenemos un ejemplo de la conexion PDO

$pdo = new PDO("msql:host=direccion ip;dbname=curso_php","root1(nombre de usuario)","(contraseña del usuario")
$pdo->setattribute(PDO::attr_errmode, PDO::errmode_exception)   esto es una exepcion en caso de que la base de datos no conecte debe estar en mayusculas 


tambien podemos usar conexiones persistentes. esto hace que la conexion no se cierre y pñueda ser usada por el mismo cliente que la solicita 
debves recordar que el nombre de usuario y la contraseña del mismo debes escribirlos sepadaro del nombre de la base de datos y la direccion ip de la misma 


luedo de realizr esto, usamos try catch, para que en caso que no se pueda conectar a la base de datos. nos erroje un error pero la pagina siga funcionando 

Las excepciones pueden ser lanzadas y capturadas usando los bloques try and catch. Tú eres el responsable de lanzar las excepciones cuando algo inesperado ocurra. Analicemos rápidamente el flujo básico para el manejo de excepciones como se muestra en el siguiente pseudocódigo.
aparte podemos usar finally

usamos try y catch cuando creemos que el bloque de codigo podra generar una excepion, es necesario agregar u  catch ya que si no lo haces. nada manejara la 
excepcion y esoto ocacionara u  error fatal

en el catch creamos un objeto de Exception, el cual nos permite acceder a todos sus metodos 

https://www.php.net/manual/es/exception.construct.php en esta url podemos ver todos los metodos y su uso 

try{

    }catch (\Exception $e) {
        echo $e->getMessage(); 
}

para conectar a la base de datos, lo hacemos en el try, debemos incluir el archivo de conexion a la base de datos que ya tenemos 
 pasar hacer una consulta debemmos uar una funcion de php llamada query dentro de ella debemos ingresar la variable o la consulta que querramos hacer 
para imprimir usamos una variable llamada fetch_assoc()

al crear la variable que contenga la consukta sql, lo podemos hacer con comillas simples o dobles 


https://www.php.net/manual/es/pdo.transactions.php este link es super util al momento de usar conexiones a la base de datos 


siempre que se debe hacer es crear la conexion: esto lo hacemos on includes_once o con require 
escribir la consulta creamos una variable y la preparamos con prepare. esto optimiza la ejecucion de los query y evita ataques de sql inyection 
realizar la consulta la ejecutamos con execute. esto ejecuta lo que tenemos preparado
e imprimiarla la imprimimos de esta manera   $resultado = $sql->fetch(PDO::FETCH_ASSOC); 


si vamos a insertar datos en la base de datos tenemos que hacerlo agregando un metodo antes del execute()
el metodo llamado bindParam()
 Vincula un parámetro al nombre de variable especificado 

 podemos encontrar mas info aqui https://www.php.net/manual/es/pdostatement.bindparam.php 
 $insertar = $pdo->prepare("INSERT INTO registrousuario (nombreUsuario, apellidoUsuario, emailUsuario, fechaRegistro, pasesArticulos, talleresRegistrados, fk_regalo, totalPago )
                                        VALUES (?,?,?,?,?,?,?,?) ");
$insertar->bindParam("sssssssis");
  
este es un ejemplo, los signos de interrogacion en el values, reemplazan los parametros. en bindParam las s son string y la i es un entero, luego de las "" ingresamos las variables separadas por comas 



podemos cerrar la conexion a la base de datos o manetener una conexion persistentente. al almacenarla en cache se evita que se cree una conexion a la 
base de datos por lo cual la aplicacion es mas rapido


al ejecutarlo de esta manera 

 try{
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = $pdo->prepare('SELECT * FROM evento'); 
        $sql->execute();

    }catch (\Exception $e) {
        echo "Error!!" . " " .  $e->getMessage(); 
    }

  $resultado = $sql->fetch(PDO::FETCH_ASSOC); 

  solo nos imrpimira una sola fila 


MOSTRANDO TODOS LOS EVENTOS 
segun la documentacion de php. podemos usar algo llamado fetchAll, esto nos retorna un array que tiene 
todas las filas del conjunto de resultados

con este metodo se pueden presentar de tres maneras
PDO::FETCH_COLUMN: Devuelve la columna con el índice indicado basado en 0. este no es recomenrable si es un array 
PDO::FETCH_CLASS: Devuelve instancias de la clase especificada, haciendo corresponder las columnas de cada fila con las propiedades con nombre de la clase. 



o podemos usar while para imprimir cada uno de las columnas 

while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)) {
     echo "<p> {$resultado['nombreEvento']} </p>";
} 




RELACIONAR UNA TABLA CON LA OTRA 

lo podemos hacer por medio de inner join, cualquiera de los joins que maneja sql o podemos hacerlo con where. segun investigue. el permormance es identido 
pero el inner join es mas facil de leer 

SELECT nombreEventos, fechaEvento, horaEvento,nombreEvento,nombreInvitado, apellidoInvitado
FROM evento INNER JOIN invitado ON evento.fk_idInvitado  = invitado.idInvitado 
INNER JOIN  categoriaeventos ON evento.fk_idCategoria = categoriaeventos.idCategoria

de esta manera hacemos una consulta con inner join, el funciona si encuentra un coincidencia en las tablas, como puedes ver en el select no es muy diferente, 
en el from. seleccionas la tabla principal de la cual quieres hacer la relacion. en el inner join el nombre de la otra tabla y en el on 
la relacion entre ellas 



agrupar eventos por fecha, lo podemos hacer formateando nuestros propios arreglos 

para imprimir los datos, ya que esto nos lo devuelve en un array, es necesario recorrerlo con un foreach


podemos impprimir la fecha de esta manera, pero eso hace que sea vea no muy famililar 

foreach ($calendario as $key => $value) { ?>
            
            <h3>
                <i class="fas fa-calendar-alt"></i>
                <?php echo "{$key}"; ?>
            </h3>

        <?php } ?>

esto nos muestra la fecha en un estandar poco entendible. podemos formatear la fecha usando date()

o podemos usar srtftime() 
Los nombres del mes y del día de la semana y otras cadenas dependientes del lenguaje respetan el localismo establecido con setlocale(). esta funcion 
nos establece la informacion del localismo ¿, esta funcion recibe dos parametros. la categoria y el local. la categora es un valor que se ingresa
y el locale es in string. que se escribe segun el idioma que queremos para español se escribe es_ES. esto es para emtornos unix. en entornos windows
usamos setlocale(LC_TIME, "spanish");
  

si tenemos guardado un icono en la base de datos, podemos agregar toda la clase o bien podemos concatenarlo de esta namera 'iconoEvento' => 'fa' . " " . $eventos['icono'], 
 <i class="<?php echo $value['iconoEvento'] ?>" aria_hidde="true" > </i> en la etiqueta se veria asi 


 

 CARGAR LOS ARCHIVOS DE FORMA CONDICONAL

 esto lo haremos con el fin que se cargue en la pagina que estamos el plugin que necesitra esa pagina 

 debemos usar una funcion llama basename

  <?php

    $archivo = basename($_SERVER['PHP_SELF']);
    $pagina = str_replace(".php", "", $archivo); 
    if($pagina == 'confenrencia'){
      echo '<script src="js/jquery.lettering-0.6.1.min.js"></script>';
    }elseif ($pagina == 'invitados') {
      echo '<script src="js/jquery.colorbox.js"></script>';
    }

  ?>  

con este metodo podemos mostrar los scripts y hojas de estilos que queremos que se muestre, esto evitara que nos cause un error al ejecutar los scripts 

en este ejemplo estamos mostrando los scripts dependiendo de la pagina que estemos y esto nos ayuda a no sobrecargar con archivos que no necesitamos 

podemos hacer un template de algo especifico con el fin de poder usarlo en otras paginas del sitio. esto es muy funcional para poder reutilizar el codigo 


RECUERDA QUE PARA QUE TE TRAIGA MAS DE UN RESULTADO DEBES AGREGARLO EN UN WHILE o USAR EL FETCHALL
podemos hacer transacciones, esto nos ayudara a conservar la base de datos intacta y sin ningun problema 

 <?php 
            
            include_once 'php/funtions/bd_con.php';

            try {

              $pdo->beginTransaction(); //inicia la transaccion 
              $consultaTaller = $pdo->prepare('SELECT nombreEventos, fechaEvento, horaEvento ,nombreInvitado, apellidoInvitado, idCategoria 
                                          FROM evento INNER JOIN invitado ON evento.fk_idInvitado = invitado.idInvitado
                                          INNER JOIN categoriaeventos ON evento.fk_idCategoria = categoriaeventos.idCategoria AND categoriaeventos.idCategoria = 1 
                                          LIMIT 2');
              $consultaTaller->execute();

              $pdo->commit(); //en caso de completarse, cre un commit

            } catch (\Exception $th) {
              
              $pdo->rollBack(); //esto hara que si no se completa. vuelva a sui estado inicial 
              echo "¡ERROR!" . " " . $th->getMessage();

            }

            

            $resultadoTaller = $consultaTaller->fetch(PDO::FETCH_ASSOC);

            ?>
          
          
para  manejar nuestro formulario y poder guardar el total del pedido, debemos crear un campo tipo hidden, luego le asignamos el valor de la variable para que este tenga un valor valido 
para darle el valor debemos asignmarle e lvalor en js 


CREAR UNA FUNCION QUE UNA UNOS CAMPOS Y COMBERTIRLOS A JSON 

php maneja una funcion llamada json_encode. el cual convierte un array o string en formato json 
dado que en el ejemplo el array nos retorna numeros en vez de llaves, para hacerlo mas entendible. usaremos un metodo para combinar el array que nos retorna el post 
y uno ya hecho por nosotros. ahora haremos un ejemplo para entenderlo mejor. 

array_combine — Crea un nuevo array, usando una matriz para las claves y otra para sus valores 
este metodo lo que hace es crear un array array_combine($arrayuno = llaves, $arraydos= valores);

siempre que trabajetemos con json_encode. debemos psarle un array por lo que es indispensable


para evitar una reinsercion de los mismos datos. debemos poner el codigo de validacion e incercion en la parte de arriba del documento. 
usamos un metodo llamado header(); el cual nos permite redirigir hacia una locacion diferente e igual, esto evitara que el usuario pueda recargar a pagina y reinsertar los dtos 


USAR UN NEWSLETTER 

podemos usar un servicio llamado mailchimp para usar un servicio de mensajeria 

https://mailchimp.com/

solo debemos crear una cuena y ecrear un formato 






            AJAX

esto no solo nos permite transportar xml, nos permite tranportar json y texto plano. permite al navegador enviar informacion sin recargar

uno de los beneficios de usar ajax, es que el consumo de datos es mucho menor., el volumen de tranferencia de datos es mucho menor 


actualizar una parte del sitio, sin actualizar la pagina completamente. te ayuda a solicitar informacion al servidor. recibir y enviar, no es un lenguaje como tal 
es una combinacion de varias tecnologias

XmlHttpRequest gracias a este objeto es posible actualizar distintas paginas del sitio sin recargar 
el objeto intercambia informacon en el background

trabajar con ajax es como trabajar con js. se crea de la misma manera qu una varaible 
pero el valor que se le pasa es 
let varariableAjax = new XmlHttpRequest();
metodos disponibles, new crea un request
abort cancela el request 
getallresponseheaders retorna informacion del header 
open abre la conexion... recibe tres parametros. post o get, la url del archivo al que te quieres comunicar por ultimo esta , si queremos que sea sincrono y asincrono 
send envia el request al servidor 
sedrequestheader, agregar valores al header que se quire enviar 

cuando se trabaja con formularior es requerido siempre se debe usar 
setRequestHreader()


luego de instanciar el objeto, con oopen hacemos algo similar a un prepare en php, y send en este caso envia lo que hemos realizado como en el caso de execute 

SIEMPRE DEBEMOS ESCRIBIT EL METODO (POST, GET) EN MAYUSCULAS 



PROPIEDADES o estados DE XmlHttpRequest

readystate nos dira el estado en que se encuetra la peticion del objeto, existen tres estados definidos por numeros 
0 = request sin iniciar  en este punto no hemos hecho open 
1 = conexion establecida 
2 = request recibido 
3  = procesando el request 
4 = request finalizado y la respuesta esta lista 

tambien tenemos uno llamado onreadystatechange, esta sera llamada cuando el estado cambie 

responseText. nos traera una respuesta en texto

responseXml, retorna una respuesta en XML 

status retorna el estado del request 
si el status es 200 todo esta bien 
404 es documento inexistente o no encontrado
500 es un error en el servidor 

CARGAR UN ARCHVO EXTERNO CON AJAX 


lo podemos hacer de muchas formas diferentes, segun lo necesitemos. n el ejemplo queremos que el codigo de ajax se ejecute al cliquear en un boton 
por lo cual usamos un addEventListener 


dentro e la funcion de EventeListener debemos incializar la variuable de XmlHttpRequest
luego de eso viene el open, ya que estamos trayendo indo desde un lugar externo, lo recomendable es usar get. este debe estar entre comillas. seguido a eso 
debemos poner el nombre del archvo del cua traemos esa info, seguido a eso debemos especificar si queremos que sea asincrono o no 


para hacer uso de Ajax, debemos seguir una serie de pasos. primero debemos crear una instancia del objeto XmlHttpRequest()

let xhr = new XMLHttpRequest();

seguido a eso, debemos abrir la conexion con el metodo open(), como escribimos anteriormente este recibe tres parametros. 

xhr.open("GET","contenido.txt", true);

luego de esto, debemos crear una funcion onreadystatechange, esta funcion se ejecuta cada vez que hay algun cambio por eso en el ejemplo no la llamamos
como esta arriba, 

xhr.onreadystatechange = function () {
        
        if (xhr.readyState == 4 && xhr.status == 200) {
            contenedor.innerHTML = xhr.responseText
        }

    }
  
en este caso estamos llamando un documento txt e imprimimos el resultado con el innethtml 

luego de eso debemos 


var btnCargar = document.getElementById('cargar');

function cargarContenido() {
  // crearlo
  var xhr = new XMLHttpRequest();

  // abrirlo
   xhr.open("GET", "texto_prueba.txt", true);
   
   // revisar que cambie
   xhr.onreadystatechange = function() {
      //console.log(xhr.readyState);
      
      if(xhr.readyState == 4 && xhr.status == 200) {
          //console.log("Se cargo correctamente");
          
          var contenido = document.getElementById('contenido');
          contenido.innerHTML = xhr.responseText;
      } 
   };

   xhr.send(); 
}

btnCargar.addEventListener('click', cargarContenido );
              


*/
 




