/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Tomas Blanco Rivas-Div x */

function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	resultado = ((10 * sueldo)/ 100) + sueldo;

	document.getElementById("txtIdResultado").value = resultado;
}
