// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array 
// fino a quando la somma degli elementi è minore di 50.

let number = [];
somma= 0;

while (somma < 50) {
    let numberUser= parseInt(prompt('inserisci numero meno di 50')); 
    somma += numberUser;
    number.push(numberUser); 
    if( somma > 50) {
        console.log('Hai superato il valore massimo')
    }
}

console.log(number);