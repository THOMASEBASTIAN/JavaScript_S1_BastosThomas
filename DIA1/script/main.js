// Importaciones de todos los módulos
import * as menu from "./menu.js";
import * as UserTrainer from "./Usertrainer.js";
import * as UserCamper from "./UserCamper.js";
import * as UserCordinadora from "./Usercordinadora.js";

function iniciarSistema() {
    menu.default(); 

    let opcion = prompt("Elige tu rol: 1 (cordinadora), 2 (trainer), 3 (camper)");

    switch (opcion) {
        case "1":
            UserCordinadora.opcionCordinadora(); 
            break;
        case "2":
            UserTrainer.opcionTrainer();
            break;
        case "3":
            UserCamper.opcionCamper();
            break;
        default:
            console.log("Saliendo...");
    }
}

iniciarSistema();
