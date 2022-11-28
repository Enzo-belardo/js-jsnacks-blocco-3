// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let number = [];
somma= 0;

let numberUser= prompt('inserisci numero meno di 50'); ;

while (somma <= 50) {
    numberUser = prompt('inserisci numero meno di 50'); I
    somma += numberUser;
    number.push(numberUser);  
}
console.log(number);
