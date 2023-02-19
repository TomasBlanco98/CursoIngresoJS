/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	numeroIngresado = parseInt(prompt("Ingrese un número"))
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;
	respuesta = prompt("¿Desea continuar? presiona 's' para si y 'n' para no");

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"))
		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		else if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		respuesta = prompt("¿Desea continuar? presiona 's' para si y 'n' para no");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN