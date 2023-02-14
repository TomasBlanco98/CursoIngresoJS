/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Tomas Blanco Rivas-Div x
*/

function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 10);

	if(nota >= 9){
		alert(`Usted se sacó ${nota}. EXCELENTE`);
	} else {
		if(nota >= 4){
			alert(`Usted se sacó ${nota}. APROBÓ`);
		} else {
			alert(`Usted se sacó ${nota}. Vamos, la próxima se puede.`);
		}
	}
}//FIN DE LA FUNCIÓN