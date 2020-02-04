/*Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.*/

'use strict';
 const adalaber = {}
 adalaber.name= 'Susana';
 adalaber.age= 34;
 adalaber.proffesion= 'periodista';
 adalaber.run = function (){console.log('Estoy corriendo');};
 adalaber.runAMarthon = distance => console.log (`Estoy corriendo un maratón de ${distance} kilometros`);


adalaber.run();
adalaber.runAMarthon(60);

