/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Tomas Blanco Rivas-Div x
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    perimetro = 2 * largo + 2 * ancho;

    alambre = perimetro * 3;

    alert(`La cantidad de metros de alambre es ${alambre}`);
}
function Circulo () 
{
    const PI = 3.14; 
    let radio;
    let circunferencia;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    circunferencia = 2 * PI * radio;
    console.log(circunferencia);

    alambre = circunferencia * 3;

    alert(`La cantidad de metros de alambre es ${alambre.toFixed(2)}`);
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let bolsasCemento;
    let bolsasCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    area = largo * ancho;
    bolsasCemento = area * 2;
    bolsasCal = area * 3;

    alert(`Se necesitan ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);
}