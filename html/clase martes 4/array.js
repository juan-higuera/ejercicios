let numeros = [];

numeros = [15, 80, 576, 735.344, 299, -43];

document.write('Elementos: ', numeros);
document.write('<br>');
document.write('Segundo elemento: ', numeros[1]);
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
document.write('Tercer elemento: ', numeros[3]);
document.write('<br>');

numeros[0] = 98;
document.write('Elementos: ', numeros);
document.write('<br>');

numeros[5] = 178;
document.write('Elementos: ', numeros);
document.write('<br>');

let frutas = ['papaya', 'banana', 'mandarina', 'uvas'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');

document.write('Cantidad de frutas: ', frutas.length);
document.write('<br>');
document.write('Cantidad de números: ', numeros.length);
document.write('<br>');

document.write('<br>');
document.write('En string: ', numeros.toString());
document.write('<br>');

let numeros1 = [1, 2, 3, 4];

document.write('Último elemento de números: ', numeros[numeros.length - 1]);
document.write('<br>');

let letras = ['x', 'y', 'z'];
document.write('Alfanumérico: ', letras.concat(numeros1));
document.write('<br>');

numeros.pop();
document.write(numeros);
document.write('<br>');

numeros.push(-90);
document.write(numeros);
document.write('<br>');

numeros.shift();
document.write(numeros);
document.write('<br>');

numeros.unshift(1000);
document.write(numeros);
document.write('<br>');