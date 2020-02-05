/*Vamos a preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir para investigarlo y comentar con la compañera estas propiedades:
value
nodeName
required*/

'use strict';
const input = document.querySelector('.js-input');


console.dir(input.value);
console.dir(input.nodeName); console.dir(input.required);


//nodeName: "INPUT", value: "", required: false.