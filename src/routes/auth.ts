import { Router } from "express";
import { login } from "../controller/login";

//creo una instancia del router
const router = Router();
//creo una ruta a la que llegaré mediante post, enviando el email y el password que está en el controlador login (se llama login)
router.post('/',login);
//exporto el router configurado con la ruta post /
export default router;