//Temas explicados: Métodos, funciones, parámetros, booleanos, argumentos, ámbitos y variables locales y globales

/* sintaxis de los métodos: variable.metodo();

estaciones.push("");
*/

// Dato: CUANDO APARECEN UNOS ... ABAJO DE LA PRIMERA LETRA DE UNA VARIABLE, SIGNIFICA QUE HAY UN PROBLEMA: NO ESTA DEFINIDA, NO COINCIDE, ESTA MAL ESCRITO, ETC.
// PUSH(agrega al final)≠ POP(saca al final)

// SHIFT(agrega al principio) ≠ UNSHIFT(saca al principio)

//.push() ---> (empujar) nos permite agregar un elemento al final de un arreglo. tambien podemos agregar elementos a un arreglo con este método, que es lo mismo que una funcion.VA UN VALOR ENTRE LOS () (puede ser un numero, string, etc.)

//.unshift(); igual que el push pero agrega un valor al principio del arreglo. VA UN VALOR ENTRE LOS ()  (puede ser un numero, string, etc.)


//.pop() ---> para remover el ultimo elemento de un arreglo. tambien es capaz de retornar ese valor y "almacenarlo", para asignarlo a otra variable. NO VA NINGUN VALOR ENTRE LOS ()

//.shift() ---> nos permite eliminar el primer elemento del arreglo. funciona igual que pop (puede "almacenar un valor" y retornarlo a una variable) NO VA NINGUN VALOR ENTRE LOS ()

// arreglo = array 

var estaciones = ["verano", "invierno", "primavera"];

var estacion
var estacionshift

estaciones.push("otoño");

console.log(estaciones);

estacion = estaciones.pop() //sustraemos el ultimo elemento del arreglo y se lo asignamos a "estacion", lo imprimimos luego.

console.log(estaciones);
console.log(estacion);

var estacionshift = estaciones.shift(); // con este metodo le sacamos el primer elemento al arreglo y luego lo imprimimos


console.log(estaciones);
console.log(estacionshift);

estaciones.unshift(8);

console.log(estaciones);

//Lista de compras

var listaDeCompras = [["cereales", 2],["galletas", 4], ["carne", 6],["alfombras", 3]]

// Cereales 
console.log("Voy a comprar " + listaDeCompras[0][1] + " unidades de "+ listaDeCompras[0][0] + ".");

// Galletas 
console.log("Voy a comprar " + listaDeCompras[1][1] + " unidades de "+ listaDeCompras[1][0] + ".");

// Carne
console.log("Voy a comprar " + listaDeCompras[2][1] + " kilos de "+ listaDeCompras[2][0] + ".");

// Alfombras 
console.log("Voy a comprar " + listaDeCompras[3][1] + " unidades de "+ listaDeCompras[3][0] + ".");

// Funciones (function, nombre, valores, { } abajo la sintaxis correcta para funciones)(podemos escribir codigo que podemos reutilizar en nuestro programa) (en todas las funciones, también las anteriores de pop, push, shift y unshift; siempre terminan con (); y empiezan con un .

function MostrarMensaje() { //[private static void] function y un nombre cualquiera sigual que un subropgrama, solo con este nombre podremos ejecutar todo esta funcion (seria como suma() y abajo private static void;)
    console.log("hola jose"); //le damos la instruccion a la funcion que haga esto, en este caso, imprimir mensaje en consola.
}

MostrarMensaje(); //siempre que querramos ejecutar o invocar a la funcion, al subprograma, tendremos que poner los () y la ; , sino dara error.

//Argumentos (los valores que pasamos a los parametros) ( en este caso de la linea 75-78, cuando llamamos a la variable con nuevos valores)

function suma(a,b) { //a y b son parametros. son valores que se van a tomar.
    var suma = a + b //definimos la variable dentro de la funcion. esto es el cuerpo, la secuencia de instrucciones dentro de una funcion.
    console.log("El resultado de " + a + " + " + b + " es: " + suma)
}

suma(5, 3); //EJECUTA CON ESOS PARAMETROS (VALORES) aunque les dimos el valor mas tarde, en la ejecucion de la funcion dira los numeros (5+3 es 8 y no a y b es igual a 8) les asignamos un valor a a y b ASI. es importante cuidar el orden ya que se asignan con el mismo orden de arriba
suma(8,9); //aqui nada mas reemplazamos los valores y estos se actualizan, y como ya invocamos a la funcion, esta trabajara con estos valores. Ideal para escribir menos con el mismo resultado.
suma(2, 4); //reinvocamos la funcion pero ahora con estos valores, los tomara e imprimira segun estos valores
suma(5, 5); // igual que las 3 lineas anteriores. nos ahorramos muchisimas lineas con esto 

function concatenarTresCadenas (cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3)
}

concatenarTresCadenas("estoy" , "chilling" , "aca"); // SIEMPRE QUE PASEMOS PARAMETROS COMO STRINGS NO SE NOS TIENEN QUE OLVIDAR LAS "". si o si ncesitamos tres valores / parametros para correr la funcion aca sino dara error, ya que la cadena1 2 y 3 no estan definidas en la funcion
concatenarTresCadenas("hola", "estoy", "nadando") // "hola estoy nadando" la misma funcion, pero con distintos parametros.

// Ámbito global y variables globales [VARIABLES LOCALES Y GLOBALES(se puede usar en cualquier lado, tambien en funciones y todo, ya que son definidas en el programa principal y no en ninguna funcion ni subrograma [ej. linea 1---> var = miVariableGlobal]). no todas las variables pueden utilizarse en distintas partes del programa]

var MiVariableGlobal = 5;

console.log(MiVariableGlobal);

function miFuncion() {
    console.log(MiVariableGlobal)
}

