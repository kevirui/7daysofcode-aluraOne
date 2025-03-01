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