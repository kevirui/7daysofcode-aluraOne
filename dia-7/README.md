# Calculadora en JavaScript

Este es un proyecto de una calculadora en línea desarrollada en **JavaScript**, como parte del desafío **#7DaysOfCode**.

## 📌 Descripción

La calculadora permite realizar las siguientes operaciones matemáticas:

- **Suma**
- **Resta**
- **Multiplicación**
- **División**
- **Salir** para finalizar el programa

Cada operación está implementada como una función independiente, asegurando modularidad y reutilización del código.

## 🚀 Funcionalidades

- Solicita al usuario que seleccione una operación.
- Permite ingresar dos números para operar.
- Ejecuta la operación matemática correspondiente.
- Imprime el resultado en la consola.
- Se ejecuta en bucle hasta que el usuario elija la opción "salir".
- Manejo de errores en la división por cero.

## 🛠️ Requisitos

Para ejecutar este código necesitas:

- Un navegador con soporte para **JavaScript**.
- También puedes ejecutarlo en un entorno Node.js si deseas probarlo en la terminal.

## 📜 Código

```javascript
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
  return b !== 0 ? a / b : "Error: División por cero";
}

let opcion;
do {
  opcion = prompt("Ingresa la operación (sumar, restar, multiplicar, dividir) o 'salir' para terminar:").toLowerCase();

  if (opcion === "salir") {
    console.log("Hasta la próxima");
    break;
  }

  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));

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
      console.log("Operación no válida");
      continue;
  }

  console.log(`El resultado de ${opcion} es: ${resultado}`);

} while (true);
```

## 🏃‍♂️ Ejecución

1. Copia y pega el código en la consola del navegador o en un archivo **.js** en un entorno Node.js.
2. Ejecuta el archivo o recarga la página para interactuar con la calculadora.

## 📌 Notas

- Se recomienda validar que los valores ingresados sean números antes de realizar las operaciones.
- La función `dividir` maneja el error de división por cero.

## ✨ Autor

Proyecto realizado como parte del desafío **#7DaysOfCode** de **Alura Latam**.
