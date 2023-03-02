/*
Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/
Tomas Blanco Rivas-Div X */
function mostrar()
{
	let i;
    let tipo;
    let raza;
    let edad;
    let nombre;
    let masEdadPerro;
    let masEdadGato;
    let masEdadOtros;
    let masEdadPajaro;
    let banderaMasEdadPerro;
    let banderaMasEdadGato;
    let banderaMasEdadOtros;
    let banderaMasEdadPajaro;
    let nombreMasEdadPerro;
    let nombreMasEdadGato;
    let nombreMasEdadOtros;
    let nombreMasEdadPajaro;
    let contadorSiames;
    let contadorTurco;
    let contadorPeterbald;
    let contadorGenerico;
    let razaMasAnimales;
    let acumuladorSiames;
    let acumuladorTurco;
    let acumuladorPeterbald;
    let acumuladorGenerico;
    let promedioEdad;

    masEdadPerro = 0;
    masEdadGato = 0;
    masEdadOtros = 0;
    masEdadPajaro = 0;
    banderaMasEdadGato = true;
    banderaMasEdadPerro = true;
    banderaMasEdadPajaro = true;
    banderaMasEdadOtros = true;
    contadorSiames = 0;
    contadorPeterbald = 0;
    contadorTurco = 0;
    contadorGenerico = 0;
    promedioEdad = 0;
    acumuladorGenerico = 0;
    acumuladorPeterbald = 0;
    acumuladorSiames = 0;
    acumuladorTurco = 0;

    for(i = 0; i < 10; i++)
    {
        tipo = prompt("Ingrese el tipo de mascota(gato/perro/pajaro/otros)");
        while(tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otros")
        {
            tipo = prompt("Ingrese el tipo de mascota(gato/perro/pajaro/otros)");
        }

        switch(tipo)
        {
            case "perro":
                raza = prompt("Ingrese la raza (pastor/toy/callejero)");
                while(raza != "pastor" && raza != "toy" && raza != "callejero")
                {
                    raza = prompt("Ingrese la raza (pastor/toy/callejero)");
                }

                edad = parseInt(prompt("Ingrese la edad entre 1 y 20"));
                while(isNaN(edad) || edad < 1 || edad > 20)
                {
                    edad = parseInt(prompt("Ingrese la edad entre 1 y 20"));
                }
                break;
            case "gato":
                raza = prompt("Ingrese la raza (siames/turco/peterbald/generico)");
                while(raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico")
                {
                    raza = prompt("Ingrese la raza (siames/turco/peterbald/generico)");
                }

                edad = parseInt(prompt("Ingrese la edad entre 1 y 20"));
                while(isNaN(edad) || edad < 1 || edad > 20)
                {
                    edad = parseInt(prompt("Ingrese la edad entre 1 y 20"));
                }
                break;
            case "otros":
                edad = parseInt(prompt("Ingrese la edad entre 1 y 100"));
                while(isNaN(edad) || edad < 1 || edad > 100)
                {
                    edad = parseInt(prompt("Ingrese la edad entre 1 y 100"));
                }
                break;
            case "pajaro":
                edad = parseInt(prompt("Ingrese la edad entre 1 y 50"));
                while(isNaN(edad) || edad < 1 || edad > 50)
                {
                    edad = parseInt(prompt("Ingrese la edad entre 1 y 50"));
                }
                break;
        }
        nombre = prompt("Ingrese el nombre");
        while(!isNaN(nombre))
        {
            nombre = prompt("Ingrese el nombre");
        }

        switch(tipo)
        {
            case "perro":
                if(banderaMasEdadPerro == true || masEdadPerro < edad)
                {
                    masEdadPerro = edad;
                    nombreMasEdadPerro = nombre;
                    banderaMasEdadPerro = false;
                }
                break;
            case "gato":
                if(banderaMasEdadGato == true || masEdadGato < edad)
                {
                    masEdadGato = edad;
                    nombreMasEdadGato = nombre;
                    banderaMasEdadPerro = false
                }
                switch(raza)
                {
                    case "siames":
                        contadorSiames++;
                        acumuladorSiames+= edad;
                        break;
                    case "peterbald":
                        contadorPeterbald++;
                        acumuladorPeterbald+= edad;
                        break;
                    case "turco":
                        contadorTurco++;
                        acumuladorTurco+= edad;
                        break;
                    case "generico":
                        contadorGenerico++;
                        acumuladorGenerico+= edad;
                        break;
                }
                break;
            case "otros":
                if(banderaMasEdadOtros == true || masEdadOtros < edad)
                {
                    masEdadOtros = edad;
                    nombreMasEdadOtros = nombre;
                    banderaMasEdadOtros = false;
                }
                break;
            case "pajaro":
                if(banderaMasEdadPajaro == true || masEdadPajaro < edad)
                {
                    masEdadPajaro = edad;
                    nombreMasEdadPajaro = nombre;
                    banderaMasEdadPajaro = false;
                }
                break;
        }
    }//fin de for

    if(contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico)
    {
        razaMasAnimales = "siames";
        promedioEdad = acumuladorSiames / contadorSiames;
    }
    else if(contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico)
    {
        razaMasAnimales = "turco";
        promedioEdad = acumuladorTurco / contadorTurco;
    }
    else if(contadorPeterbald > contadorGenerico)
    {
        razaMasAnimales = "peterbald";
        promedioEdad = acumuladorPeterbald / contadorPeterbald;
    }
    else
    {
        razaMasAnimales = "generico";
        promedioEdad = acumuladorGenerico / contadorGenerico;
    }

    if(banderaMasEdadPerro == false)
    {
        document.write(`El nombre del perro más viejo es ${nombreMasEdadPerro}`);
    }
    if(banderaMasEdadGato == false)
    {
        document.write(`El nombre del gato más viejo es ${nombreMasEdadGato}`);
    }
    if(banderaMasEdadPajaro == false)
    {
        document.write(`El nombre del pajaro más viejo es ${nombreMasEdadPajaro}`);
    }
    if(banderaMasEdadOtros == false)
    {
        document.write(`El nombre de otros animales más viejo es ${nombreMasEdadOtros}`);
    }
    if(!isNaN(promedioEdad))
    {
        document.write(`La raza de gatos con mas animales es ${razaMasAnimales} y el promedio de edad es ${promedioEdad.toFixed(2)}`);
    }
}