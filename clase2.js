//EJERCICIO 1
//Función toma 3 núms como argumentos y retorne el mayor de ellos. Llama a la función e imprime el resultado.
function numeros(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        mayor = num1
    }
    else if (num2 > num1 && num2 > num3) {
        mayor = num2
    }
    else {
        mayor = num3
    }

    return ("El mayor de los 3 numeros es el " + mayor)
}

console.log(numeros(3, 9, 19))

//EJERCICIO 2
//Función expresada recibe un array de strings y retorne string que concatena todos los elementos del array
const ARRAY1 = ["str1", "str2", "str3"];
function concatenar(array) {
    let string = ""
    for (let i = 0; i < array.length; i++) {
        string += array[i] + " ";
    }
    return string;
};

console.log(concatenar(ARRAY1));

//Con metodo de array: JOIN
const concatenar2 = function (array) {
    return array.join(" ");
};
console.log(concatenar2(ARRAY1));

//EJERCICIO 3
//Convierte la función del ejercicio anterior a una función de flecha. 
//Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.

//EJERCICIO 4
//Función que tome una temp en grados Celsius como argumento y devuelva un mensaje que indique si hace 
//frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).
function temperatura(celsius) {
    if (celsius < 15) {
        clima = "hace frio"
    }
    else if (celsius < 25) {
        clima = "esta templado"
    }
    else {
        clima = "hace calor"
    }
    return ("Segun la temperatura proporcionada, " + clima)
}
console.log(temperatura(33))

//EJERCICIO 5
//Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12,
//"Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.
function horarios(hora) {
    return (hora < 12 ? "Buenos días" : (hora < 18 ? "Buenas tardes" : "Buenas noches"))
}
console.log(horarios(17))

//EJERCICIO 6
//Escribe una función que reciba cuatro argumentos booleanos y 
//retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.
function booleanos(arg1, arg2, arg3, arg4) {
    if ((arg1 == true || arg2 == true) && (arg3 == false || arg4 == false)) {
        return ("true")
    }
    else {
        return ("no se cumple que al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso")
    }
}
console.log(booleanos((1 > 0), (1 == 2), (3 == 7), (4 > 8)))

//EJERCICIO 7
//Función que tome un número como argumento y retorne su factorial. Utilizar estructura if para manejar el caso base
