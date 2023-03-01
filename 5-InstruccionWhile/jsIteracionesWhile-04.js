/*
De una compra debes ingresar una cantidad de 15 productos, 
validando los siguientes datos:
nombre de producto, precio, unidades, tipo(minorista o mayorista)
a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades
Tomas Blanco Rivas-Div x */
function mostrar()
{
	let i;
	let nombre;
	let precio;
	let unidades;
	let tipo;
	let acumuladorPrecios;
	let masCaro;
	let nombreMasCaro;
	let banderaMasCaro;
	let menosUnidades;
	let nombreMenosUnidades;
	let banderaMenosUnidades;

	acumuladorPrecios = 0;
	banderaMasCaro = true;
	masCaro = 0;
	menosUnidades = 0;
	banderaMenosUnidades = true;

	for(i = 0; i < 15; i++)
	{
		nombre = prompt("Ingrese el nombre del prodcuto");

		precio = parseInt(prompt("Ingrese el precio menor a 1.000.000"));
		while(precio < 0 || precio > 1000000)
		{
			precio = parseInt(prompt("Ingrese el precio menor a 1.000.000"));
		}

		unidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while(unidades < 0)
		{
			unidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		}

		tipo = prompt("Ingrese el tipo (minorista/mayorista)");
		while(tipo != "minorista" && tipo != "mayorista")
		{
			tipo = prompt("Ingrese el tipo (minorista/mayorista)");
		}

		acumuladorPrecios+= precio;

		if(tipo == "minorista")
		{
			if(banderaMasCaro == true || masCaro < precio)
			{
				masCaro = precio;
				nombreMasCaro = nombre;
				banderaMasCaro = false;
			}
		}
		if(banderaMenosUnidades == true || menosUnidades > unidades)
		{
			menosUnidades = unidades;
			nombreMenosUnidades = nombre;
			banderaMenosUnidades = false;
		}
	}

	document.write(`Precio total de la compra es $${acumuladorPrecios}`);
	document.write(`El nombre del producto más caro de tipo minorista es ${nombreMasCaro}`);
	document.write(`El nombre del producto con menos unidades es ${nombreMenosUnidades}`);
}//FIN DE LA FUNCIÓN