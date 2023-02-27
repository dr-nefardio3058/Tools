//Temas explicados: comillas, arreglos, notacion, cadenas y secuencias de escape

// no se puede poner "" adentro de otras "" HASTA AHORA. ABAJO CORREGIREMOS ESTO, dara error
//NO HACE FALTA PONER ; AL FINAL DE CADA ORACION: VER EJEMPLO ABAJO
// CTRL + } PARA COMENTAR TODO LO SELECCIONADO (EL BLOQUE)
// console.log() = Escribir, sout.

var miCadena = "Soy una cadena de caracteres \"con comillas\""
var miTexto = 'Texto con "comilla"' //lo mismo pero mucho mas facil sin las \ usando '
var miTexto2 = "Texto con 'comilla'"; //lo mismo pero se mostrara 'comilla' con ' simples y no ""

// a esto se le llama escapar comillas, ponemos la barra invertida antes de las "" extras y nos dejara poner "" dentro de ""
// La \ se hace con ALT GR + '

console.log(miCadena);
console.log(miTexto);
console.log(miTexto2);

/* Secuencias de escape (en las cadenas)

Código |  Resultado 

--------------------

\'        Comilla Simple
\"        Comilla Doble
\\        Barra Invertida (tenemos que ponerla dos veces a la \ asi se muestra una vez en la cadena)
\n        Línea Nueva
\r        Retorno de Carro
\t        Tabulación
\b        Retroceso
\f        Salto de página
...
*/

console.log('Hoy es \\ 14 de febrero') //se puede escribir un output asi a la consola para que se muestre el texto en pantalla, no hace falta siempre definir una variable y poner console.log()
console.log('Hoy es \n14 de febrero') // si separamos \n con un espacio del texto que le sigue se hara una pequeña sangria en la linea nueva, si ponemos \n14 de febrero, no tendra sangria

// Concatenar cadenas de caracteres ("" + " ") ó ("" + " " + "") [concatenamos espacio]

var nombreCompleto = "José" + " " + "Turing" // = "José" + " Turing" . Podemos concatenar la cadena directamente en la variable, en js.
console.log(nombreCompleto);

// Construir cadenas con variables

var verbo = "nadando"
var mensaje = "Yo estoy " + verbo + " con FreeCodeCamp" //acordarse del espacio tras y antes el + .Le estamos dando ese valor a esta variable de mensaje, lo unico que hacemos abajo es imprimirla.

console.log(mensaje);

// Agregar variables a cadenas de caracteres 

var mensajeCompleto = "Estoy nadando" 
var parteFinal = " solo";

mensajeCompleto += parteFinal += ", mira" //como con los numeros, se puede hacer esto con cadenas, le ponemos que sume la otra cadena (variable o no) y que este sea el resultado final, imprimiendolo luego.

console.log(mensajeCompleto); 

// Longitud de una cadena de caracteres

var miCadena;
miCadena = "12aP45sL8"

console.log(miCadena.length) //no importa si son numeros, espacios, letras o lo que sea, siempre dira la cantidad de caracteres de la cadena SIEMPRE QUE EL RESULTADO DE ESA VARIABLE O TEXTO ESTE RODEADO DE "". SI PONEMOS NUMEROS SOLOS Y LENGHT= UNDEFINED

//console.log(miCadena.toUpperCase) muestra toda la cadena en mayus (aca no sirve porque tiene numeros la cadena)
//console.log(miCadena.toLowerCase) muestra toda la cadena en minus ("")

// Notación de Corchetes: Primer Carácter (acceder a los caracteres individuales de una cadena, substring)
// Notación de corchetes: enésimo carácter

var lang = "JavaScript"
n = 1

/*

String:     J a v a S c r i p t
Index:      0 1 2 3 4 5 6 7 8 9 (el primer indice es 0, no 1)

El último índice siempre es longitud -1 porque empezamos a contar desde 0.

*/

console.log(lang[0]); //para que nos de el caracter (indice) 0 de la cadena lang "J"
console.log(lang[1]); // "a"
console.log(lang[2]); // "v"
console.log(lang[3]); // "a"
console.log(lang[10]); // "UNDEFINED" . si usamos un valor negativo, decimal o que excede el string, el resultado sera solamente "Undefined", no dara error

// Notación de corchetes: último y penúltimo carácter

console.log(lang[lang.length - n]); //"t" . En vez de - 1 le podemos dar valor a una variable 1 y es lo mismo. Longitud de la cadena -1 . Empezamos a contar desde 0, por eso es -1. Le restamos 1 al total de caracteres de la cadena, dándonos como resultado el último caracter
console.log(lang[lang.length - 2]); // "p". Longuitud de la cadena -2. Empezamos a contar desde 0, por eso es -1. El penúltimo caracter, todos los indices -2. Lo mismo que arriba pero con el penúltimo

