/*Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.*/
'use strict';
const btn = document.querySelector('.js-btn');

function logEvent(ev) {
  console.log(ev.type)
};

btn.addEventListener('click', logEvent)