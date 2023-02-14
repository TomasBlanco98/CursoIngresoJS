/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
Tomas Blanco Rivas-Div x
*/

function mostrar()
{
	let valorMaximo;
	let valorMinimo;
	let numeroRandom;

	valorMaximo = 10;
	valorMinimo = 1;

	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = Math.round(Math.random() * (valorMaximo - valorMinimo) + valorMinimo);

	alert(numeroRandom);	

}//FIN DE LA FUNCIÓN