/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Tomas Blanco Rivas-Div x */
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let bandera;

	bandera = false;
	respuesta = 's';

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"))
		if(bandera == false || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		if(bandera == false || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			bandera = true;
		}
		respuesta = prompt("¿Desea continuar? presiona 's' para si y 'n' para no");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN