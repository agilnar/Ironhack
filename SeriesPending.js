console.log("seriesPending");
let seriesPending = [
  "Breaking Bug",
  "Game of Drones",
  "Boolean 99",
  "Arrested Developer",
];

//Agregue un nuevo elemento al final de la seriesPending.
seriesPending.push("The Walking Dead");

//Escriba un bucle que vaya desde 0 hasta la longitud de la seriesPending.
//Dentro del ciclo, use console.log()en cada elemento de la matriz y su índice.

for (let index = 0; index < seriesPending.length; index++) {
  console.log(`The serie ${index} es: ${seriesPending[index]}`);

  //Dentro del mismo ciclo, agregue un condicional que verificará si una de las series dentro
  //de la matriz es "Boolean 99". En caso de que lo sea, console.log"Found it!"
  if (seriesPending[index] == "Boolean99") {
    console.log("Found it!");
  }
}

//Declare e inicialice una variable seriesWatching con una matriz vacía.
let seriesWatching = [];

//Elimine el primer elemento de la seriesPendin y agréguelo al final de la seriesWatching.
let deletedSeries = seriesPending.shift();
seriesWatching.push(deletedSeries);
console.log(" ");
console.log(
  "Se comprueba que se ha eliminado de seriesPending y añadido a seriesWatching"
);
console.log(`seriesPending tiene: ${seriesPending.length} series`);
for (let i = 0; i < seriesPending.length; i++) {
  console.log(`The serie ${i} es: ${seriesPending[i]}`);
}
console.log(" ");
console.log(
  `"seriesWatching tiene:" ${seriesWatching.length} serie añadida, llamada ${seriesWatching}`
);

/*Ahora vamos a mover todas las series a seriesWatching, pero como no queremos escribir 
manualmente el mismo código para cada elemento, vamos a crear un ciclo que lo maneje:

Sabemos que quedan 4 elementos en seriesPending. Entonces, escribe otro bucle que vaya desde 0 hasta que llegue a 4. 
El código interno debería ejecutarse exactamente 4 veces.

Dentro del ciclo, escriba el código que eliminará el primer elemento del seriesPending y lo agregará a seriesWatching. 
igual que el paso 7

Agregue otro console.log()para verificar la longitud de las matrices después del bucle. seriesPendingdebería tener 0 
elementos mientras que seriesWatchingdebería tener 5
*/
for (let x = 0; x < 4; x++) {
  let deletedSeries = seriesPending.shift();
  seriesWatching.push(deletedSeries);
}

console.log(" ");
console.log("Se verifica la longitud de las matrices después del bucle:");
console.log(
  `seriesPending tiene: ${seriesPending.length} series y seriesWatching tiene: ${seriesWatching.length} `
);
console.log(`Estas son: ${seriesWatching}`);
console.log(" ");
//Ahora eliminemos todos los elementos de seriesWatching. Podríamos ejecutar otro bucle y 
//usar el .pop()método, pero usemos el .splice()método para eliminar todos los elementos de la matriz.
console.log(" ");

seriesWatching.splice(0,seriesWatching.length);
console.log(`La longitud de la matriz seriesWatching es: ${seriesWatching.length} y de seriesPending es: ${seriesPending.length}`);