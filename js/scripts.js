// Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.

function statusAge (nombre, age){

if (age >= 18){
 console.log (nombre, ' es mayor de edad')}

 else {
    console.log (nombre, ' No es mayor de edad')}

} 
statusAge('lidia', 18)

statusAge('Carmen', 10)

//Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.


function exercise2 (numberA, numberB){

if (numberA>numberB){
console.log (numberA)}

else{
console.log (numberB)}

}

exercise2 (10,9)
exercise2 (0,3)

// Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.

function exercise3 (number){

if (number < 0){
    console.log('Este numero es negativo')}

else if (number === 0){
    console.log('Este número es 0')}

else if (number > 0){
    console.log('Este número es positivo')}

}

exercise3(20)

// Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"

function exercise4(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 0 & media < 5) {
        console.log("Suspenso");
    } else if (media >= 5 & media < 8) {
        console.log("Aprobado");
    } else if (media >= 8) {
        console.log("Matrícula de honor");
    }
}

exercise4(10,10,8)







function exercise5 (numberA, numberB, numberC){

    if (numberA> numberB & numberC){
        console.log(numberA )}

    else if (numberB > numberA & numberC){
        console.log(numberB)}
    
    else if (numberC > numberA & numberB ){
        console.log (numberC)}

}

exercise5(4,4,7)


// Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.

function exercise6(numero) {
    if (numero % 3 === 0 & numero % 5 === 0) {
       console.log('Es divisible por 3 y por 5');
    } 
    else if (numero % 3 === 0) {
        console.log('Es divisible por 3');
    } 
    else if (numero % 5 === 0) {
        console.log('Es divisible por 3 y por 5')} 
}

exercise6(50)
exercise6(45)

// Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.

function exercise7 (numero){
    if (numero % 2 === 0){
        console.log('este número es par')
    }
    else if (numero % 2 > 0){
        console.log('este número es impar')
    }

}

exercise7(14)

// Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado

function exercise8(year) {
    if ((year % 4 === 0 & year % 100 !== 0) || year % 400 === 0) {
        console.log("Es un año bisiesto");
    } else {
        console.log("No es un año bisiesto");
    }
}

exercise8(1992)
