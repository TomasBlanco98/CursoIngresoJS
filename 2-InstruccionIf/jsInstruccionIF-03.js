/* Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
Tomas Blanco Rivas-Div x 
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 18) {
		alert("Eres mayor de edad");
	} else {
		alert("Eres menor de edad");
	}
}//FIN DE LA FUNCIÓN