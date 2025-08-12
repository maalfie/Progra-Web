//EJERCICIO 1
//Declara tres variables: ciudad, país y edad de nacimiento. Imprime los rdos.

let ciudad = "Buenos Aires";
let pais = "Argentina";
let diaNacimiento = "18/04/06"
//cambio 2 
console.log(ciudad,pais,diaNacimiento);
console.log("Hola, mi nombre es Martina y soy de " + ciudad + ", " + pais + ". Nací el " + diaNacimiento + ".");

//EJERCICIO 2
//3 variables. Calcula el promedio y encuentra el residuo de la división de la suma total entre 2. Imprime los rdos.
let num1 = 34;
let num2 = 39;
let num3 = 58;

let suma = (num1 + num2 + num3)
let prom = (suma/3)
let div = suma%2

console.log(prom,div)

//EJERCICIO 3
//Almacenar un objeto coche con propiedades (marca, modelo y año). Imprime el tipo de cada propiedad con typeof.
let AUTO = {
    marca: "Audi",
    modelo: "Q3",
    año: 2023,
};

console.log(typeof(AUTO.marca))
console.log(typeof(AUTO.modelo))
console.log(typeof(AUTO.año))

//EJERCICIO 4
//Crea un array con 5 ciudades. Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.
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
//Array de 3 objetos que representen películas (título, director y año) Imprime el director de la última película.
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

//EJERCICIO 6
//Tres variables booleanas y verificar si al menos dos son verdaderas. Imprimir true o false.
let var1 = false;
let var2 = false;
let var3 = true;

let resultado = (var1&&var2)||(var1&&var3)||(var2&&var3);
console.log("Al menos 2 son verdaderas: " + resultado);

//EJERCICIO 7
//Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y menor que el tercero. 
//Verifica si el segundo es distinto al tercero. Imprimir rdos.
let variable1 = 22;
let variable2 = 33;
let variable3 = 44;

let comparacion1 = ((variable1 > variable2) && (variable1 < variable3));
console.log("El primer número es mayor que el segundo y menor que el tercero: " + comparacion1);

let comparacion2 = (variable2 != variable3);
console.log("El segundo número es distinto al tercero: " + comparacion2);

//EJERCICIO 8
//Declara dos variables que almacenen strings. Crear  variable que concatene las dos primeras y muestra el rdo.
let nomb = "Martina";
let apellido = "Alfie";

let nombre_apellido = console.log((nomb + " " + apellido));

//EJERCICIO 9
//Declara una variable numérica y utiliza los operadores (++) y (--) para modificar su valor. Imprimir rdos.
let var_num = 75;

var_num ++;
console.log(var_num);

var_num --;
console.log(var_num);

//EJERCICIO 10
//Crea un objeto que represente un estudiante con propiedades. Imprimir cada propiedad.
let estudiante = {
nombre: "Martina Alfie",
edad: 19,
carrera: "Gestion de negocios y tecnologia"
};
console.log("Nombre: " + estudiante.nombre + "." + " Edad: " + estudiante.edad + "." + " Carrera: " + estudiante.carrera + ".")

//EJERCICIO 11
//Array que contenga dos arrays internos, con 3 números c/u. Accede al segundo elemento del primer array interno.
const ARRAY1 = [77, 81, 92];
const ARRAY2 = [23, 30, 47];
const ARRAY_GLOBAL = [ARRAY1, ARRAY2];

console.log(ARRAY_GLOBAL[0][1]);

//EJERCICIO 12
//Dos variables numéricas y utilizar >, <, >=, <=, ===, !== para comparar sus valores. Imprime rdos.
let numero1 = 55;
let numero2 = 99;

console.log("El numero1 es mayor al 2: " + (numero1 > numero2));
console.log("El numero1 es menor al 2: " + (numero1 < numero2));
console.log("El numero1 es mayor igual al 2: " + (numero1 >= numero2));
console.log("El numero1 es menor igual al 2: " + (numero1 <= numero2));
console.log("El numero1 es igual al 2: " + (numero1 === numero2));
console.log("El numero1 es distinto al 2: " + (numero1 !== numero2));

//EJERCICIO 13
//Variable sin asignarle un valor y variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.
let var_vacia;
let var_nula = null;

console.log(typeof var_vacia);
console.log(typeof var_null);

//EJERCICIO 14
//Variable que almacene un número como string. Convierte este string a un número.
let var_string = "123";
var_string = Number(var_string);
 
let operacion1 = var_string/123;
let operacion2 = var_string +++

console.log(typeof var_string);
console.log(operacion1);
console.log(operacion2);
