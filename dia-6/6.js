let categorias = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  otros: [],
};

let decision = prompt("Deseas agregar un elemento a tu categorias de compras?");

function mostrarListaCompras() {
  console.log("Lista de Compras: ");
  let tieneElementos = false;

  for (let categoria in categorias) {
    if (categorias[categoria].length > 0) {
      tieneElementos = true;
      console.log(`Categoría: ${categoria}.`);
      categorias[categoria].forEach((subcategoria) => {
        console.log(` - ${subcategoria}.`);
      });
    }
  }

  if (!tieneElementos) {
    console.log("La lista de compras está vacía.");
  }
}

function preguntas() {
  do {
    let alimento = prompt("Que alimento deseas agregar? ");
    let categoria = prompt(
      "En que categoria se encuentra este alimento?. frutas - lacteos - congelados - dulces - otros."
    ).toLowerCase;

    if (categorias[categoria]) {
      categorias[categoria].push(alimento);
      console.log(`"${alimento}" ha sido agregado a "${categoria}".`);
    } else {
      console.log("Categoría inválida. Inténtalo de nuevo.");
    }

    decision = prompt(
      "Quieres seguir agregando alimentos? (si/no)"
    ).toLowerCase();
  } while (decision === "si");
}

function eliminarAlimento(respuesta) {
  let totalElementos = Object.values(categorias).flat.length();
  if (totalElementos == 0) {
    console.log("No hay elementos en la lista para eliminar.");
    return;
  }

  let respuesta = prompt(
    "¿Deseas eliminar un alimento de la lista de compras? (si/no)"
  ).toLowerCase();
  if (respuesta !== "si") return;

  mostrarListaCompras();

  let elemento = prompt("Cual de ellos deseas eliminar?").toLowerCase;
  let encontrado = false;

  Object.keys(categorias).forEach((categoria) => {
    let index = categorias[categoria].indexOf(elemento);
    if (index !== -1) {
      categorias[categoria].splice(index, 1);
      console.log(
        `"${elemento}" ha sido eliminado de la categoría "${categoria}".`
      );
      encontrado = true;
    }
  });

  if (!encontrado) {
    console.log(
      `¡No fue posible encontrar el elemento "${elemento}" en la lista!`
    );
  }
}

preguntas();

mostrarListaCompras();

eliminarAlimento();

mostrarListaCompras();
