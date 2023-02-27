// Temas explicados: Código de Golf, sentencias switch, retornos y crear objetos

/*Ejercicio de Golf --> Retorna la cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor proridad. La funcion tomara los argumentos par y golpe


Golpes       |         Retornar
----------------------------------
1                  "Hole-in-one!"
<= par - 2             "Eagle"
par - 1                "Birdie"
par                      "Par"
par + 1                "Bogey"
par + 2             "Double Bogey"
>= par + 3            "Go Home!"

par y golpes siempre seran numéricos positivos */

function codigoDeGolf(par, golpes) { //no usamos clausula auxiliar "else"
    if (golpes == 1) {
    return "Hole-in-one!"
    } else if (golpes <= par -2) { //despues de cada () va una {
        return "Eagle";
    } else if (golpes <= par -1) { //antes del else if, va una }, este es el formato que debe ser respetado.
        return "Birdie";
    } else if (golpes == par) {
    return "Par";
    } else if (golpes == par + 2) {
        return "Double Boogey";
    } else if (golpes == par + 1) {
        return "Boogey";
    } else if (golpes >= par +3) {
    return "Go Home!"
    }
}
//la funcion se detiene automaticamente una vez que el valor es retornado. necesitamos poner dos parametros numericos si o si, sino dara error. Solo la primera que sea verdadera se ejecutara

codigoDeGolf(4,1); //hole in one!. par 4, 1 golpe
codigoDeGolf(4,2); //eagle. par 4, 2 golpes
codigoDeGolf(4,3); //Birdie. 3 (golpes) <= 4-1 (par)
codigoDeGolf(4,7); //Go Home!. 7 (golpes) >= 4 (par) + 3 = 7

// Sentencias switch (según)

function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1: //en caso de que el valor de la variable sea 1 ("1"), se ejecutara este caso, sino pasa al siguiente, el else aqui es el default por si no se cumple ninguno de los casos 
        respuesta = "alpha"
                break; //siempre break para pasar al siguiente caso. sino se rompe el condicional
        case 2: 
            respuesta = "beta"
                break;
        case 3:
            respuesta = "gamma"
                break;
        case 4:
            respuesta = "delta"
                break;

                default: 
                    console.log("No se ingreso un valor valido");
                break; //esta al final pero es opcional y recomendable agregar un break despues de default
            }   
            return respuesta;
        }    

clasificarValor(1) // alpha
clasificarValor(2) //beta
clasificarValor(3) //gamma
clasificarValor(4) //delta
clasificarValor(5) //"No se ingreso un valor valido"

var producto = "hamaurgesa";

switch (producto) {
    case "pizza": //siempre : al final. con cadenas de caracteres, en vez de poner case 1, ponemos case y la cadena de caracteres **recordar que js es case sensitive** si ponemos piZza, no ejecutara este bloque de codigo
        console.log("La pizza básica cuesta $10.55")
            break;
    case "hamburgesa": //si producto es hamburgesa, se ejecuta hamburgesa. si producto es hamBurGESA, no se ejecuta nada, porque no hay un default
        console.log("Las hamburgesas cuestan $6.78")
        break;
    case "helado":
        console.log("El helado cuesta $2.65")
        break;
}

//  Sentencias switch: opción predeterminada (default:)

//  Sentencias switch: Múltiples casos

function clasificarVolumen(valor) {
    var volumen;
        switch (valor) { //switch (x), lo que esta entre () significa de la variable de la que depende switch
            case 1:
                volumen = "bajo";
                break;
            case 2: // se puede hacer con 2+, como abajo (si entra al 2, se ejecuta el 3) (si es 3, se ejecuta el 3) (el 2 no tiene nada) si queremos que tanto el dos y el 3 nos den el mismo resultado en switch, hacemos esto.
            case 3:
                volumen = "intermedio"
                break;
            case 4:
            case 5:
            case 6:
                volumen = "alto";
                break;
        }
        return volumen; //siempre va el return y siempre entre las dos llaves finales.
}

console.log(clasificarVolumen(5)) //alto. necesitamos console.log porque el return no se imprime solo. 
// no hay defualt por lo que si ponemos otro numero 1-6 = UNDEFINED

// Reemplazar "if...else" por "switch" (a veces las sentencias switch se pueden hacer con if's y viceversa)

function seleccionarIdioma(valor) {
    var idioma;

    if (valor == 1) {
        idioma = "es";
    } else if (valor == 2) {
        idioma = "fr"
    } else if (valor == 3) {
        idioma = "italiano"
    } else {
        idioma = "en"
    }
    return idioma;
    }

seleccionarIdioma(2); //"fr"
seleccionarIdioma(5); //"en"
seleccionarIdioma(3); //"italiano"

//esto se puede hacer perfectamente con un switch, es para demostarar que switch puede ser reemplazado por if.

