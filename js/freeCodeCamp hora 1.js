//Temas explicados: operadores, comentarios, tipos de datos, tipos de variables, consolelog

// comentario de una linea 

/* comentario 
de varias
lineas */

// TODO TERMINA CON ; //
// es lo mismo usar "" que '' definiendo cadenas de caracteres
// Tipos de datos: undefined, null, Boolean, String, Symbol ,Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol) , Number y Object //
//VAR = LET Y CONST. La unica diferencia es que var SI puede ser reasignada mas adelante mientras que let y const(constante), no. const variables are immutable while let and var variables are not. //
// todo en una cadena de caracteres("") cuenta como caracter: espacio, caracteres especiales, comas, letras, todo

var suma;
suma = 5 + 2; //SEPARAMOS ASIGNACION. ES LO MISMO. var=variable. variable inicializada [dejamos espacios entre el + y los numeros asi el codigo es menos engorroso de leero//
resta = 10 - (-1); //es + 1. al imprimir dara como resultado 11//
multiplicacion = 5 * 3;
division = -20 / -2;
resto2 = 47 % 14;
resto = 15 % 5; //el resto es 0, el cociente es 3 pero no sobra nada
var miNumeroDecimal = 0.25 * 10.32; //camel case indica que la primera letra es min, despues el imcio de cada palabra en esa asignacion va com mayus, en este caso mND //
var texto1 = 'okay'; // no hace falta "definir" las variables, solo ponemos var, nombre de la variable y valor y esta todo bien //
let miNombre = "jose"; //CamelCase: Si tenemos dos palabras como variable, JUNTARLAS SIN ESPACIO, y el incio de la 2da palabra empieza con MAYUS y la primera letra con MINUS. Otra forma es poner mi_nombre pero es mas comun CamelCase//
const boolean = false; //si es una palabra todo minuscula, dos o mas, la primera letra de la 2 y las otras palabras en adelante en mayus [respecto a camelcase]

// incrementos y decrementos (+,-,*,/)

var librosComprados = 105;
var incrementoGrande = 23;
var decrementoGrande = 5;
var incrementoMultiplicacion = 4;
var incrementoDivision = 70;

incrementoGrande += 3.564; //+(primero operador y luego asignacion); = doble asignacion. sumamos y lo sumamos al total, dandonos el total de este aumento.se puede sumar cualquier cantidad, decimal o no. lo que hacemos aca es que al 23 anterior le sumemos n y que lo sume al total (23 anterior) y la variable se quede con ese valor (26.564), en vez de hacer a = a + num. hacemos esto a +=(el numero que queremos incrementar a nuestra variable)
decrementoGrande -= 4.367;  //- ; = doble asignacion. restamos y lo restamos al total, dandonos el total de este decremento. exactamente lo mismo que arriba pero de decremento, le decrementamos el valor que queramos. mismo funcionamiento que arriba
incrementoMultiplicacion *= -3.0; //*, = lo mismo pero con multiplicacion
incrementoDivision /= 7; // /, = lo msimo pero con division. decremento.

// opciones para incrementar valor de una variable (en 1)

librosComprados = librosComprados + 1; //Incrementamos el valor de una variable en +1
librosComprados++; //incrementa el valor de la variable en 1. operador de aumento/crecimiento. mejor opcion que la de arriba (mas corta y consica)

// opciones para reducir el valor de una variable (en 1)

librosComprados = librosComprados - 1;
librosComprados--; //operador de decremento. mejor opcion que la de arriba (mas corta y consica)

// siempre ser descriptivo con el nombre de las variables por que las vamos a tener que emplear en todo nuestro codigo y si le ponemos un nombre cualquiera no vamos a saber identificar que significa cada una//

console.log(incrementoDivision);
console.log(incrementoMultiplicacion);
console.log(decrementoGrande);
console.log(incrementoGrande);
console.log(suma); //se muestra en la consola el valor de "variable"
console.log(texto1);
console.log(resto);
console.log(resto2);
console.log(librosComprados);
// console.log(resta); (lo comentamos ya que pusimos uno abajo tambien)
// console.log(multiplicacion);
// console.log(division);
// console.log(miNumeroDecimal);

resta = 5 - (+15); //reasignamos el valor de resta y lo imprimimos abajo en la consola - * + = -//
multiplicacion = 9 * -1; //al igual que antes, reasignamos el valor a la variable multipliacion y lo imprimimos en consola, como podes ver los valores cambian//
division = 3 / 0; //Se puede dividir entre 0, no da error, pero da como resultado INFINITY (∞), incluso si dividimos 0 con decimales da como resultado infinity//
miNumeroDecimal = -4 * 2.462 * 0.00; //se puede multiplicar con 0 y agregarle decimales al 0 (es lo mismo). EN LA MAYORIA DE LOS CASOS, LOS DECIMALES QUE TENGA EL DECIMAL ES EL NUMERO DE DECIMALES QUE TENDRA EL RESULTADO. podemos multilplicar un numero decimal por uno entero//
cociente = 0.34 / 0.46; //va a dar como resultado un numero con muchos decimales redondeados porque no puede dar el valor exacto (son demasiados decimales)

console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(miNumeroDecimal);
console.log(cociente);

/* se pueden separar las asignaciones como en netbeans:

var a [= undefined]; variable no inicializada (creamos var. no tiene valor, si imprimimos esto "UNDEFINED")                  =          var a = 2; (creamos var y le asignamos un valor)
b = 2; (asignamos valor a var, si imprimimos esto: "2")                                             =                                                           */

// se pueden crear variables y asignarles valor sin necesidad de poner var, let o const, nada mas ponemos x = b(5); y esta bien//

//decimales con . //
//operadores arimetricos= + / - / * / /[division] // % (resto entre dos numeros, lo que sobra de la division, no el cociente) (para ver si es par o impar)
// = operador de asignacion en js //
//js es case sensitive: MAYUS ≠ MINUS. Si ponemos miNombre [console.log(miNombre) seria lo correcto]y luego ponemos console.log(MiNombrE); tirara error (esa variable no esta definida) DISTINGUE ENTRE MAYUS Y MINUS //
// como css, mientras mas abajo, + prioridad. si le damos undefined a una variable y imprimimos, va a decir undefined, pero si despues le damos el valor 2 e imprimimos, dira que vale 2//