/* 
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let porcentaje;
	let precioFinal;

	estadia = 15000;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Cordoba":
					porcentaje = 0;
					break;
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
					porcentaje = 10;
					break;
			}
			break;
	} // Fin de Switch

	precioFinal = estadia + estadia * porcentaje / 100;

	alert(`$${precioFinal}`);
}//FIN DE LA FUNCIÓN