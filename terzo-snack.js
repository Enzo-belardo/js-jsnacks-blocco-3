// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi 
//all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let numbersOne = [1,28,7,0,23,7,81,66,12,55,];
let numbersTwo = [2,67,99,4];

while (numbersTwo.length < numbersOne.length) {
    numbersTwo.push(Math.floor(Math.random() * 10 ));
}

console.log(numbersTwo);
console.log(numbersOne);
