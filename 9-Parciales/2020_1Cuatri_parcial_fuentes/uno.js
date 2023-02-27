function mostrar()
{
	let i;
	let producto;
	let precio;
	let cantidadUnidades;
	let marca;
	let menorPrecio;
	let menorPrecioUnidades;
	let menorPrecioMarca;
	let cantidadJabon;
	let cantidadBarbijo;
	let cantidadAlcohol;
	let precioJabon;
	let precioBarbijo;
	let precioAlcohol;
	let mayorUnidades;
	let promedio;

	cantidadJabon = 0;
	cantidadBarbijo = 0;
	cantidadAlcohol = 0;
	precioJabon = 0;
	precioBarbijo = 0;
	precioAlcohol = 0;
	bandera = false;
	promedio = 0;

	for(i = 0; i < 1; i++)
	{
		producto = prompt("Ingrese el producto");
		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt("Error. Ingrese un producto válido");
		}
		precio = parseInt(prompt("Ingrese el precio"));
		while(precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("Error. Ingrese el precio"));
		}
		cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while(cantidadUnidades <= 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = parseInt(prompt("Error. Ingrese la cantidad de unidades"));
		}
		marca = prompt("Ingrese la marca");

		if(producto == "jabon")
		{
			cantidadJabon += cantidadUnidades;
			precioJabon += precio;
		}
		else if(producto == "alcohol")
		{
			cantidadAlcohol += cantidadUnidades;
			precioAlcohol += precio;
			if(bandera == false || precio < menorPrecio)
			{
				menorPrecio = precio;
				menorPrecioUnidades = cantidadUnidades;
				menorPrecioMarca = marca;
				bandera == true;
			}
		}
		else 
		{
			cantidadBarbijo += cantidadUnidades;
			precioBarbijo += precio;
		}
	}
	if(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo)
	{
		mayorUnidades = "jabon"
		promedio = precioJabon / cantidadJabon;
	}
	else if(cantidadAlcohol > cantidadBarbijo)
	{
		mayorUnidades = "alcohol"
		promedio = precioAlcohol / cantidadAlcohol;
	}
	else 
	{
		mayorUnidades = "barbijo"
		promedio = precioBarbijo / cantidadBarbijo;
	}

	document.write(`Tipo con mayor unidades: ${mayorUnidades}.Promedio por compra: ${promedio.toFixed(2)}<br>`);
	if(bandera == true)
	{
		document.write(`Alcohol de menor precio: $${menorPrecio}. Unidades: ${menorPrecioUnidades}. Marca: ${menorPrecioMarca}<br>`);
	}
	document.write(`La cantidad de unidades de jabón es: ${cantidadJabon}`);
}
 