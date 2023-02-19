/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	respuesta = 's';

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		acumulador += numeroIngresado;
		contador++;
		respuesta = prompt("¿Quiere seguir ingresando números? esciba 's' para si o 'n' para no");
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN