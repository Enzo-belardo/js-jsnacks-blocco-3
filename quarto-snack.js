// Prendere due array della stessa lunghezza e generarne un terzo, 
//prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const nickName= ['Franco','Giulio','Davide'];
const nickNumber= [22,46,12];
let result= [];
let nickLenght = (nickName.length , nickNumber.length);
    
for (i = 0; i < nickLenght; i++) {
    result.push(nickName[i], nickNumber[i]);
}

console.log(result);