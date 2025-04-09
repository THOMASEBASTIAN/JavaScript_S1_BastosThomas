function opcionCordinadora() {
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

function menu() {
    let MAIN_MENU = `
########################################
########## CAMPUSLANDS OS###############
########################################
    1 USUARIO: CORDINADORA
    2 USUARIO: TRAINER
    3 USUARIO: CAMPER
    4 Salir
    `;
    console.log(MAIN_MENU);

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
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida");
            break;
    }
}
export { menu, opcionCordinadora, opcionTrainer };
