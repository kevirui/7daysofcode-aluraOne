let categorias = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  otros: [],
};

let decision = prompt("Deseas agregar un elemento a tu categorias de compras?");

do {
  let alimento = prompt("Que alimento deseas agregar? ");
  let categoria = prompt(
    "En que categoria se encuentra este alimento?. frutas - lacteos - congelados - dulces - otros."
  );

  switch (categoria) {
    case "frutas":
      categorias.frutas.push(alimento);
      break;
    case "lacteos":
      categorias.lacteos.push(alimento);
      break;
    case "congelados":
      categorias.congelados.push(alimento);
      break;
    case "dulces":
      categorias.dulces.push(alimento);
      break;
    case "otros":
      categorias.otros.push(alimento);
      break;
    default:
      break;
  }

  decision = prompt("Quieres seguir agregando alimentos?");
} while (decision === "si");

for (let categoria in categorias) {
  console.log(`Categoría: ${categoria}.`);
  categorias[categoria].forEach((subcategoria) => {
    console.log(` - ${subcategoria}.`);
  });
}
