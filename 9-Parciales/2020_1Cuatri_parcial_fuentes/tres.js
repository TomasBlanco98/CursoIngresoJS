function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let bandera;
	let cantidadViudos;
	let cantidadHombresSolteros;
	let cantidadHombresViudos;
	let cantidadTemperaturaAlta;
	let edadHombresSolteros;
	let promedio;

	respuesta = 's';
	bandera = false;
	cantidadViudos = 0;
	cantidadHombresSolteros = 0;
	cantidadHombresViudos = 0;
	cantidadTemperaturaAlta = 0;
	edadHombresSolteros = 0;
	promedio = 0;

	while(respuesta == 's')
	{
		nombre = prompt("Ingrese un nombre");
		edad = parseInt(prompt("Ingrese la edad"));
		sexo = prompt("Ingrese el sexo: (f/m)");
		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt("Error. Ingrese el sexo: (f/m)");
		}
		estadoCivil = prompt("Ingrese el estado civil: (soltero/casado/viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Ingrese el estado civil: (soltero/casado/viudo)");
		}
		temperatura = parseInt(prompt("Ingrese la temperatura corporal"));

		if(bandera == false || temperatura > mayorTemperatura)
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			bandera = true;
		}

		if(edad >= 18)
		{
			if(estadoCivil == "viudo")
			{
				cantidadViudos++;
			}
		}
		else if(edad > 60)
		{
			if(temperatura > 38)
			{
				cantidadTemperaturaAlta++;
			}
		}

		if(sexo == 'm')
		{
			if(estadoCivil == "soltero")
			{
				cantidadHombresSolteros++;
				edadHombresSolteros += edad;
			}
			else if(estadoCivil == "viudo")
			{
				cantidadHombresViudos++;
			}
		}
		respuesta = prompt("Desea continuar? s/n");
	}
	if(cantidadHombresSolteros > 0)
	{
		promedio = edadHombresSolteros / cantidadHombresSolteros;
	}

	document.write(`La persona con mayor temperatura corporal es ${nombreMayorTemperatura}<br>`);
	document.write(`Hay ${cantidadViudos} personas viudas mayores de edad<br>`);
	document.write(`La cantidad de hombres solteros es ${cantidadHombresSolteros} y la cantidad de hombres viudos es ${cantidadHombresViudos}<br>`);
	document.write(`${cantidadTemperaturaAlta} personas de la tercera edad tienen temperatura mayor de 38`);
	document.write(`El promedio de edad de los hombres solteros es ${promedio.toFixed(2)}`);
}
