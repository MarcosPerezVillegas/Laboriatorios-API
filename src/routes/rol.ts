import { Router } from "express";
import { crearRol, 
    borrarRol, 
    obtenerTodosLosRoles,
    actualizarRol,
    getRolPorId,
    obtenerRolesPorNombre } from "../controller/rol";

const router = Router();

router.post("/",crearRol);
router.delete("/:id",borrarRol);
router.get("/",obtenerTodosLosRoles);
router.put("/:id",actualizarRol);
router.get("/:id",getRolPorId);
router.get("/porNombre", obtenerRolesPorNombre);

export default router;