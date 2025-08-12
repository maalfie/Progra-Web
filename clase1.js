//EJERCICIO 1
let ciudad = "Buenos Aires";
let pais = "Argentina";
let diaNacimiento = "18/04/06"
//cambio 2 
console.log(ciudad,pais,diaNacimiento);
console.log("Hola, mi nombre es Martina y soy de " + ciudad + ", " + pais + ". Nací el " + diaNacimiento + ".");

//EJERCICIO 2
let num1 = 34;
let num2 = 39;
let num3 = 58;

suma = (num1 + num2 + num3)
prom = (suma/3)
div = suma%2

console.log(prom,div)

//EJERCICIO 3
let AUTO = {
    marca: "Audi",
    modelo: "Q3",
    año: 2023,
};

console.log(typeof(AUTO.marca))
console.log(typeof(AUTO.modelo))
console.log(typeof(AUTO.año))

//EJERCICIO 4
const CIUDADES = [
    "Sydney",
    " Londres",
    " Tokio",
    " Nueva York",
    " Madrid",
];

CIUDADES[2] = " Paris";
console.log(CIUDADES + ".");

//EJERCICIO 5
let PELI1 = {
    título: "Barbie",
    director: "Greta Gerwig",
    año: 2023,
};

let PELI2 = {
    título: "Lilo y Stitch",
    director: "Dean Fleischer Camp",
    año: 2025,
};

let PELI3 = {
    título: "Con Todos Menos Contigo",
    director: "Will Gluck",
};

const PELICULAS = [PELI1, PELI2, PELI3];
console.log(PELICULAS[2].director)