<!-- What is PHP?
PHP is an acronym for "PHP: Hypertext Preprocessor"
PHP is a widely-used, open source scripting language
PHP scripts are executed on the server -->

<!-- - PHP files can contain text, HTML, CSS, JavaScript, and PHP code
- PHP code is executed on the server, and the result is returned to the browser as plain HTML -->

<!-- What Can PHP Do?
PHP can generate dynamic page content
PHP can create, open, read, write, delete, and close files on the server
PHP can collect form data
PHP can send and receive cookies
PHP can add, delete, modify data in your database
PHP can be used to control user-access
PHP can encrypt data -->

<!-- CASE SENSITIVENESS: -->

<!-- In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.: ECHo, EcHo, ECHO, etc. -->
<!-- Sin embargo, las variables SI son case sensitive : $color1 ≠ $coLoR1 ≠ $cOLOR1 -->

<!DOCTYPE html>
<html>
<body>

<?php // T0DO LO RELACIONADO AL PHP VA ACÁ. QUE TERMINA EN LA LINEA 44 CON EL ? >

// COMENTARIO DE UNA LINEA DENTRO DEL PHP

# COMENTARIO DE UNA LINEA DENTRO DEL PHP

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/

echo "My first PHP script!"; //echo = print

$x = 5 /* + 15 comentario en codigo*/;
$y= 7;
echo $x+ $y;

?> <!--TERMINA EL PHP, tenemos que usar comentarios HTML-->

<!-- PARA DEFINIR VARIABLES UTILIZAMOS $ Y PARA USARLAS TAMBIEN -->
<!-- PHP statements end with a semicolon (;). -->

<!-- Code injected by live-server LO PONE AUTOMATICO LIVE SERVER EXTENSION -->

<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>

<!-- strlen: string length -->
<!-- strrev: reverse string (al reves) -->

<!-- $echo strlen ("Hi") -->

<!-- Replace the word "World" with the word "Dolly".
// world se remplaza por dolly en la variable $oldtxt

$oldtxt = "Hello World!";
$newtxt = str_replace("World", "Dolly", $oldtxt); -->