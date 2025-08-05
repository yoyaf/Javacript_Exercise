alert('Acabas de ingresar a la lista de ejercicios con javascript!');
let mensaje = 'Este es el primer ejercicio';
console.log(mensaje);

let A = prompt('Inglese un número', 20);
let B = prompt('Inglese otro número', 30);

if (A > B) {
    console.log('El primer número es mayor que el segundo')
} else {
    console.log('El segundo número es mayor')
};

mensaje = 'Este es el ejercicio 2';
console.log(mensaje);

let heladoValor = 5;
let n_helados = prompt('¿Cuantos helados quiere?', 1);

console.log(n_helados + ' helados le cuestan: ', heladoValor * n_helados, 'pesos');

mensaje = 'Este es el ejercicio 3';
console.log(mensaje);

let edad = prompt('¿Cual es su edad?', 1);

console.log('Entonces, Usted nació el año: ', 2025 - edad);

mensaje = 'Este es el ejercicio 4';
console.log(mensaje);
let i = 1;
let nota = parseInt(prompt('Agregue valor de nota: ', 1));
let otranota = 0;

while (i < 3) {
    otranota = parseInt(prompt('Agregue otro valor de nota: ', 1));
    nota = nota + parseInt(otranota);
    i++;
};

if (nota / 3 > 4) {
    alert('Usted ha sido aprobado')
} else { 'Usted no ha alcanzado la mínima' };

mensaje = 'Este es el ejercicio 5';
console.log(mensaje);

const fechaActual = new Date();
const anoActual = fechaActual.getFullYear();
let ano_nacimiento = prompt('Ingrese su año de nacimiento', 1970);
let Fulano_de_tal = '';

if (anoActual - ano_nacimiento > 18) {
    nombre_apellido = prompt('Ingrese su nombre y apellido', Fulano_de_tal)
    console.log('Hola ' + nombre_apellido + ' tu edad es: ' + (anoActual - ano_nacimiento));
} else {
};

mensaje = 'Este es el ejercicio 6';
console.log(mensaje);

let precio = prompt('Ingrese el precio del producto.', 1);

alert('El precio del producto con IVA incluido es: ' + (precio * 1.21));

mensaje = 'Este es el ejercicio 7';
console.log(mensaje);

let num = prompt('Ingrese un número positivo: ', 0);

if (num > 0) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    };
} else { };

mensaje = 'Este es el ejercicio 8';
console.log(mensaje);

let n = prompt('Ingrese un número positivo: ', 0);

for (let i = 0; i < n; i++) {
    if ((n - i) % 2 === 0) {
        console.log(n - i)
    }
};

console.log(0);
