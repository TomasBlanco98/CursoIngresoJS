/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let numeroIngresado;
	let acumulador;
	let contador;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN