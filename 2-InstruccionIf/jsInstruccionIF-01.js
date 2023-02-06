/* Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
Tomas Blanco Rivas-Div x
*/

function mostrar()
{
	let edad;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);
	
	if(edad == 15) {
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN