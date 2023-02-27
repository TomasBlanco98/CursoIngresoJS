function mostrar()
{
  let nombre;
  let nombreUno;
  let nombreDos;
  let banderaNombre;
  let i;
  let peso;
  let pesoUno;
  let pesoDos;
  let banderaPeso;
  let pesoTotal;
  let promedioPeso;

  pesoTotal = 0;
  promedioPeso = 0;
  banderaNombre = false;
  banderaPeso = false;

  for(i = 0; i < 2; i++)
  {
    nombre = prompt("Ingrese el nombre");
    if(banderaNombre == false)
    {
        nombreUno = nombre;
        banderaNombre = true;
    }
    else 
    {
        nombreDos = nombre;
    }

    peso = parseInt(prompt("Ingrese el peso"));
    while(peso < 20 || peso > 250)
    {
        peso = parseInt(prompt("Ingrese el peso"));
    }
    if(banderaPeso == false)
    {
        pesoUno = peso;
        banderaPeso = true;
    }
    {
        pesoDos = peso;
    }
  }
  pesoTotal = pesoUno + pesoDos;
  promedioPeso = pesoTotal / i;
  alert(`Ustedes se llaman ${nombreUno} y ${nombreDos}, pesan ${pesoUno} y ${pesoDos} kilos, que sumados son ${pesoTotal} kilos y el promedio de peso es ${promedioPeso}`);
}
