//Algoritmo con un condicional 

 let numero = prompt("Ingrese su edad")
numero = parseInt(numero)

let ninio = 17
let adulto = 18
let anciano = 60


if (numero <= ninio) {
    console.log("Usted es un niño")
}else if (numero >= adulto && numero < 60) {
    console.log("Usted es un adulto")
}else
    console.log("Usted es un anciano") 


//Crear un algoritmo utilizando un ciclo.

 let x = 0

while (x < 4 ) {
    console.log("Ahora x vale " + x)
    x = x + 1
    alert("x vale " + x )
} 

// Armar un simulador interactivo, la estructura final de tu proyecto integrador


 let hincha = "river"
let hinchaDos = "boca"
let hinchaTres = "independiente"

let nombreHincha = prompt("Cual fue el último campeòn nacional argentino?")
nombreHincha = nombreHincha.toLowerCase(); // Convertir la entrada del usuario a minúsculas

if (nombreHincha === hincha.toLocaleLowerCase()) { //-- Al final de .toLocaleLowerCase AGREGAR () para invocar la función
    alert("Tu respuesta es correcta")
}else if (nombreHincha === hinchaTres.toLocaleLowerCase()) {
    alert("La respuesta no es Independiente")
}else if (nombreHincha === hinchaDos.toLocaleLowerCase()) {
    alert("La respuesta no es Boca")
}else {
    alert("Respuesta incorrecta")
}  
 

// Uso de function 

 let saludar = function(nombre) {
    console.log("Hola " + nombre)
    console.log("Chau " + nombre)
}
saludar("Cristian")
saludar("Matias") 

 function suma (a , b) {
    return a + b
}
let resultado = suma(10 , 5)
console.log(resultado) 

