/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		alert("Número no válido")
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;	
}//FIN DE LA FUNCIÓN