# 🛒 7 Days of Code - Lógica JS (Día 6)

## 🗑️ Remoción de Elementos en Arrays

Este repositorio contiene la solución al sexto desafío del reto **7 Days of Code** de **Alura Latam**.

---

## 📌 Descripción del Desafío

El objetivo de este desafío es **mejorar el programa de lista de compras**, agregando la funcionalidad para **eliminar elementos** de la lista de compras.

### 🔍 Requisitos del ejercicio

1️⃣ Preguntar al usuario si desea **agregar** un alimento a la lista.
2️⃣ Preguntar al usuario si desea **eliminar** un alimento de la lista.
3️⃣ Mostrar la lista actual antes de eliminar un elemento.
4️⃣ Permitir al usuario escribir el nombre del elemento a eliminar.
5️⃣ Si el elemento **existe**, eliminarlo y confirmar la eliminación.
6️⃣ Si el elemento **no existe**, mostrar un mensaje de advertencia.
7️⃣ Solo permitir la eliminación si hay al menos un elemento en la lista.

---

## ✅ Solución Implementada

El programa permite:

- **Agregar elementos** a la lista en diferentes categorías.
- **Mostrar la lista de compras** organizada por categorías.
- **Eliminar elementos**, verificando que estén en la lista antes de eliminarlos.
- **Manejar errores**, como categorías inválidas o intentos de eliminar elementos inexistentes.

```javascript
let categorias = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  otros: [],
};

function mostrarListaCompras() {
  console.log("Lista de compras:");
  let tieneElementos = false;

  for (let categoria in categorias) {
    if (categorias[categoria].length > 0) {
      tieneElementos = true;
      console.log(`Categoría: ${categoria}`);
      categorias[categoria].forEach((subcategoria) => {
        console.log(` - ${subcategoria}`);
      });
    }
  }
  if (!tieneElementos) {
    console.log("La lista de compras está vacía.");
  }
}

function preguntas() {
  do {
    let alimento = prompt("¿Qué alimento deseas agregar?");
    let categoria = prompt(
      "¿En qué categoría se encuentra este alimento? (frutas - lacteos - congelados - dulces - otros)"
    ).toLowerCase();

    if (categorias[categoria]) {
      categorias[categoria].push(alimento);
      console.log(`"${alimento}" ha sido agregado a "${categoria}".`);
    } else {
      console.log("Categoría inválida. Inténtalo de nuevo.");
    }
    decision = prompt("¿Quieres seguir agregando alimentos? (si/no)").toLowerCase();
  } while (decision === "si");
}

function eliminarAlimento() {
  let totalElementos = Object.values(categorias).flat().length;
  if (totalElementos === 0) {
    console.log("No hay elementos en la lista para eliminar.");
    return;
  }

  let respuesta = prompt("¿Deseas eliminar un alimento de la lista de compras? (si/no)").toLowerCase();
  if (respuesta !== "si") return;

  mostrarListaCompras();
  let elemento = prompt("¿Cuál de ellos deseas eliminar?");
  let encontrado = false;

  Object.keys(categorias).forEach((categoria) => {
    let index = categorias[categoria].indexOf(elemento);
    if (index !== -1) {
      categorias[categoria].splice(index, 1);
      console.log(`"${elemento}" ha sido eliminado de la categoría "${categoria}".`);
      encontrado = true;
    }
  });
  
  if (!encontrado) {
    console.log(`¡No fue posible encontrar el elemento "${elemento}" en la lista!`);
  }
}

preguntas();
mostrarListaCompras();
eliminarAlimento();
mostrarListaCompras();
```

---

## 🚀 Cómo Ejecutarlo

1️⃣ Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/7DaysOfCode-JS.git
   ```  

2️⃣ Abre el archivo `index.html` en un navegador **o** ejecuta el código en la consola del navegador (F12 > Console).  
3️⃣ Responde a las preguntas en los `prompt()`.  
4️⃣ Observa los mensajes en pantalla.  

---

## 📚 Aprendizajes Clave

✅ Uso de **`if-else`** para verificar condiciones antes de eliminar.  
✅ Implementación de **`Object.values().flat()`** para verificar si la lista está vacía.  
✅ Interacción con el usuario mediante **`prompt()`** y **`console.log()`**.  
✅ Aplicación de **métodos de arrays (`splice()`, `indexOf()`)**.  

📖 Más información en la documentación oficial de JavaScript:  
[🔗 Métodos de Arrays en JavaScript - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)  

---

## 📬 Contacto

Si tienes dudas o sugerencias, ¡contáctame y compartamos conocimientos! 😃  

---

✨ **¡Sigue practicando y mejorando tu lógica de programación!** 🚀  
