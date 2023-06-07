import { Router } from "express";
import {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    obtenerInfoCompleta,
    eliminarUsuario,
    restaurarUsuario} from "../controller/usuarios";



const router = Router();

router.get("/",listarUsuarios);
router.post("/",crearUsuario);
router.get("/restaurar/:codigo",restaurarUsuario);
router.put("/:codigo",actualizarUsuario);
router.get("/:codigo",obtenerInfoCompleta);
router.delete("/:codigo",eliminarUsuario);

export default router;