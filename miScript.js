alert ("Bienvenidos a la calculadora mas basica que veran en su vida")
alert ("Debera ingresar un numero, luego un signo ( +  - * / ), y por ultimo otro numero")

let entrada = parseInt(prompt("Ingrese un numero"));
let entrada2 = prompt("Ingrese un signo");
let entrada3 = parseInt(prompt("Ingrese otro numero"));

switch (entrada2) {
    case "+":
        let resultado = entrada + entrada3
        alert (resultado);
        break;

    case "-":
        let resultado2 = entrada - entrada3
        alert (resultado2);
        break;

    case "*":
        let resultado3 = entrada * entrada3
        alert (resultado3);
        break;

    case "/":
        let resultado4 = entrada / entrada3
        alert (resultado4);
        break;

    default:
        alert ("Suerte")
        break;
}