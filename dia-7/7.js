function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return b != 0 ? a / b : "No se puede dividir por cero";
}

do {
  let opcion = prompt(
    "Ingresa la operación (sumar, restar, multiplicar, dividir) o 'salir' para terminar:"
  ).toLowerCase();

  if (opcion === "salir") {
    console.log("Hasta la proxima");
    break;
  }

  let num1 = parseFloat(prompt("Ingresa el primer numero a operar: "));
  let num2 = parseFloat(prompt("Ingresa el segundo numero a operar: "));

  let resultado;

  switch (opcion) {
    case "sumar":
      resultado = sumar(num1, num2);
      break;
    case "restar":
      resultado = restar(num1, num2);
      break;
    case "multiplicar":
      resultado = multiplicar(num1, num2);
      break;
    case "dividir":
      resultado = dividir(num1, num2);
      break;

    default:
      console.log("La operacion no es valida");
      break;
  }

  console.log(`El resultado de ${opcion} es: ${resultado}`);
} while (true);
