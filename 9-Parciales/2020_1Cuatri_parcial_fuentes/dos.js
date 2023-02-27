function mostrar()
{
  let tipo;
  let respuesta;
  let cantidadBolsa;
  let precioBolsa;
  let porcentaje;
  let cantidadBolsaTotal;
  let precioFinal;
  let precioFinalDescuento;
  let cantidadBolsaArena;
  let cantidadBolsaCal;
  let cantidadBolsaCemento;
  let mayorCantidadBolsa;
  let precioBolsaArena;
  let precioBolsaCal;
  let precioBolsaCemento;
  let masCaro;

  respuesta = 's'
  porcentaje = 0;
  precioFinal = 0;
  cantidadBolsaTotal = 0;
  mayorCantidadBolsa = 0;
  cantidadBolsaArena = 0;
  cantidadBolsaCal = 0;
  cantidadBolsaCemento = 0;
  precioBolsaArena = 0;
  precioBolsaCal = 0;
  precioBolsaCemento = 0;
  masCaro = 0;

  while(respuesta == 's')
  {
    tipo = prompt("Ingrese un tipo de producto (arena/cal/cemento)")
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("Error. Ingrese un tipo de producto (arena/cal/cemento)")
    }

    cantidadBolsa = parseInt(prompt("Ingrese la cantidad de bolsas"))
    cantidadBolsaTotal += cantidadBolsa;

    precioBolsa = parseInt(prompt("Ingrese el precio por bolsa"))
    while(precioBolsa <= 0)
    {
      precioBolsa = parseInt(prompt("Error. Ingrese el precio por bolsa"));
    }

    precioFinal += precioBolsa * cantidadBolsa;

    if(tipo == "arena")
    {
      cantidadBolsaArena += cantidadBolsa;
      precioBolsaArena += precioBolsa;
    }
    else if(tipo == "cal")
    {
      cantidadBolsaCal += cantidadBolsa;
      precioBolsaCal += precioBolsa;
    }
    else
    {
      cantidadBolsaCemento += cantidadBolsa;
      precioBolsaCemento += precioBolsa;
    }

    respuesta = prompt("Desea continuar? (s/n)");
  }

  if(cantidadBolsaTotal > 30)
  {
    porcentaje = 25;
  }
  else if (cantidadBolsaTotal > 10)
  {
    porcentaje = 15;
  }

  if(cantidadBolsaArena > cantidadBolsaCal && cantidadBolsaArena > cantidadBolsaCemento)
  {
    mayorCantidadBolsa = "arena";
  }
  else if(cantidadBolsaCal > cantidadBolsaCemento)
  {
    mayorCantidadBolsa = "cal";
  }
  else
  {
    mayorCantidadBolsa = "cemento";
  }

  if(precioBolsaArena > precioBolsaCal && precioBolsaArena > precioBolsaCemento)
  {
    masCaro = "arena";
  }
  else if(precioBolsaCal > precioBolsaCemento)
  {
    masCaro = "cal";
  }
  else 
  {
    masCaro = "cemento";
  }

  document.write(`El precio total es ${precioFinal}<br>`);
  if(porcentaje > 0)
  {
    precioFinalDescuento = precioFinal - precioFinal * porcentaje / 100;
    document.write(`El precio final con descuento es ${precioFinalDescuento}<br>`);
  } 
  document.write(`El tipo con más cantidad de bolsas es ${mayorCantidadBolsa}<br>`);
  document.write(`El tipo más caro es ${masCaro}`);
}
