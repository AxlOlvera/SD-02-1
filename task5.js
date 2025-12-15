// Refer to Task 5 in your Instructions to complete this task
// Refer to Task 4 in your Instructions to complete this task
// Refer to Task 3 in your Instructions to complete this task
// Refer to Task 2 in your Instructions to complete this task
// Refer to Task 1 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");
let lineas;

console.log(`Hola ${name}`);
lineas = prompt("Ingresa la cantidad de líneas que quieres imprimir");





for(let x = 1; x < lineas; x++){

  if(x % 3 === 0 && x % 5 === 0 && x % 7 === 0){
    console.log("FizzBuzzWoof");
  }else if(x % 3 === 0){
    console.log("Fizz");
  }else if(x % 5 === 0){
    console.log("Buzz");
  }else if(x % 7 === 0){
    console.log("Woof");
  }else{
    console.log(x)
  }



}