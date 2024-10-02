    
    
let numero = 1234;

let numeroStr = numero.toString();

let esPalindromo = true;
let longitud = numeroStr.length;

for (let i = 0; i < longitud / 2; i++) {
    if (numeroStr[i] !== numeroStr[longitud - 1 - i]) {
        esPalindromo = false;
        break; 
    }
}

if (esPalindromo == true) {
    console.log(numero, "es un palíndromo");
} else {
    console.log(numero, "no es un palíndromo");
}


let n= 1
let m=1
console.log(n+m)