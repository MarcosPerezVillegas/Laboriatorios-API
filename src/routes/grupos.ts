import { Router } from "express";
import { crearGrupo, 
    borrarGrupo, 
    obtenerTodosGrupos,
    actualizarGrupo,
    getLabPorId,
    obtenerGruposPorNombre,
    buscarGruposPorEncargado,
    buscarGruposPorNombre } from "../controller/grupos";

const router = Router();

router.post("/",crearGrupo);
router.get("/porNombre",obtenerGruposPorNombre);
router.get("/",obtenerTodosGrupos);
router.get("/buscar/:carrera_clave",buscarGruposPorEncargado);
router.get("/buscarPorNombre/:nombre",buscarGruposPorNombre);
router.put("/:idgrupo",actualizarGrupo);
router.get("/:idgrupo",getLabPorId);
router.delete("/:idgrupo",borrarGrupo);

export default router;