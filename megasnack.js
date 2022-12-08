/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

// funzione che crei un nuovo elemento <p> </p>
// restituirlo a chi invoca la funzione
//
// ciclo per ogni elemento dell'array
// se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
// se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso

const array = [1,32,55,64,23,78,23,45,98,127];

 
const box = document.querySelector('div.box');
const green = document.createElement('div');
const listGreen = document.createElement('ul');
green.append(listGreen)
green.classList.add('green')
box.append(green)


const red = document.createElement('div');
const listRed = document.createElement('ul');
red.append(listRed)
red.classList.add('red')
box.append(red)


   for(let i = 0 ; i < array.length; i++){
     if(array[i] % 2 == 0 ){     
        const elementEven = document.createElement('li');
        elementEven.innerHTML = array[i]
        listGreen.append(elementEven);
    }else if(array[i] % 2 == 1) {
        const elementOdd = document.createElement('li');
        elementOdd.innerHTML = array[i]
        listRed.append(elementOdd)
    }
 }
  
