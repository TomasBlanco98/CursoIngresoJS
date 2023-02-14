/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Tomas Blanco Rivas-Div x */

function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Tiene 28 días")
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días")
		break;
		default:
			alert("Tiene 31 días")
		break;
	}
}//FIN DE LA FUNCIÓN