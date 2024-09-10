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

let totalWinterCauldrons = 0;
let totalSummerCauldrons = 0;
let totalSpringCauldrons = 0;
let totalAutumnCauldrons = 0;

for (const season in data.cauldrons) 
{
    //Switch para manejar cada temporada
    switch (season) 
    {
        case 'winter_season':
            totalWinterCauldrons = data.cauldrons[season].length;
          console.log("Total Winter cauldrons: " + totalWinterCauldrons);
          break;
        case 'summer_season':
            totalSummerCauldrons = data.cauldrons[season].length;
          console.log("Total Summer cauldrons: " + totalSummerCauldrons);
          break;
        case 'spring_season':
            totalSpringCauldrons = data.cauldrons[season].length;
          console.log("Total Spring cauldrons: " + totalSpringCauldrons);
          break;
        case 'autumn_season':
            totalAutumnCauldrons = data.cauldrons[season].length;
          console.log("Total Autumn cauldrons: " + totalAutumnCauldrons);
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
    console.log("EJERCICIO 6");
    console.log("IDs and Magic Descriptions of the cauldrons named Brassicaceae: ");

    for (const season in data.cauldrons) 
    {
        cauldronBrassicaceaeIdsAndDescription(data.cauldrons[season])
    }

    console.log();

// 7.- Mostrar el porcentaje de cauldrons dañados separados por temporada

console.log("EJERCICIO 6");
console.log("Percentage of each season broken cauldrons: ");

let percentageBrokenWinterCauldron = percentageCalculator(totalWinterCauldrons, winterBrokenCauldronCounter);
let percentageBrokenSummerCauldron = percentageCalculator(totalSummerCauldrons, summerBrokenCauldronCounter);
let percentageBrokenSpringCauldron = percentageCalculator(totalSpringCauldrons, springBrokenCauldronCounter);
let percentageBrokenAutumnCauldron = percentageCalculator(totalAutumnCauldrons, autumnBrokenCauldronCounter);

console.log("Winter broken cauldron: " + percentageBrokenWinterCauldron.toFixed(2) + "%.");
console.log("Summer broken cauldron: " + percentageBrokenSummerCauldron.toFixed(2) + "%.");
console.log("Spring broken cauldron: " + percentageBrokenSpringCauldron.toFixed(2) + "%.");
console.log("Autumn broken cauldron: " + percentageBrokenAutumnCauldron.toFixed(2) + "%.");

console.log();

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
            console.log("ID of the cauldron: " + seasonList[i].id + ". Magic Description: " + seasonList[i].magic_description);
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

function percentageCalculator(totalNumber, aquiredNumber)
{
   return aquiredNumber * 100 / totalNumber;
}