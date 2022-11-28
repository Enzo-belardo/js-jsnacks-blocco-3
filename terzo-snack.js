// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi 
//all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let numbersOne = [1,2,4,5,6,7,8,9]
let numbersTwo = [1,2,3,4]

if (numbersOne.length < numbersTwo.length) {
   numbersOne.push(0)

}else {
    numbersTwo.push(0)
}

console.log(numbersTwo)
console.log(numbersOne)
