function mostrar()
{
	let i;
	let numeroIngresado;
	let cantidadPares;

	cantidadPares = 0;
	numeroIngresado = parseInt(prompt("Ingrese un número"));

	for(i = 1; i <= numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			document.write(`El número ${i} es par<br>`);
			cantidadPares++
		}
	}
	document.write(`La cantidad de numeros pares es: ${cantidadPares}`);
}//FIN DE LA FUNCIÓN