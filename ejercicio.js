import { data } from "./cauldrons.js";

// 1.- Mostrar la cantidad total de cauldrons

console.log("EJERCICIO 1");

let contador = 0;

for (const season in data.cauldrons) 
    {
    //Sumar la longitud de la lista de cauldrons para cada temporada
    contador += data.cauldrons[season].length;
  }

console.log("Total de cauldrons:", contador);
console.log("");

// 2- Mostrar la cantidad de cauldrons separados por temporada

console.log("EJERCICIO 2");

for (const season in data.cauldrons) 
{
    //Switch para manejar cada temporada
    switch (season) 
    {
        case 'winter_season':
          console.log("Total Winter cauldrons: " + data.cauldrons[season].length);
          break;
        case 'summer_season':
          console.log("Total Summer cauldrons: " + data.cauldrons[season].length);
          break;
        case 'spring_season':
          console.log("Total Spring cauldrons: " + data.cauldrons[season].length);
          break;
        case 'autumn_season':
          console.log("Total Autumn cauldrons: " + data.cauldrons[season].length);
          break;
        default:
          console.log("Unknown season: " + season);
    }
}
console.log("");

// 3.- Mostrar la cantidad de Cauldrons rotos agrupados por temporada

console.log("EJERCICIO 3");

let winterBrokenCauldronCounter = 0;
let summerBrokenCauldronCounter = 0;
let springBrokenCauldronCounter = 0;
let autumnBrokenCauldronCounter = 0;

for (const season in data.cauldrons) 
    {
        //Switch para manejar cada temporada
        switch (season) 
        {
            case 'winter_season':
                for(let i = 0; i < data.cauldrons[season].length; i++)
                {
                    if(data.cauldrons[season][i].damaged)
                    {
                        winterBrokenCauldronCounter++;
                    }
                }
                
                console.log("Damaged Winter cauldrons: " + winterBrokenCauldronCounter);

              break;
            case 'summer_season':
                for(let i = 0; i < data.cauldrons[season].length; i++)
                    {
                        if(data.cauldrons[season][i].damaged)
                        {
                            summerBrokenCauldronCounter++;
                        }
                    }
                    
                    console.log("Damaged Summer cauldrons: " + summerBrokenCauldronCounter);
              break;
            case 'spring_season':
                for(let i = 0; i < data.cauldrons[season].length; i++)
                    {
                        if(data.cauldrons[season][i].damaged)
                        {
                            springBrokenCauldronCounter++;
                        }
                    }
                    
                    console.log("Damaged Spring cauldrons: " + springBrokenCauldronCounter);
              break;
            case 'autumn_season':
                for(let i = 0; i < data.cauldrons[season].length; i++)
                    {
                        if(data.cauldrons[season][i].damaged)
                        {
                            autumnBrokenCauldronCounter++;
                        }
                    }
                    
                    console.log("Damaged Autumn cauldrons: " + autumnBrokenCauldronCounter);
              break;
            default:
              console.log("Unknown season: " + season);
        }
    }

    console.log("");
// 4.- Mostrar el color de los cauldron con magic_description "Naproxen"

console.log("EJERCICIO 4");

for (const season in data.cauldrons) 
{                
    cauldronNaproxenColor(data.cauldrons[season]);
}

console.log("");

// 5.- Mostrar el total de cauldrons de madera "Wood" rotos, suma de todas las temporadas

console.log("EJERCICIO 5");

let totalBrokenWoodCauldronCounter = 0;

for (const season in data.cauldrons) 
    {

        //Switch para manejar cada temporada
        switch (season) 
        {
            case 'winter_season':
                totalBrokenWoodCauldronCounter += cauldronWoodBroken(data.cauldrons[season]);
              break;
            case 'summer_season':
                totalBrokenWoodCauldronCounter += cauldronWoodBroken(data.cauldrons[season]);
              break;
            case 'spring_season':
                totalBrokenWoodCauldronCounter += cauldronWoodBroken(data.cauldrons[season]);
              break;
            case 'autumn_season':
                totalBrokenWoodCauldronCounter += cauldronWoodBroken(data.cauldrons[season]);
              break;

            default:
              console.log("Unknown season: " + season);
        }
    }

    console.log("Damaged total Wood cauldrons: " + totalBrokenWoodCauldronCounter);

    console.log("");
// 6.- Mostrar la Id y magic_description de los cauldron llamados "Brassicaceae"

// 7.- Mostrar el porcentaje de cauldrons dañados separados por temporada

// 8.- Mostrar el porcentaje de cauldrons de "Plexiglass" en "winter_season"

// 9.- Mostrar el número de cauldrons de color "Orange" en buen estado

// 10.- Mostrar el listado de posibles colores de cauldrons, sin repetir color.

function cauldronNaproxenColor(seasonList)
{
    for(let i = 0; i < seasonList.length; i++)
    {
        if(seasonList[i].magic_description === "Naproxen")
            {
                console.log(seasonList[i].color);
            }
    }
}

function cauldronBrassicaceaeIdsAndDescription(seasonList)
{
    for(let i = 0; i < seasonList.length; i++)
    {
        if(seasonList[i].name === "Brassicaceae")
        {
            console.log(seasonList[i].id);
            console.log();
        }
    }
}

function cauldronWoodBroken(seasonList)
{
    let counter = 0;

    for(let i = 0; i < seasonList.length; i++)
    {
        if(seasonList[i].damaged && seasonList[i].type === "Wood")
            {
                counter++;
            }
    }

    return counter;
}