// Inmutabilidad de cadenas de caracteres (no se pueden cambiar)

var Cadena = "jola"

Cadena = "hola" //lo que si se puede hacer es reasignar el valor de la cadena, pero no se puede cambiar por otros medios a no ser que vayamos a la asignacion directa y cambiemos el valor desde ahi

console.log(Cadena);

//Cadena[0] = "H"; ERROR. LOS STRINGS SON INMUTABLES, NO SE PUEDEN CAMBIAR CARACTERES INDIVIDUALES NI USANDO SUBSTRINGS NI NADA

// Palabras en blanco (variable vacia en la cual concatenamos strings a una cadena sin nada para que tenga valores)
//Objetivo: El perro negro corrió rápidamente a la tienda
// + nos permite concatenar valores: cadenas, espacios, variables, etc.

var miSustantivo = "perro"
var miAdjetivo = "negro"
var miVerbo = "corrió"
var miAdverbio = "rápidamente"

var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda." //de una palabra en blanco pasamos a una frase larga concatenando espacios, caracteres y variables, y la imprimimos

console.log(palabrasEnBlanco)

// Arreglos (estructura de datos que nos permite almacenar múltiples valores en una sola estructura. muy parecido a una lista)

var miArreglo = ["John", 24]; // []--> arreglos. como crear un vector en netbeans

console.log(miArreglo); //imprime todo: los corchetes, comas y " " a la consola

var estudiantes = ["Nora", "Gino", "Juan", "Jose"]; //cada elemento debe estar separado con , y espacio [opcional] para una mejor lectura del código. múltiples valores en una sola estructura
console.log(estudiantes);

var notas = [95, 67, 89, 58]
console.log(notas);

// Arreglos Anidados ([[]] .Los arreglos pueden contener cualquier tipo de dato, incluyendo otros arreglos)

var listaDeEstudiantes = [["Nora", 97], ["Juan", 78]]; //SIEMPRE SEPARADO CON , LOS ARREGLOS ANIDADOS. tener mucho ojo en la sintaxis: se empieza con [[ y se cierra el arreglo con ]]
console.log(listaDeEstudiantes);

var listDePrecios = [["Camisa", 5.63, "S134"],["Celulares", 250, "S356"],["Zapatos", 36.3, "S241"]];
console.log(listDePrecios);

var datos = [[3.5, 6.9, 3.4], [3.6, 7.4, 3.6], [5.3, 5.9, 4.2]];
console.log(datos);

// Acceder a los elementos de un arreglo

var miArreg = [10, 20, 30];

/*
Arreglo: [10, 20, 30]
Índices:   0   1   2
*/

// console.log(miArreg[0]); el elemento con el índice 0, en este caso: 10 (y lo escribe sin corchetes ni nada, full clean)
// console.log(miArreg[1]); 20
var arreg2 = miArreg[2]; //30 (le damos el valor de miarreg[2] a arreg2 para hacer la suma mas facil de leer y menos engorrosa)
// console.log(miArreg[3]); UNDEFINED [comentamos asi no nos da 10,20,30 y 60]

var suma = miArreg[0] + miArreg[1] + arreg2; //sumamos los arreglos y los imprimimos, recordar que podemos hacer este proceso menos engorroso dando un valor a miArreg[0] asi en vez de eso es arreg1 o asi, ejemplo en las misma linea.
console.log(suma);

//Modificar elementos de un arreglo (los arreglos si son muteables individualmente, a diferencia de los strings)

// Arreglo: [10, 20, 30]

miArreg[0] = 40; //en vez de 10, arreg[0], ahora vale 40
miArreg[1] = "Hola" //ponemos otro tipo de dato remplazando a miarreg[1] (20 anteriormente)
miArreg[2] = [1,2,3] //Se agrega un arreglo anidado. Le damos los valores[1,2,3] a miarreg[2]
console.log(miArreg); // [ 40, 'Hola', [ 1, 2, 3 ] ]

//Acceder a arreglos multidimensionales (arreglos que contienen arreglos anidados)

var arreglo3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//             1° elemento,  2° elemento, 3° elemento (index)

/*
Arreglo:                 [[1, 2, 3], [4, 5, 6], [7, 8, 10(cambiado)]]
Índices:                      0          1          2
Índices internos(sub):     0  1  2    0  1  2    0  1  2
*/

// console.log(arreglo3[0]); // [1, 2, 3]
// console.log(arreglo3[1]); // [4, 5, 6]
// console.log(arreglo3[2]); // [7, 8, 9]

console.log(arreglo3[1][2]); // 6. primero especificamos el indice del elemento y luego el del arreglo

arreglo3[2][2] = 10; //accedemos al elemento 2, indice 2 de la matriz multidimensional y cambiamos su valor a 10. 9 ---> 10

console.log(arreglo3[2][2]); // 9. primero especificamos el indice del elemento y luego el del arreglo

