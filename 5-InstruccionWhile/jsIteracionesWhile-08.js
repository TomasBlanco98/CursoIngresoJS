/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let sumaPositivos;
	let multiplicacionNegativos;
	let respuesta;
	let numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 's';

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		if(numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos *= numeroIngresado;
		}
		respuesta = prompt("¿Quiere seguir ingresando números? escriba 's' para si o 'n' para no");
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN