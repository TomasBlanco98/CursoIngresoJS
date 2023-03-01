/* 2) Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al
siguiente detalle:
● Tipo de PC (“DESKTOP” o “LAPTOP”)
● Marca (“DELL”, “HP”, “ACER”)
● Modelo
● Precio (No puede ser menor a 100.000 pesos)

Informar:
a) El precio de la PC más cara.
b) La cantidad total de PC de tipo LAPTOP cuya marca es DELL.
c) El promedio total del precio.
Pedir datos por prompt y mostrar la información por document.write.
Tomas Blanco Rivas-Div x
*/
function mostrar()
{
    let tipoPC;
    let respuesta;
    let marca;
    let modelo;
    let precio;
    let precioMaximo;
    let cantidadLaptopDell;
    let cantidadPc;
    let sumaPrecios;
    let promedio;
    let banderaPrecioMaximo;
    
    respuesta = 's';
    precioMaximo = 0;
    cantidadLaptopDell = 0;
    sumaPrecios = 0;
    cantidadPc = 0;
    promedio = 0;
    banderaPrecioMaximo = false;

    while(respuesta == 's')
    {
        tipoPC = prompt("Ingrese el tipo de pc (desktop/laptop)");
        while(tipoPC != "desktop" && tipoPC != "laptop")
        {
            tipoPC = prompt("Ingrese el tipo de pc (desktop/laptop)");
        }

        marca = prompt("Ingrese la marca (dell/hp/acer)");
        while(marca != "dell" && marca != "hp" && marca != "acer")
        {
            marca = prompt("Ingrese la marca (dell/hp/acer)");
        }

        modelo = prompt("Ingrese el modelo (a/b/c)");
        while(modelo != 'a' && modelo != 'b' && modelo != 'c')
        {
            modelo = prompt("Ingrese el modelo (a/b/c)");
        }

        precio = parseInt(prompt("Ingrese un precio mayor a 100000"));
        while(isNaN(precio) || precio < 100000 || precio > 100000000)
        {
            precio = parseInt(prompt("Ingrese un precio mayor a 100000"));
        }

        if(banderaPrecioMaximo == false || precio > precioMaximo)
        {
            precioMaximo = precio;
            banderaPrecioMaximo = true;
        }
        if(tipoPC == "laptop" && marca == "dell")
        {
            cantidadLaptopDell++;
        }
        cantidadPc++
        sumaPrecios+= precio;

        respuesta = prompt("Desea ingresar otro producto? s/n");
        while(respuesta != 's' && respuesta != 'n')
        {
            respuesta = prompt("Desea ingresar otro producto? s/n");
        }
    }
    promedio = sumaPrecios / cantidadPc;

    document.write(`El precio de la pc más cara es ${precioMaximo}<br>`);
    document.write(`La cantidad total de PC de tipo LAPTOP cuya marca es DELL es ${cantidadLaptopDell}<br>`);
    document.write(`El promedio total del precio ${promedio.toFixed(2)}`);
}