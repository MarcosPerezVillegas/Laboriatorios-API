import { Router } from "express";
import { crearLaboratorio, 
    borrarLaboratorio, 
    obtenerTodosLaboratorios,
    actualizarLaboratorio,
    getLabPorId,
    obtenerLaboratoriosPorNombre,
    buscarLaboratoriosPorEncargado,
    buscarLaboratoriosPorNombre } from "../controller/laboratorios";
/**
 * importar la función que va a proteger cada una de mis rutas con un token
 */
import {autorizar} from "../middleware/verify_token"

const router = Router();

router.post("/",crearLaboratorio);
router.get("/porNombre",obtenerLaboratoriosPorNombre);
/**
 * para utilizar la función autorizar, debo pasarla como segundo parámetro en la ruta
 * el primer parámetro es el endpoint
 * el segundo el middleware (si tengo más de uno, se pasa como arreglo)
 * el tercero es la función dentro del controlador que se ejecutará cuando se supere la validación del middleware
 */
router.get("/",autorizar,obtenerTodosLaboratorios);
router.get("/buscar/:usuario_codigo",buscarLaboratoriosPorEncargado);
router.get("/buscarPorNombre/:nombre",autorizar,buscarLaboratoriosPorNombre);
router.put("/:id",actualizarLaboratorio);
router.get("/:id",getLabPorId);
router.delete("/:id",borrarLaboratorio);


export default router;