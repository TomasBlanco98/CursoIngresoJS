/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCero;
	let contadorPares;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;

	sumaNegativos = 0;
	sumaPositivos = 0;
	respuesta = 's';
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCero = 0;
	contadorPares = 0;
	promedioNegativos = 0;
	promedioPositivos = 0;

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
		} 
		else if(numeroIngresado == 0)
		{
			contadorCero++;
		}
		else 
		{
			sumaNegativos += numeroIngresado;
			contadorNegativos++;
		}
		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}
		respuesta=prompt("¿Desea continuar? presiona 's' para si y 'n' para no");
	}

	if (contadorPositivos != 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
	}
	diferencia = sumaPositivos + sumaNegativos;

	document.write(`la suma de negativos es: ${sumaNegativos}<br>`);
	document.write(`la suma de positivos es: ${sumaPositivos}<br>`);
	document.write(`la cantidad de positivos es: ${contadorPositivos}<br>`);
	document.write(`la cantidad de negativos es: ${contadorNegativos}<br>`);
	document.write(`la cantidad de ceros es: ${contadorCero}<br>`);
	document.write(`la cantidad de numeros pares es: ${contadorPares}<br>`);
	document.write(`el promedio de negativos es: ${promedioNegativos}<br>`);
	document.write(`el promedio de positivos es: ${promedioPositivos}<br>`);
	document.write(`la diferencia es: ${diferencia}`);
}//FIN DE LA FUNCIÓN