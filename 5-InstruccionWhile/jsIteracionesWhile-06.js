function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let suma;
	let promedio;
	let i;

	contador = 0;
	acumulador = 0;
	i = 0;

	while(i < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		i = i + 1;
	}

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN