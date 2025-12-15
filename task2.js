// Refer to Task 2 in your Instructions to complete this task

// Refer to Task 1 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");


console.log(`Hola ${name}`);

for(let i = 1; i < 151; i++){

  if(i % 3 === 0){
    console.log("Fizz");

  }else{
    console.log(i);
  }

}