miFuncion(); //se muestra en ambos lados ya que esta definida globalmente esta variable 

// Ámbito local y variables locales [son LOCALES PARA UNA FUNCION, LAS DEFINIMOS EN UNA FUNCION Y SOLO LAS PODEMOS USAR DENTRO DE UNA FUNCION, NO EN CUALQUIER LADO DEL PROGRAMA, YA QUE NO ESTA DEFINIDA GLOBALMENTE]

function miFuncion2() {
    var MiVariableLocal = 5;
    console.log(MiVariableLocal)
}

function miFuncion2() { //como no recibimos ningun valor, esta variable no tiene parametros, en el caso que tengamos que recibir algun valor, se necesitan parametros.
// console.log(MiVariableLocal) //Las variables locales solose pueden usar en el subprograma que fueron definidas, si vamos a otra funcion y la queremos imprimir, nos indicara que no esta definida la misma
}

miFuncion2(); //se mostrara el resultado ya que esta definido en la funcion esta

// console.log(MiVariableLocal); NO ESTA DEFINIDA YA QUE LA VARIABLE ES LOCAL (FUE DEFINIDA EN UNA FUNCION, SUBPROGRAMA), Y NO ES LOCAL, NO SE PUEDE EJECUTAR EN CUALQUIER LADO

// Ámbito global vs. ámbito local (local>global (dentro de una funcion). Cuando tenemos una variable global y una local con el mismo nombre y la ejecutamos, se mostrara la local, ya que tiene mas prioridad que la local. ejemplo abajo)

var miNombre = "Nora" //VAR es tambien para definir una variable NUEVA. si tenemos una variable local y otra global con el mismo nombre y ambas empezaron con var, tendremos dos variables distintas

function nombre() { // = subprograma
    miNombre = "gino"
    console.log(miNombre);
}

console.log(miNombre); //"nora" se mostrara el global ya que se puede usar en cualquier lado. aca queria ver que pasaba si redifinia una variable global localmente, resultado: no pasa absolutamente nada

nombre(); //invocamos subprograma. se mostrara "gino" ya que tiene mas prioridad en la funcion que la global

// Retornar un valor . las funciones pueden retornar un valor ademas de recibir valores 

function sum(a, b) {
    return a + b; //retornamos/devolvemos valor. basicamente es que tome los parametros y los sume, lo mismo que antes.
}

console.log(sum(5, 3)); //printea el retorno. parametros adentro de console log. lo dentro de los () tiene mas prioridad, por lo que les da los parametros a a y b y a la vez printea ese resultado en pantalla, lo ponemos aca ya que no pusimos console.log adentro de la funcion

//cabe destacar que antes y ahora usamos a y b para funciones, estas se pueden usar todas las veces que queramos ya que es otra funcion y las otras a y b son locales a la otra funcion por lo que no pasa nada.

//undefined (podemos no retornar un valor de la funcion, pero la funcion retorna un valor por defecto: undefined, cuando falta el return nos da undefined, ejemplo abajo.)

function su(a, b) { //definimos denuevo a y b aunque esten usadas en otros subprogramas ya que no pasa nada porque son locales, si fuesen globales, tendriamos un problema
    console.log(a + b);
    // return a + b;
}

console.log(su(5,3)); // nos muestra el 8, resultado correcto, pero tambien undefined, ya que no retorno valor a este 5 y al 3, ya que no retornamos valor, lo correcto hubiese sido poner return a + b; en la funcion y sacar el console log de adentro

// Asignar un valor retornado a una variable (retorna las variables a los parametros) es util para cuando queremos usar nuestro valor despues en el programa ya que podemos guardarlo[lo pasamos de una variable local a global])

function s(a, b) {
    return a + b;
}

var resultado = s(5, 8); //creamos variable global para cuando salga la local, tomar su valor.
console.log(resultado) //ponemos console.log resultado, y listo, ya que es el valor de return en la funcion (en vez de poner console log s (5,8)

function crearCadenaConMeta (leng) { //lo mismo que arriba pero con caracteres
    return "El coso es " + leng //retorna el valor a los parametros con "el coso es ", apra luego asignarlo a una variable global y asi imprimirlo
}

var miMeta = crearCadenaConMeta("JavaScript")
console.log(miMeta);

// [ejercicio] Permanece en fila (modoifcamos nuestros elementos como una cola. una queue es una estructura de datos abstracta en la cual los datos se mantienen en orden. los nuevos elementos se añaden al final, y los previos se eliminan del principio)

/* Define una funcion proximoEnFila que tome un arreglo y un numero como argumentos. 
Agrega el numero al final del arreglo y luego elimina el primer elemento de este. 
La funcion proximo en fila debe retornar el elemento que fue removido */

function proximoEnFila(arreglo, elemento) { //variables locales (arr y elemento)
    arreglo.push(elemento); //Agrega al final del arreglo
    return arreglo.shift();        // Remover primer valor. No toma ningun valor por lo que no hace falta poner nada entre ().
}

var Myarray = [1, 2, 3, 4, 5]

console.log("Antes: " + JSON.stringify(Myarray)); //JSON.stringify muestra los arreglos en consola (transformamos el arreglo en una cadena de caracteres con un formato especifico y la concatenamos a "anetes")

console.log(proximoEnFila(Myarray, 6)) //El primer elemento se va a eliminar y se va agregar al final de ese arreglo, ese elemento

console.log("Después: " + JSON.stringify(Myarray)); //lo mismo que antes pero despues

/* Resultado:

Antes: [1,2,3,4,5]
1
Después: [2,3,4,5,6]

*/

// Valores booleanos (true , false) [palabras reservadas: si escribimos TruE o True no será booleano, (no estara definida la variable) será variable]
// Se utilizan para condicionales, compraciones de valores y con operadores lógicos

true 
false