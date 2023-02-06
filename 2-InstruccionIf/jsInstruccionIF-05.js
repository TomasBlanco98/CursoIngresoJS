/* Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Tomas Blanco Rivas-Div x
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad < 13 || edad > 17) {
		alert("No eres adolescente");
	}

}//FIN DE LA FUNCIÓN