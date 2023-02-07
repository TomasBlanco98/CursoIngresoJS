/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Tomas Blanco Rivas-Div x */

function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert(`La suma es ${suma}`)
}

function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert(`El promedio es ${promedio.toFixed(2)}`)
}

function PrecioFinal () 
{
    const IVA = 21;
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let precioIva

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    precioIva = suma + ((IVA * suma) / 100);

    alert(`El precio con IVA es ${precioIva}`);
}