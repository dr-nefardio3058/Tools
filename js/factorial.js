// "maquina de factoriales, ingresar de parametro el numero a ser factorial y lo imprimira con el console.log"

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial(5)); //120, ponemos como parametro 5 para que nos de el facotrial de 5