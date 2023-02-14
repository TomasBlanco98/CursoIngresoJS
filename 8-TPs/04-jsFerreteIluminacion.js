/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Tomas Blanco Rivas-Div x
 */

function CalcularPrecio () 
{
 	const PRECIOLAMPARA = 35;
    let cantidadDeLamparas;
    let precioFinal;
    let marca;
    let impuesto;
    let porcentaje;

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    porcentaje = 0;

    if(cantidadDeLamparas >= 6)
    {
        porcentaje = 50;
    } 
    else if(cantidadDeLamparas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            porcentaje = 40;
        }
        else 
        {
            porcentaje = 30;
        }
    } 
    else if(cantidadDeLamparas == 4) 
    {
        if(marca == "FelipeLamparas" || marca == "ArgentinaLuz") {
            porcentaje = 25;
        }
        else 
        {
            porcentaje = 20;
        }
    }
    else if(cantidadDeLamparas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            porcentaje = 15;
        }
        else if(marca == "FelipeLamparas")
        {
            porcentaje = 10;
        }
        else 
        {
            porcentaje = 5;
        }
    }
    else
    {
        precioFinal = PRECIOLAMPARA * cantidadDeLamparas;
    }

    if(porcentaje > 0)
    {
        precioFinal = PRECIOLAMPARA * cantidadDeLamparas - (PRECIOLAMPARA * cantidadDeLamparas) * porcentaje / 100
    }

    if(precioFinal > 120)
    {
        impuesto = precioFinal * 10 / 100;
        alert(`IIBB Usted pagó $${impuesto}`);
        precioFinal = precioFinal + impuesto;
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}