// Importaciones de todos los módulos
import * as menu from "./menu.js";
import * as Usertrainer from "./Usertrainer.js";
import * as UserCamper from "./UserCamper.js";
import * as Usercordinadora from "./Usercordinadora.js";

function iniciarSistema() {
    menu.menu(); 

    let opcion = prompt("Elige tu rol: 1 (cordinadora), 2 (trainer), 3 (camper)");

    switch (opcion) {
        case "1":
            Usercordinadora.opcioncordinadora(); 
            break;
        case "2":
            Usertrainer.opcionTrainer();
            break;
        case "3":
            UserCamper.opcionCamper();
            break;
        default:
            console.log("Saliendo...");
    }
}

iniciarSistema();
