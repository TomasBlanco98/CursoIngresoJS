/*

Tomas Blanco Rivas-Div x */
function mostrar()
{
	// INICIO WHILE
	while(respuesta = 's')
	{

		respuesta = prompt("Desea continuar? (s/n)");
	}

	// INICIO FOR
	for(i = 0; i < cantidadVeces; i++)
	{

	}

	// VALIDACIÓN SEXO
	sexo = prompt("Ingrese el sexo (f/m/nb)");
		while(sexo != 'f' && sexo != 'm' && sexo != 'nb')
		{
			sexo = prompt("Ingrese el sexo (f/m/nb)");
		}

	// VALIDACIÓN EDAD (entre dos parámetros numeros)
	edad = parseInt(prompt("Ingrese una edad mayor a 18"));
	while(edad < 18 || edad > 120)
	{
		edad = parseInt(prompt("Ingrese una edad mayor a 18"));
	}

	// VALIDACIÓN MAXIMO / MINIMO
	if(banderaMaximo == true || precioMaximo < precio)
	{
		precioMaximo = precio;
		banderaMaximo = false;
	}
	if(banderaMinimo == true || precioMinimo > precio)
	{
		precioMinimo = precio;
		banderaMinimo = false;
	}

	// COMPARAR CONTADORES
	if(contadorCasa > contadorDpto && contadorCasa > contadorQuinta)
	{
		viviendaMasElegida = "casa";
	}
	else if(contadorDpto > contadorQuinta)
	{
		viviendaMasElegida = "dpto";
	}
	else
	{
		viviendaMasElegida = "quinta";
	}
}//FIN DE LA FUNCIÓN