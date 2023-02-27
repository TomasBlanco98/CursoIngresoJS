/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
Tomas Blanco Rivas-Div x 
*/
function mostrar()
{
	// let i;

	// i = 0;

	// while(i < 10)
	// {
	// 	i = i + 1;
	// 	alert(`Numero ${i}`);
	// }

let estadia;
let nombre;
let lugar;
let temporada;
let dias;
let importe;
let altura;
let peso;
let sexo;
let equipaje;
let formaPago;
let respuesta;
let personasAlta;
let personasBaja;
let pesoAcumulado;
let diasGessel;
let diasMadryn;
let diasCordoba;
let maximaCantidadDias;

respuesta = 's';
dias = 0;
altura = 0;
peso = 0;
personasAlta = 0;
personasBaja = 0;
pesoAcumulado = 0;
diasGessel = 0;
diasMadryn = 0;
diasCordoba = 0;
maximaCantidadDias = 0;

while(respuesta == 's')
{
	nombre = prompt("Ingrese el nombre del titular");
	lugar = prompt("Ingrese un lugar (Puerto Madryn/Villa Gessel/Cordoba)");
	while(lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba")
	{
		lugar = prompt("Ingrese un lugar (Puerto Madryn/Villa Gessel/Cordoba)");
	}

	temporada = prompt("Ingrese una temporada(alta/baja");
	while(temporada != "alta" && temporada != "baja")
	{
		temporada = prompt("Ingrese una temporada(alta/baja");
	}

	while(dias < 1 || dias > 35)
	{
		dias = parseInt(prompt("Ingrese la cantidad de días de la estadía"));
	}

	while(altura <= 1.10 || altura >= 3)
	{
		altura = parseFloat(prompt("Ingrese la altura"));
	}

	while(peso < 10 || peso > 300)
	{
		peso = parseInt(prompt("Ingrese el peso"));
	}

	sexo = prompt("Ingrese su sexo (f, m o nb)");
	while(sexo != "f" && sexo != "m" && sexo != "nb")
	{
		sexo = prompt("Ingrese su sexo (f, m o nb)");
	}

	equipaje = prompt("Viaja con equipaje? (s/n)");
	while(equipaje != "s" && equipaje != "n")
	{
		equipaje = prompt("Viaja con equipaje? (s/n)");
	}

	formaPago = prompt("Elija la forma de pago: (mercado/tarjeta/efectivo)")
	while(formaPago != "mercado" && formaPago != "tarjeta" && formaPago != "efectivo")
	{
		formaPago = prompt("Elija la forma de pago: (mercado/tarjeta/efectivo)")
	}

	if(temporada == "alta")
	{
		personasAlta++;
	}
	else 
	{
		personasBaja++;
	}

	if(lugar == "Villa Gessel")
	{
		pesoAcumulado += peso;
		diasGessel += dias;
	}
	else if(lugar == "Cordoba")
	{
		diasCordoba += dias;
	}
	else
	{
		diasMadryn += dias;
	}
	respuesta = prompt("Desea ingresar otra estadía? (s/n)");
}
if(diasGessel > diasCordoba && diasGessel > diasMadryn)
{
	maximaCantidadDias = diasGessel;
}

document.write(`Cantidad de personas en temporada alta: ${personasAlta}<br>`);
document.write(`Cantidad de personas en temporada baja: ${personasBaja}<br>`);
document.write(`Peso acumulado de los que viajaron a Villa Gessel: ${pesoAcumulado}<br>`);


// 1 
// c- el lugar con la mayor cantidad de días acumulados
// d- la suma de todos los importes

// 2
// e-el nombre del más pesado de los pasajeros y el del más liviano
// f-el lugar donde se pagó el mayor importe
// g-el nombre de la mujer más alta

// 3
// h- Cuál fue la forma de pago más utilizada
// i- en qué temporada se viajó más
// j- qué lugar tuvo más pasajeros

// 4
// k- qué porcentaje usa equipaje de mano
// l- que porcentaje hay de cada sexo

}//FIN DE LA FUNCIÓN