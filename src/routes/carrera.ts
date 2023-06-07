import { Router } from "express";
import { crearCarrera, 
    borrarCarrera, 
    obtenerTodasCarreras,
    actualizarCarrera,
    getCarPorClave,
    obtenerCarrerasPorNombre } from "../controller/carrera";

const router = Router();

router.post("/",crearCarrera);
router.delete("/:clave",borrarCarrera);
router.get("/",obtenerTodasCarreras);
router.put("/:clave",actualizarCarrera);
router.get("/:clave",getCarPorClave);
router.get("/porNombre", obtenerCarrerasPorNombre);

export default router;
