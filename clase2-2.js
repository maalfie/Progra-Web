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
const ARRAY1 = ["Anyone but you", "How to lose a guy in 10 days", "The proposal", "Barbie", "Mamma Mia"]
for (let i=0; i<5; i++){
    console.log((i+1) + ". " + ARRAY1[i])
}

//EJERCICIO 3
//Usa el método forEach para recorrer un array de números y para cada número imprime si es par o impar. Utiliza el método find para buscar el primer número mayor que 20 en un array de números. Usa el método some para verificar si en un array de edades hay al menos una persona mayor de 18 años.
