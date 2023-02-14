/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		default:
			alert("CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN