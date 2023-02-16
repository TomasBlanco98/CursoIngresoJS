/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "CALOR";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN