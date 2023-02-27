// Temas explicados: Operadores, sentencias condicionales y cláusulas

// Operador de igualdad [==](se pueden comparar valores [==] para ver si son iguales o no)

console.log(5 == 5); //(5 == 5) es una expresion, la cual evalueara verdadero o falso. estamos comparando dos valores, en este caso 5 y 5 para ver si son iguales, equivalentes. El resultado de esto será un booleano, que puede ser true or false; en este caso, será true
console.log("Hola" == "Chau"); // a la vez se peuden comprarar cadenas de caracteres; en este caos como no son iguales, el resultado impreso en consola es false.
console.log(6 == 5); //false, comparamos y no es verdadera la igualdad.
console.log("a" == "A"); //false, porque acordarse que javascript es case sensitive 
console.log([1, 2, 3] == [1, 2, 3]) //false, no se deberian comprar arreglos con este operador. Solo compara el objeto de los arreglos

var booleano = (5 == 5) //le podemos asignar el valor de la comparacion a una variable, por si queremos usarla luego.
console.log(booleano)

// Operador de igualdad estricta [===]nos permite comparar tipos de datos)

console.log(9 == "9"); //true. durante la comparacion [==] los valores se convierten a un tipo de dato comun. los daaunque representan distintos tipos de datos, representan el mismo valor o cosa, por lo que el resultado es true 
console.log(9 === "9") //false. estamos comparando un numero con una cadena, obvio que no es igual para la igualdad estricta [===] aca nada de comillas ni nada. aca, durante la comparacion, los valores no se transforman a un tipo de dato comun, comparando si el tipo de dato es el mismo exclusivamente, y si no lo es, como en este CacheStorage, el reusltado sera false. 
console.log(9 === 9) //true. es el mismo tipo de dato y el mismo valor

// Practica cómo comparar valores

var a;
var b;

a = 5;
b = 5;

// console.log(a == b); true. mismo valor, no importaria si estaria con "" el otro 5 igual seria true, pero no es la [=== igualdad estricta]
// console.log(a === b); true. mismo valor, y mismo tipo de dato en ambos parametros (variables)

b = 8;

console.log(a == b); //false. distintos valores.
console.log(a === b); //false. mismo tipo de dato, pero valores distintos. no es posible una igualdad con dos numeros diferentes

b = "5";

console.log(a == b); //true. como se convierten los valores a un valor comun y tienen el mismo comun, no hay problema
console.log(a === b);  //false. aqui no se convierten los tipos de datos, por lo que 5 no es igual a "5"

a = "JavaScript";
b = "JavaScript";

console.log(a == b); //true. Mismo valor, y ademas mismo tipo de dato (aunque no hacia falta pero bueno)
console.log(a === b); //true. mismo tipo de dato, y tambien el exacto mismo valor. Si hubiesemos puesto JavaSCrPTt, ambos casos hubiese sifdo falso, ya que los valores no coinciden.

// Operador de desigualdad (!=) (compara dos valores, pero al reves del anterior: si los valores son iguales retorna false, si son distintos, true.)

console.log(9 != 6); //true. 9 no es igual a 6.
console.log(9 != 9); //false. 9 es igual a 9. es lo opuesto al operador de igualdad
console.log("JavaScritpt" != "JavaScript") //true. javascritpt no es igual a javascript

console.log([1, 2, 3] == [1, 2, 3]) //true, pero deberia ser false. no se debe usar igualdad o desigualdad para comparar arreglos ya que compara el espacio en la memoria y no los numeros explicitos de los arrays.

// Operador de desigualdad estricta [!==](operador que es similar al de igualdad estricta pero al reves)

console.log(1 != "1"); //falso, 1 es igual a "1". es el mismo valor. la igualdad/ desigualdad [no estricta] transforma los valores a un tipo de dato comun, por lo que son iguales

console.log(1 !== "1"); //true, igual pero al reves que el otro. mismo valor pero distinto tipo de dato, y aca no se convierten los datos a un dato comun. si, 1 no es igual a "1"

// Operador mayor que > (podemos comparar valor relativo de los valores)

console.log(6 > 5); //true
console.log(3 > 10); //false

console.log("B" > "A") //ture. > es mas adentro en el diccionario, y viceversa con <. es por orden alfabetico invertido la comparacion d ecaracteres. estamos diciendo si la letra b viene despues de a, caso correcto
console.log("ACB" > "ABC"); //true. el primer par AA es igual y no se compara, luego se compara la c con la b, y claro, c es mas que b, esta mas adentro del alfabeto, por lo que es true, solo compara un par, no importa si el ultimo par daria como resultado false "A B."

