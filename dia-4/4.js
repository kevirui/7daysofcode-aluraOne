function getRandomNumber0to10(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let decision = prompt("Cual es el valor que deseas adivinar? ");
let numeroAdivina = getRandomNumber0to10(0, 10);
let contador = 0;

if (decision === numeroAdivina) {
  alert("Felicidades acertaste");
} else {
  do {
    let decision = prompt(`Fallaste. Tienes ${contador + 1} intentos mas`);
    decision === numeroAdivina || contador == 2
      ? alert("Felicidades acertaste")
      : alert(`El numero a adivinar era ${numeroAdivina}`);
    contador++;
  } while (contador < 2);
}
