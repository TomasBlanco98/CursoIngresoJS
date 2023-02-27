function mostrar()
{
    let precio;
    let porcentaje;
    let precioDescuento;

    precio = parseInt(prompt("Ingrese el precio"));
    porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));

    precioDescuento = precio - precio * porcentaje / 100;

    document.getElementById("elPrecioFinal").value = precioDescuento;
}