console.log("AB" > "A") //true. es verdadero porque tiene + caracetres. b no se compara a nada por lo que es true.
console.log("Mundo" > "Hola"); //true. Se compara el par 1: M y H, y si, M esta mas adentro que H en el diccionario
// console,log("M" > "H" ) //True. lo mismo que arriba pero con el primer par solo, 1 letra nada mas. M va despeus que H, por lo que es mayor.

var c = 15;
var d = 7;

console.log( c > d); //true. 15>7. el ejemplo es para mostrar que tambien se pueden comparar varaibles con este operador
console.log( d > c); //false. 7 no es mayor a 15.

// Operador mayor o igual que >= (carita triste) (nos permite incluir el caso en el que ambos casos sean iguales [a diferencia del anterior])

console.log(5 > 5); //false. 5 no es MAYOR que 5
console.log( 5 >= 5); //true. 5 es mayor o IGUAL a 5

// Operador menor que (<)

console.log(5 < 6); //true. 5 es menor que 6
console.log(10 < 3) //false. 10 no es menor que 3

console.log("A" < "B"); //TRUE. A VIENE ANTES QUE B EN ORDEN ALFABETICO, ES MENOS QUE B, ESTA ANTES EN EL DICCIONARIO. por orden alfabetico
console.log("ABC" < "ACB") //true. se omite el primer par, y se pasa al segundo, y si, b esta antes que c en el diccionario (es menor) a- , z+

var a = 15;
var b = 6;

console.log(a < b); //false. 15 no es menor que 6
console.log(b < a); //true. 6 es menor que 15.

// Operador menor o igual que <= (carita feliz) (lo mismo que mayor o igual que pero al reves, nos permite incluir si el valor es igual, a diferencia del otro. tambien sirve para cadenas de caracteres. )

console.log(5 <= 5); //true. 5 es menor o IGUAL a 5.
console.log("A" <= "B") //true. a es menor que b. Mismo resultado si ponemos A <= A

// Operadores lógicos

// "and" (y) &&

/*
    Tabla de verdad del operador AND
    Para: X && Y (los valores de abajo son los que corresponden, 111: si X es true, y es true, por tanto X && Y son true.)
    
    |   X   |    Y   | X && Y |
    ---------------------------
    |    T  |    T   |    T   |
    |    T  |    F   |    F   |
    |    F  |    T   |    F   |
    |    F  |    F   |    F   |

Si una condicion es falsa, X && Y sera falsa, de ser las dos verdaderas (primer caso) and será true */

console.log(true && true); //true. ambos valores son verdaderos.
console.log(false && true); //falso. al menos 1 valor es falso

var a = 8;

console.log((a > 5 ) && (a < 10)); //true. asi se debe escribir si queremos hacer algo con esta funcion ((x < x) && (x<x)); > 5, 8 < 10
console.log((a < 5) && (a > 10)); //false. Ninguna de las dos es verdadera. 8 no es menor que 5 ni mayor a 10.

// "or" (o) ||

/*
    Tabla de verdad del operador OR
    Para: X || Y (los valores de abajo son los que corresponden, 111: si X es true, y es true, por tanto X && Y son true.)
    
    |   X   |    Y   | X || Y |
    ---------------------------
    |   T   |    T   |    T   |
    |   T   |    F   |    T   |
    |   F   |    T   |    T   |
    |   F   |    F   |    F   |

La expresión es verdadera si uno o ambos operandos son verdaderos*/

console.log(true && true); //true. ambas son verdaderas.
console.log(true && false); //true. al menos 1 true.
console.log(false && true); //true. al menos 1 true.
console.log(false && false);  //false. Ningún true.

// var a = 8;

console.log((a < 5 ) || (a > 15)); //false. ambas son falsas.
console.log((a > 5 ) || (a > 15)); //true. al menos 1 verdadera: 8 es mayor que 5.

// "not"(negar el valor de verdad, negar una expresion) !X

/*
    Tabla de verdad del operador NOT
    Para: !X
    
    |   X   |   !X  | 
    ------------------
    |   T   |    F   | (convertimos el resultado al opuesto: si la expresion es true, dara como resultado false y viceversa)   
    |   F   |    T   |    
    */

console.log(!true); //false (!switchea el valor)
console.log(!false); //true (!switchea el valor)

