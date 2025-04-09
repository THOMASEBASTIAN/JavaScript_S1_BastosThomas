// Importaciones de todos los módulos
import { menu, opcionCordinadora, opcionTrainer } from "./menu.js";
import { editarNotas } from "./Usertrainer.js";
import { opcionCamper } from "./UserCamper.js";
import {
    agregarEstudiante,
    verEstudiantes,
    editarEstudiante,
    matricularCamper,
    campersRiesgoAlto,
    campersInscritos,
    campersAprobados,
    verNotas
} from "./Usercordinadora.js";


function iniciarSistema() {
    menu();

    
    let opcion = prompt("Elige tu rol: 1 (cordinadora), 2 (trainer), 3 (camper)");

    switch (opcion) {
        case "1":
            opcionCordinadora();
            break;
        case "2":
            opcionTrainer();
            break;
        case "3":
            opcionCamper();
            break;
        default:
            console.log("Saliendo...");
    }
}

iniciarSistema();
