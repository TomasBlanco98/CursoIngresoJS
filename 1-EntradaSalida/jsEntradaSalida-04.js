/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Tomas Blanco Rivas-Div x*/

function mostrar()
{
	let nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;
}

