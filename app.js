//a) Pida al usuario su nombre y muestre un mensaje de bienvenida.
//prompt ("ingrese su nombre")
// alert("bienvenido!")
//b) Pida al usuario dos números y muestre su suma.

/*let num1 = prompt ("ingrese numero")
let num2 = prompt ("ingrese numero")

console.log (parseInt(num1) + parseInt(num2))*/

//c) Pida al usuario dos números y muestre el mayor.

/*let num3 = prompt ("ingrese numero")
let num4 = prompt ("ingrese numero")

if (parseInt(num3) > parseInt(num4)){
console.log(num3)
}else console.log (num4)*/

//d)Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.

/*let num5 = prompt ("ingrese numero");
let num6 = prompt ("ingrese numero");
let num7 = prompt ("ingrese numero");

if (num5 == num6 == num7){
console.log ("los numeros son iguales")
}else {console.log("los numeros no son iguales")
}
//e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor.

let num8 = parseint (prompt ("ingrese el primer numero"));
let num9 = parseint (prompt ("ingrese el segundo numero"));
let num10 = parseint (prompt ("ingrese el tercer numero"));

if (num8 >= num9 >= num10){
    console.log(num8 + num9 + num10)
}else if (num8 >= num10 >= num9)
    console.log(num8 + num10 + num9)
 else if (num9 >= num8 >= num10)
    console.log(num9 + num8 + num10)
 else if (num9 >= num10 >= num8)
    console.log(num9 + num10 + num8)
 else if (num10 >= num9 >= num8)
    console.log(num9 + num9 + num8)
    else {console.log(num10 + num8 + num9)
}*/
/*f)Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / Altura (en metros) al cuadrado.
Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
Si el número esmayor a 30 mostrá la leyenda "Obesidad"*/

let peso = parseInt(prompt("Ingrese su peso en kg"));
let alt = parseInt(prompt("Ingrese su altura en metros"));
let imc = peso / (alt * alt);

if (imc <=18.5) {
  console.log("Bajo peso");
} else if ((18.6 <= imc) && (imc <=24.9)) {
  console.log("Normal");
} else if ((25 <= imc) && (imc <=29.9)) {
  console.log("Sobrepeso");
} else if (imc >= 30) {
  console.log("Obesidad");
 }
 

