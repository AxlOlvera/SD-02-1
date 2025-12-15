// Refer to Task 4 in your Instructions to complete this task
// Refer to Task 3 in your Instructions to complete this task
// Refer to Task 2 in your Instructions to complete this task
// Refer to Task 1 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");
let lineas;

console.log(`Hola ${name}`);
lineas = prompt("Ingresa la cantidad de líneas que quieres imprimir")



for(let i = 1; i < 151; i++){

  if(i % 3 === 0 && i % 5 === 0 && i % 7 === 0){
    console.log("FizzBuzz");
  }else if(i % 3 === 0 && i % 5 === 0){
    console.log("BuzzWoof");
  }else if(i % 5 === 0 && i % 7 === 0){
    console.log("FizzBuzzWoof");
  }else if(i % 3 === 0 && i % 7 === 0){
    console.log("FizzWoof");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else if(i % 7 === 0){
    console.log("Woof");
  }else{
    console.log(i)
  }

}