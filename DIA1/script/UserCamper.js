function opcionCamper() {
    let opcion = prompt(`
        MENÚ PRINCIPAL
        1. Notas
        2. Profesor
        3. Skills
        4. Salir
    `);

    switch (opcion) {
        case "1":
            console.log("80, 90, 100");
            break;
        case "2":
            console.log("Su profesor es Pedro");
            break;
        case "3":
            console.log("Su ruta es Java");
            break;
        case "4":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

export { opcionCamper };