function seleccionarIdiom(valor) {
    var idioma;

    switch(idioma) {
    case 1:
    idioma = "es";
    break;
    case 2:
        idioma = "fr"
        break;
    case 3:
        idioma = "italiano"
        break;
    default:
        idioma = "en"
        break;
    }
    return idioma;
}

seleccionarIdiom(2); //"fr" le cambiamos el nombre si no va a entrar a la otra funcion, aunque sea lo mismo. se pueden crear funciones con el mismo nombre pero con diferencias entre minus y mayus para que no entre en una en vez de otra
seleccionarIdiom(5); //"en"
seleccionarIdiom(3); //"italiano"

function prueba() {
    console.log(1);
}

function pruebA() {
    console.log(2);
}

prueba(); //entra correctamente en las 2. asegurarse que tengan ALGO distinto porque sino se metera en la otra
pruebA();

// Retornar valores booleanos

function esMenorQue(a, b) { //vamos a ver si a es menor que b, si es asi, retornamos true, sino false.
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

//podemos hacer esto de arriba, o lo de ababjo que es mas corto y consisco.

function esMenoRQue(a, b) {
    return a < b; //solo que retorne true or false en relacion a esta operacion, mucho mas corto que el de arriba
}

console.log(esMenoRQue(6, 3)); //false. 6 no es menor que 3. tambien si los valores son iguales es falso ya que no tenemos =<

// Patrón de retorno anticipado (cuando retornamos valor de una funcion, esta se detiene completamente)

function miFuncion() {
console.log("Hola");
return "Mundo";
console.log("Adios") //esta linea es unreachable. NUNCA SE VA A EJECUTAR YA QUE TIENE UN DEFUALT ANTES, QUE PARA TODA LA FUNCION.
}

miFuncion(); //esto solo imprime en pantalla "Hola"
console.log(miFuncion()); //esto imprime la funcion, y el return con este console.log

function calcualarRaizCuadrada(num) {
    if (num < 0) { //como el numero es negativo, cortamos la funcion y retornamos "undefined" cuando se llame a la variable.
    return undefined; //ESTE ES EL RETORNO ANTICIPADO
    } //ni hace falta poner el else.
    return Math.sqrt(num); 
}

calcualarRaizCuadrada(-1); //undefined. no se ejecuta sqrt porque se corta con el return, en el otro caso, ponemos el otro return para que nos de la sqrt
calcualarRaizCuadrada(25); //5

//NaN ---> Not a number (no es un número válido)

/* Contar cartas (altas y bajas, blackjack)

- Cuando el conteo es positivo, el jugador deberia apostar alto
- Cuando el conteo es negativo, el jugador deberia apostar bajo.

    Cambio del conteo      |        Cartas
------------------------------------------------------

        + 1                       2,3,4,5,6
        0                          7,8,9 (no sirve para nada poner 7,8,9 en el conteo ya que el contador permanece en 0)
        - 1                    10, J, Q, K, A

Nuestra meta es definir una función para contar cartas. 

La función debe tomar un parámetro carta que puede ser 
un número o una cadena de caracteres y luego aumentar 
o reducir el valor de la variable global conteo 
de acuerdo al valor de la carta (observa la tabla). 

La función debe retornar una cadena de caracteres con el 
conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador 
("Apostar" o "Esperar") deben estar separados por un espacio. */

var conteo = 0; //var global.

function contarCartas(carta) {
var decision; //var local.

switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;
}

if (conteo > 0) {
    decision = "Apostar";
} else {
    decision = "Esperar";
}

return conteo + " " + decision; //se pueden concatenar valores a return.
}

contarCartas(2); //1 Apostar
contarCartas(3); //1 Apostar
contarCartas(7); //2 Apostar
contarCartas("K"); //1 Apostar
contarCartas("A"); //0 Esperar

// Crear objetos (sintaxis abajo) (nos permiten guardar un conjunto de propiedades que estan conectadas a sus valores)
// Se pueden usar numeros como PROPIEDADES  Y SE PUEDEN OMITIR LAS "" SI EL STRING ES DE 1 PALABRA, COMO EN EL CASO DE ABAJO.

var miPerro = { //var y despues = {
    nombre: "Gino", //se usa : y , al final para crear objetos.
    "edad": 5, //edad ---> propiedad. 5 ---> valor/objeto, asi en todos los casos sig. ES UN OBJETO
    peso: 6,
    "raza": Beagle //EL 2DO (OBJETO/VALOR) ES AUTOMATICAMENTE CONVERTIDO A CADENA POR JS POR LO QUE NO HACE FALTA PONER "" en este caso .no lleva , el ultimo par cuando creamos elemento, como en este caso.
}; // termina con }; 

var miObjeto = {
    5: "cinco"
};