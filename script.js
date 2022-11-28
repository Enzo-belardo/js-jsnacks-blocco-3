// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando 
//l'utente non inserisce il valore corretto


    numbers = prompt('inserisci numero');
while (numbers > 10 || numbers < 1) {
    numbers = prompt('inserisci numero');
}

console.log('Numero corretto')
