//ESTRUCTURA FOR Y METODOS DE ARRAYS

//EJERCICIO 1
//Escribe un ciclo for que imprima los números pares entre 1 y 20.
for(let i = 1; i <= 20; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

//EJERCICIO 2
//Crea un array con los nombres de tus cinco películas favoritas y usa un ciclo for para imprimirlas con su respectivo número de posición (ej. "1. El Padrino").
const ARRAY2 = ["Anyone but you", "How to lose a guy in 10 days", "The proposal", "Barbie", "Mamma Mia"]
for (let i=0; i<5; i++){
    console.log((i+1) + ". " + ARRAY2[i])
}

//EJERCICIO 3.1
//Usa el método forEach para recorrer un array de números y para cada número imprime si es par o impar. 
function numeros(numero){
    if (numero%2 == 0){
        console.log("PAR")
    }
    else{
        console.log("IMPAR")
    }
}

const ARRAY3 = [1,4,2,7,8,23,67,22,89]
ARRAY3.forEach(numeros)

//EJERCICIO 3.2
//Utiliza el método find para buscar el primer número mayor que 20 en un array de números. 
const ARRAY = [2, 12, 16, 130, 44, 6];

let busqueda = ARRAY.find((num) => num > 20);
console.log(busqueda);

//EJERCICIO 3.3
//Usa el método some para verificar si en un array de edades hay al menos una persona mayor de 18 años.
const EDADES = [12, 5, 8, 10, 19, 28, 4, 17]

const MAYOR = ((edad) => edad >= 18)
console.log(EDADES.some(MAYOR))

//EJERCICIO 4
//Crea un array con los nombres de 5 países y usa un ciclo for...of para imprimir cada uno.
const PAISES = ["Australia", "Argentina", "Inglaterra", "Portugal", "Marruecos"]

for (const x of PAISES) {
  console.log(x);
}

//EJERCICIO 5
//Utiliza el método forEach para imprimir cada elemento de un array de números.
const ARRAY5 = [1, 2, 3, 4, 5];

function imprimir(numero) {
    console.log(numero);
}

ARRAY5.forEach(imprimir);

//EJERCICIO 6.1
//Usa el método find para encontrar el primer número par en un array de números.
const ARRAY61 = [5, 3, 16, 1, 44, 6];

let par = ARRAY61.find((num) => (num%2 == 0));
console.log(par);

//EJERCICIO 6.2
//Emplea el método some para verificar si al menos un elemento en un array es mayor que 20.
const ARRAY62 = [1, 44, 8, 2, 19, 23]

const RDO = ((num) => num > 20)
console.log(ARRAY62.some(RDO))

//EJERCICIO 6.3
//Utiliza el método every para comprobar si todos los elementos en un array son strings.
const string = (elemento) => typeof elemento == "string"

const ARRAY63 = ["h", "Hola", "Martina"]

console.log(ARRAY63.every(string))

//EJERCICIO 7
//Crea un array de objetos que representen personas con propiedades como nombre y edad. Usa map para crear un nuevo array que contenga solo los nombres.


