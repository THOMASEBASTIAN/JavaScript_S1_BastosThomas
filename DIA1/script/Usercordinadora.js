let estudiantes = [];

function opcioncordinadora() {
    console.log("Bienvenido, seleccione qué desea hacer");
    console.log("1. Agregar estudiante");
    console.log("2. Modificar datos estudiante");
    console.log("3. Ver estudiantes");
    console.log("4. Registrar notas");
    console.log("5. Crear rutas de entrenamiento");
    console.log("6. Módulo matrículas");
    console.log("7. Módulo reportes");

    let opc = prompt("-->");

    switch (opc) {
        case "1":
            console.log("Módulo reportes aún no implementado");
            break;
        case "2":
            console.log("Módulo reportes aún no implementado");
            break;
        case "3":
            console.log("Módulo reportes aún no implementado");
            break;
        case "4":
            console.log("Módulo reportes aún no implementado");
            break;
        case "5":
            console.log("Módulo reportes aún no implementado");
            break;
        case "6":
            console.log("Módulo reportes aún no implementado");
            break;
        case "7":
            console.log("Módulo reportes aún no implementado");
            break;
        default:
            console.log("ERROR: Opción no válida");
            break;
    }
}

function agregarEstudiante() {
    let estudiante = {
        ide: prompt("Ingresa el id"),
        Nombre: prompt("Ingresa el Nombre: "),
        Apellido: prompt("Ingrese el apellido: "),
        Acudiente: prompt("Ingrese el acudiente: "),
        Dirección: prompt("Ingresa la dirección: "),
        TelefonoCelular: prompt("Ingrese el número de teléfono celular: "),
        TelefonoFijo: prompt("Ingrese el número de teléfono fijo: "),
        CorreoElectrónico: prompt("Ingrese el correo electrónico: "),
        Estado: prompt("Ingrese el estado del estudiante: "),
        Riesgo: prompt("Ingrese el nivel de riesgo: "),
    };
    estudiantes.push(estudiante);
    console.log("Estudiante agregado con éxito.");
}

function verEstudiantes() {
    estudiantes.forEach((est, index) => {
        console.log(`Estudiante ${index + 1}`);
        console.log("  ID: " + est.ide);
        console.log("  Nombre: " + est.Nombre);
        console.log("  Apellido: " + est.Apellido);
        console.log("  Acudiente: " + est.Acudiente);
        console.log("  Dirección: " + est.Dirección);
        console.log("  Teléfono Celular: " + est.TelefonoCelular);
        console.log("  Teléfono Fijo: " + est.TelefonoFijo);
        console.log("  Correo Electrónico: " + est.CorreoElectrónico);
        console.log("  Estado: " + est.Estado);
        console.log("  Riesgo: " + est.Riesgo);
        console.log("---------------------------");
    });
}

function editarEstudiante() {
    verEstudiantes();
    let ide = prompt("Ingrese el ID del estudiante a editar: ");
    let estudiante = estudiantes.find(est => est.ide === ide);

    if (!estudiante) {
        console.log("Estudiante no encontrado.");
        return;
    }

    let opciones = [
        "Nombre", "Apellido", "Acudiente", "Dirección",
        "TelefonoCelular", "TelefonoFijo", "CorreoElectrónico",
        "Estado", "Riesgo"
    ];

    let opcion = parseInt(prompt(`¿Qué desea editar?\n${opciones.map((op, i) => `${i + 1}. ${op}`).join("\n")}\n10. Volver`));

    if (opcion >= 1 && opcion <= 9) {
        let campo = opciones[opcion - 1];
        estudiante[campo] = prompt(`Ingrese el nuevo valor para ${campo}:`);
        console.log("Estudiante actualizado.");
    }
}

function matricularCamper() {
    let ide = prompt("Ingrese el ID del camper:");
    let estudiante = estudiantes.find(e => e.ide === ide);

    if (!estudiante) {
        console.log("Camper no encontrado.");
        return;
    }

    let opcion = prompt("1. Matricular en ruta\n2. Ver ruta actual");

    if (opcion === "1") {
        let ruta = prompt("Ingrese la ruta (Java, NodeJS, .NET):");
        estudiante.Ruta = ruta;
        console.log(`Camper matriculado en la ruta ${ruta}.`);
    } else if (opcion === "2") {
        if (estudiante.Ruta) {
            console.log(`Ruta actual: ${estudiante.Ruta}`);
        } else {
            console.log("El camper no está matriculado en ninguna ruta.");
        }
    }
}

function campersRiesgoAlto() {
    let riesgoAlto = estudiantes.filter(c => c.Riesgo === "Alto");
    console.log("Campers con riesgo alto:");
    console.log(riesgoAlto);
}

function campersInscritos() {
    let inscritos = estudiantes.filter(c => c.Estado === "Inscrito");
    console.log(inscritos);
}

function campersAprobados() {
    let aprobados = estudiantes.filter(c => c.Estado === "Aprobado");
    console.log(aprobados);
}

function verNotas() {
    let ide = prompt("Ingrese el ID del estudiante:");
    let skill = prompt("Ingrese el skill que desea consultar:");

    let estudiante = estudiantes.find(e => e.ide === ide);

    if (!estudiante || !estudiante.cursos || !estudiante.cursos[skill]) {
        console.log("Notas no encontradas.");
        return;
    }

    let curso = estudiante.cursos[skill];
    console.log(`Notas de ${estudiante.Nombre} en ${skill}:`);
    console.log("  Nota Teórica: " + curso.nota1);
    console.log("  Nota Práctica: " + curso.nota2);
    console.log("  Nota Quizes: " + curso.nota3);
    console.log("  Nota Final: " + curso.notaF);
}
export {
    opcioncordinadora,
    agregarEstudiante,
    verEstudiantes,
    editarEstudiante,
    matricularCamper,
    campersRiesgoAlto,
    campersInscritos,
    campersAprobados,
    verNotas
};
