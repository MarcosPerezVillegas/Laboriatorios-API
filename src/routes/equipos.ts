import { Router } from "express";
import { crearEquipo, 
    borrarEquipo, 
    obtenerTodosEquipos,
    actualizarEquipo,
    getEquipoPorId,
    obtenerEquiposPorNombre,
    buscarEquiposPorNombre } from "../controller/equipos";

const router = Router();

router.post("/",crearEquipo);
router.get("/",obtenerTodosEquipos);
router.get("/porNombre",obtenerEquiposPorNombre);
router.get("/buscarPorNombre/:nombre",buscarEquiposPorNombre);
router.delete("/:id",borrarEquipo);
router.put("/:id",actualizarEquipo);
router.get("/:id",getEquipoPorId);


export default router;