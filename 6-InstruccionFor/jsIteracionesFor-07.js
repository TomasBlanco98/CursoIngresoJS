function mostrar()
{
	let numeroIngresado;
	let i;
	let cantidadDivisores;

	cantidadDivisores = 0;
	numeroIngresado = parseInt(prompt("Ingrese un número"));
	for(i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			document.write(`El número ${i} es divisor de ${numeroIngresado}<br>`);
			cantidadDivisores++;
		}
	}
	document.write(`La cantidad de números divisores es: ${cantidadDivisores}`);
}//FIN DE LA FUNCIÓN