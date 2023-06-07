import { Router } from "express";
import {
    getMatByName,//solo regresa nombre y crn
    getMateriaId,// obtener materias por id
    getMatsByName,//Encuentra las materias por nombre
    crearMateria,
    deleteMateria,
    updateMateria,
    getAllMaterias//obtener todas las materias
} from "../controller/materia"
import {autorizar} from "../middleware/verify_token"
// de una vez importo el middleware
const router = Router();

router.get("/",getAllMaterias);
router.post("/",crearMateria);
router.get("/porNombre",getMatByName);

router.get("/buscarNombre/:nombre", getMatsByName);
router.put("/:crn",updateMateria);
router.delete("/:crn", deleteMateria);
router.get("/:crn",getMateriaId);


export default router;
