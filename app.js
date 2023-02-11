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
}*/
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
}


