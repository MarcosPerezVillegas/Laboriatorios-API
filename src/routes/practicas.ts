import { Router } from "express";
import { crearPractica, 
    borrarPractica, 
    obtenerTodasPracticas,
    actualizarPractica,
    getPracticaPorId,
    obtenerPracticasPorNombre,
    buscarPracticasPorNombre
    } 
    from "../controller/practicas";

/**
 * importar la función que va a proteger cada una de mis rutas con un token
 */
import {autorizar} from "../middleware/verify_token"

const router = Router();

router.post("/",crearPractica);
router.delete("/:id",borrarPractica);
router.get("/",obtenerTodasPracticas); 
router.get("/buscarPorNombre/:nombre",autorizar,buscarPracticasPorNombre);
router.put("/:id",actualizarPractica);
router.get("/:id",getPracticaPorId);
router.get("/:id",obtenerPracticasPorNombre);
router.delete("/:id",borrarPractica);

export default router;