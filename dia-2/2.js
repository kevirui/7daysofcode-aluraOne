const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const nombre = await rl.question("Cual es tu nombre?");
  const edad = await rl.question("Cuantos años tienes?");
  const lenguaje = await rl.question(
    "Que lenguaje de programacion estas estudiando?"
  );
  console.log(
    `Hola ${nombre}, tienes ${edad} años y estas estudiando ${lenguaje}`
  );

  console.log(`Te gusta estudiar ${lenguaje}? (si/no)`);

  const respuesta = await rl.question("1 para si, 2 para no");

  switch (respuesta) {
    case 1:
      console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
      break;
    case 2:
      console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
      break;
    default:
      console.log("No entiendo tu respuesta.");
      break;
  }

  rl.close();
}

main();
