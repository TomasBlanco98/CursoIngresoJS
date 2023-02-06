/* Al ingresar una edad debemos informar solo si la persona es mayor de edad.
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
	let edad;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 18){
		alert("Eres mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN