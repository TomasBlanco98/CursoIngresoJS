/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
Tomas Blanco Rivas-Div x 
*/
function mostrar()
{
    let i;
    let continente;
    let nombre;
    let cantidadHabitantes;
    let nivelDePobreza;
    let temperatura;
    let contadorTemperaturasPares;
    let contadorTemperaturasImpares;
    let cantidadHabitantesMinima;
    let banderaCantidadHabitantesMinima;
    let nombreCantidadHabitantesMinima;
    let cantidadTemperaturaAltas;
    let cantidadTemperaturasBajasAmerica;
    let acumuladorCantidadHabitantes;
    let contadorPaises;
    let promedioHabitantes;
    let acumuladorCantidadPaisesTemperaturasAltas;
    let promedioHabitantesTemperaturasAltas;
    let temperaturaMinima;
    let banderaTemperaturaMinima;
    let nombreTemperaturaMinima;
    let acumuladorHabitantesAfrica;
    let acumuladorHabitantesAmerica;
    let acumuladorHabitantesOceania;
    let acumuladorHabitantesAsia;
    let acumuladorHabitantesEuropa;
    let continenteMasHabitantes;

    contadorTemperaturasPares = 0;
    contadorTemperaturasImpares = 0;
    cantidadHabitantesMinima = 0;
    banderaCantidadHabitantesMinima = true;
    cantidadTemperaturaAltas = 0;
    cantidadTemperaturasBajasAmerica = 0;
    acumuladorCantidadHabitantes = 0;
    contadorPaises = 0;
    acumuladorCantidadPaisesTemperaturasAltas = 0;
    temperaturaMinima = 0;
    banderaTemperaturaMinima = true;
    acumuladorHabitantesAfrica = 0;
    acumuladorHabitantesAmerica = 0;
    acumuladorHabitantesOceania = 0;
    acumuladorHabitantesAsia = 0;
    acumuladorHabitantesEuropa = 0;

    for(i = 0; i < 5; i++)
    {
        continente = prompt("Ingrese el continente (america/asia/europa/oceania/africa)");
        while(continente != "america" && continente != "asia" && continente != "europa" && continente != "oceania" && continente != "africa")
        {
            continente = prompt("Ingrese el continente (america/asia/europa/oceania/africa)");
        }

        nombre = prompt("Ingrese el país");

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000"));
        while(isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 7000)
        {
            cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000"));
        }

        if(continente == "europa")
        {
            nivelDePobreza = prompt("Ingrese el nivel de pobreza (millonario/rico)");
            while(nivelDePobreza != "millonario" && nivelDePobreza != "rico")
            {
                nivelDePobreza = prompt("Ingrese el nivel de pobreza (millonario/rico)");
            }
        }
        else
        {
            nivelDePobreza = prompt("Ingrese el nivel de pobreza (millonario/rico/pobre)");
            while(nivelDePobreza != "millonario" && nivelDePobreza != "rico" && nivelDePobreza != "pobre")
            {
                nivelDePobreza = prompt("Ingrese el nivel de pobreza (millonario/rico/pobre)");
            }
        }

        temperatura = parseInt(prompt("Ingrese la temperatura mínima del territorio entre -50 y 50"));
        while(isNaN(cantidadHabitantes) || temperatura < -50 || temperatura > 50)
        {
            temperatura = parseInt(prompt("Ingrese la temperatura mínima del territorio entre -50 y 50"));
        }

        if(temperatura % 2 == 0)
        {
            contadorTemperaturasPares++;
        }
        else
        {
            contadorTemperaturasImpares++;
        }

        if(banderaCantidadHabitantesMinima == true || cantidadHabitantesMinima > cantidadHabitantes)
        {
            cantidadHabitantesMinima = cantidadHabitantes;
            nombreCantidadHabitantesMinima = nombre;
            banderaCantidadHabitantesMinima = false;
        }

        if(temperatura > 40)
        {
            cantidadTemperaturaAltas++;
            acumuladorCantidadPaisesTemperaturasAltas+= cantidadHabitantes;
        }

        contadorPaises++;
        acumuladorCantidadHabitantes+= cantidadHabitantes;

        if(banderaTemperaturaMinima == true || temperaturaMinima > temperatura)
        {
            temperaturaMinima = temperatura;
            nombreTemperaturaMinima = nombre;
            banderaTemperaturaMinima = false;
        }

        switch(continente)
        {
            case "africa":
                acumuladorHabitantesAfrica+= cantidadHabitantes;
                break;
            case "america":
                acumuladorHabitantesAmerica+= cantidadHabitantes;
                if(temperatura < 0)
                {
                    cantidadTemperaturasBajasAmerica++;
                }
                break;
            case "europa":
                acumuladorHabitantesEuropa+= cantidadHabitantes;
                break;
            case "asia":
                acumuladorHabitantesAsia+= cantidadHabitantes;
                break;
            case "oceania":
                acumuladorHabitantesOceania+= cantidadHabitantes;
                break;
        }
    }// fin del for
    promedioHabitantes = acumuladorCantidadHabitantes / contadorPaises;
    promedioHabitantesTemperaturasAltas = acumuladorCantidadHabitantes / cantidadTemperaturaAltas;

    if(acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesOceania)
    {
        continenteMasHabitantes = "America";
    }
    else if(acumuladorHabitantesAfrica > acumuladorHabitantesAsia && acumuladorHabitantesAfrica > acumuladorHabitantesEuropa && acumuladorHabitantesAfrica > acumuladorHabitantesOceania)
    {
        continenteMasHabitantes = "Africa";
    }
    else if(acumuladorHabitantesAsia > acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesOceania)
    {
        continenteMasHabitantes = "Asia";
    }
    else if(acumuladorHabitantesEuropa > acumuladorHabitantesOceania)
    {
        continenteMasHabitantes = "Europa";
    }
    else 
    {
        continenteMasHabitantes = "Oceania";
    }

    document.write(`La cantidad de temperaturas pares es ${contadorTemperaturasPares}`);
    document.write(`la cantidad de temperaturas impares de europa es ${contadorTemperaturasImpares}`);
    document.write(`El nombre del pais con menos habitantes es ${nombreCantidadHabitantesMinima}`);
    document.write(`la cantidad de paises que superan los 40 grados es ${cantidadTemperaturaAltas}`);
    document.write(`la cantidad de paises de america que tienen menos de 0 grados es ${cantidadTemperaturasBajasAmerica}`);
    document.write(`el promedio de habitantes entre los paises ingresados es ${promedioHabitantes}`);
    document.write(`el promedio de habitantes entre los paises que superan los 40 grados es ${promedioHabitantesTemperaturasAltas}`);
    document.write(`la temperatura mínima ingresada es ${temperaturaMinima}, y el nombre del pais que registro esa temperatura es ${nombreTemperaturaMinima}`);
    document.write(`El continente con más habitantes es ${continenteMasHabitantes}`);
}//FIN DE LA FUNCIÓN