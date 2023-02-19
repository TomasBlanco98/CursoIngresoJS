/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		alert("Clave incorrecta");
		claveIngresada = prompt("ingrese la clave.");
	}
	alert("Clave correcta");
}//FIN DE LA FUNCIÓN