// var a = 8;

console.log(!(a > 5)); //false. asi es la sintaxis para este tipo de operaciones (!(x)); not a > 5. 8 es mayor que 5 true, pero da como resultado false porque lo cambia.
console.log(!(a < 5)); //true. como es falso, 8 no es menor a 5, pero el not lo cambia y da como resultado true

// Sentencias condicionales (permite decidir si un bloque de codigo se ejecuta o no segun una condicion)
// "if" asi es la sintaxis de if () {}

var x = 5;

if (x >= 2 && x < 10) { //5 es mayor que 2, si. entra al bloque. si ponemos false, nunca se ejecutara el if. si ponemos condicion true siempre se va a ejecutar ya que la condicion es verdadera.
    console.log("La condición es verdadera")
}

var estacion = "Invierno"

if(estacion == "Invierno") { //se utiliza el == siempre en el if para comparacion.
    console.log("invierno")
}

console.log("Después del condicional")

// Cláusula "else" (si no,) (nunca se ejecutan los dos) (expandir condicionales)

// var x = 5;

if (x < 2) { // 5 no es menor que 2, se ejecuta el else y se sale del bloque.
    console.log("La condicion es verdadera")
    } else { //asi se debe escribir ELSE. recibiendo la llave de if } y abriendo otra { y else en medio.
    console.log("La condicion es falsa")
}

// var estacion = "Invierno"

if (estacion === "Verano") { ///se puede usar == o === para verificar el tipo de dato, es lo mismo, a no ser que sean numeros es mejor usar ==
    console.log("verano")
} else { //respaldo. siempre va despues de if.
    console.log(" no es verano")
}

// Cláusula "else if" (los condicionales pueden manejar y verificar varias condiciones)
//forma correcta de escribir un codigo con if , elif y else.

function clasificarValor(valor) { //solo un bloque se va a ejecutar, la primera que coincida con verdadera.
    if (valor % 2 == 0) { //si el valor es divisible entre 2, osea su resto es 0, ejecuta el if.
    console.log("Divisible entre 2");
    } else if (valor % 3 == 0) { //else if es independiente al primer if solo, si es rechazado, viene a este como respaldo, y si if y else if son falsas, se pasa al else. tambien debe estar escrito entre llaves.
    console.log("Divisible entre 3"); 
    } else { // si las dos de arriba son falsas, se ejecuta el else.
    console.log("No es divisible entre las opciones");
    }   
}  

clasificarValor(2); //"Divisible entre 2"
clasificarValor(15); //"Divisible entre 3"
clasificarValor("35.4"); //Como no tenemos igualdad restricta === podemos poner otro tipo de valor ya que lo convierte a valor comun con la variable y el parametro. "No es divisible entre las opciones"

// Condicionales: orden lógico (if>else if>else[respaldo])

function lasificarValor(valor) { 
    if (valor < 5) { 
    console.log("Menor que 5");
    } else if (valor < 10) {
    console.log("Menor que 10"); 
    } else { //si ninguna es verdadera, se ejecuta el else.
    console.log("Mayor o igual a 10");
    }
}

lasificarValor(2); //"Menor que 5" (solo se ejecuta la primera, aunque haya mas verdaderas, y esta era la primer condicion verdadera, por eso se ejecuto) debemos pasar un parametro, sino dara error
lasificarValor("7"); //"Menor que 10". No hay === por lo que podemos poner cualquier tipo de dato, siempre que coincidan.

// Encadenar sentencias if...else (solo se ejecutara 1)

function bmi(valor) { //(body mass index)
    if (valor < 18.5) {
        console.log("Pesas poco");
    } else if (valor <= 24.9) {
        console.log("Peso normal")
    } else if (valor <= 29.9) { 
    console.log("Sobrepeso")
    } else {
    console.log("Obeso")
    }
}

bmi(22.2); //"Normal", solo se ejecuta la primera verdadera, como esta mas cerca del 25 que del 18 (la del 18 nada mas se ejecuta cuando el peso es menor, por lo que si ponemos 18.6 nos dara peso medio), se ejecuta la 2da.
bmi(28); //Sobrepeso, se ejecuta el 3 elif ya que esta en el rango < 30, muy cerca del 30.
bmi(2); //"Pesas poco" , la primera es verdadera (las otras tambien) pero solo se ejecuta esta porque esta primera, sino se ejecutarian las 3.
bmi(232); //"Obeso", ninguna se cumple, ejecutando el else.