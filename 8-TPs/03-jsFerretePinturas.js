/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Tomas Blanco Rivas-Div x
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centigrado;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheit = parseFloat(fahrenheit);

    centigrado = (fahrenheit - 32) / 1.8;
    alert(`${fahrenheit} Fahrenheit son ${centigrado} centígrados`);
}

function CentigradosFahrenheit () 
{
	let centigrado;
    let fahrenheit;

    centigrado = document.getElementById("txtIdTemperatura").value;
    
    centigrado = parseFloat(centigrado);

    fahrenheit = centigrado * 1.8 + 32;
    alert(`${centigrado} Centígrados son ${fahrenheit} fahrenheit`);
}
