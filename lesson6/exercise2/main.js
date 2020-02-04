'use strict';
 const adalaber = {}
 adalaber.name= 'Susana';
 adalaber.age= 34;
 adalaber.proffesion= 'periodista';
 adalaber.run = function (){console.log('Estoy corriendo');};
 adalaber.runAMarthon = distance => console.log (`Estoy corriendo un maratón de ${distance} kilometros`);


adalaber.run();
adalaber.runAMarthon(60);

