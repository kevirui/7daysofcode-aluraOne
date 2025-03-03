# 🎮 7 Days of Code - Lógica JS (Día 3)  
## 🔀 Estructuras de Control de Flujo  

Este repositorio contiene la solución al tercer desafío del reto **7 Days of Code** de **Alura Latam**.  

---

## 📌 Descripción del Desafío  

El objetivo de este desafío es crear un **juego interactivo en JavaScript** donde el usuario tome decisiones que afecten la historia del juego.  

### 🔍 Problema  

El programa debe permitir que el usuario elija:  

1️⃣ **Si quiere seguir en el área de Front-End o Back-End**.  
   - Si elige **Front-End**, debe decidir entre aprender **React** o **Vue**.  
   - Si elige **Back-End**, debe decidir entre aprender **C#** o **Java**.  

2️⃣ **Si quiere especializarse en su área elegida o convertirse en Fullstack**.  
   - Mostrar un mensaje acorde a su decisión.  

3️⃣ **Preguntar qué tecnologías le gustaría aprender**.  
   - Permitir ingresar varias tecnologías hasta que el usuario decida detenerse.  
   - Mostrar un mensaje comentando sobre cada tecnología ingresada.  

---

## ✅ Solución Implementada  

Para resolver este desafío, usamos:  
- **`prompt()`** para recibir la elección del usuario.  
- **`alert()`** o **`console.log()`** para mostrar mensajes.  
- **`if-else`** para controlar el flujo del juego.  
- **`while`** para permitir múltiples respuestas en la última pregunta.  

```javascript
// Pregunta sobre el área de especialización
const area = prompt("¿Quieres seguir en el área de Front-End o Back-End? (Escribe 'Front' o 'Back')");

if (area.toLowerCase() === "front") {
    const tecnologia = prompt("¿Prefieres aprender React o Vue?");
    alert(`¡Genial! Aprender ${tecnologia} es una excelente elección en Front-End.`);
} else if (area.toLowerCase() === "back") {
    const tecnologia = prompt("¿Prefieres aprender C# o Java?");
    alert(`¡Perfecto! ${tecnologia} es un lenguaje muy utilizado en Back-End.`);
} else {
    alert("Opción no válida, por favor ingresa 'Front' o 'Back'.");
}

// Pregunta sobre especialización o Fullstack
const camino = prompt("¿Quieres especializarte en esta área o convertirte en Fullstack? (Escribe 'Especializar' o 'Fullstack')");

if (camino.toLowerCase() === "especializar") {
    alert("¡Buena elección! Seguir especializándote te hará un experto en tu área.");
} else if (camino.toLowerCase() === "fullstack") {
    alert("¡Increíble! Convertirte en Fullstack te dará más oportunidades.");
} else {
    alert("Opción no válida, elige 'Especializar' o 'Fullstack'.");
}

// Pregunta sobre tecnologías adicionales
let tecnologias = [];
let continuar = true;

while (continuar) {
    let nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe el nombre o 'No' para salir)");
    if (nuevaTecnologia.toLowerCase() === "no") {
        continuar = false;
    } else {
        tecnologias.push(nuevaTecnologia);
        alert(`¡${nuevaTecnologia} es una gran tecnología para aprender!`);
    }
}

alert(`Has elegido aprender las siguientes tecnologías: ${tecnologias.join(", ")}`);
