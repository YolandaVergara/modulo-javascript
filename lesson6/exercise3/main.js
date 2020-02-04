/*Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?*/

'use strict';
const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.proffesion = 'periodista';
adalaber.showBio = function () { return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.proffesion}` };
console.log(adalaber.showBio());

const adalaber2 = {};
adalaber2.name = 'Rocio';
adalaber2.age = 25;
adalaber2.proffesion = 'actriz';
adalaber2.showBio = function () { return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.proffesion}` };
console.log(adalaber2.showBio());


