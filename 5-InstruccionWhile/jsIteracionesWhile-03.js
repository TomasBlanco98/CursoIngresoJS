/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a 
Bariloche con un grupo de personas, de cada persona debemos optener los siguientes datos:
nombre,
obra Social ("PAMI", "OSDE" o "otras"),
edad(solo pueden ir mayores de edad),
temperatura corporal(validar) 25 - 43
y sexo (validar). f, m, nb
NOTA:el precio por pasajero es de $9000.

Se debe informar (solo si corresponde):
a) La cantidad de personas con PAMI de mas de 60 años.
b) El nombre y temperatura de la mujer OSDE mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

Tomas Blanco Rivas-Div x */
function mostrar()
{
	const PRECIOPASAJERO = 9000;
	let nombre;
	let obraSocial;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let respuesta;
	let contadorPersonasMayoresPami;
	let temperaturaMinima;
	let nombreTemperaturaMinima;
	let edadMinima;
	let banderaEdadMinima;
	let precioFinal;
	let contadorPasajeros;
	let contadorPasajerosPami;
	let porcentaje;
	let precioDescuento;

	respuesta = 's';
	contadorPersonasMayoresPami = 0;
	temperaturaMinima = 0;
	edadMinima = 0;
	banderaEdadMinima = false;
	precioFinal = 0;
	contadorPasajeros = 0;
	contadorPasajerosPami = 0;
	porcentaje = 0;

	while(respuesta == 's')
	{
		nombre = prompt("Ingrese el nombre");
		
		obraSocial = prompt("Ingrese obra social (pami/osde/otras)");
		while(obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otras")
		{
			obraSocial = prompt("Ingrese obra social (pami/osde/otras)");
		}

		edad = parseInt(prompt("Ingrese una edad mayor a 18"));
		while(edad < 18 || edad > 120)
		{
			edad = parseInt(prompt("Ingrese una edad mayor a 18"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese una temperatura corporal entre 25 y 43"));
		while(temperaturaCorporal < 25 || temperaturaCorporal > 43)
		{
			temperaturaCorporal = parseInt(prompt("Ingrese una temperatura corporal entre 25 y 43"));
		}

		sexo = prompt("Ingrese el sexo (f/m/nb)");
		while(sexo != 'f' && sexo != 'm' && sexo != 'nb')
		{
			sexo = prompt("Ingrese el sexo (f/m/nb)");
		}

		if(obraSocial == "pami")
		{
			if(edad > 60)
			{
				contadorPersonasMayoresPami++;
			}
			contadorPasajerosPami++;
		}
		else if(obraSocial == "osde")
		{
			if(sexo == 'f')
			{
				if(banderaEdadMinima == false || edadMinima > edad)
				{
					edadMinima = edad;
					temperaturaMinima = temperaturaCorporal;
					nombreTemperaturaMinima = nombre;
					banderaEdadMinima = true;
				}
			}
		}
		contadorPasajeros++;
		respuesta = prompt("Desea ingresar otro pasajero? s/n");
		while(respuesta != 's' && respuesta != 'n')
		{
			respuesta = prompt("Desea ingresar otro pasajero? s/n");
		}
	}

	precioFinal = PRECIOPASAJERO * contadorPasajeros;

	porcentaje = contadorPasajeros / contadorPasajerosPami * 100;

	if(porcentaje > 50)
	{
		precioDescuento = precioFinal - precioFinal * 25 / 100;
	}

	document.write(`La cantidad de personas con PAMI de mas de 60 años es ${contadorPersonasMayoresPami}<br>`);
	document.write(`El nombre de la mujer OSDE mas joven es ${nombreTemperaturaMinima} y su temperatura es ${temperaturaMinima}<br>`);
	document.write(`El viaje total sin descuento es ${precioFinal}<br>`);
	if(!isNaN(precioDescuento))
	{
		document.write(`El viaje total con descuento es ${precioDescuento}`);
	}

	/*"Inmobiliaria" Se esta migrando la base de datos y necesitamos ingresar los datos nuevamente hasta que queramos:
	Hasta que el usuario quiera,se pide :
	Tipo(dpto ,casa , quinta)solo estos tres tipos
	Nombre
	Saldo a favor o encontra
	Lugar(CABA, PCIA, INTERIOR)
	Cantidad de inquilinos(entre 1-5 para casa, 1-3 dpto, 4-10 quinta)


	Informar SOLO SI HAY
	a) el NOMBRE del del que más debe y vive en quita
	b) el Lugar donde vive el que más saldo a favor tiene
	c) el tipo de vivienda más elegido 
	d) el promedio del saldo a favor que hay

	let tipo;
	let nombre;
	let saldo;
	let lugar;
	let cantidadInquilinos;
	let respuesta;
	let nombreSaldoEnContraMaximo;
	let saldoEnContraMaximo;
	let banderaSaldoEnContraMaximo;
	let saldoAFavorMaximo;
	let banderaSaldoAFavorMaximo;
	let lugarSaldoAFavorMaximo;
	let contadorCasa;
	let contadorDpto;
	let contadorQuinta;
	let viviendaMasElegida;
	let acumuladorSaldoAFavor;
	let contadorSaldoAFavor;
	let promedioSaldoAFavor;

	respuesta = 's';
	saldoEnContraMaximo = 0;
	banderaSaldoEnContraMaximo = false;
	saldoAFavorMaximo = 0;
	banderaSaldoAFavorMaximo = false;
	contadorCasa = 0;
	contadorDpto = 0;
	contadorQuinta = 0;
	saldoAFavorTotal = 0;
	contadorSaldoAFavor = 0;
	promedioSaldoAFavor = 0;
	acumuladorSaldoAFavor = 0;
	
	while(respuesta == 's')
	{
		tipo = prompt("Ingrese el tipo de hogar (dpto, casa, quinta)");
		while(tipo != "dpto" && tipo != "casa" && tipo != "quinta")
		{
			tipo = prompt("Ingrese el tipo de hogar (dpto, casa, quinta)");
		}

		nombre = prompt("Ingrese el nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Ingrese el nombre");
		}

		saldo = parseInt(prompt("Ingrese el saldo a favor o en contra en dolares entre -500.000 y 500.000"));
		while(isNaN(saldo) || saldo > 500000 || saldo < -500000)
		{
			saldo = parseInt(prompt("Ingrese el saldo a favor o en contra en dolares hasta -500.000 y 500.000"));
		}

		lugar = prompt("Ingrese el lugar (caba/pcia/interior)");
		while(lugar != "caba" && lugar != "pcia" && lugar != "interior")
		{
			lugar = prompt("Ingrese el lugar (caba/pcia/interior)");
		}

		if(tipo == "casa")
		{
			cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 1 y 5"));
			while(cantidadInquilinos < 1 || cantidadInquilinos > 5)
			{
				cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 1 y 5"));
			}
		}
		else if(tipo == "dpto")
		{
			cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 1 y 3"));
			while(cantidadInquilinos < 1 || cantidadInquilinos > 3)
			{
				cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 1 y 3"));
			}
		}
		else
		{
			cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 4 y 10"));
			while(cantidadInquilinos < 4 || cantidadInquilinos > 10)
			{
				cantidadInquilinos = parseInt(prompt("Ingrese la cantidad de inquilinos entre 4 y 10"));
			}
		}

		if(saldo >= 0)
		{
			if(banderaSaldoAFavorMaximo == false || saldoAFavorMaximo < saldo)
			{
				saldoAFavorMaximo = saldo;
				lugarSaldoAFavorMaximo = lugar;
				banderaSaldoAFavorMaximo = true;
			}
			contadorSaldoAFavor++;
			acumuladorSaldoAFavor+=saldo;
		}
		else 
		{
			if(tipo == "quinta")
			{
				if(banderaSaldoEnContraMaximo == false || saldoEnContraMaximo > saldo)
				{
					saldoEnContraMaximo = saldo;
					nombreSaldoEnContraMaximo = nombre;
					banderaSaldoEnContraMaximo = true;
				}
			}
		}

		if(tipo == "casa")
		{
			contadorCasa++;
		}
		else if(tipo == "dpto")
		{
			contadorDpto++;
		}
		else
		{
			contadorQuinta++;
		}

		respuesta = prompt("Desea continuar? s/n");
		while(respuesta != 's' && respuesta != 'n')
		{
			respuesta = prompt("Desea continuar? s/n");
		}
	}// fin while

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

	if(contadorSaldoAFavor > 0)
	{
		promedioSaldoAFavor = acumuladorSaldoAFavor / contadorSaldoAFavor;
	}

	document.write(`el NOMBRE del que más debe y vive en quinta es ${nombreSaldoEnContraMaximo}`);
	document.write(`el Lugar donde vive el que más saldo a favor tiene es ${lugarSaldoAFavorMaximo}`);
	document.write(`el tipo de vivienda más elegido es ${viviendaMasElegida}`);
	document.write(`el promedio de saldo a favor es ${promedioSaldoAFavor}`);
	*/
}//FIN DE LA FUNCIÓN