
let estudiantes = []; 

function opcionTrainer() {
    console.log("Bienvenido, seleccione qué desea hacer");
    console.log("1. Agregar notas");
    console.log("2. Mirar rutas");
    console.log("3. Listas de estudiantes");
    console.log("4. Horarios de trabajo");
    console.log("5. Ver estudiantes en riesgo");
    console.log("6. Módulo reportes");
    console.log("7. Salida");

    let op = prompt("= ");

    switch (op) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            console.log("Funcionalidad en desarrollo...");
            break;
        case "7":
            console.log("Saliendo del menú de trainer...");
            break;
        default:
            console.log("ERROR");
            break;
    }
}

function editarNotas() {
    let ruta = [];
    
    estudiantes.forEach(est => {
        if ([".NET", "Java", "NodeJS"].includes(est.Ruta)) {
            ruta.push(est);
        }
    });

    if (ruta.length > 0) {
        ruta.forEach((camper, index) => {
            console.log(`Estudiante# ${index + 1}:`, camper);
        });

        let idEstudiante = prompt("¿A qué estudiante desea editar? (Digite el ID):");
        let skill = prompt("Ingrese el skill al cual quiere editar las notas:");

        let opcionNota = parseInt(prompt(`
¿Qué nota quiere editar?
1. Prueba Teórica
2. Prueba Práctica
3. Quizes
`));

        let g = "";
        if (opcionNota === 1) {
            g = "nota1";
        } else if (opcionNota === 2) {
            g = "nota2";
        } else if (opcionNota === 3) {
            g = "nota3";
        } else {
            console.log("Nota no válida");
            return;
        }

        let nuevaNota = parseFloat(prompt("Ingrese la nueva nota:"));

        let estudiante = estudiantes.find(e => e.ide === idEstudiante);

        if (estudiante) {
            if (estudiante.cursos && estudiante.cursos[skill]) {
                estudiante.cursos[skill][g] = nuevaNota;
                console.log("Nota actualizada correctamente.");
            } else {
                console.log("El skill ingresado no existe.");
            }
        } else {
            console.log("Estudiante no encontrado.");
        }
    } else {
        console.log("No hay estudiantes en rutas definidas.");
    }
}
export { editarNotas,opcionTrainer };
