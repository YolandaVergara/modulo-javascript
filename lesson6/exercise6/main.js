/*Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
- Número máximo de peras
- Número mínimo de peras
- Número current de peras
- Número inicial de peras
Y varios métodos que hagan:
- Añadir al cesto una pera
- Sacar del cesto una pera
- Restablecer el número de peras al valor inicial.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número current de peras para ver si funciona correctamente.*/

'use strict';

const basket = {
  max : 10,
  min : 0,
  current : 0,
  initial : 0,

  addFruit : () => {
    if (this.current < this.max){
        this.current += 1
      }
    },
  removeFruit : () => {
    if (this.current > this.max){
      this.current -= 1}
    },
  restoreBasket : () => {
    this.current = this.initial
  }
}
basket.addFruit();
basket.addFruit();
basket.removeFruit();
basket.addFruit();
basket.addFruit();
basket.addFruit();
basket.restoreBasket();
console.log(basket.current);
