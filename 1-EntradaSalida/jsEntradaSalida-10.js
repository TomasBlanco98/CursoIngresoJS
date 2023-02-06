/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Tomas Blanco Rivas-Div x */

function mostrarAumento()
{
	let importe;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);
	resultado = importe - ((25 * importe) / 100);

	document.getElementById("txtIdResultado").value = resultado;
}
